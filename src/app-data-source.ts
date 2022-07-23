import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})

export {myDataSource}