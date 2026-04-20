export const weddingConfig = {
  // ===== Thông tin cặp đôi =====
  groom: {
    name: "Minh Phương",
    fullName: "Nguyễn Minh Phương",
    image: "/images/couple/groom.jpg",
  },
  bride: {
    name: "Ngân Hà",
    fullName: "Nguyễn Thị Ngân Hà",
    image: "/images/couple/bride.jpg",
  },

  // ===== Thông tin gia đình =====
  groomFamily: {
    fatherName: "Nguyễn Minh Thông",     // ← THAY TÊN THẬT
    motherName: "Phạm Thị Đông",       // ← THAY TÊN THẬT
  },
  brideFamily: {
    fatherName: "Nguyễn Văn Minh",     // ← THAY TÊN THẬT
    motherName: "Nguyễn Thị Xuân",       // ← THAY TÊN THẬT
  },

  // ===== Ngày cưới (tiệc chính nhà trai) =====
  date: new Date("2026-05-03T08:00:00"),

  // ===== Địa điểm =====
  locations: {
    groom: {
      title: "Lễ Thành Hôn — Nhà Trai",
      date: new Date("2026-05-03T08:00:00"),   // Tiệc chính 3/5
      name: "Tư gia nhà trai",
      address: "Thôn Hữu Tiệm, xã Bình Thanh, tỉnh Hưng Yên",
      mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.0556918207753!2d106.44572341064327!3d20.3539587609862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fe9061f4cf99%3A0x1926a67b2a9a97c8!2zQ2FvIE3huqFpLCBRdWFuZyBUcnVuZywgS2nhur9uIFjGsMahbmcsIEjGsG5nIFnDqm4sIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1776648189807!5m2!1svi!2s",
      mapsLink: "https://maps.app.goo.gl/zUMvVSo6gP52oyke6",
    },
    bride: {
      title: "Lễ Vu Quy — Nhà Gái",
      date: new Date("2026-05-01T08:00:00"),   // Nhà gái 1/5
      name: "Tư gia nhà gái",
      address: "SVĐ Thanh Lâm, xã Bích Hào, tỉnh Nghệ An",
      mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11955.592649571894!2d105.44635500343492!3d18.64448920732938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139c3000d184567%3A0xc1a5e94c39c5fe4!2zU8OibiBW4bqtbiDEkOG7mW5nIFjDoyBUaGFuaCBMw6Jt!5e1!3m2!1svi!2s!4v1776648538466!5m2!1svi!2s",
      mapsLink: "https://maps.app.goo.gl/N12foXWsZKpoGuVB7",
    },
  },

  // ===== Love Story chapters =====
  // 24 ảnh chia thành 3 chương — Editorial Cinematic
  loveStory: [
    {
      text: "Ngày ấy, giữa bao người qua lại, chúng mình tình cờ dừng lại bên nhau — và từ đó, mọi thứ bắt đầu.",
      layout: "editorial" as const, // 8 ảnh (01-08, tất cả dọc)
      imageCount: 8,
    },
    {
      text: "Chúng mình lớn lên cùng nhau — qua những chuyến đi xa, những bữa cơm bình dị, và cả những lần cãi vã rồi lại ôm nhau thật chặt.",
      layout: "editorial" as const, // 7 ảnh (09-15, tất cả dọc)
      imageCount: 7,
    },
    {
      text: "Và rồi chúng mình chọn nhau — không phải vì hoàn hảo, mà vì biết rằng bên nhau, mọi điều đều có thể.",
      layout: "editorial" as const, // 9 ảnh (16-24, 16.jpg là ngang)
      imageCount: 9,
    },
  ],

  // ===== QR Codes =====
  qrCodes: {
    groom: {
      title: "Mừng cưới Chú Rể",
      bankName: "BIDV",
      bin: "970418",
      accountNo: "2122257222",
      accountName: "NGUYEN MINH PHUONG",
      message: "Mung cuoi NMP",
    },
    bride: {
      title: "Mừng cưới Cô Dâu",
      bankName: "Viettin Bank",
      bin: "970415",
      accountNo: "0973657137",
      accountName: "NGUYEN THI NGAN HA",
      message: "Mung cuoi NHA",
    },
  },

  // ===== Google Sheets =====
  googleSheetsWebAppUrl: "https://script.google.com/macros/s/AKfycbzqREoELUUVo_lrgH_hxVcJYJlr9P4q2yp5O6G5pMUx7jO5M0IQ_onJ4oiaspcUvsyZrA/exec",
};
