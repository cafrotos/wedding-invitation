"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  items: string[];
  isReady?: boolean;
  side: 'bride' | 'groom';
  userInteracted?: boolean;
}

export default function Hero({ items, isReady = true, side, userInteracted = false }: HeroProps) {
  const [bgIndex, setBgIndex] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Reset loop
    items.forEach((item, index) => {
      const isVideo = item.toLowerCase().endsWith('.mp4');
      if (isVideo) {
        const vid = videoRefs.current[index];
        if (vid) {
          // Chỉ play khi Preloader đã xong (isReady = true)
          if (index === bgIndex && isReady) {
            vid.play().catch(() => {
              // Ignore play errors (e.g. autoplay prevention)
            });
          } else {
            vid.pause();
          }
        }
      }
    });

    if (items.length <= 1) return;

    const currentItem = items[bgIndex];
    const isVideo = currentItem?.toLowerCase().endsWith('.mp4');

    // Chuyển ảnh sau 3s, nếu là video thì để event onEnded lo
    if (!isVideo && isReady) {
      const timeout = setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [bgIndex, items, isReady, userInteracted]);

  if (!items || items.length === 0) return null;

  return (
    <section className={`snap-section ${styles.heroSection}`} id="hero">
      {/* Background Media Layers */}
      {items.map((item, index) => {
        const isVideo = item.toLowerCase().endsWith('.mp4');
        return isVideo ? (
          <video
            key={item}
            ref={(el) => {
              if (el) {
                videoRefs.current[index] = el;
              }
            }}
            src={item}
            className={`${styles.backgroundLayer} ${index === bgIndex ? styles.active : ''}`}
            muted
            playsInline
            preload="auto"
            onEnded={() => setBgIndex((index + 1) % items.length)}
            onTimeUpdate={(e) => {
              const vid = e.currentTarget;
              // Nếu đang là video hiện tại và phát tới đoạn cách 2s cuối cùng -> sang slide kế tiếp. 
              // Cắt ngắn đuôi video ngay trên frontend.
              if (index === bgIndex && vid.duration && vid.currentTime >= vid.duration - 1.0) {
                setBgIndex((index + 1) % items.length);
              }
            }}
          />
        ) : (
          <Image
            key={item}
            src={item}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover' }}
            className={`${styles.backgroundLayer} ${index === bgIndex ? styles.active : ''}`}
          />
        );
      })}

      {/* Overlay - Sáng -> Tối */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className="animate-on-scroll visible" style={{ transitionDelay: '0.2s' }}>
          <p className={styles.loveBegins}>Our love begins</p>
        </div>
        <div className="animate-on-scroll visible" style={{ transitionDelay: '0.4s' }}>
          <p className={styles.weddingDate}>{side === 'bride' ? '01 . 05 . 2026' : '03 . 05 . 2026'}</p>
        </div>
        <div className="animate-on-scroll visible" style={{ transitionDelay: '0.6s' }}>
          <p className={styles.coupleNames}>Minh Phương & Ngân Hà</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
