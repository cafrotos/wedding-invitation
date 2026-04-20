import WeddingPage from '@/components/WeddingPage';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const guestParam = params.guest;
  const guestName = typeof guestParam === 'string' && guestParam.trim() !== '' ? guestParam : null;

  // Trích xuất thông tin bên nhà (trai/gái) và đăng ký xe
  const sideParam = params.from || params.side; // Hỗ trợ cả ?from= và ?side=
  const side = sideParam === 'bride' || sideParam === 'bridge' ? 'bride' : 'groom';
  
  const goParam = params.go;
  const isBusRegistered = goParam === 'true';

  const heroItems = ['/images/hero/01.mp4', '/images/hero/02.jpg', '/images/hero/03.jpg', '/images/hero/04.jpg', '/images/hero/05.jpg'];
  const storyItems = Array.from({ length: 24 }, (_, i) => `/images/story/${String(i + 1).padStart(2, '0')}.jpg`);
  
  return (
    <WeddingPage
      guestName={guestName}
      side={side}
      isBusRegistered={isBusRegistered}
      heroItems={heroItems}
      storyItems={storyItems}
      calendarBg="/images/calendar-bg/bg.jpg"
      thankYouBg="/images/thankyou/bg.jpg"
    />
  );
}
