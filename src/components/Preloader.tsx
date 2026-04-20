import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Ngăn chặn cuộn trang khi đang loading
    document.body.style.overflow = 'hidden';

    const handleLoad = () => {
      // Thêm độ trễ nhỏ (1s) để màn hình preloader hiện diện đủ lâu, tránh chớp nhoáng
      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, 800); // 800ms khớp với thời gian transition fadeOut
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback sau 5s nếu load event bị kẹt
      const fallback = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

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
