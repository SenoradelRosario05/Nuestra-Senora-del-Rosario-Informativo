# ----------------------------
# 1) BUILD STAGE
# ----------------------------
    FROM node:18-alpine AS build

    # Establece el directorio de la app
    WORKDIR /app
    
    # Copia los archivos de dependencias para aprovechar la caché
    COPY nuestra_senora_informativa/package*.json ./
    
    # Instala las dependencias (incluyendo devDependencies, pues Vite está en devDependencies)
    RUN npm install
    
    # Copia el resto del código
    COPY nuestra_senora_informativa/. .
    
    # Construye el proyecto (genera la carpeta dist)
    RUN npm run build
    
    # ----------------------------
    # 2) RUN STAGE (Nginx)
    # ----------------------------
    FROM nginx:alpine
    
    # Copia tu nginx.conf (el que muestras en la captura) y lo renombra como default.conf
    # de modo que Nginx use esa configuración.
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copia los archivos compilados (dist) desde la etapa de build
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expone el puerto 80 dentro del contenedor
    EXPOSE 80
    
    # Configura el healthcheck (Coolify usa wget para verificar la salud)
    HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
      CMD wget -qO- http://localhost/ || exit 1
    
    # Inicia Nginx en primer plano
    CMD ["nginx", "-g", "daemon off;"]
    