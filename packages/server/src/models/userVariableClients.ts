import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userVariableClientsAttributes {
    id?: number;
    clientId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    earliestMeasurementAt?: Date;
    latestMeasurementAt?: Date;
    numberOfMeasurements?: number;
    updatedAt?: Date;
    userId?: string;
    userVariableId?: number;
    variableId?: number;
}

@Table({
	tableName: "user_variable_clients",
	timestamps: false 
})
export class userVariableClients extends Model<userVariableClientsAttributes, userVariableClientsAttributes> implements userVariableClientsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_variable_clients_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_variable_clients_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "user_variable_clients_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_variable_clients_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

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
    	field: "earliest_measurement_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Earliest measurement time for this variable and client" 
    })
    	earliestMeasurementAt?: Date;

    @Column({
    	field: "latest_measurement_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Earliest measurement time for this variable and client" 
    })
    	latestMeasurementAt?: Date;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "user_variable_clients_user",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_variable_clients_user_variables_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userVariableId?: number;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Id of variable" 
    })
    @Index({
    	name: "user_variable_clients_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_variable_clients_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableId?: number;

}