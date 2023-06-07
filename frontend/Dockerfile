# Verwende ein Node.js-Base-Image
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den Quellcode in das Arbeitsverzeichnis
COPY . .

# Baue die App
RUN npm run build

# Starte die App
CMD ["npm", "start"]