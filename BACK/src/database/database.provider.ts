import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DB_SANGUEBOM',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'db_sanguebom',
                entities:[
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
                logging: true, 


            });
            return dataSource.initialize();
        },
    }
];