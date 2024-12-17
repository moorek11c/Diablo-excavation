# Use a lightweight Node image
FROM node:18

# Set the working directory
WORKDIR /usr/src/main

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy your React app source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the static files
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose the port for the frontend
EXPOSE 3000