import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface measurementsAttributes {
    id?: string;
    userId?: string;
    clientId?: string;
    connectorId?: number;
    variableId?: number;
    startTime?: number;
    value?: number;
    unitId?: number;
    originalValue?: number;
    originalUnitId?: number;
    duration?: number;
    note?: string;
    latitude?: number;
    longitude?: number;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date;
    error?: string;
    variableCategoryId?: number;
    deletedAt?: Date;
    sourceName?: string;
    userVariableId?: number;
    startAt?: Date;
    connectionId?: number;
    connectorImportId?: number;
    deletionReason?: string;
    originalStartAt?: Date;
}

@Table({
	tableName: "measurements",
	timestamps: false 
})
export class measurements extends Model<measurementsAttributes, measurementsAttributes> implements measurementsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('measurements_id_seq'::regclass)") 
    })
    @Index({
    	name: "measurements_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "measurements_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_user_id_variable_category_id_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_pk",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "measurements_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "connector_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The id for the connector data source from which the measurement was obtained" 
    })
    @Index({
    	name: "measurements_connectors_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectorId?: number;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of the variable for which we are creating the measurement records" 
    })
    @Index({
    	name: "measurements_variable_id_value_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_variable_id_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_pk",
    	using: "btree",
    	unique: true 
    })
    	variableId?: number;

    @Column({
    	field: "start_time",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Start time for the measurement event in ISO 8601" 
    })
    @Index({
    	name: "measurements_variable_id_value_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_variable_id_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_user_id_variable_category_id_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_pk",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "measurements_start_time_index",
    	using: "btree",
    	unique: false 
    })
    	startTime?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The value of the measurement after conversion to the default unit for that variable" 
    })
    @Index({
    	name: "measurements_variable_id_value_start_time_index",
    	using: "btree",
    	unique: false 
    })
    	value?: number;

    @Column({
    	field: "unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The default unit for the variable" 
    })
    @Index({
    	name: "fk_measurementUnits",
    	using: "btree",
    	unique: false 
    })
    	unitId?: number;

    @Column({
    	field: "original_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value of measurement as originally posted (before conversion to default unit)" 
    })
    	originalValue?: number;

    @Column({
    	field: "original_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Unit id of measurement as originally submitted" 
    })
    @Index({
    	name: "measurements_original_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	originalUnitId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Duration of the event being measurement in seconds" 
    })
    	duration?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "An optional note the user may include with their measurement" 
    })
    	note?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Latitude at which the measurement was taken" 
    })
    	latitude?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Longitude at which the measurement was taken" 
    })
    	longitude?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "location" 
    })
    	location?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Time at which this measurement was originally stored" 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Time at which this measurement was last updated" 
    })
    	updatedAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "An error message if there is a problem with the measurement" 
    })
    	error?: string;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Variable category ID" 
    })
    @Index({
    	name: "measurements_user_id_variable_category_id_start_time_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "measurements_variable_category_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "source_name",
    	allowNull: true,
    	type: DataType.STRING(80),
    	comment: "Name of the application or device" 
    })
    	sourceName?: string;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "measurements_user_variables_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userVariableId?: number;

    @Column({
    	field: "start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	startAt?: Date;

    @Column({
    	field: "connection_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "measurements_connections_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectionId?: number;

    @Column({
    	field: "connector_import_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "measurements_connector_imports_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectorImportId?: number;

    @Column({
    	field: "deletion_reason",
    	allowNull: true,
    	type: DataType.STRING(280),
    	comment: "The reason the variable was deleted." 
    })
    	deletionReason?: string;

    @Column({
    	field: "original_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	originalStartAt?: Date;

}