import {IConfig, ModelBuilder, DialectMySQL, DialectPostgres} from 'sequelize-typescript-generator';
import * as dotenv from "dotenv";
import * as path from "path";
if (require.main === module) {
    const envPath = path.join(__dirname, "..", ".env");
    dotenv.config({path: envPath});
}
(async () => {
    let mySQL = new DialectMySQL();
    let postgres = new DialectPostgres();
    let dialect;
    if(getEnv('DB_SCHEMA')) {
        dialect = postgres;
    } else {
        dialect = mySQL;
    }
    function getEnv(name: string, defaultValue?: string): string|undefined {
        const value = process.env[name];
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    }
    const config: IConfig = {
        connection: {
            dialect: 'postgres', // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
            database: getEnv('DB_DATABASE'),
            username: getEnv('DB_USERNAME'),
            password: getEnv('DB_PASSWORD'),
            port: Number(getEnv('DB_PORT')),
            schema: getEnv('DB_SCHEMA'),
            host: getEnv('DB_HOST'),
            logging: console.log,
        },
        metadata: {
            indices: true,
            case: 'CAMEL',
        },
        output: {
            clean: true,
            outDir: '../models'
        },
        strict: true,
    };

    const builder = new ModelBuilder(config, dialect);

    try {
        await builder.build();
    }
    catch(err) {
        console.error(err);
        process.exit(1);
    }
})();
