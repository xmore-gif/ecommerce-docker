 NEXORA — E-commerce Performance Frontend

Modern e-commerce frontend built with Next.js 16+, TypeScript and the App Router.

Project

NEXORA is a performance-focused e-commerce experience designed around:

- Server Components for read-oriented pages
- Client Components only where interaction is required
- Server Actions for asynchronous mutations
- Local cart state
- Checkout flow
- Purchase history
- Suspense loading states
- Route-level loading UI
- Route-level error handling
- Cache revalidation with `revalidatePath`

Technology Stack

- Next.js 16+
- TypeScript
- React
- Tailwind CSS
- Next.js App Router
- Server Components
- Server Actions

Environment Variables

Create a `.env.local` file:

```env
BASE_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000 