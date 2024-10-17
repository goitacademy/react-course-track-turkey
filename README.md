# Заняття 10 - Маршрутизація

- Рядок запиту
  - Із чого складається (https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500)
  - Вилучення параметрів з `useSearchParams`
  - Тип значень повертаємий методом `get`
  - Зміна рядка запиту
- Об'єкт місцезнаходження
  - Хук `useLocation`
  - Властивість `location.state`
- Розділення коду
  - `React.lazy` та `React.Suspense`

## Payments App

- На сторінку списку платежів додати `OwnerFilter` - компонент для фільтраціі списку платежів по власнику.
- Значення фільтра зберігати у search params.
- На сторінку деталей платежу додати `BackLink` - посилання на попередню сторінку.
- Викрористати `location.state` для передачі `location` при переході до сторінки деталей при кліку по посиланню у картці пейменту.
- Додати розділення коду маршрутів, включаючи вкладені.
