# React Todo List — Yol Haritası & Dokümantasyon

> Öğrendiğin tüm konuları (components, props, interactive components, state management) tek bir projede pekiştiriyorsun.

---

## Projenin Görünümü

```
[ Yeni görev ekle... ]  [ Ekle ]

☐ React öğren
☑ Tailwind kur
☐ Todo list yap

Toplam: 3 görev | Tamamlanan: 1
```

---

## Dosya Yapısı

```
src/
├── App.jsx           → Ana bileşen, tüm state burada
├── TodoInput.jsx     → Yeni görev ekleme formu
├── TodoList.jsx      → Görev listesini render eder
├── TodoItem.jsx      → Tekil görev satırı
└── index.css         → Tailwind import
```

---

## State Yapısı

Tüm state `App.jsx` içinde tutulur. İki state'e ihtiyacın var:

```jsx
// 1. Görev listesi — her görev bir obje
const [todos, setTodos] = useState([
  { id: 1, text: "React öğren", completed: false },
  { id: 2, text: "Tailwind kur", completed: true },
])

// 2. Input alanının değeri
const [inputValue, setInputValue] = useState("")
```

**Neden bu yapı?**
- `todos` dizisi her görevin metnini ve tamamlanma durumunu tutar
- `inputValue` controlled input için gerekli
- Her ikisi de değişince ekranın güncellenmesi gerekiyor → state olmalı

---

## Fonksiyonlar

### 1. `handleInputChange(e)`
**Nerede:** `App.jsx`
**Ne için:** Input alanına yazıldıkça `inputValue` state'ini günceller
**Ne yapar:**
```
Kullanıcı bir tuşa basar
  → e.target.value ile yeni değeri al
  → setInputValue ile state'i güncelle
  → Input, state'i yansıtır (controlled input)
```

---

### 2. `handleAddTodo()`
**Nerede:** `App.jsx`
**Ne için:** Yeni görev ekler
**Ne yapar:**
```
"Ekle" butonuna tıklanır
  → inputValue boş mu? → boşsa hiçbir şey yapma (return)
  → Yeni görev objesi oluştur:
      { id: Date.now(), text: inputValue, completed: false }
  → setTodos ile mevcut listeye yeni görevi ekle (spread operatörü kullan)
  → setInputValue("") ile input'u temizle
```

**Dikkat:** `setTodos([...todos, yeniGorev])` — mevcut diziyi spread et, üstüne yenisini ekle.

---

### 3. `handleToggleTodo(id)`
**Nerede:** `App.jsx`
**Ne için:** Görevi tamamlandı / tamamlanmadı olarak işaretler
**Ne yapar:**
```
Checkbox'a tıklanır, görevin id'si gelir
  → todos dizisini .map() ile gez
  → id eşleşen görevi bul
  → O görevin completed değerini tersine çevir (!todo.completed)
  → Diğer görevlere dokunma
  → setTodos ile güncel diziyi kaydet
```

---

### 4. `handleDeleteTodo(id)`
**Nerede:** `App.jsx`
**Ne için:** Görevi listeden kaldırır
**Ne yapar:**
```
Sil butonuna tıklanır, görevin id'si gelir
  → todos dizisini .filter() ile filtrele
  → id'si eşleşmeyen görevleri tut, eşleşeni çıkar
  → setTodos ile güncel diziyi kaydet
```

---

## Bileşenler

### `App.jsx`
**Rolü:** Ana bileşen. Tüm state ve fonksiyonlar burada yaşar.
**Render eder:**
- `<TodoInput />` — input ve ekle butonu
- `<TodoList />` — görev listesi
- Özet satırı: toplam ve tamamlanan sayısı

**Hangi prop'ları geçer:**
```jsx
<TodoInput
  value={inputValue}
  onChange={handleInputChange}
  onAdd={handleAddTodo}
/>

<TodoList
  todos={todos}
  onToggle={handleToggleTodo}
  onDelete={handleDeleteTodo}
/>
```

---

### `TodoInput.jsx`
**Rolü:** Yeni görev ekleme arayüzü
**Aldığı prop'lar:**
- `value` → input'un değeri (controlled)
- `onChange` → input değişince çağrılır
- `onAdd` → "Ekle" butonuna tıklanınca çağrılır

**Render eder:**
- Bir `<input>` alanı
- Bir "Ekle" `<button>`

**Bonus:** Enter tuşuna basılınca da `onAdd` çağrılabilir. Bunun için input'a `onKeyDown` ekle, `e.key === "Enter"` kontrolü yap.

---

### `TodoList.jsx`
**Rolü:** Tüm görevleri listeler
**Aldığı prop'lar:**
- `todos` → görev dizisi
- `onToggle` → toggle fonksiyonu
- `onDelete` → sil fonksiyonu

**Ne yapar:**
```
todos.map() ile her görevi gez
  → Her görev için <TodoItem /> render et
  → key olarak todo.id kullan
  → onToggle ve onDelete'i prop olarak geç
```

**Bonus:** `todos` dizisi boşsa "Henüz görev yok" mesajı göster.

---

### `TodoItem.jsx`
**Rolü:** Tekil görev satırı
**Aldığı prop'lar:**
- `todo` → görev objesi `{ id, text, completed }`
- `onToggle` → checkbox'a tıklanınca çağrılır
- `onDelete` → sil butonuna tıklanınca çağrılır

**Render eder:**
- `<input type="checkbox">` — `checked={todo.completed}`, `onChange={() => onToggle(todo.id)}`
- `<span>` — görev metni. `completed` true ise üstü çizili stil uygula
- `<button>` — "Sil" butonu, `onClick={() => onDelete(todo.id)}`

---

## Özet Satırı

`App.jsx` içinde, liste altında şu bilgileri göster:

```jsx
// Toplam görev sayısı
todos.length

// Tamamlanan görev sayısı
todos.filter(t => t.completed).length
```

---

## Geliştirme Sırası (Önerilen)

1. `App.jsx` içinde sadece state'leri tanımla, ekrana `console.log(todos)` bas, çalışıyor mu kontrol et
2. `handleAddTodo` fonksiyonunu yaz ve test et
3. `TodoInput` component'ini yaz, `App`'e bağla
4. `TodoList` ve `TodoItem` component'lerini yaz, listeyi ekranda göster
5. `handleToggleTodo` fonksiyonunu yaz, checkbox'ı bağla
6. `handleDeleteTodo` fonksiyonunu yaz, sil butonunu bağla
7. Özet satırını ekle
8. Tailwind ile stilize et

---

## Sık Yapılan Hatalar

| Hata | Neden olur | Çözüm |
|------|-----------|-------|
| State güncellenmez | `todos.push()` kullanmak | `setTodos([...todos, yeni])` kullan |
| Tüm checkboxlar birlikte değişir | `id` kontrolü yapmamak | `.map()` içinde `todo.id === id` kontrolü yap |
| Input temizlenmez | `setInputValue("")` unutmak | `handleAddTodo` sonunda çağır |
| `key` uyarısı | `.map()` içinde `key` vermemek | `<TodoItem key={todo.id} />` |
| Çift `className` | JSX'te iki kez `className` yazmak | İkisini birleştir |

---

*Takıldığın yerde kodu buraya at, birlikte bakalım!*
