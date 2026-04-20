"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause } from 'lucide-react';
import styles from './MusicPlayer.module.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Kiểm tra file audio có tồn tại không
    fetch('/audio/bgm.mp3', { method: 'HEAD' })
      .then(res => {
        if (res.ok) setHasAudio(true);
      })
      .catch(() => {/* File không có, ẩn player */ });
  }, []);

  useEffect(() => {
    if (!hasAudio) return;

    // Tự động play sau khi user tương tác lần đầu (Cần thiết cho iOS/Safari)
    const handleInteraction = () => {
      const audio = audioRef.current;
      if (!audio || isPlaying) return;

      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Gỡ bỏ listener ngay khi đã play thành công
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        })
        .catch(() => {
          /* Autoplay bị block — chờ tương tác tiếp theo hoặc user bấm nút */
        });
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasAudio, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    }
  };

  // Ẩn player nếu không có file audio
  if (!hasAudio) return null;

  return (
    <div className={styles.musicPlayer}>
      <audio
        ref={audioRef}
        src="/audio/bgm.mp3"
        loop
        preload="auto"
      />

      <button
        className={styles.musicBtn}
        onClick={togglePlay}
        title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
        aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
      >
        {isPlaying ? (
          <Pause size={22} />
        ) : (
          <Music size={22} />
        )}
      </button>
    </div>
  );
}

