# Use Node.js 18.x as the base image
FROM node:18.16.0-alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json docker.android.browserstack.conf.ts tsconfig.json ./

# Install npm dependencies
RUN npm install

# Copy the entire source folder including all subfolders
COPY src ./src


# Environment variable for specifying the WebDriverIO configuration file
ENV WDIO_CONFIG_FILE=""

# Command to run WebDriverIO tests
CMD ["sh", "-c", "npx wdio run $WDIO_CONFIG_FILE"]
