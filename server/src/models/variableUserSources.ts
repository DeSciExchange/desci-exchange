import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface variableUserSourcesAttributes {
    userId?: string;
    variableId?: number;
    timestamp?: number;
    earliestMeasurementTime?: number;
    latestMeasurementTime?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    dataSourceName?: string;
    numberOfRawMeasurements?: number;
    clientId?: string;
    id?: number;
    userVariableId?: number;
    earliestMeasurementStartAt?: Date;
    latestMeasurementStartAt?: Date;
}

@Table({
	tableName: "variable_user_sources",
	timestamps: false 
})
export class variableUserSources extends Model<variableUserSourcesAttributes, variableUserSourcesAttributes> implements variableUserSourcesAttributes {

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "variable_user_sources_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "variable_user_sources_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of variable" 
    })
    @Index({
    	name: "variable_user_sources_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "variable_user_sources_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	timestamp?: number;

    @Column({
    	field: "earliest_measurement_time",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	earliestMeasurementTime?: number;

    @Column({
    	field: "latest_measurement_time",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	latestMeasurementTime?: number;

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

    @Column({
    	field: "data_source_name",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "variable_user_sources_user",
    	using: "btree",
    	unique: true 
    })
    	dataSourceName?: string;

    @Column({
    	field: "number_of_raw_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfRawMeasurements?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('variable_user_sources_id_seq'::regclass)") 
    })
    @Index({
    	name: "variable_user_sources_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "variable_user_sources_user_variables_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userVariableId?: number;

    @Column({
    	field: "earliest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestMeasurementStartAt?: Date;

    @Column({
    	field: "latest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestMeasurementStartAt?: Date;

}