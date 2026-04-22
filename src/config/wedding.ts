// ============================================================
//  Wedding Configuration
//  Mỗi mục được chia rõ groom / bride — không trùng lặp.
// ============================================================

// ─── Shared (dùng chung cho cả hai bên) ─────────────────────
const shared = {
  googleSheetsWebAppUrl:
    "https://script.google.com/macros/s/AKfycbyoPEdjSoOhMVs8dhxktOAHB3kyEKbf3Fn8SWKNlOE3VjqBTISeQTDDL5wIaRuXi5d-/exec",
};

// ─── Groom side config ───────────────────────────────────────
const groom = {
  // Thông tin cá nhân
  name: "Minh Phương",
  fullName: "Nguyễn Minh Phương",
  image: "/images/couple/groom.jpg",

  // Gia đình
  family: {
    fatherName: "Ông Nguyễn Minh Thông",
    motherName: "Bà Phạm Thị Đông",
  },

  // Địa điểm tổ chức phía nhà trai
  location: {
    title: "Lễ Thành Hôn — Nhà Trai",
    date: new Date("2026-05-03T08:00:00"),
    name: "Tư gia nhà trai",
    address: "Thôn Hữu Tiệm, xã Bình Thanh, tỉnh Hưng Yên",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.0556918207753!2d106.44572341064327!3d20.3539587609862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fe9061f4cf99%3A0x1926a67b2a9a97c8!2zQ2FvIE3huqFpLCBRdWFuZyBUcnVuZywgS2nhur9uIFjGsMahbmcsIEjGsG5nIFnDqm4sIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1776648189807!5m2!1svi!2s",
    mapsLink: "https://maps.app.goo.gl/zUMvVSo6gP52oyke6",
  },

  // QR mừng cưới
  qrCode: {
    title: "Mừng cưới Chú Rể",
    bankName: "BIDV",
    bin: "970418",
    accountNo: "2122257222",
    accountName: "NGUYEN MINH PHUONG",
    message: "Mung cuoi NMP",
  },

  // Timeline chương trình ngày cưới nhà trai
  timeline: {
    title: "Chương trình Lễ Cưới — Nhà Trai",
    date: "Chủ Nhật, 03 tháng 05 năm 2026",
    items: [
      {
        time: "07:00",
        label: "Đón dâu & Nghi lễ",
        description:
          "Đoàn nhà trai xuất phát từ Hưng Yên, di chuyển vào Nghệ An để đón cô dâu. Hai gia đình gặp mặt, trao lễ vật và tiến hành nghi lễ chính thức.",
        icon: "💍",
      },
      {
        time: "10:00",
        label: "Lễ Vu Quy tại nhà gái",
        description:
          "Buổi lễ tại nhà gái diễn ra với sự chứng kiến của hai họ. Cô dâu nhận lời chúc phúc từ gia đình và bạn bè, chuẩn bị về nhà chồng.",
        icon: "🌸",
      },
      {
        time: "14:00",
        label: "Rước dâu về nhà trai",
        description:
          "Đoàn xe hoa khởi hành, đưa cô dâu và chú rể về Hưng Yên trong không khí hân hoan. Hành trình kết nối hai gia đình, hai quê hương.",
        icon: "🚗",
      },
      {
        time: "17:00",
        label: "Lễ Thành Hôn",
        description:
          "Nghi lễ thành hôn chính thức tại tư gia nhà trai — Thôn Hữu Tiệm, xã Bình Thanh, Hưng Yên. Hai họ tụ họp chứng kiến lời hứa trọn đời của cặp đôi.",
        icon: "🎊",
      },
      {
        time: "18:00",
        label: "Tiệc mừng & Chúc rượu",
        description:
          "Bữa tiệc cưới ấm cúng cùng gia đình, bạn bè thân hữu. Nâng ly mừng hạnh phúc và gửi trao những lời chúc tốt đẹp nhất đến cặp đôi.",
        icon: "🥂",
      },
    ],
  },
};

// ─── Bride side config ───────────────────────────────────────
const bride = {
  // Thông tin cá nhân
  name: "Ngân Hà",
  fullName: "Nguyễn Thị Ngân Hà",
  image: "/images/couple/bride.jpg",

  // Gia đình
  family: {
    fatherName: "Ông Nguyễn Văn Minh",
    motherName: "Bà Nguyễn Thị Xuân",
  },

  // Địa điểm tổ chức phía nhà gái
  location: {
    title: "Lễ Vu Quy — Nhà Gái",
    date: new Date("2026-05-01T08:00:00"),
    name: "Tư gia nhà gái",
    address: "SVĐ Thanh Lâm, xã Bích Hào, tỉnh Nghệ An",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11955.592649571894!2d105.44635500343492!3d18.64448920732938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139c3000d184567%3A0xc1a5e94c39c5fe4!2zU8OibiBW4bqtbiDEkOG7mW5nIFjDoyBUaGFuaCBMw6Jt!5e1!3m2!1svi!2s!4v1776648538466!5m2!1svi!2s",
    mapsLink: "https://maps.app.goo.gl/N12foXWsZKpoGuVB7",
  },

  // QR mừng cưới
  qrCode: {
    title: "Mừng cưới Cô Dâu",
    bankName: "Viettin Bank",
    bin: "970415",
    accountNo: "0973657137",
    accountName: "NGUYEN THI NGAN HA",
    message: "Mung cuoi NHA",
  },

  // Timeline chương trình ngày cưới nhà gái
  timeline: {
    title: "Chương trình Lễ Vu Quy — Nhà Gái",
    date: "Thứ Năm, 01 tháng 05 năm 2026",
    items: [
      {
        time: "06:30",
        label: "Chuẩn bị & Trang điểm",
        description:
          "Cô dâu bắt đầu hành trình chuẩn bị cùng đội ngũ make-up và gia đình thân yêu. Những khoảnh khắc riêng tư, ấm áp trước ngày trọng đại.",
        icon: "💄",
      },
      {
        time: "08:00",
        label: "Đón đoàn nhà trai",
        description:
          "Gia đình nhà gái chuẩn bị chào đón đoàn nhà trai từ Hưng Yên. Hai họ gặp gỡ, trao lễ vật và mở đầu cho nghi lễ linh thiêng.",
        icon: "🌹",
      },
      {
        time: "09:00",
        label: "Lễ Vu Quy chính thức",
        description:
          "Nghi lễ Vu Quy diễn ra trang trọng tại SVĐ Thanh Lâm, xã Bích Hào, Nghệ An. Cô dâu nhận lời chúc phúc từ hai họ và bước vào chương mới của cuộc đời.",
        icon: "🎊",
      },
      {
        time: "10:30",
        label: "Tiệc trà & Giao lưu",
        description:
          "Hai gia đình quây quần bên bàn tiệc trà, chia sẻ niềm vui và chúc phúc cho cặp đôi. Bạn bè, người thân cùng nhau lưu lại những kỷ niệm đẹp.",
        icon: "☕",
      },
      {
        time: "13:00",
        label: "Rước dâu",
        description:
          "Khoảnh khắc xúc động khi cô dâu chia tay gia đình, bước lên xe hoa theo chồng. Lời chúc phúc, những giọt nước mắt hạnh phúc — một trang mới bắt đầu.",
        icon: "🚗",
      },
    ],
  },
};

// ─── Love Story (chung, không phân biệt bên) ────────────────
const loveStory = [
  {
    text: "Ngày ấy, giữa bao người qua lại, chúng mình tình cờ dừng lại bên nhau — và từ đó, mọi thứ bắt đầu.",
    layout: "editorial" as const,
    imageCount: 8,
  },
  {
    text: "Chúng mình trưởng thành cùng nhau — qua những chuyến đi xa, những bữa cơm bình dị, và cả những lần cãi vã rồi lại ôm nhau thật chặt.",
    layout: "editorial" as const,
    imageCount: 7,
  },
  {
    text: "Và rồi chúng mình chọn nhau — không phải vì hoàn hảo, mà vì biết rằng bên nhau, mọi điều đều có thể.",
    layout: "editorial" as const,
    imageCount: 9,
  },
];

// ─── Export tổng hợp ─────────────────────────────────────────
export const weddingConfig = {
  groom,
  bride,
  loveStory,
  ...shared,
};

