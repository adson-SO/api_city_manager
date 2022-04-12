import { getRepository } from "typeorm";
import { City } from "../entities/City";

type CityRequest = {
    name: string,
    estate: string
}

export class CityRepository {
    async create({ name, estate }: CityRequest): Promise<City> {
        const repository = getRepository(City);

        const result = repository.create({
            name,
            estate
        });

        await repository.save(result);

        return result;
    }
}