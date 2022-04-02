# Open Music API Queue Consumer

This is a branch project of the OpenMusic API intended for consuming queue from message broker.

## Links

- [RabbitMQ](https://www.rabbitmq.com/)
- [amqplib](https://www.npmjs.com/package/amqplib)
- [NodeMailer](https://nodemailer.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg)
- [ESLint](https://eslint.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Requirements

- Node.js v16.13+
- NPM v8.1+
- PostgreSQL v13.3+
- RabbitMQ v3.9+

## Installations

- Clone this repository:

```sh
git clone https://github.com/alvinmdj/openmusic-qconsumer.git
```

- Go to the root directory:

```sh
cd openmusic-qconsumer
```

- Install dependencies:

```sh
npm install
```

- Copy ```.env.example``` and paste as ```.env```:

```sh
cp .env.example .env
```

- Setup environment variables in ```.env```:

```sh
# node-postgres configs
PGUSER=<username>
PGPASSWORD=<password>
PGDATABASE=<dbname>
PGHOST=localhost
PGPORT=5432

# nodemailer SMTP authentication (using gmail)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_ADDRESS=<email-address>
MAIL_PASSWORD=<email-password>

# message broker
RABBITMQ_SERVER=amqp://localhost
```

- Run:

```sh
npm run start
```

- Lint:

```sh
npm run lint
```
