# Use an official Node.js image as the base image
FROM node:20

# Set working directory for the application
WORKDIR /app

# Copy application files
COPY ./ /app

# Install application dependencies
RUN npm install

RUN npm install -g @nestjs/cli

# Expose the application port (adjust based on your app's port)
EXPOSE 3000

# Command to start the Node.js application
CMD ["npm", "run", "start:dev"]
