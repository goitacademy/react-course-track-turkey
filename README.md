# Ders 15 - Kullanıcı Girişi ve Kaydı

Backend Temel URL'si: https://task-manager-api.goit.global/

- Sayfa ve bileşenlerin yapısının incelenmesi
- `src/redux/auth/slice` dosyasındaki authSlice durumunun analizi
- `src/redux/auth/selectors` içindeki seçicilerin incelenmesi
- `src/redux/auth/operations` klasöründeki işlem şablonlarının gözden geçirilmesi
- `isLoggedIn` durumuna göre JSX görüntüsünü ayarlamak için `AppBar` bileşenini yapılandırmak 

## Kayıt (Register)

- `register` işlemini yazmak
- Bu işlemi `RegisterForm` bileşeninde kullanmak
- İşlem sonucunu `authSlice` içinde işlemek
- Access token kavramına yüzeysel bir giriş yapmak (detaylar daha sonra işlenecek)

## Giriş (Login)

- `logIn` işlemini yazmak
- Bu işlemi `LoginForm` bileşeninde kullanmak
- İşlem sonucunu `authSlice` içinde işlemek
- İstek cevabındaki token'ın önemini vurgulamak

## JWT ve HTTP İstek Başlıkları (Headers)

- Kullanıcı özel verileri kavramını incelemek
- Token ile backend'in kullanıcıları nasıl ayırt ettiğini gözden geçirmek
- Özel veri koleksiyonu
- Giriş veya kayıt sonrası her isteğe token eklemek
- `setAuthHeader` yardımcı fonksiyonunu oluşturmak

## Çıkış (Logout)

- `logOut` işlemini yazmak
- Bu işlemi `UserMenu` bileşeninde kullanmak
- Çıkış sonucunu `authSlice` içinde işleyerek çıkışta verileri geçersiz kılmak
- Çıkış sonucunu `tasksSlice` içinde işleyerek çıkışta verileri geçersiz kılmak
