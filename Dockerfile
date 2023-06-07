# Verwende ein Node.js-Base-Image
# FROM node:14

# Setze das Arbeitsverzeichnis im Container
# WORKDIR /usr/src/app

# Installiere Abhängigkeiten für das Backend
# COPY backend/package*.json ./backend/
# RUN cd backend && npm install

# Installiere Abhängigkeiten für das Frontend
# COPY frontend/package*.json ./frontend/
# RUN cd frontend && npm install

# Kopiere den Quellcode in das Arbeitsverzeichnis
# COPY . .


# Baue das Frontend
# RUN cd frontend && npm run build

# Starte die App
# CMD ["npm", "start"]
