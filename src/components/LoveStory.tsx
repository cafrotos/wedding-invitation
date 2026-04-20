"use client";

import React from 'react';
import styles from './LoveStory.module.css';
import { weddingConfig } from '@/config/wedding';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';

interface LoveStoryProps {
  items: string[];
}

/* ── Layout block types ── */
type BlockLayout =
  | 'portraitHero'   // 1 ảnh dọc lớn, căn giữa
  | 'landscapeHero'  // 1 ảnh ngang full-width
  | 'portraitDuo'    // 2 ảnh dọc cạnh nhau
  | 'portraitTrio'   // 3 ảnh dọc cạnh nhau
  | 'asymTrio'       // 1 ảnh dọc to + 2 ảnh dọc nhỏ xếp chồng
  | 'filmStrip'      // 2-3 ảnh dọc cắt ngang thành dải phim
  | 'grid4';         // 2×2 lưới ảnh dọc

interface LayoutBlock {
  layout: BlockLayout;
  count: number;
}

/**
 * Bố cục editorial tối ưu cho ảnh DỌC (portrait).
 * Chương 1 (8 ảnh dọc): hero + trio + duo + filmStrip
 * Chương 2 (9 ảnh dọc): duo + asymTrio + portraitTrio + hero
 * Chương 3 (9 ảnh: 1 ngang + 8 dọc): landscapeHero + trio + duo + asymTrio
 */
const CHAPTER_LAYOUTS: LayoutBlock[][] = [
  // Chương 1: 8 ảnh (01-08, tất cả dọc)
  [
    { layout: 'portraitHero', count: 1 },
    { layout: 'portraitTrio', count: 3 },
    { layout: 'portraitDuo', count: 2 },
    { layout: 'filmStrip', count: 2 },
  ],
  // Chương 2: 7 ảnh (09-15, tất cả dọc)
  [
    { layout: 'portraitDuo', count: 2 },
    { layout: 'asymTrio', count: 3 },
    { layout: 'portraitDuo', count: 2 },
  ],
  // Chương 3: 9 ảnh (16 ngang, 17-24 dọc)
  [
    { layout: 'landscapeHero', count: 1 },  // 16.jpg — ảnh ngang
    { layout: 'portraitTrio', count: 3 },
    { layout: 'portraitDuo', count: 2 },
    { layout: 'asymTrio', count: 3 },
  ],
];

/* ── Render một block ảnh ── */
function ImageBlock({ images, layout, blockKey }: { images: string[]; layout: BlockLayout; blockKey: string }) {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <div
      ref={ref}
      className={`${styles.imageBlock} ${styles[`layout_${layout}`]} animate-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {images.map((src, i) => (
        <div key={`${blockKey}-${i}`} className={styles.imageItem}>
          <Image
            src={src}
            alt={`Love story ${blockKey}-${i}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            style={{ objectFit: 'cover' }}
            className={styles.storyMedia}
          />
        </div>
      ))}
    </div>
  );
}

/* ── Text dẫn truyện ── */
function TextInterstitial({ text }: { text: string }) {
  const { ref, isVisible } = useIntersectionObserver(0.3);
  return (
    <div ref={ref} className={`${styles.textInterstitial} animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <span className={styles.textIcon}>✧</span>
      <p className={styles.storyText}>{text}</p>
      <span className={styles.textIcon}>✧</span>
    </div>
  );
}

/* ── Signature Video (DỌC) ── */
function SignatureVideo({ src }: { src: string }) {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  return (
    <div ref={ref} className={`${styles.signatureVideo} animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={styles.signatureMedia}
      />
      <div className={styles.signatureOverlay}>
        <p className={styles.signatureText}>
          Sự tin tưởng tuyệt đối vào nhau
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function LoveStory({ items }: LoveStoryProps) {
  const { ref: titleRef, isVisible: isTitleVisible } = useIntersectionObserver(0.2);
  const chapters = weddingConfig.loveStory;

  let globalIndex = 0;

  return (
    <section className={`auto-height-section ${styles.storySection}`} id="love-story">
      <div className={styles.container}>
        {/* Section title */}
        <div ref={titleRef} className={`${styles.sectionHeader} animate-on-scroll ${isTitleVisible ? 'visible' : ''}`}>
          <p className={styles.sectionTitle}>Chuyện Tình</p>
          <div className="goldDivider">─── ♥ ───</div>
        </div>

        {/* Signature Video — Dọc */}
        <SignatureVideo src="/images/hero/01.mp4" />

        {/* Chapters */}
        {chapters.map((chapter, chapterIdx) => {
          const startIndex = globalIndex;
          globalIndex += chapter.imageCount;

          const chapterImages = items.slice(startIndex, startIndex + chapter.imageCount);
          const layouts = CHAPTER_LAYOUTS[chapterIdx] || CHAPTER_LAYOUTS[0];

          // Chia ảnh thành blocks
          let blockStart = 0;
          const blocks: { images: string[]; layout: BlockLayout }[] = [];
          for (const block of layouts) {
            const blockImages = chapterImages.slice(blockStart, blockStart + block.count);
            if (blockImages.length > 0) {
              blocks.push({ images: blockImages, layout: block.layout });
            }
            blockStart += block.count;
          }

          return (
            <div key={chapterIdx} className={styles.chapter}>
              <TextInterstitial text={chapter.text} />
              <div className={styles.blocksContainer}>
                {blocks.map((block, blockIdx) => (
                  <ImageBlock
                    key={blockIdx}
                    images={block.images}
                    layout={block.layout}
                    blockKey={`ch${chapterIdx}-b${blockIdx}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
