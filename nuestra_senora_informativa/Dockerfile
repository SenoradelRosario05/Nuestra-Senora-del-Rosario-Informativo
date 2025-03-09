# ----------------------------
# 1) BUILD STAGE
# ----------------------------
    FROM node:18-alpine AS build

    # Create app directory
    WORKDIR /app
    
    # Copy only package files first for caching
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy the rest of the project
    COPY . .
    
    # Build the project
    RUN npm run build
    
    
    # ----------------------------
    # 2) RUN STAGE (Nginx)
    # ----------------------------
    FROM nginx:alpine
    
    # Copy our custom Nginx config (see below) to handle SPA routes
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copy the compiled dist folder from the build stage
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expose port 80 (container-internal)
    EXPOSE 80
    
    # Run Nginx in foreground
    CMD ["nginx", "-g", "daemon off;"]
    