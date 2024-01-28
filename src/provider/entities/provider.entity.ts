import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  providerName: string;

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
}
