# Ders 1 - Bileşenler

- Tanışma
- React Kütüphanesi
  - Geliştirme standartları
  - Kütüphane ekosistemi
  - Bileşen geliştirme
- [Geliştirici Araçları](https://react.dev/learn/react-developer-tools#browser-extension)
- Uygulamanın DOM'da `main.jsx` dosyasında render edilmesi
  - `react` ve `react-dom` paketlerinin kullanımı
  - `createRoot` ve `render` yöntemleri
  - `index.html` içinde yer alan `div#root` elementi
- Bileşenler
  - `src/components` klasörünün yapısı
  - Ana bileşen `App`
  - Bileşenlerin varsayılan içe ve dışa aktarımı
- JSX - UI tanımı
  - Özellikler (props)
  - Ortak ebeveyn kuralı(tek bir kapsayıcı öğe)
  - Fragmanlar (Fragments)
  - JSX ifadeleri: Şema ve niteliklerde kullanımı
- Bileşen ayarları
  - `props` parametresi
  - Props'ların destructuring yöntemiyle kullanımı
- Koşullu render
  - Gösterilmeyen değerler: `null`, `undefined`, `false`
  - `&&` operatörünün kullanımı
  - Üçlü operatör ile koşullu render
- Eleman koleksiyonları
  - `map` yöntemi ile liste oluşturma
  - `key` elemanların benzersiz anahtarları
  - Liste ve eleman bileşenleri
- `props.children` özelliği
- Uygulamanın Vercel'de dağıtımı

## JSX ödeme kartları örneği

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
