# Nisa Çiçek — Kişisel Sanat Galerisi & Portfolyo Web Sitesi

Bu proje, sanatçı **Nisa Çiçek** için hazırlanmış; resim, heykel, tablo ve çizim eserlerini sergileyen minimalist, zarif ve modern bir sanat portfolyosu web sitesidir. Tasarım dili, tipografisi, hover efektleri ve yapısı [essillustration.com/Work](https://essillustration.com/Work) referans alınarak özel olarak kodlanmıştır.

---

## 📁 Proje Klasör Yapısı

```
nisa-cicek-portfolio/
│
├── index.html              # Work (Ana Galeri & Sergi Sayfası)
├── about.html              # About (Sanatçı Biyografisi & Referanslar)
├── contact.html            # Contact (İletişim & Özel Kuş İllüstrasyonu)
│
├── css/
│   └── style.css           # Tüm tasarım, renkler (#e958ab pembe, krem hover) ve responsive yapı
│
├── js/
│   └── main.js             # Eser Lightbox (büyük görüntüleme) & mobil menü işlevleri
│
└── assets/
    └── images/
        ├── logo.png          # Ek 1: Nisa Çiçek Çiçekli Özel Logo
        ├── nisa-portrait.jpg # Sanatçı Nisa Çiçek Portre Fotoğrafı
        ├── art-cecile.jpg    # Ek 2: Portrait of Cécile Elizabeth Florence Rankin
        ├── art-ida.jpg       # Ek 3: Little Ida
        ├── art-innocence.jpg # Ek 4: L'Innocence
        ├── bird-contact.svg  # İletişim sayfası için özel sanatçı kuşu illüstrasyonu
        ├── motif-flower-1.svg# Zarif tekli çiçek motifi (hafif silik arka plan)
        ├── motif-flower-2.svg# Gövdeli çiçek motifi (hafif silik arka plan)
        ├── motif-flower-3.svg# Açmış taç yaprak motifi
        └── motif-leaf.svg    # Sanatsal yaprak dalı motifi
```

---

## ✨ Yapılan Özelleştirmeler ve Özellikler

1. **Logo (Sol Üst):**
   - Çiçek figürlü `Nisa Çiçek` logosu sol üst köşeye yerleştirildi.
2. **Alt Bilgi (Footer):**
   - Her sayfada tam istendiği gibi `all rights reserved Nisa Çiçek` yazmaktadır.
3. **Work (Galeri / Sergi Kısmı):**
   - 3 eser (Cécile Elizabeth Florence Rankin, Little Ida, L'Innocence) orijinal en-boy oranlarını koruyacak şekilde çok sütunlu bir **masonry (puzzle)** ızgarasıyla yerleştirildi.
   - Fare ile eserin üzerine gelindiğinde (hover), örnek sitedeki gibi sıcak krem tonlu (`rgba(249, 241, 227, 0.85)`) örtü belirir ve eserin adı zarif Karla fontuyla ortalanarak gösterilir.
   - Eserlere tıklandığında tam ekran **Lightbox** açılarak detaylı incelenebilir (ok tuşları ve ESC ile geçiş yapılabilir).
4. **About (Hakkında Kısmı):**
   - Başlık: `Hello! Bonjour! Hallo! Hola! Ciao! Merhaba!`
   - Biyografi metni: Yalova Üniversitesi ve Yalova Güzel Sanatlar Lisesi eğitim geçmişi, portre, heykel, mekansal sanat ve dijital sanat disiplinleri eksiksiz eklendi.
   - Cümle içerisindeki `contact me here` bağlantısı sitenin karakteristik pembe tonunda (`rgb(233, 88, 171)`) vurgulandı ve tıklandığında doğrudan `mailto:art.nisacicek@gmail.com` adresine yönlendirecek şekilde bağlandı.
   - Sağ tarafa eklenen siyah-beyaz portre fotoğrafı (`assets/images/nisa-portrait.jpg`) yerleştirildi.
   - `Selected Clients` listesi korundu; `Features` ve altındakiler kaldırıldı.
5. **Contact (İletişim Kısmı):**
   - Metin: *"Whether you would like to discuss a new project, license my work or just to say hi, you can get in touch by emailing me at:"*
   - E-posta: `art.nisacicek@gmail.com`
   - Alt Kısım Kuş Figürü: Nisa Çiçek logosunun renk paletiyle uyumlu özgün sanatçı kuşu illüstrasyonu.
6. **Hafif Silik Sanatsal Çiçek Motifleri (About & Contact):**
   - Ekranın boşluklarında ve metinlerin arkasında hafif silik (opaklığı düşük, yazının okunmasını engellemeyen, tıklamayı etkilemeyen) tekli zarif çiçek ve yaprak motifleri yerleştirildi.
7. **Sağ Üst İkonlar & Pembe Vurgu:**
   - Sosyal medya ikonları korundu. Menü linkleri üzerine gelindiğinde ve aktif sayfada pembe tonu (`rgb(233, 88, 171)`) aktifleşmektedir.

---

## 🚀 1. Bilgisayarınızda Önizleme Yapma

Herhangi bir sunucu kurulumu gerektirmeden:
1. `nisa-cicek-portfolio` klasörünü açın.
2. `index.html` dosyasına çift tıklayarak tarayıcınızda açın.
3. Veya VS Code kullanıyorsanız sağ alttan **Live Server** ile başlatabilirsiniz.

---

## 🌐 2. GitHub ile Yayınlama (GitHub Pages)

Web sitenizi ücretsiz olarak tüm dünyaya açmak için:

1. **GitHub'da Yeni Repository Oluşturun:**
   - [github.com](https://github.com/) adresine gidin ve yeni bir repo oluşturun (Örn: `nisacicek-portfolio`).
   - Repository'yi **Public** seçin.

2. **Dosyaları Yükleyin:**
   Terminal veya Git Bash açarak bu klasörde şu komutları çalıştırın:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nisa Çiçek Portfolio"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/nisacicek-portfolio.git
   git push -u origin main
   ```
   *(Veya GitHub web arayüzünden "uploading an existing file" seçeneğiyle tüm dosyaları sürükleyip bırakabilirsiniz.)*

3. **GitHub Pages'i Açın:**
   - Repository sayfasında **Settings** sekmesine tıklayın.
   - Sol menüden **Pages** kısmına gelin.
   - **Build and deployment** altında **Source** olarak `Deploy from a branch` seçin.
   - **Branch** olarak `main` ve `/ (root)` seçip **Save** butonuna tıklayın.
   - 1-2 dakika içinde siteniz `https://kullaniciadiniz.github.io/nisacicek-portfolio/` adresinde yayına girecektir!

---

## 🏷️ 3. Özel Domain (Alan Adı) Bağlama

Örneğin `www.nisacicek.com` veya `nisacicek.art` gibi bir alan adı aldığınızda:

1. **GitHub Pages Ayarı:**
   - GitHub repo > **Settings** > **Pages** > **Custom domain** kutusuna alan adınızı yazın (Örn: `www.nisacicek.com`) ve **Save**'e basın.
   - Bu işlem klasörünüze otomatik olarak bir `CNAME` dosyası ekler.
   - Sayfanın altındaki **Enforce HTTPS** kutusunu işaretleyin (ücretsiz SSL sertifikası).

2. **Domain Sağlayıcınızın (GoDaddy, Namecheap, Natro, Turhost vb.) DNS Ayarları:**
   Domain kontrol panelinizde **DNS Yönetimi** sayfasına gidin ve şu kayıtları ekleyin:

   - **CNAME Kaydı:**
     - Tür: `CNAME`
     - Ad / Host: `www`
     - Değer / Hedef: `kullaniciadiniz.github.io`
   
   - **A Kayıtları (Kök domain `nisacicek.com` için GitHub IP'leri):**
     - Tür: `A` | Host: `@` | Değer: `185.199.108.153`
     - Tür: `A` | Host: `@` | Değer: `185.199.109.153`
     - Tür: `A` | Host: `@` | Değer: `185.199.110.153`
     - Tür: `A` | Host: `@` | Değer: `185.199.111.153`

DNS kayıtları genellikle 15-60 dakika içerisinde aktifleşir ve siteniz doğrudan alan adınızla açılır.

---

## 🎨 4. İleride Yeni Eserler Nasıl Eklenir?

Yeni bir resim, heykel veya tablo eklemek istediğinizde:
1. Görseli `assets/images/` klasörüne atın (Örn: `yeni-eser.jpg`).
2. `index.html` dosyasını açıp `<div class="thumbnails-grid">` içerisine şu bloğu kopyalayıp yapıştırın:

```html
<div class="thumbnail-item" data-title="Yeni Eserinizin Adı">
  <a href="#" class="thumbnail-link">
    <div class="thumb-image">
      <img src="assets/images/yeni-eser.jpg" alt="Yeni Eserinizin Adı" loading="lazy">
    </div>
    <div class="thumbnail-overlay">
      <span>Yeni Eserinizin Adı</span>
    </div>
  </a>
</div>
```
Eserlerin boyutları ne olursa olsun, puzzle ızgarası otomatik olarak birbirini kusursuz şekilde tamamlayacaktır!
