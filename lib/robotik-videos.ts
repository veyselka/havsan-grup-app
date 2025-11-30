export interface RobotikVideo {
  id: number;
  title: string;
  videoPath: string;
  thumbnail?: string;
}

export const robotikVideos: RobotikVideo[] = [
  {
    id: 1,
    title: 'Bahçemizi Akıllı Hale Getirdik! Arduino Otomatik Kapı ve Işıklandırma Projesi',
    videoPath: '/videos/robotik/Bahçemizi Akıllı Hale Getirdik! 🏡 Arduino Otomatik Kapı ve Işıklandırma Projesi (1).mp4',
  },
  {
    id: 2,
    title: 'DIY Arduino Otomatik Tenteli Satıcı Tezgahı Maketi',
    videoPath: '/videos/robotik/DIY Arduino Otomatik Tenteli Satıcı Tezgahı Maketi (Çocuklar İçin Kolay Proje).mp4',
  },
  {
    id: 3,
    title: 'Gol At, Puan Kazan! Arduino Penaltı Oyunu Nasıl Yapılır',
    videoPath: '/videos/robotik/Gol At, Puan Kazan! 🎯 Arduino Penaltı Oyunu Nasıl Yapılır.mp4',
  },
];
