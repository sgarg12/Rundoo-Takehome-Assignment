import { SupplierRepository } from '../repositories/supplier.repository';

export class SupplierService {

    private supplierRepository: SupplierRepository;

    constructor() {
        this.supplierRepository = new SupplierRepository();
    }

    async createSupplier(supplier, filename) {
        return await this.supplierRepository.createSupplier({...supplier, logoFileName: filename});
    }

}