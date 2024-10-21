# Ders 10 - Yönlendirme

- Sorgu dizesi
  - Sorgu dizesinin bileşenleri  (https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500)
  - `useSearchParams` ile sorgu parametrelerinin çıkarılması
  - `get` metodu ile dönen değerlerin türü
  - Sorgu dizesinin güncellenmesi
- Konum nesnesi
  - `useLocation` hook'u
  - `location.state` özelliği
- Kodun bölünmesi
  - `React.lazy` ve `React.Suspense` kullanarak bileşenlerin dinamik olarak yüklenmesi

## Payments App

- Ödeme listesi sayfasına `OwnerFilter` ekleyin - bu bileşen, ödeme listesini sahiplerine göre filtrelemek için kullanılacaktır.
- Filtre değerini arama parametrelerinde saklayın.
- Ödeme detayları sayfasına `BackLink` ekleyin - bu bileşen, kullanıcıları önceki sayfaya yönlendirmek için kullanılacaktır.
- Ödeme kartındaki bağlantıya tıklanarak detay sayfasına geçişte `location.state` kullanarak kullanarak konum bilgisini iletin.
- Yönlendirmelerin kodunu, iç içe olanlar da dahil olmak üzere, bileşen bazında bölün.
