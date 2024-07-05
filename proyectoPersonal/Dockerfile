# Utilizar una imagen base de Nginx en versión Alpine
FROM nginx:1.21.6-alpine

# Eliminar el contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos de tu sitio web al directorio por defecto de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80