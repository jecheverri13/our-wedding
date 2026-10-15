# ================================
# Etapa 1: Compilación de la App
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias limpias
RUN npm ci

# Copiar el resto del código
COPY . .

# Compilar para producción (genera carpeta dist)
RUN npm run build

# ================================
# Etapa 2: Servidor Web con Nginx
# ================================
FROM nginx:alpine

# Puerto por defecto (80 para local, Render inyecta PORT=10000)
ENV PORT=80

# Limpiar archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar bundle compilado de React
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar plantilla de configuración de Nginx (usa envsubst para reemplazar ${PORT} al arrancar)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Exponer puertos comunes
EXPOSE 80 10000

# Arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
