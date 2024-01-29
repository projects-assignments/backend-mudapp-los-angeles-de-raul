import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  providerName: string;

  @Column()
  password: string;

  @Column({unique: true})
  email: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  vehicle: string;

  @Column()
  vehicleSize: string;

  @Column()
  origin: string;

  @Column()
  trip: string;

  @Column()
  availability: boolean;

  @Column()
  reviews: string;
  
  @OneToMany(()=> Ticket, (tickets: Ticket) => tickets.provider)
  tickets: Ticket[];
}
