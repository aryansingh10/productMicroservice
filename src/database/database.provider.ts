import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2/promise';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Aryan@1234',
        database: 'product',
        port: 3306,
      });

      return drizzle(connection);
    },
  },
];
