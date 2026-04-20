"use client";

import React, { useEffect, useState } from 'react';
import styles from './ThankYou.module.css';
import { weddingConfig } from '@/config/wedding';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface ThankYouProps {
  bgImage: string | null;
}

export default function ThankYou({ bgImage }: ThankYouProps) {
  const { ref, isVisible } = useIntersectionObserver();
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random hearts for animation
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0 to 100%
      duration: 3 + Math.random() * 4, // 3s to 7s
      delay: Math.random() * 5, // 0s to 5s delay
    }));
    setHearts(newHearts);
  }, []);

  return (
    <section className={`snap-section ${styles.thankYouSection}`} id="thank-you">
      {/* Background */}
      {bgImage && (
        <Image src={bgImage} alt="Thank you background" fill sizes="100vw" quality={60} style={{ objectFit: 'cover' }} className={styles.backgroundLayer} />
      )}
      <div className={styles.overlay} />

      {/* Floating Hearts */}
      <div className={styles.heartsContainer}>
        {hearts.map(h => (
          <div
            key={h.id}
            className={styles.heart}
            style={{
              left: `${h.left}%`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`
            }}
          >
            <Heart size={24} fill="currentColor" />
          </div>
        ))}
      </div>

      <div className={styles.container} ref={ref}>
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className={styles.coupleNames}>
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </h2>
        </div>

        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className={styles.thankYouText}>
            "Cảm ơn bạn đã dành thời gian cho chúng mình.<br />
            Hẹn gặp bạn trong ngày vui nhé!"
          </p>
          <p className={styles.withLove}>With Love ♥</p>
        </div>
      </div>
      <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s', position: "absolute", bottom: 20, color: "white" }}>
        <p className={styles.footer}>© 2026 {weddingConfig.groom.name} & {weddingConfig.bride.name}</p>
      </div>
    </section>
  );
}
