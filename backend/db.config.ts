import { Sequelize } from 'sequelize-typescript'
import { Supplier } from './models/supplier.model';
import { Dialect } from 'sequelize';

export const connect = () => {

    const hostName = process.env.HOST;
    const database = process.env.DB;
    const dialect: Dialect = 'postgres';

    console.log('dialect  ', dialect);


    const sequelize = new Sequelize(database, null, null, {
        host: hostName,
        dialect,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        },
        define: {
            timestamps: false
        }
    });


    sequelize.addModels([Supplier]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}