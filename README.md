# 🧠Talaba365  LMS Frontend

A professional, scalable frontend for a **Learning Management System (LMS)** built with **Next.js 14 App Router**, *
*TypeScript**, **Tailwind CSS**, and **React Hook Form**. This UI interfaces with a powerful multi-tenant backend and
provides an accessible, internationalized user experience for students, teachers, and administrators.

---

## 🚀 Features

- ✨ **Modern App Router** structure (`app/`, `layout.tsx`, nested routes)
- 🧩 **Modular Components** architecture using Tailwind UI and shadcn
- 🌍 **Full i18n Support** with dynamic `[locale]` routing and translation files
- 🔐 **Authentication** ready (login, account, user roles)
- 📚 **Multi-role Interfaces** for students, teachers, and admins
- 🧪 **Strict type safety** with Zod and TypeScript
- 🗂 **Smart Directory Structure** for separation of concerns
- 🌐 **SSR and CSR** optimized for Next.js 14
- 🧵 **Custom hook** architecture with clean data flow
- 💬 Built-in messages, inbox, and help sections
- 📅 Calendar and history tracking support

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── [locale]/         # Locale-aware routing
│   │   ├── login/
│   │   ├── account/
│   │   ├── courses/
│   │   ├── calendar/
│   │   └── ...
├── components/           # UI components
├── constants/            # Static constants (roles, routes)
├── hooks/                # React hooks (useLogin, useAuth)
├── i18n/                 # Translations & internationalization
├── lib/                  # Shared utility functions
├── providers/            # React context providers
├── schemas/              # Zod validation schemas
├── stores/               # Zustand or other global stores
├── styles/               # TailwindCSS and custom styles
├── types/                # Global TypeScript types
├── utils/                # General-purpose utils
```

---

## 🛠️ Tech Stack

- **Next.js 14 App Router**
- **React 18** with TypeScript
- **Tailwind CSS** + shadcn/ui
- **Zod** for schema validation
- **React Hook Form** for advanced forms
- **Next-Intl** for translations
- **PostCSS** for advanced styling
- **ESLint + Prettier** for linting and formatting
- **Vercel / Docker Ready** for deployment

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git https://github.com/akromjonakhmadjonof/lms_frontend.git
cd lms_frontend
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Setup Environment

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

### 4. Run the Development Server

```bash
yarn dev
# or
npm run dev
```

Visit `http://localhost:4000`.

---

## 🌍 i18n

- Uses `next-intl` for internationalization
- Locale structure: `/[locale]/login`, `/[locale]/courses`
- Translation files stored in `public/messages/` and loaded dynamically

---

## 🔐 Authentication

- JWT-based flow with backend session handling
- Login route: `/[locale]/login`
- Role-based rendering for `user`, `teacher`, `admin`

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-f eature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 💬 Contact

Feel free to open an issue or email the maintainer at `admin@talaba365.uz`.

---

## 🧠 Inspiration

Built to scale educational technology in Central Asia and globally, **Talaba365 LMS** supports hybrid tenancy,
multilingual UIs, and adaptive learning features.
