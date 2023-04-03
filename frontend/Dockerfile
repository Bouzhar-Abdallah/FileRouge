# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5176

# Start the app
CMD ["npx", "vite"]
