# ----------------------------
# 1) BUILD STAGE
# ----------------------------
    FROM node:18-alpine AS build

    # Crea el directorio de la app
    WORKDIR /app
    
    # Copia los archivos de dependencias para aprovechar la caché
    COPY package*.json ./
    
    # Instala las dependencias (incluyendo devDependencies, 
    # pues Vite está en devDependencies)
    RUN npm install
    
    # Copia el resto del código
    COPY . .
    
    # Construye el proyecto (genera la carpeta dist)
    RUN npm run build
    
    
    # ----------------------------
    # 2) RUN STAGE (Nginx)
    # ----------------------------
    FROM nginx:alpine
    
    # Copia tu configuración personalizada de Nginx 
    # para redirigir rutas a index.html (SPA fallback)
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copia los archivos compilados (dist) desde la etapa anterior
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expone el puerto 80 dentro del contenedor
    EXPOSE 80
    
    # Inicia Nginx en primer plano
    CMD ["nginx", "-g", "daemon off;"]
    