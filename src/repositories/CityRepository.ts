import { getRepository } from "typeorm";
import { City } from "../entities/City";

type CityRequest = {
    name: string,
    estate: string
}

export class CityRepository {
    async create({ name, estate }: CityRequest): Promise<City> {
        const database = getRepository(City);

        const result = database.create({
            name,
            estate
        });

        await database.save(result);

        return result;
    }

    async find({ name, estate }: CityRequest): Promise<City[]> {
        const database = getRepository(City);

        const result = database.find({ where: { name: name, estate: estate } });

        return result;
    }
}