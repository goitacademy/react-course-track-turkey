# Ders 1 - Bileşenler

- Tanışma
- React Kütüphanesi
  - Geliştirme standartları
  - Kütüphane ekosistemi
  - Bileşen geliştirme
- [Geliştirici Araçları](https://react.dev/learn/react-developer-tools#browser-extension)
- Uygulamanın DOM'da `main.jsx` dosyasında render edilmesi
  - `react` ve `react-dom` paketleri
  - `createRoot` ve `render` yöntemleri
  - `index.html` içindeki `div#root` elementi
- Bileşenler
  - `src/components` klasörü
  - Ana bileşen `App`
  - Bileşenlerin varsayılan içe aktarımı ve dışa aktarımı
- JSX - UI tanımı
  - Özellikler
  - Ortak ebeveyn kuralı
  - Fragmanlar
  - JSX ifadeleri şemada ve niteliklerde
- Bileşen ayarları
  - `props` parametresi
  - Props'ların destructuring'i
- Koşullu render
  - Gösterilmeyen değerler: `null`, `undefined`, `false`
  - `&&` operatörü
  - Üçlü operatör
- Eleman koleksiyonları
  - `map` yöntemi
  - `key` ile eleman anahtarları
  - Liste ve eleman bileşenleri
- `props.children` özelliği
- Uygulamanın Vercel'de dağıtımı

## JSX ödeme kartları

```jsx
<div>
  <p>Amount: </p>
  <p>Status: Paid or Pending</p>
  <p>Description: </p>
  <p>Card Number: </p>
  <p>Card Type: </p>
  <p>Card Holder Name: </p>
  <p>Payment Date: </p>
</div>
```
