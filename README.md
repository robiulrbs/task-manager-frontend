# Task Manager Frontend

A responsive Task Manager web application built with React and Vite.

The frontend communicates with a Spring Boot REST API and provides a simple interface for creating, managing, searching, filtering, and completing tasks.

## Live Application

**Production:**

https://task-manager-frontend-xi-three.vercel.app

## Backend API

The frontend communicates with:

https://task-manager-backend-31a4.onrender.com

## Features

- Create tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Search tasks
- Filter tasks
- Task statistics
- Loading states
- Error handling
- Responsive design
- Production API integration

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Vite | Frontend build tool |
| JavaScript | Programming language |
| CSS | Styling |
| Fetch API | Backend communication |
| Vercel | Deployment |
| Git & GitHub | Version control |

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskFilters.jsx
│   └── TaskStats.jsx
├── services/
│   └── taskService.js
├── App.jsx
├── index.css
└── main.jsx
```

## Application Architecture

```text
                User
                  │
                  ▼
        React + Vite Frontend
                  │
                  │ HTTP / REST API
                  ▼
        Spring Boot Backend
                  │
                  ▼
             PostgreSQL
```

## Local Development

### Requirements

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/robiulrbs/task-manager-frontend.git
cd task-manager-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8080
```

For production, the environment variable points to the deployed backend:

```env
VITE_API_URL=https://task-manager-backend-31a4.onrender.com
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Available Scripts

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## API Integration

The frontend communicates with the backend through the service layer:

```text
src/services/taskService.js
```

The service handles:

```text
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

The API URL is controlled using:

```text
VITE_API_URL
```

This allows the same frontend codebase to work with both local and production backends.

## Task Management

### Create

Users can create a task with:

- Title
- Description

### Complete

Tasks can be marked as completed or active.

### Edit

Existing task information can be updated.

### Delete

Tasks can be permanently removed.

### Search

Tasks can be searched by title and description.

### Filter

Tasks can be filtered by:

- All
- Active
- Completed

## Error Handling

The application displays user-friendly messages when API requests fail.

Examples include:

```text
Failed to load tasks.
Failed to create task.
Failed to update task.
Failed to delete task.
```

A retry action is available when loading the task list fails.

## Deployment

The frontend is deployed using Vercel.

Deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
React Production Build
   ↓
Live Web Application
```

The project is connected to GitHub so changes pushed to the `main` branch can trigger a new deployment.

## Backend Repository

The backend source code is available here:

https://github.com/robiulrbs/task-manager-backend

## Backend API

Production API:

https://task-manager-backend-31a4.onrender.com

## Screenshots

Screenshots can be added here later to demonstrate the application's interface.

## License

This project is intended for learning and portfolio purposes.
