# ----------------------------
# 1) BUILD STAGE
# ----------------------------
    FROM node:18-alpine AS build

    # Crea el directorio de la app
    WORKDIR /app
    
    # Copia los archivos de dependencias para aprovechar la caché
    COPY nuestra_senora_informativa/package*.json ./
    
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
    
    # Crea la configuración de Nginx directamente
    RUN echo 'server { \
        listen       80; \
        server_name  localhost; \
        \
        location / { \
            root   /usr/share/nginx/html; \
            index  index.html index.htm; \
            try_files $uri $uri/ /index.html; \
        } \
        \
        error_page   500 502 503 504  /50x.html; \
        location = /50x.html { \
            root   /usr/share/nginx/html; \
        } \
    }' > /etc/nginx/conf.d/default.conf
    
    # Copia los archivos compilados (dist) desde la etapa anterior
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expone el puerto 80 dentro del contenedor
    EXPOSE 80
    
    # Configurar health check para Coolify
    HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
      CMD wget -qO- http://localhost/ || exit 1
    
    # Inicia Nginx en primer plano
    CMD ["nginx", "-g", "daemon off;"]