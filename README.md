# Cloudflare Workers React Template

A production-ready full-stack application template featuring a React frontend with Shadcn UI and Tailwind CSS, powered by Cloudflare Workers backend using Hono and Durable Objects. This template includes a demo chat application with user management, chat boards, and real-time messaging, demonstrating stateful storage, pagination, CRUD operations, and responsive design.

**[cloudflarebutton]**

## ✨ Key Features

- **Serverless Full-Stack**: Cloudflare Workers for API routing with Hono, Durable Objects for stateful entities (Users, Chats, Messages).
- **Modern React Frontend**: Vite + React 18, Tanstack Query for data fetching, React Router, Shadcn UI components.
- **Real-Time Chat Demo**: Create users/chats, send messages, list with pagination, delete operations.
- **Responsive Design**: Tailwind CSS with custom themes, dark mode, mobile-first, animations.
- **Type-Safe**: Full TypeScript support across frontend and backend, shared types.
- **Developer Experience**: Hot reload, error boundaries, client error reporting, Bun scripts.
- **Production-Ready**: CORS, logging, health checks, SPA asset handling, SQLite-backed Durable Objects.

## 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Cloudflare Workers, Hono, Durable Objects (SQLite), TypeScript |
| **Frontend** | React 18, Vite, Tanstack React Query, React Router, Shadcn UI, Tailwind CSS, Lucide Icons |
| **State & Data** | Immer (frontend), Shared types, Pagination with indexes |
| **UI/UX** | Framer Motion, Sonner (toasts), Theme toggle, Error boundaries |
| **Dev Tools** | Bun, ESLint, TypeScript 5, Wrangler, Cloudflare Vite plugin |
| **Other** | UUID, Zod (validation-ready), Recharts (charts-ready) |

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   bun install
   ```

2. **Development**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

3. **Type Generation** (Cloudflare bindings):
   ```bash
   bun cf-typegen
   ```

## 📖 Usage Examples

### API Endpoints (Backend)
All under `/api/`:

- `GET /api/users` - List users (supports `?cursor` & `?limit`)
- `POST /api/users` - Create user `{ name: string }`
- `GET /api/chats` - List chats
- `POST /api/chats` - Create chat `{ title: string }`
- `GET /api/chats/:chatId/messages` - List messages
- `POST /api/chats/:chatId/messages` - Send `{ userId: string, text: string }`
- Delete endpoints: `DELETE /api/users/:id`, `POST /api/users/deleteMany { ids: [] }` (similar for chats)

Seed data auto-loads on first request (Users: "User A/B", Chat: "General").

### Frontend Customization
- Replace `src/pages/HomePage.tsx` with your app.
- Use `src/components/layout/AppLayout.tsx` for sidebar layout.
- Hooks: `useTheme`, `useMobile`.
- API Client: `src/lib/api-client.ts` (`api<T>(path)`).
- Shared types: `shared/types.ts`.

Example API call:
```tsx
import { api } from '@/lib/api-client';
const users = await api<User[]>('/api/users');
```

## 🧪 Development Workflow

- **Hot Reload**: `bun dev` - Frontend + Worker proxy.
- **Lint**: `bun lint`
- **Build**: `bun build` - Outputs to `dist/`.
- **Preview**: `bun preview`
- **Add Shadcn Components**:
  ```bash
  npx shadcn@latest add button dialog
  ```
- **Custom Routes**: Edit `worker/user-routes.ts` (auto-reloads).
- **New Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
- **Error Reporting**: Client errors auto-log to Worker console.

## ☁️ Deployment

Deploy to Cloudflare Workers in one command:

```bash
bun install -g wrangler  # If not installed
wrangler deploy
```

**Custom Domain**: Edit `wrangler.jsonc` → `wrangler deploy --env production`.

**[cloudflarebutton]**

**Notes**:
- Free tier supports Durable Objects (SQLite).
- Assets served as SPA (404 → `index.html`).
- Migrates DO schema automatically (`v1` in `wrangler.jsonc`).

## 🤝 Contributing

1. Fork & PR.
2. Follow TypeScript + ESLint rules.
3. Test changes locally (`bun dev`).
4. Update `shared/types.ts` for API changes.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Credits

Built with [Cloudflare Workers](https://workers.cloudflare.com/), [Shadcn UI](https://ui.shadcn.com/), [Hono](https://hono.dev/), and [Vite](https://vitejs.dev/). Demo data & structure inspired by real-world chat apps.