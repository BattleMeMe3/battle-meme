# Build stage
FROM node:16-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build applications
RUN npm run build

# Production stage
FROM node:16-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server/package*.json ./server/

# Install production dependencies
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]