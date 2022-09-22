import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface permissionRoleAttributes {
    id?: number;
    permissionId?: number;
    roleId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "permission_role",
	timestamps: false 
})
export class permissionRole extends Model<permissionRoleAttributes, permissionRoleAttributes> implements permissionRoleAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('permission_role_id_seq'::regclass)") 
    })
    @Index({
    	name: "permission_role_pkey",
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
    	name: "permission_role_permission_id_index",
    	using: "btree",
    	unique: false 
    })
    	permissionId?: number;

    @Column({
    	field: "role_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "permission_role_role_id_index",
    	using: "btree",
    	unique: false 
    })
    	roleId?: number;

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