import { Provider } from "src/provider/entities/provider.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
      orderId: number; 
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
    @Column()  
      paymenttype: string; 
    @Column()
      paymentstatus: boolean;
    @Column() 
      user_id: number;
    @Column() 
      provider_id: number;
      @ManyToOne(()=> User, (user) => user.tickets)
      user: User;
      @ManyToOne(()=> Provider, (provider) => provider.tickets)
      provider: Provider;
}
