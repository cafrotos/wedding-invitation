"use client";

import React, { useState } from 'react';
import styles from './RSVPForm.module.css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { CheckCircle2, Heart } from 'lucide-react';

interface RSVPFormProps {
  guestName: string | null;
}

type Status = "idle" | "loading" | "success" | "error";

export default function RSVPForm({ guestName }: RSVPFormProps) {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: guestName || "",
    attending: "yes",
    guests: "1",
    message: "",
    website: "", // HONEYPOT
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Auto-reject bots using honeypot
    if (formData.website) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: guestName || formData.name,
          attending: formData.attending,
          guests: formData.guests,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("API failed");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className={`snap-section ${styles.rsvpSection}`} id="rsvp">
      <div className={styles.container} ref={ref}>
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className={styles.sectionTitle}>Xác Nhận Tham Dự</h2>
          <div className="goldDivider">─── ♥ ───</div>
          <p className={styles.subtitle}>
            &quot;Chúng mình rất mong được đón tiếp <span className={styles.guestHighlight}>{guestName || "bạn"}</span> trong ngày vui!&quot;
          </p>
        </div>

        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {status === "success" ? (
            <div className={styles.successMessage}>
              <CheckCircle2 size={64} />
              <h3>Cảm ơn bạn!</h3>
              <p>Chúng mình đã nhận được phản hồi của bạn rồi nhé.</p>
            </div>
          ) : (
            <div className={styles.formCard}>
              <form onSubmit={handleSubmit}>
                {/* Honeypot field - hidden */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name - only if not in URL */}
                {!guestName && (
                  <div className={styles.inputGroup}>
                    <label>Tên bạn *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.inputField}
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                )}

                <div className={styles.inputGroup}>
                  <label>Xác nhận tham dự *</label>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className={styles.inputField}
                  >
                    <option value="yes">Chắc chắn tham dự</option>
                    <option value="no">Rất tiếc, mình không thể tham dự</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Số người đi cùng</label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={formData.attending === "no"}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Lời chúc</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Gửi lời chúc đến cô dâu chú rể nhé..."
                    className={styles.inputField}
                  />
                </div>

                <button type="submit" disabled={status === "loading" || (!guestName && !formData.name)} className={styles.submitBtn}>
                  {status === "loading" ? "Đang gửi..." : <><Heart size={20} /> Gửi xác nhận</>}
                </button>

                {status === "error" && (
                  <p className={styles.errorMessage}>Có lỗi xảy ra. Hãy thử lại nhé.</p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
