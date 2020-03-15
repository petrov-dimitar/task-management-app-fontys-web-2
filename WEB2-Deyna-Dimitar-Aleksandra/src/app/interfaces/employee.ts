export class Employee {
    constructor(id, name, age?, city?, department?) {
        this.id = id
        this.name = name
        this.age = age
        this.city = city
        this.department = department
    }

    id: string
    name: string
    age?: number
    city?: string
    department?: string
}