import WeddingPage from '@/components/WeddingPage';
import { decodeGuest } from '@/lib/guest';

export default async function GuestPage({
  params,
}: {
  params: Promise<{ guestToken: string }>;
}) {
  const { guestToken } = await params;
  const guestName = decodeGuest(decodeURIComponent(guestToken));
  
  const heroItems = ['/images/hero/01.mp4', '/images/hero/02.jpg', '/images/hero/03.jpg', '/images/hero/04.jpg', '/images/hero/05.jpg'];
  const storyItems = Array.from({ length: 24 }, (_, i) => `/images/story/${String(i + 1).padStart(2, '0')}.jpg`);
  
  return (
    <WeddingPage
      guestName={guestName}
      heroItems={heroItems}
      storyItems={storyItems}
      calendarBg="/images/calendar-bg/bg.jpg"
      thankYouBg="/images/thankyou/bg.jpg"
    />
  );
}
