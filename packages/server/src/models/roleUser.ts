import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface roleUserAttributes {
    id?: number;
    roleId?: number;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "role_user",
	timestamps: false 
})
export class roleUser extends Model<roleUserAttributes, roleUserAttributes> implements roleUserAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('role_user_id_seq'::regclass)") 
    })
    @Index({
    	name: "role_user_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "role_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "role_user_role_id_index",
    	using: "btree",
    	unique: false 
    })
    	roleId?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "role_user_user_id_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

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