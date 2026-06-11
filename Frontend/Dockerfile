# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the frontend source code
COPY . .

# Accept the API URL as a build-time argument and expose it as an env var to the React build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build the project
RUN npm run build

# Stage 2: Serve the production build with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (documentation only; Cloud Run overrides this dynamically)
EXPOSE 8080

# Replace the default port 80 in nginx.conf with the dynamic port assigned by Cloud Run ($PORT) at startup
CMD ["sh", "-c", "sed -i \"s/listen 80;/listen ${PORT:-8080};/g\" /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
