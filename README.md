# Community Debt and Ledger Tracker

A self-contained web application for tracking shared expenses and mutual debts within a community.

## Technology Stack

- **Frontend**: Next.js 14+ (App Router), React 18+, Tailwind CSS, shadcn/ui
- **Backend**: Next.js Server Actions & Route Handlers
- **Database**: Prisma ORM with SQLite
- **Authentication**: Email + 6-digit PIN (bcrypt hashed)

## Features

✅ User Authentication (Email + PIN-based)
✅ User Profiles with 4-digit Short ID
✅ User Discovery via Username or Short ID
✅ Debt & Ledger Tracking (Who Owes Whom)
✅ Mutual Confirmation System (Pending → Confirmed)
✅ Transaction History
✅ Clean, Modern, Mobile-Friendly UI

## Project Structure

```
.
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-up/page.tsx
│   │   │   ├── sign-in/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── search/page.tsx
│   │   │   ├── ledger/page.tsx
│   │   │   ├── transactions/page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── sign-up/route.ts
│   │   │   │   ├── sign-in/route.ts
│   │   │   │   └── logout/route.ts
│   │   │   └── transactions/
│   │   │       ├── route.ts
│   │   │       └── confirm/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── SignUpForm.tsx
│   │   │   └── SignInForm.tsx
│   │   ├── dashboard/
│   │   │   ├── BalanceCard.tsx
│   │   │   ├── TransactionForm.tsx
│   │   │   └── TransactionList.tsx
│   │   ├── search/
│   │   │   └── UserSearchForm.tsx
│   │   └── common/
│   │       ├── Navbar.tsx
│   │       └── LoadingSpinner.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/dvitAPR/bank.git
cd bank
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:

```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

4. **Run Prisma migrations**

```bash
npx prisma migrate dev --name init
```

This will:
- Create the SQLite database
- Run migrations
- Generate Prisma client

5. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Management

**View the database in Prisma Studio:**

```bash
npx prisma studio
```

**Create a new migration after schema changes:**

```bash
npx prisma migrate dev --name <migration_name>
```

**Reset the database (development only):**

```bash
npx prisma migrate reset
```

## Authentication Flow

### Sign Up

1. User enters email
2. System generates a 6-digit PIN
3. PIN is hashed with bcrypt and stored
4. User receives their unique 4-digit Short ID (e.g., #1024)
5. User sets a username

### Sign In

1. User enters email
2. User enters 6-digit PIN
3. System verifies PIN against stored hash
4. Session is created (via cookies/middleware)

## Transaction Flow

### Creating a Transaction

1. User searches for a peer by username or Short ID
2. User enters amount and description
3. User selects "I paid" or "They paid"
4. Transaction is logged with **Pending** status

### Confirming a Transaction

1. Both users see the transaction in their dashboard
2. The debtor sees it as **Pending - Action Required**
3. Debtor clicks "Confirm"
4. Transaction updates to **Confirmed**
5. Balances are recalculated

## UI/UX Features

- **Mobile-First Design**: Responsive layout using Tailwind CSS
- **Dark/Light Mode Ready**: Easy to add theme switcher
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Real-time Updates**: Server Actions for instant feedback
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: User-friendly error messages

## Development Notes

- All authentication is stateless using secure cookies
- Passwords are never stored; only PINs (bcrypt hashed)
- Every transaction requires mutual confirmation
- All API routes use Next.js Server Actions for type safety
- Database queries are optimized with Prisma relations

## Future Enhancements

- [ ] Multi-currency support
- [ ] Transaction categories and tags
- [ ] Expense splitting for groups
- [ ] Payment reminders and notifications
- [ ] Export transaction history as CSV
- [ ] Dark mode toggle
- [ ] Two-factor authentication
- [ ] Webhook integrations with payment systems

## Contributing

Fork the repository, create a feature branch, and submit a pull request.

## License

MIT
