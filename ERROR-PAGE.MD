### **Конспект по Page-based routers в Next.js**

Next.js использует файловую систему как основу для создания маршрутов (page-based routing). Каждый файл в папке `pages` становится маршрутом в приложении.

---
### **2. Файловые соглашения (File Naming Conventions)**

#### **2.1. Специальные страницы**

- `error.js`
- `loading.js`
- `not-found.js`

Эти страницы используются для обработки ошибок, состояния загрузки и отсутствия данных.

---

### **3. Специальные страницы в Next.js**

#### **3.1. `pages/404.js`**

- Используется для отображения страницы ошибки 404 (не найдено).
- **Пример:**

```javascript
export default function Custom404() {
  return <h1>Страница не найдена (404)</h1>;
}
```

Теперь, при обращении к несуществующему маршруту, отобразится эта страница.

---

#### **3.2. `pages/_error.js`**

- Обрабатывает ошибки, возникающие на уровне приложения.
- **Пример:**

```javascript
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Произошла ошибка на сервере: ${statusCode}`
        : 'Произошла ошибка на клиенте'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
```

Теперь любые ошибки будут обрабатываться на этой странице.

---

#### **3.3. `pages/loading.js`**

- Показывает состояние загрузки при ожидании данных (особенно полезно для маршрутов с динамической загрузкой).
- **Пример:**

```javascript
export default function Loading() {
  return <h1>Загрузка...</h1>;
}
```

Используется в сочетании с `React.Suspense` или динамическими компонентами Next.js.

---

#### **3.4. `pages/not-found.js`**

- Обрабатывает ошибки "404 Not Found" для маршрутов или данных.
- **Пример:**

```javascript
export default function NotFound() {
  return <h1>К сожалению, страница или данные не найдены.</h1>;
}
```

---

### **4. Динамическая загрузка страниц и компонентов**

#### **4.1. Динамическая загрузка страниц**

Используйте функцию `dynamic` из Next.js для ленивой загрузки:

```javascript
import dynamic from 'next/dynamic';

const DynamicPage = dynamic(() => import('./dynamic-page'));

export default function Home() {
  return <DynamicPage />;
}
```

#### **4.2. Загрузка с индикатором**

Добавьте индикатор загрузки с `loading.js`:

```javascript
const DynamicPage = dynamic(() => import('./dynamic-page'), {
  loading: () => <p>Загрузка...</p>,
});
```

---

### **5. Пример структуры файлового проекта**

```plaintext
pages/
├── index.js        // Главная страница (/)
├── about.js        // О компании (/about)
├── contact.js      // Контакты (/contact)
├── blog/
│   ├── [id].js     // Динамический маршрут для блога (/blog/:id)
├── 404.js          // Кастомная страница ошибки 404
├── _error.js       // Кастомная страница ошибок
├── loading.js      // Состояние загрузки
├── not-found.js    // Данные или маршрут не найдены
```

---

### **6. Примеры использования**

#### **6.1. Обработка ошибки 404**

Файл `pages/404.js`:

```javascript
export default function Custom404() {
  return <h1>404 - Страница не найдена</h1>;
}
```

#### **6.2. Обработка серверных ошибок**

Файл `pages/_error.js`:

```javascript
function Error({ statusCode }) {
  return (
    <div>
      <h1>Ошибка: {statusCode}</h1>
      <p>Что-то пошло не так...</p>
    </div>
  );
}

export default Error;
```

#### **6.3. Индикатор загрузки**

Файл `pages/loading.js`:

```javascript
export default function Loading() {
  return <h1>Пожалуйста, подождите, идет загрузка...</h1>;
}
```

---

### **7. Динамические маршруты в сочетании с `not-found.js`**

#### Пример:

- Создайте динамический маршрут `pages/blog/[id].js`.
- Обработайте состояние, если данные не найдены.

Файл `pages/blog/[id].js`:

```javascript
import { notFound } from 'next/navigation';

export default function BlogPost({ params }) {
  const { id } = params;

  const data = fetchBlogPost(id); // Пример получения данных

  if (!data) {
    notFound(); // Перенаправление на not-found.js
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
```

---
