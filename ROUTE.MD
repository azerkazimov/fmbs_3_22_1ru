
---

# Маршрутизация в Next.js 13+ (App Router)

## 1. Что такое App Router?

С версии **Next.js 13+** появилась новая система маршрутизации — **App Router**, которая использует `app/` вместо `pages/`.  
Основные отличия:  
✅ Основан на **React Server Components**  
✅ Поддержка **параллельных маршрутов** и **интерсепторов**  
✅ Новый способ обработки API-запросов через **`route.js`**  
✅ Улучшенная серверная и клиентская рендеринг

---

## 2. Структура маршрутов

Вместо `pages/` теперь используется папка `app/`:

```
app/
  layout.js
  page.js
  about/
    page.js
  blog/
    [slug]/
      page.js
    [...category]/
      page.js
  api/
    users/
      route.js
```

- `page.js` → Создаёт **маршрут** (`/`, `/about`, `/blog`)
- `layout.js` → **Общий шаблон** для дочерних страниц
- `[slug]` → **Динамический маршрут** (`/blog/post-1`)
- `[...category]` → **Catch-All маршрут** (`/blog/tech/frontend/react`)
- `route.js` → **API-маршрут** (`/api/users`)

---

## 3. Базовые маршруты (`page.js`)

Любой `page.js` в `app/` становится маршрутом.

### 📌 `app/page.js` → Главная страница `/`

```jsx
export default function HomePage() {
  return <h1>Главная страница</h1>;
}
```

### 📌 `app/about/page.js` → `/about`

```jsx
export default function AboutPage() {
  return <h1>О нас</h1>;
}
```

---

## 4. Динамические маршруты

### 📌 `app/blog/[slug]/page.js` → `/blog/:slug`

```jsx
export default function BlogPost({ params }) {
  return <h1>Статья: {params.slug}</h1>;
}
```

**Работает для:**

- `/blog/react`
- `/blog/nextjs`
- `/blog/my-article`

---

## 5. Catch-All маршруты

### 📌 `app/blog/[...category]/page.js` → `/blog/:category*`

```jsx
export default function CategoryPage({ params }) {
  return <h1>Категория: {params.category.join(" > ")}</h1>;
}
```

**Работает для:**

- `/blog/tech/frontend/react`
- `/blog/lifestyle/travel/europe`

---

## 6. API маршруты (`route.js`)

Теперь API-роуты создаются через `route.js`.

### 📌 `app/api/users/route.js` → `/api/users`

```js
export async function GET() {
  return Response.json({ users: ["Alice", "Bob"] });
}
```

Теперь `GET /api/users` вернёт:

```json
{ "users": ["Alice", "Bob"] }
```

---

## 7. Общий Layout (`layout.js`)

В `app/layout.js` можно создать общий UI для всех страниц.

### 📌 `app/layout.js`

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <nav>Навигация</nav>
        {children}
        <footer>Футер</footer>
      </body>
    </html>
  );
}
```

Этот `layout.js` применится ко всем страницам внутри `app/`.

---

## 8. Параллельные маршруты

Позволяют загружать несколько страниц одновременно.

### 📌 `app/@dashboard/page.js`

```jsx
export default function Dashboard() {
  return <h1>Панель управления</h1>;
}
```

Используется в `layout.js` для одновременного рендеринга нескольких страниц.

---

## 9. Интерсепторы маршрутов

Позволяют перехватывать и подменять маршруты.

### 📌 `app/(dashboard)/page.js`

```jsx
export default function DashboardLayout({ children }) {
  return <div>Панель: {children}</div>;
}
```

Теперь `/dashboard/settings` будет вложен в этот layout.

---

## 10. Заключение

**App Router** в Next.js 13+ даёт мощную систему маршрутизации:  
✅ Упрощённая структура `app/`  
✅ Поддержка серверных компонентов  
✅ Улучшенная работа с API (`route.js`)  
✅ Гибкость с `layout.js`, `@parallel` и `interceptors`

Теперь можно строить мощные приложения без сложных настроек! 🚀