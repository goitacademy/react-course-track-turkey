# Ders 11 - Redux Kütüphanesi (State Management)

## Durum Yönetimi

- Küresel durum (global state) ve veri akışı
- Kütüphanelerin kurulumu
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)

## Store (Durum Deposu)

- `configureStore` fonksiyonunun kullanımı
- Redux DevTools ile durumu takip etme
- `useSelector`  hook'u ile store'a abone olma ve veri çekme
- Seçici fonksiyonların (selector functions) kullanımı

## Eylemler (actions)

- Eylem yaratıcıları (action creators)
- `createAction` fonksiyonu ile eylem oluşturma
- `useDispatch` hook'u ile eylem gönderme

## Reducer'lar (reducers)

- Reducer fonksiyonlarının yapısı
- Kök reducer (root reducer) oluşturma
- Neden varsayılan olarak `return state` kullanılır?
- Eylemlerin işlenmesi(handling actions)

## Pratik (Uygulamalı Çalışma)

- Redux ayarlarını `src/redux` klasöründe yapılandırın
- `store.js` dosyasında bir store oluşturun

![UI görevi](https://raw.githubusercontent.com/goitacademy/react-course-track/11-redux/assets/task.gif)

Başlangıç durumu şöyle görünmelidir:

```js
{
  balance: {
    value: 0
  },
  locale: {
    lang: "uk"
  }
}
```
