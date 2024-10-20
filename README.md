# Ders 9 - Navigasyon

- SPA'da yönlendirme nedir
  - İstemci Tarafı İşleme
  - Tek `index.html`
  - React Router Kütüphanesi
- `BrowserRouter` Bileşeni
  - Uygulamadaki yönlendirmeleri ayarlamak için kullanımını öğreniyoruz.
- `Link` ve `NavLink` Bileşenleri
  - Kullanıcıyı uygulamanın sayfaları arasında gezinmesini sağlamak için bağlantılar oluşturmak amacıyla kullanıyoruz.
- `Route` ve `Routes` Bileşenleri
  - URL eşleştiğinde hangi yolların ve ilgili bileşenlerin görüntüleneceğini tanımlamak için kullanımını inceliyoruz.
- Navigasyon Hata Sayfası
  - Girilen URL'nin tanımlı hiçbir rotayla eşleşmediğinde görüntülenecek sayfayı nasıl ayarlayacağımızı ele alıyoruz.
- `useParams` ile URL parametreleri
  - Bileşenlerde URL parametrelerinin değerlerini almak için kütüphaneyi nasıl kullanacağımızı öğreniyoruz.
- İç İçe Yönlendirmeler ve `Outlet`
  - İç içe yönlendirmeler oluşturmak ve iç içe bileşenleri görüntülemek için kullanıyoruz.
- Vercel’e Dağıtım (bu konunun materyallerde hatırlatılması)

## Payment Application

Ödemeleri görüntülemek için çok sayfalı bir uygulama oluşturuyoruz.

Arka uç için `/payments` koleksiyonunun temel URL adresi:

```text
https://65c23f3af7e6ea59682af8d1.mockapi.io
```

### Navigasyon

- `/` - anasayfa
- `/payments` - ödeme listesi sayfası
- `/payments/:paymentId` - ödeme detayları sayfası
- `/payments/:paymentId/bank` - banka bilgileri için iç içe yönlendirme
- `/payments/:paymentId/receipt` - fiş bilgileri için iç içe yönlendirme
- `*` - hata sayfası bileşeni

### Components

- `Navigasyon`
  - `/` ve `/payments` sayfalarına yönlendiren navigasyon bileşeni
  - `App` içinde render edilir
- `PaymentsPage`
  - Tüm ödemelerin listesini almak için GET isteği yapar
  - `PaymentList` bileşenini render eder
- `PaymentDetailsPage`
  - `id`'sine göre bir ödemeyi almak için GET isteği yapar, bu `useParams` yardımıyla elde edilir
  - Ödeme bilgileri ile `PaymentInfo` bileşenini render eder
  - `/bank` ve `/receipt` rotalarına yönlendiren iç navigasyonu render eder
  - `/bank` ve `/receipt` iç rotaları için `Outlet` kullanır
- `NotFoundPage` - `/` bağlantısına sahip sayfa
