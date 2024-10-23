# Ders 12 - Redux Toolkit Kütüphanesi

## Durum Dilimleri (State Slices)

- Ana reducer'ı (root reducer) dilim reducer'larına (slice reducers) bölme
- `balanceSlice.js` ve `localeSlice.js` dilim dosyalarının oluşturulması

## `createSlice` Fonksiyonu

- Dilim (slice) oluşturma süreci
- `name` ve `initialState` özelliklerinin tanımlanması
- `reducers` özelliği ve case-reducer'ların kullanımı
- Eylem yaratıcılarının (action creators) dışa aktarımı
- Ana reducer'ın dışa aktarımı
- Dilimlerin case-reducer'larında durumu güncellemek için `Immer` kütüphanesinin kullanımı

## [Redux Persist](https://www.npmjs.com/package/redux-persist) Kütüphanesi

- Kalıcı durum (persistent state) için konfigürasyon oluşturma
- `persistor` oluşturma süreci
- Uygulamaya `PersistGate` bileşeninin eklenmesi
