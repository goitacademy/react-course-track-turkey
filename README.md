# Ders 5 - React'te Formlar

- Formlar
  - Formun ayrı bir bileşen olarak tanımlanması (`UserForm`)
  - Form gönderimi işlemi (`onSubmit`)
  - Gönderim işlemi için kullanılan prop
  - Olay nesnesini doğrudan gönderim prop'una iletmemek
- Kontrolsüz form `e.target.elements` ile
  - Form gönderiminden sonra `e.target.reset()` ile formun temizlenmesi
- `useId` Hook'u
- Kontrol edilen elemanlar
  - `value` ve `onChange` niteliklerinin kullanımı ve bu değerlerin prop'lar olarak iletilmesi
  - Metin girişi (`TextInput`)
  - Seçim elemanı (`LangSwitcher`)
- Kontrol edilen form (`OrderForm`)
  - Form gönderim işleminin yönetimi
  - Gönderimden sonra formun temizlenmesi
