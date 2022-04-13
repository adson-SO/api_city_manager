import { getRepository } from "typeorm";
import { City } from "../entities/City";
import { Client } from "../entities/Client";
import { NotFound } from "../errors/NotFound";
import { ClientRepository } from "../repositories/ClientRepository";

type ClientRequest = {
    fullname: string,
    gender: string,
    birthdate: Date,
    age: number,
    city_id: string
}

type ClientUpdateRequest = {
    id: string,
    fullname: string
}

export class ClientService {
    async create({ fullname, gender, birthdate, age, city_id }: ClientRequest): Promise<Client> {
        const repository = new ClientRepository();
        const cityRepository = getRepository(City);
        
        const city = await cityRepository.findOneBy({ id: city_id });
        if(!city) {
            throw new NotFound(city_id);
        }

        const result = await repository.create({ fullname, gender, birthdate, age, city_id });

        return result;
    }

    async find({ fullname, gender, birthdate, age }): Promise<Client[]> {
        const repository = new ClientRepository();

        const result = await repository.find({ fullname, gender, birthdate, age });

        return result;
    }

    async findById({ id }): Promise<Client> {
        const repository = new ClientRepository();

        const result = await repository.findById({ id });
        if(!result) {
            throw new NotFound(id);
        }

        return result;
    }

    async delete({ id }): Promise<void> {
        const repository = new ClientRepository();

        const client = await repository.findById({ id });
        if(!client) {
            throw new NotFound(id);
        }

        await repository.delete({ id });
    }

    async updateName({ id, fullname }: ClientUpdateRequest): Promise<Client> {
        const repository = new ClientRepository();

        const client = await repository.findById({ id });
        if(!client) {
            throw new NotFound(id);
        }

        const result = await repository.updateName({ id, fullname });

        return result;
    }
}