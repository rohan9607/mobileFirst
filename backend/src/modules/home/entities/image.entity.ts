import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("images")
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type : "text", name : "imagename", nullable : true, default : null})
    imagename : string;

    @CreateDateColumn({ name: 'created_at', type : "timestamp", nullable : true })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type : "timestamp", nullable : true })
    updated_at: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deleted_at: Date;
  
}