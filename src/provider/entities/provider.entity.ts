import { genSalt, hash } from 'bcrypt';
import { Ticket } from '../ticket/entities/ticket.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  providerName: string;

  @Column()
  password: string;

  @Column({ unique: true })
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

  @BeforeInsert()
  async hashPassword() {
    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(this.password, salt);
      this.password = hashedPassword;
      console.log(hashedPassword);
    } catch (error) {
      throw new Error('encrypting password failed');
    }
  }

  @OneToMany(() => Ticket, (ticket: Ticket) => ticket.provider)
  tickets: Ticket[];
}
