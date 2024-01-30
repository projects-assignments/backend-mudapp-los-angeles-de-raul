import { genSalt, hash } from 'bcrypt';
import { log } from 'console';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  role: string;
  @BeforeInsert()
  async hashPassword() { 
    try{
      const salt = await genSalt(10);
      const hashedPassword = await hash(this.password, salt);
      this.password = hashedPassword;
      console.log(hashedPassword);
      
    } catch(error){
      throw new Error ('Encripting password failed');
    }
  }
  @OneToMany(() => Ticket, (ticket: Ticket) => ticket.user)
  tickets: Ticket[];
}

