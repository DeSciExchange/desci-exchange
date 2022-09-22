import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface measurementImportsAttributes {
    id?: number;
    userId?: string;
    file?: string;
    createdAt?: Date;
    updatedAt?: Date;
    status?: string;
    errorMessage?: string;
    sourceName?: string;
    deletedAt?: Date;
    clientId?: string;
    importStartedAt?: Date;
    importEndedAt?: Date;
    reasonForImport?: string;
    userErrorMessage?: string;
    internalErrorMessage?: string;
}

@Table({
	tableName: "measurement_imports",
	timestamps: false 
})
export class measurementImports extends Model<measurementImportsAttributes, measurementImportsAttributes> implements measurementImportsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('measurement_imports_id_seq'::regclass)") 
    })
    @Index({
    	name: "measurement_imports_pkey",
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
    	name: "measurement_imports_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	file?: string;

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
    	allowNull: true,
    	type: DataType.STRING(25),
    	defaultValue: Sequelize.literal("'WAITING'::character varying") 
    })
    	status?: string;

    @Column({
    	field: "error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	errorMessage?: string;

    @Column({
    	field: "source_name",
    	allowNull: true,
    	type: DataType.STRING(80),
    	comment: "Name of the application or device" 
    })
    	sourceName?: string;

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
    @Index({
    	name: "measurement_imports_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "import_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	importStartedAt?: Date;

    @Column({
    	field: "import_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	importEndedAt?: Date;

    @Column({
    	field: "reason_for_import",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	reasonForImport?: string;

    @Column({
    	field: "user_error_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	userErrorMessage?: string;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	internalErrorMessage?: string;

}