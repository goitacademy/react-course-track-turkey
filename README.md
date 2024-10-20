# Ders 10 - Yönlendirme

- Sorgu dizesi
  - Nelerden oluşur (https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500)
  - `useSearchParams` ile parametrelerin çıkarılması
  - `get` metodu ile dönen değerlerin tipi
  - Sorgu dizesinin değiştirilmesi
- Konum nesnesi
  - `useLocation` kancası
  - `location.state` özelliği
- Kodun bölünmesi
  - `React.lazy` ve `React.Suspense`

## Payments App

- Ödeme listesi sayfasına `OwnerFilter` ekleyin - ödeme listesini sahiplerine göre filtrelemek için bir bileşen.
- Filtre değerini arama parametrelerinde saklayın.
- Ödeme detayları sayfasına `BackLink` ekleyin - önceki sayfaya bağlantı.
- Ödeme kartındaki bağlantıya tıklanarak detay sayfasına geçişte `location.state` kullanarak `location`'ı iletin.
- Yönlendirmelerin kodunu bölün, iç içe olanlar dahil.
