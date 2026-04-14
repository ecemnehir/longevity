import { 
  User, 
  Calendar, 
  Info, 
  Activity, 
  Search, 
  BookOpen, 
  BarChart3, 
  ArrowRightLeft 
} from 'lucide-react';
import { TabContent } from '../types';

export const TABS_DATA: TabContent[] = [
  {
    id: 1,
    name: "1.Kayıt",
    title: "🚀 Longevity Guide GPT'ye Kayıt",
    icon: <User className="w-4 h-4" />,
    link: "https://chatgpt.com/g/g-GKsuaDZUU-longevity-guide",
    linkText: "Longevity Guide'a Git",
    steps: [
      "ChatGPT hesabınıza giriş yapın.",
      "Gmail ile üye olma adımlarını tamamlayın.",
      "Aşağıdaki butona tıklayarak Longevity Guide GPT'ye erişin.",
      "Sohbeti başlatmak için 'Merhaba' yazabilirsiniz."
    ]
  },
  {
    id: 2,
    name: "2.Tablo",
    title: "📝 Günlük Beslenme Tablosu Oluşturma",
    icon: <Calendar className="w-4 h-4" />,
    prompts: [
      {
        title: "Günlük Tablo Promtu",
        content: `📅 Günlük Aktivite & Beslenme Tablosu – 11.04.2026 (Cumartesi)

🎯 Amaç: Yağ yakımı • IF uyumu • Düşük insülin • Kas korunumu • Ödem azaltma • Enerji yönetimi

🕐 Saat, 📝 Öğün / Aktivite, İçerik (kalem kalem), 💬 Notlar & Hedefler, 🔥 Kalori (yaklaşık), 💪 Protein

Burada tablo olarak yazar mısın?

📋 Aktivite İçerik Detayı sütununda 🥚 1 yumurta -> 🥚 1 yumurta (70 kalori) gibi düzenler misin?`
      }
    ]
  },
  {
    id: 3,
    name: "3.Bilgi Gir",
    title: "📋 Kendi Bilgilerinizi Girin",
    icon: <Info className="w-4 h-4" />,
    prompts: [
      {
        title: "Bilgi Giriş Şablonu",
        content: `Bugünkü bilgilerim:

Dün akşam saat _____ de yattım
Bu sabah saat _____ de kalktım

Yediklerim:
___:___ - (ne yediyseniz yazın)
___:___ - (ne yediyseniz yazın)
___:___ - (ne yediyseniz yazın)
___:___ - (ne yediyseniz yazın)
___:___ - (ne yediyseniz yazın)`,
        note: "Boşlukları kendi bilgilerinizle doldurun"
      }
    ]
  },
  {
    id: 4,
    name: "4.Analiz",
    title: "🌙 Gün Kapanışı Analizi (6 Metrik)",
    icon: <Activity className="w-4 h-4" />,
    prompts: [
      {
        title: "Kapanış Analiz Promtu",
        content: `Bugünkü tüm yediklerimi ve aktivitelerimi analiz et.

Şu başlıklarda değerlendirme yap:

⏳ IF (Intermittent Fasting) Analizi
- Yeme pencereme uydum mu?
- Oruç saatlerinde kural dışı bir şey yedim/içtim mi?
- IF skorum kaç?

🍭 Glisemik Yük Değerlendirmesi
- Bugün kan şekerimi ne kadar yükselttim?
- Yüksek glisemik indeksli ne tükettim?
- İnsülin direnci açısından durum nedir?

🧬 Longevity Uyumluluk Puanı
- Bugün hücre yenilenmesine katkı sağladım mı?
- Anti-aging besinler tükettim mi?
- Oksidatif stres yaratan ne yedim?

🎯 Genel Longevity Skoru (100 üzerinden)
- Tüm faktörleri değerlendirerek puan ver
- Güçlü yönlerim neler?
- Zayıf yönlerim neler?

📉 Kilo Yorumu (çok önemli)
- Bugünkü beslenme kilo hedefime uygun mu?
- Kalori açığı/fazlası var mı?
- Yarın ne yapmalıyım?

🧠 Günün Özeti (net ve dürüst)
- Bugün genel olarak nasıl geçti?
- En büyük başarım ne?
- En büyük hatam ne?
- Yarın için 1 öncelikli hedef`
      }
    ]
  },
  {
    id: 5,
    name: "5.IF Sorgu",
    title: "🍫 IF Analizi ve Yiyecek Sorguları",
    icon: <Search className="w-4 h-4" />,
    prompts: [
      {
        title: "Prompt 1 - Günlük Plan",
        content: `Bugün (___/___/2026) IF ve longevity için ne yapayım?`
      },
      {
        title: "Prompt 2 - Çerez",
        content: `Çerez yemek istiyorum.
IF için analiz eder misin?`
      },
      {
        title: "Prompt 3 - Kola",
        content: `Kola içmek istiyorum.
IF için analiz eder misin?`
      },
      {
        title: "Prompt 4 - Boza",
        content: `Boza içmek istiyorum.
IF için analiz eder misin?`
      }
    ],
    infoBox: {
      type: 'green',
      text: `🟢 YEME PENCERESİ İÇİNDE (örn: 09:00-17:00 veya 12:00-20:00)
   → Kola, çerez, boza bile tüketseniz IF BOZULMAZ!

🔴 YEME PENCERESİ DIŞINDA
   → Sadece su, sade çay, sade kahve`
    }
  },
  {
    id: 6,
    name: "6.İlkeler",
    title: "🌿 Longevity'nin 11 Temel İlkesi",
    icon: <BookOpen className="w-4 h-4" />,
    principles: [
      { icon: "🏃♂️", text: "Hareketli yaşam" },
      { icon: "💪", text: "Kas kütlesi" },
      { icon: "🛌", text: "Uyku kalitesi" },
      { icon: "❤️", text: "Kardiyorespiratuvar sağlık" },
      { icon: "🧠", text: "Duygusal sağlamlık" },
      { icon: "🤗", text: "Güçlü sosyal bağlar" },
      { icon: "💃🏻", text: "Stres yönetimi + iyimserlik" },
      { icon: "🥗", text: "Kişiye özgü, sürdürülebilir beslenme + mikrobiyom" },
      { icon: "🌿", text: "Toksik yüklerin ve enflamasyonun azaltılması" },
      { icon: "🌳", text: "Sirkadiyen ritim ve doğaya bağlanmak" },
      { icon: "💊", text: "Vitamin-mineral dengesi" }
    ],
    link: "https://www.instagram.com/longevity.story/",
    linkText: "Instagram'da Takip Et"
  },
  {
    id: 7,
    name: "7.Grafik",
    title: "📊 Kilo Takip Grafiği (MS Project Pro)",
    icon: <BarChart3 className="w-4 h-4" />,
    link: "https://chatgpt.com/g/g-SZqNg3QPk-msproject-pro",
    linkText: "MS Project Pro'ya Git",
    prompts: [
      {
        title: "Prompt 1 - Şablon",
        content: `Benim için burada bir kilo takip grafiği oluştur.

📊 GRAFİK ÖZELLİKLERİ:
- Çizgi grafik (Line Chart) olsun

📈 VERİ YAPISI:
- Başlangıç kilosu: {XX,X} kg
- Hedef: Haftalık 0.5 kg kayıp
- Süre: 24 hafta (168 gün)
- Başlangıç tarihi: XX Nisan 2026

📉 İKİ ÇİZGİ OLACAK:
1. Planlanan Kilo (Mavi çizgi): XX kg'dan başlayıp her hafta 0.5 kg düşen düz çizgi
2. Gerçekleşen Kilo (Kırmızı çizgi): Günlük tartı değerleri, noktalarla
   - XX Nisan 2026: XX.X kg
   - Her noktanın yanında değeri yazsın (örn: XX.X kg)

📅 EK ÖZELLİKLER:
- Her 2 haftada (14 günde) bir dikey kesikli kırmızı çizgi (diyetisyen randevusu)
- Y ekseni: XX-XX kg arası
- X ekseni: Tarihler
- Başlık: "24 Haftalık Kilo Takibi - Güncel Gerçekleşen Tartılar"
- Türkçe etiketler

Bugün XX.XX.2026 itibariyle kilo takibine başladık.`
      },
      {
        title: "Prompt 2 - Örnek (Dolu Hali)",
        isExample: true,
        content: `Benim için burada bir kilo takip grafiği oluştur.

📊 GRAFİK ÖZELLİKLERİ:
- Çizgi grafik (Line Chart) olsun

📈 VERİ YAPISI:
- Başlangıç kilosu: 99,9 kg
- Hedef: Haftalık 0.5 kg kayıp
- Süre: 24 hafta (168 gün)
- Başlangıç tarihi: 11 Nisan 2026

📉 İKİ ÇİZGİ OLACAK:
1. Planlanan Kilo (Mavi çizgi): 100 kg'dan başlayıp her hafta 0.5 kg düşen düz çizgi
2. Gerçekleşen Kilo (Kırmızı çizgi): Günlük tartı değerleri, noktalarla
   - 11 Nisan 2026: 99.9 kg
   - Her noktanın yanında değeri yazsın (örn: 99.9 kg)

📅 EK ÖZELLİKLER:
- Her 2 haftada (14 günde) bir dikey kesikli kırmızı çizgi (diyetisyen randevusu)
- Y ekseni: 85-100 kg arası
- X ekseni: Tarihler
- Başlık: "24 Haftalık Kilo Takibi - Güncel Gerçekleşen Tartılar"
- Türkçe etiketler

Bugün 11.04.2026 itibariyle kilo takibine başladık.`
      }
    ]
  },
  {
    id: 8,
    name: "8.Ay Geçişi",
    title: "🔄 Ay Geçişi - Veri Taşıma",
    icon: <ArrowRightLeft className="w-4 h-4" />,
    infoBox: {
      type: 'yellow',
      text: "ChatGPT'nin belleği sınırlıdır. Her ay yeni bir sohbet açıp eski verileri taşımalısınız."
    },
    prompts: [
      {
        title: "Prompt 1 - Kilo Verileri",
        content: `GG.AA.YYYY – GG.AA.YYYY Tarih Günlük Değişim bilgilerini yazar mısın?`,
        note: "Örnek: 01.04.2026 – 30.04.2026"
      },
      {
        title: "Prompt 2 - Tüm Oturum",
        content: `Tüm oturumu analiz eder misin?`
      },
      {
        title: "Prompt 3 - Protein Tablosu",
        content: `GG.AA.YYYY – GG.AA.YYYY Tarih Bazlı Öğün & Protein Tablosu burada tablo olarak yazar mısın?`
      },
      {
        title: "Prompt 4 - Uyku Tablosu",
        content: `GG.AA.YYYY – GG.AA.YYYY Tüm tarihleri, Tarih, öğün saatleri, uyku uyuma saatleri tablo olarak burada yazar mısın?`
      },
      {
        title: "Prompt 5 - Yeni Sohbette",
        content: `Analiz eder misin?`
      }
    ]
  }
];
