import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Ngăn chặn cuộn trang khi đang loading
    document.body.style.overflow = 'hidden';

    // Đếm thời gian bắt đầu render để đảm bảo preloader hiện tối thiểu 3 giây
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsed); // Chờ ít nhất 3s

      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
          if (onDone) onDone(); // Báo cho WeddingPage biết đã load xong
        }, 800); // 800ms khớp với thời gian transition fadeOut
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback sau 8s nếu load event bị kẹt (phòng hờ ảnh quá nặng)
      const fallback = setTimeout(handleLoad, 8000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, [onDone]);

  if (!loading) return null;

  return (
    <div className={`${styles.preloader} ${fading ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.initials}>
          <span>P</span>
          <span className={styles.ampersand}>&amp;</span>
          <span>H</span>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
        </div>
        <p className={styles.loadingText}>The wedding of Minh Phuong & Ngan Ha</p>
      </div>
    </div>
  );
}
