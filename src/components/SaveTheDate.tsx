"use client";

import React from 'react';
import styles from './SaveTheDate.module.css';
import { weddingConfig } from '@/config/wedding';
import { Heart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';

interface SaveTheDateProps {
  calendarBg: string | null;
  side: 'bride' | 'groom';
}

export default function SaveTheDate({ calendarBg, side }: SaveTheDateProps) {
  const { ref, isVisible } = useIntersectionObserver();
  
  // Lấy ngày cưới tương ứng (Nhà Gái: 01/05, Nhà Trai: 03/05)
  const weddingDate = side === 'bride' ? weddingConfig.bride.location.date : weddingConfig.groom.location.date;
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const targetDate = weddingDate.getDate();
  
  // Format để hiển thị text bên dưới
  const formatDateString = (date: Date) => {
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    return `${weekdays[date.getDay()]}, ${dd}/${mm}/${date.getFullYear()}`;
  };

  // Calendar generation logic
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const days = [];
  
  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  
  // Real days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <section className={`snap-section ${styles.saveTheDateSection}`} id="save-the-date">
      {/* Background */}
      {calendarBg && (
        <Image src={calendarBg} alt="Save the date background" fill sizes="100vw" quality={60} style={{ objectFit: 'cover' }} className={styles.backgroundLayer} />
      )}
      <div className={styles.overlay} />

      <div className={styles.container} ref={ref}>
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className={styles.title}>Save the Date</h2>
          <div className="goldDivider">─── ♥ ───</div>
        </div>

        <div className={`glassCard ${styles.calendarCard} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h3 className={styles.monthTitle}>Tháng {month + 1}, {year}</h3>
          
          <div className={styles.calendarGrid}>
            {weekdays.map(d => (
              <div key={d} className={styles.weekday}>{d}</div>
            ))}
            
            {days.map((day, index) => {
              const isTarget = day === targetDate;
              return (
                <div key={index} className={`${styles.day} ${isTarget ? styles.highlightDay : ''}`}>
                  {isTarget && (
                    <>
                      <Heart size={36} strokeWidth={1} fill="currentColor" className={styles.highlightHeart} />
                      <div className={styles.highlightRing} />
                    </>
                  )}
                  <span>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles.conclusion} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <span>{formatDateString(weddingDate)}</span>
        </div>
      </div>
    </section>
  );
}
