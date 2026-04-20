"use client";

import React from 'react';
import styles from './Invitation.module.css';
import { weddingConfig } from '@/config/wedding';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface InvitationProps {
  guestName: string | null;
}

export default function Invitation({ guestName }: InvitationProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className={`auto-height-section ${styles.invitationSection}`} id="invitation">
      <div className={styles.container} ref={ref}>
        {/* Divider */}
        <div className="goldDivider animate-on-scroll visible">─── ♥ ───</div>

        {/* Lời mời – text nhỏ gọn */}
        <div className={`${styles.invitationText} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <p>Trân trọng kính mời <strong className={styles.guestHighlight}>{guestName || "Bạn"}</strong></p>
          <p>đến chung vui cùng gia đình chúng mình</p>
          <p>trong ngày lễ thành hôn</p>
        </div>

        {/* 2 cột: Nhà trai | Nhà gái */}
        <div className={`${styles.familyGrid} animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          {/* Cột trái: Nhà Trai */}
          <div className={styles.familyColumn}>
            <h3 className={styles.familyTitle}>Nhà Trai</h3>
            <p className={styles.familyParent}>{weddingConfig.groomFamily.fatherName}</p>
            <p className={styles.familyParent}>{weddingConfig.groomFamily.motherName}</p>
          </div>

          {/* Cột phải: Nhà Gái */}
          <div className={styles.familyColumn}>
            <h3 className={styles.familyTitle}>Nhà Gái</h3>
            <p className={styles.familyParent}>{weddingConfig.brideFamily.fatherName}</p>
            <p className={styles.familyParent}>{weddingConfig.brideFamily.motherName}</p>
          </div>
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
      </div>
    </section>
  );
}
