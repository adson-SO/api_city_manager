import { City } from "../entities/City";
import { CityRepository } from "../repositories/CityRepository";

type CityRequest = {
    name: string,
    estate: string
}

export class CityService {
    async create({ name, estate }: CityRequest): Promise<City> {
        const repository = new CityRepository();

        const result = await repository.create({ name, estate });

        return result;
    }
}