# Learning Project: Hono, Deno, and Docker

This is a simple learning project to explore and understand:
- [Hono](https://hono.dev/) - A small, simple, and ultrafast web framework for the Edges
- [Deno](https://deno.land/) - A secure runtime for JavaScript and TypeScript
- [Docker](https://www.docker.com/) - Containerization platform

## Project Structure

```
client-server-app/
├── mvp/                    # Main implementation
│   ├── client/             # Frontend application
│   ├── server/             # Deno server with Hono
│   ├── compose.yaml        # Docker Compose configuration
└── server-hono/            # Hono server implementation without database
```

## Getting Started

### Starting the Application

1. **Build and start the containers:**

```
cd mvp
docker compose up --build
```

2. **On subsequent startups:**

```
cd mvp
docker compose up
```

### Using the Application

- **Client Application**: [http://localhost:5173](http://localhost:5173)
- **Server API**: [http://localhost:8000](http://localhost:8000)

### Shutting Down

```
docker compose down
```

## Development Notes

- The server is built with Hono and Deno
- Changes to the source code are automatically detected (hot reloading)
- The application is containerized with Docker for easy deployment and development
