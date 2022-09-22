import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface permissionUserAttributes {
    id?: number;
    permissionId?: number;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "permission_user",
	timestamps: false 
})
export class permissionUser extends Model<permissionUserAttributes, permissionUserAttributes> implements permissionUserAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('permission_user_id_seq'::regclass)") 
    })
    @Index({
    	name: "permission_user_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "permission_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "permission_user_permission_id_index",
    	using: "btree",
    	unique: false 
    })
    	permissionId?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "permission_user_user_id_index",
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