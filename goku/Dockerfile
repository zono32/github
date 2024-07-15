# Usar una imagen base oficial de Node.js
FROM node:22-alpine3.19

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que la aplicación va a usar
EXPOSE 5500

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
