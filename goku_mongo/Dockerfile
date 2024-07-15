# Usar una imagen base de Node.js
FROM node:22-alpine3.19

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
#RUN npm install
RUN npm cache clean --force && npm install --production
# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 5500

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]