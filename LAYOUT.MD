# Полное руководство по **Layouts** в Next.js 13+ (App Router)

## 🔹 Что такое Layout в Next.js?

**Layout** — это общий шаблон (каркас) для страниц. Он позволяет избежать дублирования кода, так как заголовок, навигация и футер остаются неизменными на всех страницах.

В **Next.js 13+ с App Router**, `layout.js` используется для **создания иерархии вложенных компонентов** и поддержки **персистентного состояния** между страницами.

---

## 1️⃣ **Глобальный Layout (`app/layout.js`)**

Этот Layout охватывает **всё приложение**.

### 📌 **Создаём `app/layout.js`**

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header>🔹 Заголовок</header>
        <nav>🔹 Навигация</nav>
        <main>{children}</main>
        <footer>🔹 Футер</footer>
      </body>
    </html>
  );
}
```

📍 **Как это работает?**

- `<html>` и `<body>` остаются **постоянными**
- `<header>`, `<nav>` и `<footer>` есть **на всех страницах**
- `<main>{children}</main>` — динамически загружает содержимое текущей страницы

🔹 **Любая страница внутри `app/` будет обёрнута в этот Layout**.

---

## 2️⃣ **Локальные (вложенные) Layouts**

Можно делать Layout'ы **только для определённых страниц**.

### 📌 **Структура проекта**

```
app/
  layout.js    <-- Глобальный Layout
  dashboard/
    layout.js  <-- Layout для /dashboard
    page.js    <-- Главная страница панели
    settings/
      page.js  <-- /dashboard/settings
```

### 📌 **`app/dashboard/layout.js`**

```jsx
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <aside>📊 Боковая панель</aside>
      <section>{children}</section>
    </div>
  );
}
```

✅ **Только страницы внутри `/dashboard` используют этот Layout**  
✅ **Общий каркас (боковая панель) сохраняется при переходах внутри `/dashboard`**

### 📌 **`app/dashboard/page.js`** ( `/dashboard` )

```jsx
export default function DashboardPage() {
  return <h1>📊 Панель управления</h1>;
}
```

### 📌 **`app/dashboard/settings/page.js`** ( `/dashboard/settings` )

```jsx
export default function SettingsPage() {
  return <h1>⚙️ Настройки</h1>;
}
```

🔹 При переходе между `/dashboard` и `/dashboard/settings` **боковая панель остаётся, а контент меняется**.

---

## 3️⃣ **Персистентность (сохранение состояния)**

В отличие от `pages/`, где при смене маршрута компоненты размонтируются, в **App Router** Layout'ы сохраняют состояние.

✅ **Пример:** Если у вас открыта вкладка в боковой панели, то при смене страницы в `/dashboard` она **не сбросится**.

---

## 4️⃣ **Слоты (Named Slots) в Layout'ах**

Слоты позволяют загружать **разные страницы в разные части Layout'а**.

### 📌 **Пример структуры с `@dashboard`**

```
app/
  layout.js
  dashboard/
    layout.js
    @sidebar/
      page.js
    @content/
      page.js
```

**Используем слоты в `layout.js`:**

```jsx
export default function DashboardLayout({ sidebar, content }) {
  return (
    <div className="dashboard">
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
}
```

🔹 Теперь `/dashboard` и `/dashboard/settings` **могут иметь разные сайдбары и контент**, но общий Layout.

---

## 5️⃣ **Интерсепторы (Intercepting Routes)**

Позволяют **перехватывать** маршруты и открывать их как **модальные окна**.

### 📌 **Пример структуры с `(modal)`**

```
app/
  layout.js
  gallery/
    page.js
    (modal)/
      [id]/
        page.js
```

**Как это работает?**

- `/gallery` → Покажет стандартную страницу галереи
- `/gallery/(modal)/1` → Откроет фото в модальном окне **без перезагрузки страницы**

📌 **Пример `layout.js` для модального окна**

```jsx
export default function GalleryLayout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
```

Теперь `/gallery` открывает список, а `/gallery/(modal)/1` добавит сверху модальное окно.

---

## 6️⃣ **Как работают заголовки и мета-теги в Layout?**

В **App Router** мета-теги и заголовки можно задавать прямо в `layout.js` через **`metadata`**.

### 📌 **Пример: `app/layout.js`**

```jsx
export const metadata = {
  title: "Мой сайт | Главная",
  description: "Описание страницы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
```

✅ Заголовок **динамически меняется в зависимости от страницы**  
✅ **Можно переопределять `metadata` в `page.js`**

### 📌 **Пример: `app/about/page.js`**

```jsx
export const metadata = {
  title: "О нас | Мой сайт",
  description: "Узнайте больше о нас",
};

export default function AboutPage() {
  return <h1>О нас</h1>;
}
```

Теперь на `/about` будет **"О нас | Мой сайт"**.

---

## 🏆 **Вывод**

🚀 **App Router в Next.js 13+ позволяет создавать мощные и гибкие Layout'ы:**  
✅ **Глобальный Layout (`layout.js`)** — общий каркас для всего приложения  
✅ **Вложенные Layout'ы** — отдельные Layout'ы для `/dashboard`, `/profile` и других секций  
✅ **Персистентность состояния** — компоненты не размонтируются при переходе  
✅ **Слоты (`@slot`)** — гибкое управление контентом  
✅ **Интерсепторы `(modal)`** — открытие страниц как модальных окон

Теперь можно строить сложные **SPA и SSR приложения** без лишнего кода! 🔥