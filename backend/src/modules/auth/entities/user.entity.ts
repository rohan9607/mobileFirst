import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum BloodGroup {
    A_POSITIVE = 'A+',
    A_NEGATIVE = 'A-',
    B_POSITIVE = 'B+',
    B_NEGATIVE = 'B-',
    AB_POSITIVE = 'AB+',
    AB_NEGATIVE = 'AB-',
    O_POSITIVE = 'O+',
    O_NEGATIVE = 'O-',
  }

 export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
    SUSPENDED = 'suspended',
    DELETED = 'deleted',
  }

  export enum UserType {
    ADMIN = '1',
    USER = '2'
  }

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type : "varchar", name : "username", nullable : false,  unique : true})
    username : string;
    
    @Column({type : "varchar", name : "city", nullable : false,  unique : false})
    city : string;
    
    @Column({type : "varchar", name : "qualification", nullable : false,  unique : false})
    qualification : string;
    
    @Column({type : "varchar", name : "email", nullable : false, unique : true})
    email : string;
    
    @Column({type : "text", name : "mobile_number", nullable : true, default : null})
    mobile_number : string;
    
    @Column({type : "text", name : "password", nullable : false})
    password : string;

    @Column({type : "text", name : "email_verification_token", nullable : true, default : null})
    email_token : string;
    
    @Column({type : "text", name : "password_reset_token", nullable : true, default : null})
    password_reset_token : string;

    @Column({name : "status", nullable : false, default : UserStatus.PENDING, type : "enum", enum : UserStatus})
    status : UserStatus;
   
    @Column({name : "user_type", nullable : false, default : UserType.USER, type : "enum", enum : UserType})
    user_type : UserType;

    @CreateDateColumn({ name: 'created_at', type : "timestamp", nullable : true })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type : "timestamp", nullable : true })
    updated_at: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deleted_at: Date;
  
}