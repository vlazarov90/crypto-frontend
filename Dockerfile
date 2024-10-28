# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the app (default Vue port)
EXPOSE 8080

# Start the application in development mode with hot reloading
CMD ["npm", "run", "serve"]