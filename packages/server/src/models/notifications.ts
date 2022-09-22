import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface notificationsAttributes {
    id: string;
    type?: string;
    notifiableType?: string;
    notifiableId?: string;
    data?: string;
    readAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "notifications",
	timestamps: false 
})
export class notifications extends Model<notificationsAttributes, notificationsAttributes> implements notificationsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(36) 
    })
    @Index({
    	name: "notifications_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	type?: string;

    @Column({
    	field: "notifiable_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "notifications_notifiable_type_notifiable_id_index",
    	using: "btree",
    	unique: false 
    })
    	notifiableType?: string;

    @Column({
    	field: "notifiable_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "notifications_notifiable_type_notifiable_id_index",
    	using: "btree",
    	unique: false 
    })
    	notifiableId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	data?: string;

    @Column({
    	field: "read_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	readAt?: Date;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}