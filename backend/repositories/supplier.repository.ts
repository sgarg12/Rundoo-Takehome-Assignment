import { connect } from "../db.config";
import { Supplier } from "../models/supplier.model";

export class SupplierRepository {

    private db: any = {};
    private supplierRespository: any;

    constructor() {
        this.db = connect();
        // For debugging
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
        this.supplierRespository = this.db.sequelize.getRepository(Supplier);
    }


    async createSupplier(supplier) {
        let data = {};
        try {
            data = await this.supplierRespository.create(supplier);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

}