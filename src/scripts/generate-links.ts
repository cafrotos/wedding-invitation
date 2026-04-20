import { encodeGuest } from '../lib/guest';

// Bước 2: Generate link cho từng khách
const guests = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C'];
const BASE_URL = 'http://localhost:3000/wedding';

console.log('\n--- LINKS ---');
for (const guest of guests) {
  const encoded = encodeGuest(guest);
  console.log(`${guest}: ${BASE_URL}/${encoded}`);
}
