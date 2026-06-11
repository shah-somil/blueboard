# Use the official Node.js 20 slim image
FROM node:20-slim

# Set environmental variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application files
COPY . .

# Expose the port (Cloud Run will override this with the $PORT env variable, but we default to 3000)
EXPOSE 3000

# Command to run the application
CMD [ "node", "server.js" ]
