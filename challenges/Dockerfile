FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY ./src ./src
COPY ./public ./public

# Build the app
RUN npm run build

# Optional: Clean up node_modules to reduce image size
RUN rm -rf node_modules

# Install `serve` globally
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run the production build
CMD ["serve", "-s", "build"]
