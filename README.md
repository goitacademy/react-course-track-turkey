# Ders 11 - Redux Kütüphanesi

## Durum Yönetimi

- Küresel durum ve veri akışı
- Kütüphanelerin kurulumu
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)

## Store

- `configureStore` fonksiyonu
- Redux Devtools'ın incelenmesi
- `useSelector` kancası ile store'a abone olma
- Seçici fonksiyonlar

## Eylemler (actions)

- Eylem fabrikaları
- `createAction` fonksiyonu
- `useDispatch` ile eylem gönderme

## Reducer'lar (reducers)

- Reducer imzası
- Kök reducer
- Neden varsayılan olarak `return state`
- Eylemlerin işlenmesi

## Pratik

- Tüm Redux ayarlarını `src/redux` klasöründe yapın
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
