# Ders 16 - Kullanıcı Güncellemesi ve Yönlendirmeler

## Kullanıcı Güncellemesi

- Redux Persist kullanarak token'in localStorage'da saklayın
- Kullanıcı verilerini güncel tutmak için `refreshUser` işlemini ekleyin
- `App` bileşeninin montajında `refreshUser` işlemini çağırarak kullanıcı verilerini güncelleyin
- Kullanıcının verileri yenilenirken durumu izlemek için `isRefreshing` durumunu seçici (selector) olarak ekleyin
- `auth` diliminde `isRefreshing` durumunu ekleyerek kullanıcı yenileme durumunu takip edin
- `App` bileşeninde `isRefreshing` durumuna göre bileşenleri koşullu olarak gösterin

## Yönlendirmeler (Redirects)

- Giriş işlemi üzerinden yönlendirme (redirect) mantığını ele alın
- `PrivateRoute` ve `RestrictedRoute` bileşenlerini oluşturun
- Rotaları güvenli hale getirmek için bu bileşenleri kullanarak yönlendirmeleri gerçekleştirin
