import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GeneroController } from "./genero.controller";
import { generoProviders } from "./genero.providers";
import { GeneroService } from "./genero.service";

@Module({
    imports:[DatabaseModule],
    controllers:[GeneroController],
    providers:[...generoProviders, GeneroService,
    ],
})
export class GeneroModule{}