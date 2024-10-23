# Derse 13 - Redux Toolkit ile HTTP İstekleri

- HTTP istekleri gibi asenkron işlemleri yönetmek için Redux Toolkit kullanılır.
- Dilimde, istek durumunu takip eden üç ana durum bulunur: yükleniyor, hata, veriler.
- `createAsyncThunk` kullanarak `fetchTasks` işleminin tanımlanması
  - İstek URL'si: `https://62584f320c918296a49543e7.mockapi.io/tasks`
  - Bileşen montajında asenkron işlemin dağıtılmas
  - İşlem durumları: pending (beklemede), fulfilled (başarılı), rejected (başarısız)
  - İşlem sonuçlarının dilimde işlenmesi (`extraReducers`)
  - Hatalı isteklerin (`thunkAPI.rejectWithValue`) ile işlenmesi
- `addTask` ve `deleteTask` işlemleri
  - Bileşenlerde işlemlerin dağıtılması
  - İşlem sonuçlarının dilimde işlenmesi
