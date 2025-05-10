# Scripts Documentation

## Build Scripts

### build.sh
Builds the application for production deployment.

```bash
#!/bin/bash
# Build frontend assets
npm run build

# Create production bundle
npm run bundle
```

### dev.sh
Starts the development environment.

```bash
#!/bin/bash
# Start development servers
npm run dev
```

## Database Scripts

### db-backup.sh
Performs database backup operations.

```bash
#!/bin/bash
# MongoDB backup
mongodump --uri="$MONGODB_URI" --out="./backups/$(date +%Y%m%d)"

# Redis backup
redis-cli save
```

### db-restore.sh
Restores database from backup.

```bash
#!/bin/bash
# MongoDB restore
mongorestore --uri="$MONGODB_URI" --dir="./backups/$1"
```

## Deployment Scripts

### deploy.sh
Handles production deployment tasks.

```bash
#!/bin/bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install --production

# Build application
npm run build

# Restart services
pm2 restart all
```

### rollback.sh
Rollback to previous version if deployment fails.

```bash
#!/bin/bash
# Revert to previous commit
git reset --hard HEAD~1

# Rebuild and restart
npm run build
pm2 restart all
```

## Test Scripts

### test.sh
Runs all test suites.

```bash
#!/bin/bash
# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
```

### lint.sh
Performs code quality checks.

```bash
#!/bin/bash
# Run ESLint
npm run lint

# Run Prettier
npm run format
```

## Utility Scripts

### setup.sh
Initial project setup script.

```bash
#!/bin/bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Initialize database
npm run db:init
```

### cleanup.sh
Cleans up temporary files and build artifacts.

```bash
#!/bin/bash
# Remove build files
rm -rf dist/

# Clear cache
rm -rf .cache/
```