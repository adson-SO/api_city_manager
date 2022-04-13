import { getRepository } from "typeorm";
import { Client } from "../entities/Client";

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

    async find({ fullname, gender, birthdate, age }): Promise<Client[]> {
        const database = getRepository(Client);

        const result = await database.find({ where: {
            fullname: fullname,
            gender: gender,
            birthdate: birthdate,
            age: age
        } });

        return result;
    }

    async findById({ id }): Promise<Client> {
        const database = getRepository(Client);

        const result = await database.findOneBy({ id });

        return result;
    }

    async delete({ id }): Promise<void> {
        const database = getRepository(Client);

        await database.delete(id);
    }

    async updateName({ id, fullname }: ClientUpdateRequest): Promise<Client> {
        const database = getRepository(Client);

        await database.update(id, { fullname });

        const result = await database.findOneBy({ id });

        return result;
    }
}