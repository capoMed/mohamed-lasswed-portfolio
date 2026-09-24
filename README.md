# Mohamed Lasswed — Portfolio

Premium dark Angular portfolio + NestJS/MySQL contact API.

## Structure
- `frontend/` Angular 22 standalone application
- `backend/` NestJS 11 REST API + TypeORM/MySQL

## Local development
1. Install Node.js 22 LTS.
2. Create a MySQL database named `portfolio`.
3. `cd backend && npm install && cp .env.example .env && npm run start:dev`
4. In another terminal: `cd frontend && npm install && npm start`
5. Open `http://localhost:4200`.

The backend creates the `contact_messages` table automatically in development. For production, replace `synchronize` with migrations before first deployment.

## Before launch
- Replace LinkedIn/GitHub placeholder URLs.
- Replace project links and project descriptions with real public work.
- Set `frontend/src/app/core/services/contact.service.ts` API URL to the deployed backend URL (preferably via an Angular environment configuration).
- Update `public/robots.txt` and `public/sitemap.xml` with the real domain.
- Add a real professional photo in `About` if desired.
