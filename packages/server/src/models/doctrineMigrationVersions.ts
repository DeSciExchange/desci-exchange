import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface doctrineMigrationVersionsAttributes {
    version: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "doctrine_migration_versions",
	timestamps: false 
})
export class doctrineMigrationVersions extends Model<doctrineMigrationVersionsAttributes, doctrineMigrationVersionsAttributes> implements doctrineMigrationVersionsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "doctrine_migration_versions_pkey",
    	using: "btree",
    	unique: true 
    })
    	version!: string;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

}