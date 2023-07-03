import { Supplier } from "../models/SupplierModel";
export class SupplierService {

    public async createTask(data: Supplier): Promise<any> {
        const formData = new FormData();
        formData.append("logo", data.logo[0])
        formData.append("firstName", JSON.stringify(data.firstname))
        formData.append("lastName", JSON.stringify(data.lastname))
        formData.append("address", JSON.stringify(data.address))
        formData.append("city", JSON.stringify(data.city))
        formData.append("state", JSON.stringify(data.state))
        formData.append("country", JSON.stringify(data.country))
        formData.append("zip", JSON.stringify(data.zip))
        const response = await fetch(`/api/supplier`, {
            method: 'POST',
            body: formData
        })
        return await response.json();
    }

}