📌 Environment Variables (.env Files)

This project uses environment variable files (.env) to store configuration settings. To ensure security, real .env files are not included in version control. Instead, you should create your own .env files based on the provided examples.
✅ Steps to set up environment variables:

    Copy the example files and rename them:

    cp .env.development.example .env.development
    cp project.env.example .project.env

    Fill in the missing values.

🛑 Files ignored by version control:

Real .env files (.env, .env.local, .env.production, .project.env, etc.) are ignored via .gitignore to prevent sensitive data leaks.
📂 File Contents
.project.env.example (Project Root)

Contains database and authentication credentials (replace placeholders with actual values):

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

.env.development.example (Client Root)

Contains development environment settings:

PUBLIC_API_URL=http://localhost:3000

🔐 Security Notice

    Never commit real credentials to GitHub. Use .gitignore to keep them out.
    If you accidentally pushed sensitive information, remove it from commit history using BFG Repo-Cleaner.
    Use .env.example files to provide templates without exposing secrets.
