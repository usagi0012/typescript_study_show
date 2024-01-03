import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';


import { Category } from '../types/eventcategory.type';

@Entity({
  name: 'events',
})
export class Event {
  static available_seats(arg0: { id: number; }, available_seats: any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  location: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'date', nullable: false })
  event_showtime: Date;

  @Column({ type: 'int', nullable: false })
  event_runtime: number;

  @Column({ type: 'enum', enum: Category, default: Category.ETC })
  category: string;

  @Column({ type: 'int', nullable: false })
  seats: number;

  @Column({ type: 'int'})
  available_seats?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}