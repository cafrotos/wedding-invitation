import fs from 'fs';
import path from 'path';
import WeddingPage from '@/components/WeddingPage';

export default function Home() {
  const heroItems = scanImageDir('hero');
  const storyItems = scanImageDir('story');
  const calendarBg = scanImageDir('calendar-bg');
  const thankYouBg = scanImageDir('thankyou');
  
  return (
    <WeddingPage
      guestName={null}
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
