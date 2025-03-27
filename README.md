# 📌 Progetto: Migrazioni e Seeding con Drizzle Kit in Node.js e Docker

## 🚀 Introduzione
Questo progetto utilizza **Node.js**, **Docker** e **Drizzle Kit** per gestire le migrazioni di un database PostgreSQL.  
Le migrazioni vengono eseguite manualmente tramite shell con i comandi `drizzle-kit generate` e `drizzle-kit migrate`. Inoltre, è incluso uno script per il seeding di un utente admin.

## 📦 Tecnologie Utilizzate
- **Node.js**
- **Docker**
- **Drizzle ORM & Drizzle Kit**
- **PostgreSQL**
- **pnpm** per la gestione dei pacchetti

## 🔧 Installazione e Setup

### 1️⃣ Clona il repository
```sh
git clone <repository-url>
cd <repository-name>
```

### 2️⃣ Installa le dipendenze
Se stai lavorando in locale:
```sh
pnpm install
```
Se utilizzi Docker:
```sh
docker build -t my-drizzle-app .
```

### 3️⃣ Configura le variabili d'ambiente
Crea un file `.env` con il seguente contenuto:
```env
DATABASE_URL=postgres://user:password@db:5432/mydatabase
AUTH_ADMIN_NAME=Admin
AUTH_ADMIN_EMAIL=admin@example.com
AUTH_ADMIN_PSW=securepassword
```

## 📜 Migrazioni con Drizzle Kit

### 🔹 Generare una nuova migrazione
```sh
pnpm drizzle-kit generate
```
Questo comando genera una nuova cartella `drizzle/migrations` contenente i file SQL delle migrazioni.

### 🔹 Applicare le migrazioni al database
```sh
pnpm drizzle-kit migrate
```
Questo comando esegue le migrazioni applicandole al database specificato in `DATABASE_URL`.

## 👤 Seeding dell'utente admin
Abbiamo uno script `seed.ts` per popolare il database con un utente admin.

### 🔹 Eseguire lo script di seeding
```sh
pnpm tsx drizzle/seed.ts
```
Se stai usando Docker:
```sh
docker run --env-file .env my-drizzle-app pnpm tsx drizzle/seed.ts
```

## 🐳 Utilizzo con Docker

### 🔹 Creare e avviare il container
```sh
docker build -t my-drizzle-app .
docker run --env-file .env my-drizzle-app
```

### 🔹 Accedere alla shell del container
```sh
docker exec -it <container_id> sh
```

### 🔹 Eseguire migrazioni nel container
```sh
docker run --env-file .env my-drizzle-app pnpm drizzle-kit migrate
```

## 🛠 Debug e Troubleshooting
Se riscontri problemi:
- Assicurati che PostgreSQL sia in esecuzione e accessibile.
- Controlla il file `.env` per verificare le credenziali.
- Abilita il debug con:
  ```sh
  DEBUG=drizzle:* pnpm drizzle-kit migrate
  ```

## 📄 Licenza
Questo progetto è distribuito sotto la licenza MIT.

---
✨ **Ora sei pronto a gestire il database con Drizzle Kit!** 🚀