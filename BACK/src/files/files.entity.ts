import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class FILES{
    @PrimaryColumn()
    ID: string;

    @Column()
    FILENAME: string;

    @Column()
    CONTENTLENGHT: number;

    @Column()
    CONTENTTYPE: string;

    @Column()
    URL: string;



}