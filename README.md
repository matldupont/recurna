# Recurna

Recurna is a modern web application for managing grocery lists with advanced categorization features. It allows users to organize their grocery items by customizable categories, making shopping more efficient and organized.

![Recurna Screenshot](https://placeholder-for-screenshot.com)

## Features

- **User Authentication**: Secure login and registration with Auth0
- **Grocery List Management**: Add, toggle, and organize grocery items
- **Category System**: Create and manage hierarchical categories with custom colors and icons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router architecture
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **Shadcn UI**: Component library built on Radix UI primitives
- **React Context**: For state management

### Backend
- **Next.js API Routes**: Server-side API endpoints
- **Prisma ORM**: Database access and migrations
- **PostgreSQL**: Relational database
- **Auth0**: Authentication and user management

## Implementation Choices

### Architecture

The application follows a modern Next.js App Router architecture, with a clear separation of concerns:

- **UI Components**: Located in `src/components`
- **API Routes**: Located in `src/app/api`
- **Database Services**: Located in `src/lib`
- **Authentication**: Managed through Auth0 with middleware integration

### Database Schema

The core models include:

- **User**: Linked to Auth0 users
- **GroceryCategory**: Supports hierarchical categories with customization
- **GroceryItem**: Grocery items that can be assigned to categories

### UI Design

The UI follows a clean, accessible design using Shadcn UI components and Tailwind CSS. Key UI features include:

- Tabbed interface for switching between grocery list and category management
- Collapsible category sections
- Accessible form controls with proper ARIA attributes
- Responsive layout for all screen sizes

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Auth0 account

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/recurna.git
   cd recurna
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env.local` file with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/recurna"
   
   # Auth0
   AUTH0_SECRET="your-auth0-secret"
   AUTH0_BASE_URL="http://localhost:3000"
   AUTH0_ISSUER_BASE_URL="https://your-tenant.auth0.com"
   AUTH0_CLIENT_ID="your-client-id"
   AUTH0_CLIENT_SECRET="your-client-secret"
   ```

4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

5. Generate Prisma client
   ```bash
   npx prisma generate
   ```

## Available Scripts

- **Development server**
  ```bash
  npm run dev
  # or
  yarn dev
  ```

- **Build for production**
  ```bash
  npm run build
  # or
  yarn build
  ```

- **Start production server**
  ```bash
  npm start
  # or
  yarn start
  ```

- **Run linter**
  ```bash
  npm run lint
  # or
  yarn lint
  ```

- **Generate Prisma client**
  ```bash
  npm run prisma:generate
  # or
  yarn prisma:generate
  ```

## Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── auth/             # Auth0 routes
│   │   ├── dashboard/        # Dashboard pages
│   │   └── profile/          # User profile pages
│   ├── components/           # React components
│   │   ├── grocery/          # Grocery-specific components
│   │   └── ui/               # Reusable UI components
│   ├── generated/            # Generated Prisma client
│   ├── lib/                  # Utility functions and services
│   └── middleware/           # Next.js middleware
├── prisma/                   # Prisma schema and migrations
├── public/                   # Static assets
└── .windsurf                 # Project standards documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Auth0](https://auth0.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
