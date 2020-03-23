export class Employee {
    constructor(id, first_name, last_name?, department_id?, birth_date?, city?, department?) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.birth_date = birth_date 
        this.city = city
        this.department = department
        this.department_id = department_id
    }

    id: string
    first_name: string
    last_name?: string
    birth_date?: number
    city?: string
    department?: string
    department_id?: number
}