# Job Hunt OS

A microfrontend-based job application tracker built with **React, TypeScript, Vite and Module Federation**.

Job Hunt OS was created to explore frontend architecture beyond a traditional single-page application, focusing on independently deployed modules, typed contracts, cross-application communication and fault isolation.

## Live Demo

[https://job-hunt-host.vercel.app](https://job-hunt-host.vercel.app)

## Features

### Applications

The Applications module is currently the main functional remote.

- Create new job applications
- Organize applications in a Kanban board
- Drag applications between stages
- Persist application data using `localStorage`
- Validate forms with React Hook Form and Zod
- Generate unique application IDs with `crypto.randomUUID()`
- Navigate to application-specific routes
- Track application stages:
  - Applied
  - Screening
  - Technical
  - Offer
  - Rejected

### Microfrontend architecture

The project is divided into a Host application and independent remote applications.

```text
Job Hunt OS
│
├── host
│
├── applications
│
├── interviews
│
├── companies
│
└── shared
    └── contracts
```

The **Host** is responsible for the main layout, routing and loading the different remote applications.

The remote applications are exposed through **Module Federation** and can be built and deployed independently.

```text
Host
├── Applications Remote
├── Interviews Remote
└── Companies Remote
```

`Interviews` and `Companies` are currently marked as **Coming Soon** in the user interface.

## Cross-Microfrontend Communication

The Applications remote communicates with the Host without directly coupling both applications.

When an application changes stage, the remote dispatches a browser `CustomEvent`:

```ts
window.dispatchEvent(
  new CustomEvent("application:stage-changed", {
    detail: {
      applicationId,
      stage: newStage,
    },
  }),
);
```

The Host listens to this event and can react to changes produced by the remote.

This keeps communication between microfrontends explicit while reducing direct dependencies between them.

## Shared Contracts

Cross-application TypeScript contracts are centralized in:

```text
shared/contracts
```

The package is consumed as:

```text
@job-hunt/contracts
```

It contains shared domain types such as:

```ts
type ApplicationStage =
  | "applied"
  | "screening"
  | "technical"
  | "offer"
  | "rejected";
```

and event payload contracts used by both the Host and remote applications.

This prevents the Host and remotes from defining incompatible versions of the same domain structures.

## Resilience

Remote applications are loaded using:

- `React.lazy`
- `Suspense`
- Error Boundaries

This allows the Host to isolate failures when a remote application cannot be loaded instead of crashing the entire interface.

## Tech Stack

### Core

- React
- TypeScript
- Vite
- React Router

### Architecture

- Module Federation
- npm Workspaces
- Shared TypeScript contracts
- Browser Custom Events

### UI

- Tailwind CSS
- dnd-kit

### Forms and validation

- React Hook Form
- Zod

### Deployment

- Vercel
- Independent deployments for the Host and remote applications

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/ThalizFajardo/job-hunt-os.git
cd job-hunt-os
```

### 2. Install dependencies

```bash
npm install
```

The repository uses npm Workspaces to connect the applications with the shared contracts package.

### 3. Configure the Host

Create:

```text
host/.env.local
```

and add:

```env
VITE_APPLICATIONS_URL=http://localhost:5001/applicationsRemote.js
VITE_INTERVIEWS_URL=http://localhost:5002/interviewsRemote.js
VITE_COMPANIES_URL=http://localhost:5003/companiesRemote.js
```

### 4. Start the applications

Run each application in a separate terminal.

#### Applications

```bash
cd applications
npm run dev
```

Runs on:

```text
http://localhost:5001
```

#### Interviews

```bash
cd interviews
npm run dev
```

Runs on:

```text
http://localhost:5002
```

#### Companies

```bash
cd companies
npm run dev
```

Runs on:

```text
http://localhost:5003
```

#### Host

```bash
cd host
npm run dev
```

Runs on:

```text
http://localhost:5000
```

Open the Host application to use Job Hunt OS.

## Architecture Decisions

### Why microfrontends?

The goal of this project was not simply to build another CRUD application.

It was used to explore how a frontend can be separated into independently deployable domains while maintaining communication between them.

### Why shared contracts?

Shared contracts provide a single source of truth for data structures exchanged between applications.

### Why CustomEvent?

Using browser events allows a remote application to communicate changes without importing logic directly from the Host.

### Why Error Boundaries?

A remote application can fail independently because of deployment, network or runtime problems.

Error Boundaries prevent a failure in one remote from taking down the complete application.

## Current Status

| Module | Status |
|---|---|
| Applications | Functional |
| Interviews | Coming Soon |
| Companies | Coming Soon |
| Profile | Coming Soon |

The Applications module represents the primary completed workflow of the project.

## What I Practiced

This project helped me practice:

- Designing a microfrontend architecture
- Working with Module Federation
- Managing shared TypeScript contracts
- Reducing coupling between frontend applications
- Handling asynchronous remote modules
- Designing failure boundaries
- Managing React state
- Form validation
- Drag-and-drop interactions
- Client-side persistence
- SPA routing
- Deploying multiple frontend applications independently

## Author

**Thaliz Fajardo**

Frontend Developer focused on React, TypeScript and modern frontend architecture.
