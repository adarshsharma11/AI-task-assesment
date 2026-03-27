import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'datetime' })
  due_time: Date;

  @Column({
    type: 'enum',
    enum: ['pending', 'completed'],
    default: 'pending',
  })
  status: string;

  @Column({ default: false })
  reminder_sent: boolean;

  @Column({ type: 'bigint' })
  chat_id: number;

  @CreateDateColumn()
  created_at: Date;
}