import "reflect-metadata";

import {createConnection} from "typeorm";

export default async function initDB(){
    const connection = await createConnection();
}

