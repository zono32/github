# Usa la imagen oficial de Node.js como imagen base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si está presente)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5500

# Define el comando para ejecutar la aplicación
CMD ["node", "server.js"]
