# Device Management App

Basic full stack app to manage devices.

Features:

1. List devices
2. Add device
3. Update device battery level
4. No fancy design

## Getting Started

1. (Install pnpm)
2. Install dependencies (`pnpm i -r`, `-r` installs dependencies recursively in all packages/workspaces)
3. Run `pnpm prisma:migrate-dev` to initialize the database
4. Run `pnpm dev` to start the server and client
5. Check your terminal logs for the URLs of the server and client

## Structure

-   Backend (`server`) is a Node.js app using express and zod for request validation
-   Database (`database`) uses Prisma as ORM and SQLite as database
-   Frontend (`client`) is a React app using Vite as bundler, react-query for data fetching
-   Shared stuff (`shared`) contains types, constants, ... used in both backend and frontend

## Next steps

1. Style the App more beautifully using e.g. chakra-ui, tailwindcss or styled-components, ...
2. Add more features like adjusting devices further than just the battery level (name, ...)
3. Allow to delete devices
4. Use Nx, Turborepo or similar to manage the monorepo
5. Fix dependency problem (constant values cannot be used in the client package. Probably some vite/bundle issue)
6. Setup a git repository
7. Use PostgreSQL instead of SQLite
8. Add tests
9. Add linter
10. ...
