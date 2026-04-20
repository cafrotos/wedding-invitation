"use client";

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  items: string[];
}

export default function Hero({ items }: HeroProps) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length <= 1) return;

    // Filter images from items, videos will be handled separately if needed
    // In this basic version, we will just cycle through all items as images or simple video
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <section className={`snap-section ${styles.heroSection}`} id="hero">
      {/* Background Media Layers */}
      {items.map((item, index) => {
        const isVideo = item.toLowerCase().endsWith('.mp4');
        return isVideo ? (
          <video
            key={item}
            src={item}
            className={`${styles.backgroundLayer} ${index === bgIndex ? styles.active : ''}`}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onEnded={() => setBgIndex((index + 1) % items.length)}
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
          <p className={styles.weddingDate}>03 . 05 . 2026</p>
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
