"use client";

import React from 'react';
import styles from './Location.module.css';
import { weddingConfig } from '@/config/wedding';
import { MapPin, Calendar, Map } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LocationProps {
  side: 'bride' | 'groom';
}

export default function Location({ side }: LocationProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const groom = weddingConfig.groom.location;
  const bride = weddingConfig.bride.location;

  // Format date helper
  const formatDate = (date: Date) => {
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const weekday = weekdays[date.getDay()];
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${weekday}, ${dd}/${mm}/${yyyy}`;
  };

  return (
    <section className={`auto-height-section ${styles.locationSection}`} id="location">
      <div className={styles.container} ref={ref}>
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className={styles.sectionTitle}>Địa Điểm Tổ Chức</h2>
          <div className="goldDivider">─── ♥ ───</div>
        </div>

        {side === 'bride' ? (
          <>
            {/* Card Nhà Gái */}
            <div className={`${styles.locationCard} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.locationHeader}>
                <MapPin size={24} />
                <h3>{bride.title}</h3>
              </div>

              <div className={styles.locationDate}>
                <Calendar size={18} />
                <span>{formatDate(bride.date)}</span>
              </div>

              <p className={styles.locationAddress}>{bride.name}<br />{bride.address}</p>

              <div className={styles.mapWrapper}>
                <iframe
                  src={bride.mapsIframe}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a href={bride.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                <Map size={18} /> Chỉ đường
              </a>
            </div>

            {/* Card Nhà Trai */}
            <div className={`${styles.locationCard} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className={styles.locationHeader}>
                <MapPin size={24} />
                <h3>{groom.title}</h3>
              </div>

              <div className={styles.locationDate}>
                <Calendar size={18} />
                <span>{formatDate(groom.date)}</span>
              </div>

              <p className={styles.locationAddress}>{groom.name}<br />{groom.address}</p>

              <div className={styles.mapWrapper}>
                <iframe
                  src={groom.mapsIframe}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a href={groom.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                <Map size={18} /> Chỉ đường
              </a>
            </div>
          </>
        ) : (
          <>
            {/* Card Nhà Trai */}
            <div className={`${styles.locationCard} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.locationHeader}>
                <MapPin size={24} />
                <h3>{groom.title}</h3>
              </div>

              <div className={styles.locationDate}>
                <Calendar size={18} />
                <span>{formatDate(groom.date)}</span>
              </div>

              <p className={styles.locationAddress}>{groom.name}<br />{groom.address}</p>

              <div className={styles.mapWrapper}>
                <iframe
                  src={groom.mapsIframe}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a href={groom.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                <Map size={18} /> Chỉ đường
              </a>
            </div>

            {/* Card Nhà Gái */}
            <div className={`${styles.locationCard} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className={styles.locationHeader}>
                <MapPin size={24} />
                <h3>{bride.title}</h3>
              </div>

              <div className={styles.locationDate}>
                <Calendar size={18} />
                <span>{formatDate(bride.date)}</span>
              </div>

              <p className={styles.locationAddress}>{bride.name}<br />{bride.address}</p>

              <div className={styles.mapWrapper}>
                <iframe
                  src={bride.mapsIframe}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a href={bride.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.directionsBtn}>
                <Map size={18} /> Chỉ đường
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
