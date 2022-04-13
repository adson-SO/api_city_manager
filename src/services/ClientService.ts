import { Client } from "../entities/Client";
import { ClientRepository } from "../repositories/ClientRepository";

type ClientRequest = {
    fullname: string,
    gender: string,
    birthdate: Date,
    age: number,
    city_id: string
}

export class ClientService {
    async create({ fullname, gender, birthdate, age, city_id }: ClientRequest): Promise<Client> {
        const repository = new ClientRepository();

        const result = await repository.create({ fullname, gender, birthdate, age, city_id });

        return result;
    }
}