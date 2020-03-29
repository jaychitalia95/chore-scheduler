import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Optional } from "@nestjs/common";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    public id: Number

    @Column()
    public type: string

    @Column()
    public frequency: string

    @Column({default: "0"})
    public currentUser: number

    constructor(type: string, frequency: string) {
        this.type = type,
        this.frequency = frequency
    }

}