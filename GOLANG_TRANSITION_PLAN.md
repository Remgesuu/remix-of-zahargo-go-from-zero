# План перехода: Go-разработка → Golang-разработка

## Комплексное руководство по обновлению лендинга ZaharGo

**Дата создания:** Апрель 2026  
**Версия:** 1.0  
**Статус:** Готов к выполнению

---

## Содержание

1. [Обзор проекта](#1-обзор-проекта)
2. [Анализ требований](#2-анализ-требований)
3. [Архитектурные обновления](#3-архитектурные-обновления)
4. [План рефакторинга кода](#4-план-рефакторинга-кода)
5. [Тестирование](#5-тестирование)
6. [Деплой в продакшен](#6-деплой-в-продакшен)
7. [Чек-листы](#7-чек-листы)

---

## 1. Обзор проекта

### 1.1 Цель перехода

Обновить брендинг сайта с "Go-разработка" на "Golang-разработка" для:
- Улучшения SEO (Golang более специфичный поисковый запрос)
- Консистентности бренда
- Профессионального позиционирования

### 1.2 Scope изменений

| Область | Тип изменений | Приоритет |
|---------|---------------|-----------|
| Meta-теги (index.html) | Текстовые обновления | Critical |
| Hero секция | Заголовки и описания | Critical |
| Все компоненты лендинга | Текстовые референсы | High |
| Конфигурационные файлы | Централизованные данные | High |
| SEO и OG-теги | Meta-данные | High |

### 1.3 Затронутые файлы

```
index.html                          # Meta-теги, title, OG
src/components/landing/Hero.tsx     # Главный заголовок
src/components/landing/Mentor.tsx   # Описание ментора
src/components/landing/Program.tsx  # Описание программы
src/components/landing/Pricing.tsx  # Описания тарифов
src/components/landing/LeadForm.tsx # Форма заявки
src/components/landing/Testimonials.tsx # Отзывы
src/components/landing/FinalCTA.tsx # Финальный призыв
src/config/links.ts                 # Конфигурация (расширить)
```

---

## 2. Анализ требований

### 2.1 Функциональные требования

| ID | Требование | Критерий приемки |
|----|------------|------------------|
| FR-01 | Все упоминания "Go-разработка" заменены на "Golang-разработка" | Grep по кодовой базе возвращает 0 результатов для старого варианта |
| FR-02 | Meta-теги обновлены | title, description, og:title, og:description содержат "Golang" |
| FR-03 | Сохранена функциональность | Все интерактивные элементы работают как прежде |
| FR-04 | SEO не ухудшен | Lighthouse SEO score >= 90 |

### 2.2 Нефункциональные требования

| ID | Требование | Критерий приемки |
|----|------------|------------------|
| NFR-01 | Downtime < 5 минут | Использовать Vercel preview deployments |
| NFR-02 | Rollback возможен | Git branch для отката |
| NFR-03 | Документация обновлена | README и IMPLEMENTATION_PLAN актуальны |

### 2.3 Текстовые изменения

#### Замены (точные)

| Было | Стало |
|------|-------|
| Go-разработка | Golang-разработка |
| Go разработка | Golang-разработка |
| Go-разработке | Golang-разработке |
| Go разработке | Golang-разработке |
| Go-разработчик | Golang-разработчик |
| Go разработчик | Golang-разработчик |
| курс по Go | курс по Golang |
| менторство по Go | менторство по Golang |

#### Исключения (НЕ менять)

| Текст | Причина |
|-------|---------|
| Golang (уже правильно) | Уже в целевом формате |
| Go (название языка в коде) | Техническое название языка |
| Gopher | Маскот Go |
| `package main`, `func main()` | Синтаксис Go в терминале |

---

## 3. Архитектурные обновления

### 3.1 Централизация текстового контента

**Проблема:** Текст разбросан по компонентам, сложно поддерживать консистентность.

**Решение:** Создать централизованный конфиг для всего контента.

```typescript
// src/config/content.ts
export const SITE_CONTENT = {
  brand: {
    name: "ZaharGo",
    tagline: "Golang-разработка. С нуля до продакшена.",
    description: "Индивидуальное менторство по созданию Golang сервисов",
  },
  meta: {
    title: "ZaharGo — Менторство по Golang-разработке",
    description: "Индивидуальное менторство по созданию Golang сервисов. 5 реальных проектов в портфолио.",
    keywords: "golang, go разработка, golang курс, golang менторство, backend разработка",
  },
  stats: {
    projects: 5,
    tasks: 150,
    graduates: "50+",
    employmentRate: "87%",
    timeToOffer: "6-9",
  },
  // ... остальной контент
};
```

### 3.2 Структура изменений по компонентам

```
src/
├── config/
│   ├── links.ts          # Существует - расширить
│   └── content.ts        # НОВЫЙ - централизованный контент
├── components/
│   └── landing/
│       ├── Hero.tsx      # Обновить заголовки
│       ├── Mentor.tsx    # Обновить описание
│       ├── Program.tsx   # Обновить описания модулей
│       ├── Pricing.tsx   # Обновить описания тарифов
│       └── ...
└── pages/
    └── Index.tsx         # Без изменений (импорты)
```

---

## 4. План рефакторинга кода

### 4.1 Этап 1: Подготовка (30 минут)

#### Задача 1.1: Создать feature branch

```bash
git checkout -b feature/golang-branding
```

#### Задача 1.2: Создать конфиг контента

**Файл:** `src/config/content.ts`

```typescript
export const SITE_CONTENT = {
  brand: {
    name: "ZaharGo",
    tagline: "Golang-разработка. С нуля до продакшена.",
    shortTagline: "С нуля до продакшена",
  },
  seo: {
    title: "ZaharGo — Менторство по Golang-разработке | С нуля до продакшена",
    description: "Индивидуальное менторство по созданию Golang сервисов. Только практика — 5 реальных проектов в портфолио. Код, который приносит деньги.",
    ogTitle: "Golang-разработка с нуля до продакшена",
    ogDescription: "Индивидуальное менторство по Golang. 5 проектов в портфолио, персональный ментор, гарантия трудоустройства.",
  },
  hero: {
    badge: "GO / GOLANG / BACKEND",
    headline: "Golang-разработка.",
    subheadline: "С нуля до продакшена.",
    description: "Индивидуальное менторство по созданию Golang сервисов. Только практика — 5 реальных проектов в портфолио. Код, который приносит деньги.",
    cta: {
      primary: "Записаться на менторство",
      secondary: "Смотреть программу",
    },
  },
  mentor: {
    name: "Захар Жариков",
    role: "Golang-разработчик, ментор",
    experience: "5+ лет в продакшене",
    bio: "Senior Golang Developer с опытом в высоконагруженных системах. Работал над проектами для финтеха, e-commerce и blockchain. Помог 50+ студентам начать карьеру в Golang-разработке.",
  },
};
```

### 4.2 Этап 2: Обновление Meta-тегов (15 минут)

#### Задача 2.1: Обновить index.html

**Файл:** `index.html`

Изменения:
- `<title>` → "ZaharGo — Менторство по Golang-разработке"
- `<meta name="description">` → Включить "Golang"
- `<meta property="og:title">` → "Golang-разработка с нуля до продакшена"
- `<meta property="og:description">` → Обновить

### 4.3 Этап 3: Обновление компонентов (45 минут)

#### Задача 3.1: Hero.tsx

**Изменения:**
```tsx
// Было
<span className="text-primary">Go-</span>
<br />разработка.

// Стало  
<span className="text-primary">Golang-</span>
<br />разработка.
```

#### Задача 3.2: Mentor.tsx

**Изменения:**
- Описание роли: "Go-разработчик" → "Golang-разработчик"
- Bio текст: все упоминания Go-разработки

#### Задача 3.3: Program.tsx

**Изменения:**
- Заголовок секции
- Описания модулей (если содержат "Go-разработка")

#### Задача 3.4: Pricing.tsx

**Изменения:**
- Описания тарифов
- Features списки

#### Задача 3.5: LeadForm.tsx

**Изменения:**
- Заголовок формы
- Placeholder тексты
- Success message

#### Задача 3.6: Testimonials.tsx

**Изменения:**
- Если есть упоминания в отзывах

### 4.4 Этап 4: Верификация (20 минут)

#### Задача 4.1: Grep-проверка

```bash
# Должен вернуть 0 результатов
grep -r "Go-разработк" src/
grep -r "Go разработк" src/

# Должен вернуть только новые варианты
grep -r "Golang-разработк" src/
```

#### Задача 4.2: Visual проверка

- Открыть preview deployment
- Пройти по всем секциям
- Проверить консистентность терминологии

---

## 5. Тестирование

### 5.1 Функциональное тестирование

| Тест | Ожидаемый результат | Статус |
|------|---------------------|--------|
| Hero отображается | Заголовок "Golang-разработка" виден | [ ] |
| Терминал работает | Drag & drop, Run button функционируют | [ ] |
| CTA кнопки работают | Переход в Telegram / форму | [ ] |
| Навигация работает | Smooth scroll к секциям | [ ] |
| Mobile menu работает | Открытие/закрытие, ссылки | [ ] |
| FAQ accordion работает | Раскрытие/сворачивание | [ ] |
| Форма заявки работает | Валидация, отправка | [ ] |

### 5.2 SEO тестирование

| Проверка | Инструмент | Критерий |
|----------|------------|----------|
| Meta tags | View page source | Все теги содержат "Golang" |
| OG preview | opengraph.xyz | Превью корректное |
| Lighthouse SEO | Chrome DevTools | Score >= 90 |
| Mobile-friendly | Google Search Console | Passed |

### 5.3 Cross-browser тестирование

| Браузер | Desktop | Mobile |
|---------|---------|--------|
| Chrome | [ ] | [ ] |
| Safari | [ ] | [ ] |
| Firefox | [ ] | [ ] |
| Edge | [ ] | [ ] |

### 5.4 Regression тестирование

| Функциональность | Тест |
|------------------|------|
| Анимации | Все Framer Motion анимации работают |
| Responsive | Breakpoints lg/md/sm корректны |
| Hover states | Все интерактивные элементы реагируют |
| Scroll behavior | Smooth scroll работает |

---

## 6. Деплой в продакшен

### 6.1 Pre-deployment checklist

- [ ] Все тесты пройдены
- [ ] Code review выполнен
- [ ] Preview deployment проверен
- [ ] Rollback план готов

### 6.2 Deployment процесс

#### Шаг 1: Merge в main

```bash
git checkout main
git pull origin main
git merge feature/golang-branding
```

#### Шаг 2: Vercel auto-deploy

- Vercel автоматически задеплоит при push в main
- Мониторить deployment logs

#### Шаг 3: Post-deployment verification

```bash
# Проверить live сайт
curl -s https://your-domain.vercel.app | grep "Golang-разработка"
```

### 6.3 Rollback план

**Если обнаружены критические проблемы:**

```bash
# Вариант 1: Revert commit
git revert HEAD
git push origin main

# Вариант 2: Vercel rollback
# В Vercel Dashboard → Deployments → Previous deployment → Promote to Production
```

### 6.4 Monitoring после деплоя

| Метрика | Инструмент | Baseline | Alert threshold |
|---------|------------|----------|-----------------|
| Bounce rate | Vercel Analytics | ~60% | >75% |
| Page load | Vercel Analytics | <2s | >4s |
| Error rate | Browser console | 0 | >0 |
| 404s | Vercel logs | 0 | >0 |

---

## 7. Чек-листы

### 7.1 Pre-implementation checklist

- [ ] Feature branch создан
- [ ] Все файлы для изменения идентифицированы
- [ ] Backup/snapshot сделан (если нужно)
- [ ] Команда уведомлена о изменениях

### 7.2 Implementation checklist

- [ ] `src/config/content.ts` создан
- [ ] `index.html` meta-теги обновлены
- [ ] `Hero.tsx` обновлен
- [ ] `Mentor.tsx` обновлен
- [ ] `Program.tsx` обновлен
- [ ] `Pricing.tsx` обновлен
- [ ] `LeadForm.tsx` обновлен
- [ ] `Testimonials.tsx` обновлен
- [ ] Grep-проверка пройдена
- [ ] Visual review выполнен

### 7.3 Testing checklist

- [ ] Функциональные тесты пройдены
- [ ] SEO проверки пройдены
- [ ] Cross-browser тестирование выполнено
- [ ] Mobile тестирование выполнено
- [ ] Regression тестирование выполнено

### 7.4 Deployment checklist

- [ ] Preview deployment проверен
- [ ] Code merged в main
- [ ] Production deployment успешен
- [ ] Post-deployment verification пройдена
- [ ] Мониторинг настроен

### 7.5 Post-deployment checklist

- [ ] Документация обновлена
- [ ] IMPLEMENTATION_PLAN.md актуализирован
- [ ] Stakeholders уведомлены
- [ ] Metrics baseline обновлен

---

## Приложение A: Список всех текстовых изменений

### index.html

```html
<!-- Title -->
<title>ZaharGo — Менторство по Golang-разработке | С нуля до продакшена</title>

<!-- Meta description -->
<meta name="description" content="Индивидуальное менторство по созданию Golang сервисов. Только практика — 5 реальных проектов в портфолио. Персональный ментор, код-ревью, гарантия трудоустройства." />

<!-- OG tags -->
<meta property="og:title" content="Golang-разработка с нуля до продакшена — ZaharGo" />
<meta property="og:description" content="Индивидуальное менторство по Golang. 5 проектов в портфолио, персональный ментор, гарантия трудоустройства." />
```

### Hero.tsx

```tsx
// Headline
"Golang-разработка."

// Subheadline  
"С нуля до продакшена"

// Description
"Индивидуальное менторство по созданию Golang сервисов..."
```

### Mentor.tsx

```tsx
// Role
"Senior Golang Developer"

// Bio
"...опытом в Golang-разработке..."
```

---

## Приложение B: Timeline

| День | Этап | Задачи | Ответственный |
|------|------|--------|---------------|
| День 1 | Подготовка | Создать branch, config | Dev |
| День 1 | Реализация | Обновить все компоненты | Dev |
| День 1 | Тестирование | Функциональные тесты | Dev/QA |
| День 2 | Code Review | Ревью изменений | Lead |
| День 2 | Деплой | Merge и deploy | Dev |
| День 2 | Верификация | Post-deployment checks | Dev/QA |

**Общая оценка времени:** 4-6 часов

---

## Приложение C: Риски и митигация

| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| SEO drop | Low | High | Сохранить ключевые слова, добавить redirects если нужно |
| Broken functionality | Low | Critical | Thorough testing, rollback plan |
| Inconsistent branding | Medium | Medium | Grep verification, visual review |
| Missed occurrences | Medium | Low | Automated search, manual review |

---

*Документ подготовлен для команды разработки ZaharGo. Следуйте чек-листам для обеспечения качественного перехода.*
