export class Employee {
    constructor(first_name, last_name?, department_id?, birth_date?) {
        this.first_name = first_name
        this.last_name = last_name
        this.birth_date = birth_date 
        this.department_id = department_id
    }

    id: number
    first_name: string
    last_name?: string
    birth_date?: number 
    department_id?: number
}