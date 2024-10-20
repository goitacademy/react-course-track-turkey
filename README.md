# Ders 15 - Kullanıcı Girişi ve Kaydı

Backend Temel URL'si: https://task-manager-api.goit.global/

- Sayfa ve bileşenlerin yapısını incelemek
- `src/redux/auth/slice` içindeki authSlice durumunu incelemek
- `src/redux/auth/selectors` içindeki seçicileri incelemek
- `src/redux/auth/operations` içindeki işlem şablonlarını incelemek
- `isLoggedIn` durumuna göre JSX görüntülemek için `AppBar` içindeki bileşenleri ayarlamak

## Kayıt

- `register` işlemini yazmak
- `RegisterForm` bileşeninde kullanmak
- Sonucu `authSlice` içinde işlemek
- Access token kavramını yüzeysel olarak incelemek, daha sonra detaylandırılacak

## Giriş

- `logIn` işlemini yazmak
- `LoginForm` bileşeninde kullanmak
- Sonucu `authSlice` içinde işlemek
- Cevaptaki token'a dikkat etmek

## JWT ve HTTP İstek Başlıkları

- Kullanıcı özel verileri kavramını incelemek
- Token ile backend'in kullanıcıları nasıl ayırt ettiğini gözden geçirmek
- Özel veri koleksiyonu
- Giriş veya kayıt sonrası her isteğe token eklemek
- `setAuthHeader` yardımcı fonksiyonunu oluşturmak

## Çıkış

- `logOut` işlemini yazmak
- `UserMenu` bileşeninde kullanmak
- Çıkış sonucunu `authSlice` içinde işleyerek çıkışta verileri geçersiz kılmak
- Çıkış sonucunu `tasksSlice` içinde işleyerek çıkışta verileri geçersiz kılmak
