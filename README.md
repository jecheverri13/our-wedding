# Wedding Day Front 💍

Aplicación web para invitación y detalles de boda construida con **React + Vite**, servida con **Nginx** en un contenedor Docker optimizado para **Render** y entornos locales.

---

## 🚀 Desarrollo Local

### Con Node.js
```bash
npm install
npm run dev
```

### Con Docker Compose (Recomendado)
Para levantar la aplicación en contenedor en el puerto `8080`:
```bash
npm run docker:up
# o directamente:
docker compose up --build
```
Abre en tu navegador: [http://localhost:8080](http://localhost:8080)

Para detener el contenedor:
```bash
npm run docker:down
```

### Con Docker directamente
```bash
# Compilar imagen
npm run docker:build

# Ejecutar contenedor
npm run docker:run
```

---

## 🌐 Despliegue en Render

El repositorio incluye:
- [Dockerfile](file:///Dockerfile): Build multi-stage (Node.js 20 para compilar y Nginx Alpine para servir en producción).
- [nginx.conf.template](file:///nginx.conf.template): Plantilla con reemplazo de `${PORT}`, fallback SPA (`try_files`), compresión gzip, cabeceras de seguridad y caché de estáticos.
- [render.yaml](file:///render.yaml): Blueprint configurado con `PORT: 10000` y healthcheck en `/healthz`.

