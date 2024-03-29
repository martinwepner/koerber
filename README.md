# Device Management App

Basic full stack app to manage devices.

## Features

-   List devices
-   Add device
-   Update device battery level
-   chakra-ui for styling

## Getting Started

1. (Install pnpm)
2. Install dependencies (`pnpm i -r`, `-r` installs dependencies recursively in all packages/workspaces)
3. Run `pnpm prisma:migrate-dev` to initialize the database
4. Run `pnpm run --filter shared build ` to build the shared package 
5. In the `server`/`client` package, create a `.env` using `.env.example` as template
5. Run `pnpm dev` to start the server and client
6. Check your terminal logs for the URLs of the server and client

## Structure

-   Backend (`server`) is a Node.js app using express and zod for request validation
-   Database (`database`) uses Prisma as ORM and SQLite as database
-   Frontend (`client`) is a React app using Vite as bundler, react-query for data fetching
-   Shared stuff (`shared`) contains types, constants, ... used in both backend and frontend

## Comments

-   Plain React and chakra-ui because this is a management app that does not really serve static content. Depending on the next steps of this app one can also consider to use Next.js.

## Next steps

- [ ] Add more features like adjusting devices further than just the battery level (name, ...)
- [x] (PARTLY DONE) Style the App more beautifully using e.g. chakra-ui, tailwindcss or styled-components, ...
- [ ] Allow to delete devices
- [ ] Use Nx, Turborepo or similar to manage the monorepo
- [x] Fix dependency problem (constant values cannot be used in the client package. Probably some vite/bundle issue)
- [x] Setup a git repository
- [ ] Use PostgreSQL instead of SQLite
- [ ] Add tests (unit/integration/e2e)
- [ ] Add linter
- [ ] Add Routing (react-router) / Next.js
- [ ] ...

