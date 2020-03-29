import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
   
    @PrimaryGeneratedColumn()
    public id: Number

    @Column()
    public fullName: string

    @Column()
    public email: string

    constructor(fullName : string, email : string) {
        this.fullName = fullName
        this.email = email
    }
}