import { DataSource } from "typeorm";
import { DoadorEntity } from "./doador.entity";


export const doadorProviders = [
    {
        provide: 'DB_SANGUEBOM',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(DoadorEntity),
        inject:['DATA_SOURCE'],
    }
]