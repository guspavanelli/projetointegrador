import { DataSource } from "typeorm";
import { DOADOR } from "./doador.entity";


export const doadorProviders = [
    {
        provide: 'DB_SANGUEBOM',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(DOADOR),
        inject:['DATA_SOURCE'],
    }
]