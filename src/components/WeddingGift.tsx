"use client";

import React, { useState } from 'react';
import styles from './WeddingGift.module.css';
import { weddingConfig } from '@/config/wedding';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';

export default function WeddingGift() {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const [activeTab, setActiveTab] = useState<"groom" | "bride">("groom");
  const [copied, setCopied] = useState(false);

  const qrConfig = weddingConfig.qrCodes[activeTab];

  // https://vietqr.net/portal/thu-vien-api/qr-code-generation.html
  const qrUrl = `https://img.vietqr.io/image/${qrConfig.bin}-${qrConfig.accountNo}-compact2.jpg?addInfo=${encodeURIComponent(qrConfig.message)}&accountName=${encodeURIComponent(qrConfig.accountName)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(qrConfig.accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`snap-section ${styles.giftSection}`} id="gift">
      <div className={styles.container} ref={ref}>
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className={styles.sectionTitle}>Hòm Quà Cưới</h2>
          <div className="goldDivider">─── ♥ ───</div>
          <p className={styles.subtitle}>
            "Sự hiện diện của bạn chính là món quà tuyệt vời nhất. Nếu bạn muốn gửi thêm lời chúc phúc bằng cách khác, chúng mình xin được nhận tại đây."
          </p>
        </div>

        <div className={`${styles.card} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabBtn} ${activeTab === "groom" ? styles.active : ''}`}
              onClick={() => setActiveTab("groom")}
            >
              Chú Rể
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "bride" ? styles.active : ''}`}
              onClick={() => setActiveTab("bride")}
            >
              Cô Dâu
            </button>
          </div>

          <div className={styles.qrContainer}>
            <div className={styles.qrWrapper}>
              <Image
                src={qrUrl}
                alt={`QR Code ${activeTab}`}
                fill
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.bankInfo}>
            <p className={styles.bankName}>{qrConfig.bankName}</p>
            <div className={styles.accountDetails}>
              <span>{qrConfig.accountNo}</span>
              <button
                onClick={handleCopy}
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                title="Copy account number"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <p className={styles.accountName}>{qrConfig.accountName}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
