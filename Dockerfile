# Nextjs Dockerfile

# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production
# Stage 2: Serve the application
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Install a minimal web server to serve the Next.js app
RUN npm install -g serve
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]

# To build and run the Docker image:
# docker build -t pagina-personal .
# docker run -p 3000:3000 pagina-personal

