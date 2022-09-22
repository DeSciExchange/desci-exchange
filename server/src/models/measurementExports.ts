import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface measurementExportsAttributes {
    id?: number;
    userId?: string;
    clientId?: string;
    status?: string;
    type?: string;
    outputType?: string;
    errorMessage?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "measurement_exports",
	timestamps: false 
})
export class measurementExports extends Model<measurementExportsAttributes, measurementExportsAttributes> implements measurementExportsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('measurement_exports_id_seq'::regclass)") 
    })
    @Index({
    	name: "measurement_exports_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "measurement_exports_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "measurement_exports_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32),
    	comment: "Status of Measurement Export" 
    })
    	status?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Whether user's measurement export request or app users",
    	defaultValue: Sequelize.literal("'user'::character varying") 
    })
    	type?: string;

    @Column({
    	field: "output_type",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Output type of export file",
    	defaultValue: Sequelize.literal("'csv'::character varying") 
    })
    	outputType?: string;

    @Column({
    	field: "error_message",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Error message" 
    })
    	errorMessage?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}