import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateClients1649785386578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fullname",
                        type: "varchar"
                    },
                    {
                        name: "gender",
                        type: "varchar"
                    },
                    {
                        name: "birthdate",
                        type: "varchar"
                    },
                    {
                        name: "age",
                        type: "integer"
                    },
                    {
                        name: "city_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_clients_city",
                        columnNames: ["city_id"],
                        referencedTableName: "cities",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
    }

}
