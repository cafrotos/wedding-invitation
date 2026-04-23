"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';

// Sử dụng dynamic import (Code Splitting / Suspense) cho các component không nằm ở màn hình đầu tiên
// Giúp tối ưu tốc độ tải trang ban đầu (FCP) cực kì đáng kể
const Invitation = dynamic(() => import('@/components/Invitation'), { ssr: true });
const LoveStory = dynamic(() => import('@/components/LoveStory'), { ssr: true });
const SaveTheDate = dynamic(() => import('@/components/SaveTheDate'), { ssr: true });
const Location = dynamic(() => import('@/components/Location'), { ssr: true });
const RSVPForm = dynamic(() => import('@/components/RSVPForm'), { ssr: true });
const WeddingGift = dynamic(() => import('@/components/WeddingGift'), { ssr: true });
const ThankYou = dynamic(() => import('@/components/ThankYou'), { ssr: true });

interface WeddingPageProps {
  guestName: string | null;
  side: 'bride' | 'groom';
  isBusRegistered: boolean;
  heroItems: string[];
  storyItems: string[];
  calendarBg: string | null;
  thankYouBg: string | null;
}

export default function WeddingPage(props: WeddingPageProps) {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  return (
    <>
      <Preloader
        onDone={() => setIsPreloaderDone(true)}
        onUserInteract={() => setUserInteracted(true)}
      />
      <main className="snap-container">
        <Hero items={props.heroItems} isReady={isPreloaderDone} side={props.side} userInteracted={userInteracted} />
        <Invitation guestName={props.guestName} side={props.side} />
        <LoveStory items={props.storyItems} />
        <SaveTheDate calendarBg={props.calendarBg} side={props.side} />
        <Location side={props.side} />
        <RSVPForm guestName={props.guestName} side={props.side} isBusRegistered={props.isBusRegistered} />
        <WeddingGift />
        <ThankYou bgImage={props.thankYouBg} />
      </main>
    </>
  );
}
