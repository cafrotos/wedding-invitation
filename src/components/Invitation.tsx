"use client";

import React from 'react';
import styles from './Invitation.module.css';
import { weddingConfig } from '@/config/wedding';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface InvitationProps {
  guestName: string | null;
  side: 'bride' | 'groom';
}

export default function Invitation({ guestName, side }: InvitationProps) {
  const { ref, isVisible } = useIntersectionObserver();

  // Dữ liệu tùy biến theo bên nhà
  const ceremonyTitle = side === 'bride' ? 'lễ vu quy' : 'lễ thành hôn';
  const ceremonyDate = side === 'bride' ? 'Thứ 6 | 09:00 01/05/2026' : 'Chủ nhật | 08:00 03/05/2026';

  const ceremonyPartyDate = side === 'bride' ? 'Thứ 6 | 16:00 01/05/2026' : 'Chủ nhật | 09:30 03/05/2026';

  return (
    <section className={`auto-height-section ${styles.invitationSection}`} id="invitation">
      <div className={styles.container} ref={ref}>
        {/* Divider */}
        <div className="goldDivider animate-on-scroll visible">─── ♥ ───</div>

        {/* Lời mời – text nhỏ gọn */}

        <div className={`${styles.ceremonyHeader} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <h2 className={styles.ceremonyTitle}>{ceremonyTitle}</h2>
          <p className={styles.ceremonyDate}>{ceremonyDate}</p>
        </div>

        <div className={`${styles.invitationText} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <p>Trân trọng kính mời <strong className={styles.guestHighlight}>{guestName || "Bạn"}</strong></p>
          <p>tới dự bữa cơm thân mật chung vui cùng chúng mình vào lúc</p>
          <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-accent)' }}>{ceremonyPartyDate}</p>
        </div>

        <div className={`${styles.invitationText} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <p style={{ fontWeight: "bold", color: 'var(--color-accent)' }} >Tại tư gia {side === 'bride' ? 'nhà gái' : 'nhà trai'}</p>
        </div>

        {/* Ảnh cô dâu chú rể và tên */}
        <div className={`${styles.coupleRow} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.45s' }}>
          <div className={styles.coupleCard}>
            <div className={styles.coupleImageWrapper}>
              <Image src={weddingConfig.groom.image} alt={weddingConfig.groom.name} fill sizes="50vw" style={{ objectFit: 'cover' }} className={styles.coupleImage} />
            </div>
            <span className={styles.nameGroom}>{weddingConfig.groom.name}</span>
          </div>

          {/* Heart trôi ở chính giữa màn hình */}
          <div className={styles.middleHeart}>
            <Heart size={24} fill="currentColor" />
          </div>

          <div className={styles.coupleCard}>
            <div className={styles.coupleImageWrapper}>
              <Image src={weddingConfig.bride.image} alt={weddingConfig.bride.name} fill sizes="50vw" style={{ objectFit: 'cover' }} className={styles.coupleImage} />
            </div>
            <span className={styles.nameBride}>{weddingConfig.bride.name}</span>
          </div>
        </div>
        {/* 2 cột: Nhà trai | Nhà gái */}
        <div className={`${styles.familyGrid} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          {/* Cột trái: Nhà Trai */}
          <div className={styles.familyColumn}>
            <h3 className={styles.familyTitle}>Nhà Trai</h3>
            <p className={styles.familyParent}>{weddingConfig.groom.family.fatherName}</p>
            <p className={styles.familyParent}>{weddingConfig.groom.family.motherName}</p>
          </div>

          {/* Cột phải: Nhà Gái */}
          <div className={styles.familyColumn}>
            <h3 className={styles.familyTitle}>Nhà Gái</h3>
            <p className={styles.familyParent}>{weddingConfig.bride.family.fatherName}</p>
            <p className={styles.familyParent}>{weddingConfig.bride.family.motherName}</p>
          </div>
        </div>
        {/* Divider */}
        <div className="goldDivider animate-on-scroll visible">─── ♥ ───</div>
      </div>
    </section>
  );
}
