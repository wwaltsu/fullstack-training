# Client-Server Application

This project is a client-server application consisting of a React client application, Node.js server, and PostgreSQL database. All components are containerized with Docker.

## Project Structure

```
client-server-app/
├── mvp/                    # Main implementation
│   ├── client/             # React client application
│   ├── server/             # Node.js server
│   ├── database-migrations/ # Database migrations
│   ├── e2e-tests/          # End-to-end tests
│   ├── compose.yaml        # Docker Compose configuration
│   └── project.env         # Environment variables
└── step-one/               # First phase implementation
```

## Getting Started

### Environment Variables

The project uses environment variables for configuration. Make sure you have the correct environment variables defined in the `project.env` file.

If the `project.env` file doesn't exist, copy it from the example file:

```
cp project.env.example project.env
```

Fill in the necessary values in the file.

### Starting the Application

1. **On first startup**, build and start the containers:

```
cd mvp
docker compose up --build
```

2. **On subsequent startups**, you can start the containers without rebuilding:

```
cd mvp
docker compose up
```

### Using the Application

- **Client Application**: Open in your browser at [http://localhost:5173](http://localhost:5173)
- **Server**: API is available at [http://localhost:8000](http://localhost:8000)

### Shutting Down the Application

Shut down the application by pressing `Ctrl+C` in the terminal where Docker Compose is running, or execute:

```
docker compose down
```

## Development

### Making Changes

The application is configured so that you can make changes to the source code and see the changes immediately:

- Client-side changes appear automatically in the browser
- Server-side changes require a server restart

### Testing

E2E tests can be run with the command:

```
docker compose run e2e-tests
```

## Security

Never add real passwords or other sensitive information to version control. Always use `.env` files that are added to the `.gitignore` file.

## Environment Variables (.env Files)

This project uses environment variable files (.env) to store configuration settings. To ensure security, real .env files are not included in version control. Instead, you should create your own .env files based on the provided examples.

### Steps to set up environment variables:

1. Copy the example files and rename them:
```
cp .env.development.example .env.development
cp project.env.example project.env
```

2. Fill in the missing values.

### Files ignored by version control:

Real .env files (.env, .env.local, .env.production, project.env, etc.) are ignored via .gitignore to prevent sensitive data leaks.

### File Contents

#### project.env.example (Project Root)

Contains database and authentication credentials (replace placeholders with actual values):

```
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database

FLYWAY_USER=your_flyway_user
FLYWAY_PASSWORD=your_flyway_password
FLYWAY_URL=your_flyway_url

PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGDATABASE=your_pg_database
PGHOST=wsd_project_database
PGPORT=your_pg_port
```

#### .env.development.example (Client Root)

Contains development environment settings:

```
PUBLIC_API_URL=http://localhost:3000
```

### Security Notice

- Never commit real credentials to GitHub. Use .gitignore to keep them out.
- If you accidentally pushed sensitive information, remove it from commit history using BFG Repo-Cleaner.
- Use .env.example files to provide templates without exposing secrets.
