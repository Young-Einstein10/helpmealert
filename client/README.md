# HelpmeAlert Frontend

This folder contains the frontend implementation for the HelpmeAlert Twitter BOT.

## Technologies

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/next-steps-typescript-postgres)
- [PostgreSQL](https://www.postgresql.org)
- [Twitter API (V1 and V2)](https://developer.twitter.com/en/docs/twitter-api)

## Getting Started

- Install dependencies:

```sh
yarn install
```

- Create a `.env` file in your root folder and set up the following environment variables. Check your Twitter Developer Account for the credentials.

```sh
CONSUMER_KEY = XXXXXXXXXXXXXXXXXXXXXXXXX
CONSUMER_SECRET = XXXXXXXXXXXXXXXXXXXXXXXXX
ACCESS_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXX
ACCESS_SECRET = XXXXXXXXXXXXXXXXXXXXXXXXX
BEARER_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXX
DATABASE_URL=postgresql://XXXXXXXXXXXXXXXXXXXXXXXXX
PORT=3000
```

- Set up Prisma Client

```sh
npx prisma generate
```

- To start the server:

```sh
yarn dev
```

## Author

- Abdulrahman Yusuf

## License

- This project is licensed under the MIT Public License
