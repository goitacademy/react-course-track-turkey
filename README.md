# Derse 13 - Redux Toolkit ile HTTP İstekleri

- Asenkron işlemler
- Dilim durum formu: yükleniyor, hata, veriler
- `createAsyncThunk` ile `fetchTasks` işleminin tanımlanması
  - İstek URL'si: `https://62584f320c918296a49543e7.mockapi.io/tasks`
  - Bileşen montajında işlemin dağıtılması
  - İşlem eylemleri: pending, fulfilled, rejected
  - İşlem sonuçlarının dilimde işlenmesi (`extraReducers`)
  - Hata ile sonuçlanan isteğin işlenmesi (`thunkAPI.rejectWithValue`)
- `addTask` ve `deleteTask` işlemleri
  - Bileşenlerde işlemlerin dağıtılması
  - İşlem sonuçlarının dilimde işlenmesi
