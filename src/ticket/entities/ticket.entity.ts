import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
      orderId: number; 
     @Column()
      username: string;
     @Column() 
      providerName: string;
    @Column() 
      fare: number;
    @Column() 
      review: number;
    @Column() 
      comments: string;
    @Column() 
      commodities: string;
    @Column() 
      date_time: Date;
    @Column() 
      origin: string;
    @Column() 
      destination: string;
}
