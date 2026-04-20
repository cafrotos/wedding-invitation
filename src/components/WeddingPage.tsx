"use client";

import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import Invitation from '@/components/Invitation';
import LoveStory from '@/components/LoveStory';
import SaveTheDate from '@/components/SaveTheDate';
import Location from '@/components/Location';
import RSVPForm from '@/components/RSVPForm';
import WeddingGift from '@/components/WeddingGift';
import ThankYou from '@/components/ThankYou';

interface WeddingPageProps {
  guestName: string | null;
  heroItems: string[];
  storyItems: string[];
  calendarBg: string | null;
  thankYouBg: string | null;
}

export default function WeddingPage(props: WeddingPageProps) {
  return (
    <>
      <Preloader />
      <main className="snap-container">
        <Hero items={props.heroItems} />
      <Invitation guestName={props.guestName} />
      <LoveStory items={props.storyItems} />
      <SaveTheDate calendarBg={props.calendarBg} />
      <Location />
      <RSVPForm guestName={props.guestName} />
      <WeddingGift />
      <ThankYou bgImage={props.thankYouBg} />
    </main>
    </>
  );
}
