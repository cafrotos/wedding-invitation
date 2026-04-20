import fs from 'fs';
import path from 'path';
import WeddingPage from '@/components/WeddingPage';
import { decodeGuest } from '@/lib/guest';

export default async function GuestPage({
  params,
}: {
  params: Promise<{ guestToken: string }>;
}) {
  const { guestToken } = await params;
  const guestName = decodeGuest(decodeURIComponent(guestToken));
  
  const heroItems = scanImageDir('hero');
  const storyItems = scanImageDir('story');
  const calendarBg = scanImageDir('calendar-bg');
  const thankYouBg = scanImageDir('thankyou');
  
  return (
    <WeddingPage
      guestName={guestName}
      heroItems={heroItems}
      storyItems={storyItems}
      calendarBg={calendarBg[0] || null}
      thankYouBg={thankYouBg[0] || null}
    />
  );
}

function scanImageDir(folder: string): string[] {
  const dir = path.join(process.cwd(), `public/images/${folder}`);
  try {
    return fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|webp|mp4)$/i.test(f))
      .sort()
      .map(f => `/images/${folder}/${f}`);
  } catch { 
    return []; 
  }
}
