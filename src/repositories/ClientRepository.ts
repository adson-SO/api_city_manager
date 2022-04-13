import { getRepository } from "typeorm";
import { Client } from "../entities/Client";

type ClientRequest = {
    fullname: string,
    gender: string,
    birthdate: Date,
    age: number,
    city_id: string
}

export class ClientRepository {
    async create({ fullname, gender, birthdate, age, city_id }: ClientRequest): Promise<Client> {
        const database = getRepository(Client);

        const result = database.create({
            fullname,
            gender,
            birthdate,
            age,
            city_id
        });

        await database.save(result);

        return result;
    }
}