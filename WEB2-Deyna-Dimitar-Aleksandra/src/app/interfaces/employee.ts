export class Employee{
    constructor(id, name, age?, city?, departmentId?){
        this.id = id
        this.name = name
        this.age = age
        this.city = city
        this.departmentId = departmentId
    }

    id: string
    name: string
    age?: number
    city?: string
    departmentId?: string
}