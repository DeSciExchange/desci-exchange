import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface connectorImportsAttributes {
    id?: number;
    clientId?: string;
    connectionId?: number;
    connectorId?: number;
    createdAt?: Date;
    deletedAt?: Date;
    earliestMeasurementAt?: Date;
    importEndedAt?: Date;
    importStartedAt?: Date;
    internalErrorMessage?: string;
    latestMeasurementAt?: Date;
    numberOfMeasurements?: number;
    reasonForImport?: string;
    success?: boolean;
    updatedAt?: Date;
    userErrorMessage?: string;
    userId?: string;
    additionalMetaData?: object;
    numberOfConnectorRequests?: number;
    importedDataFromAt?: Date;
    importedDataEndAt?: Date;
    credentials?: string;
    connectorRequests?: Date;
}

@Table({
	tableName: "connector_imports",
	timestamps: false 
})
export class connectorImports extends Model<connectorImportsAttributes, connectorImportsAttributes> implements connectorImportsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('connector_imports_id_seq'::regclass)") 
    })
    @Index({
    	name: "connector_imports_pkey",
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
    	name: "connector_imports_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "connection_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "connector_imports_connection_id_created_at_uindex",
    	using: "btree",
    	unique: true 
    })
    	connectionId?: number;

    @Column({
    	field: "connector_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "connector_imports_connector_id_user_id_created_at_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "IDX_connector_imports_user_connector",
    	using: "btree",
    	unique: false 
    })
    	connectorId?: number;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    @Index({
    	name: "connector_imports_connection_id_created_at_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "connector_imports_connector_id_user_id_created_at_uindex",
    	using: "btree",
    	unique: true 
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
    	type: DataType.DATE 
    })
    	earliestMeasurementAt?: Date;

    @Column({
    	field: "import_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	importEndedAt?: Date;

    @Column({
    	field: "import_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	importStartedAt?: Date;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	internalErrorMessage?: string;

    @Column({
    	field: "latest_measurement_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestMeasurementAt?: Date;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "reason_for_import",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	reasonForImport?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	success?: boolean;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "user_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	userErrorMessage?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "connector_imports_connector_id_user_id_created_at_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "IDX_connector_imports_user_connector",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "additional_meta_data",
    	allowNull: true,
    	type: DataType.JSON 
    })
    	additionalMetaData?: object;

    @Column({
    	field: "number_of_connector_requests",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Requests for this Connector Import.\n                [Formula: \n                    update connector_imports\n                        left join (\n                            select count(id) as total, connector_import_id\n                            from connector_requests\n                            group by connector_import_id\n                        )\n                        as grouped on connector_imports.id = grouped.connector_import_id\n                    set connector_imports.number_of_connector_requests = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorRequests?: number;

    @Column({
    	field: "imported_data_from_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Earliest data that we've requested from this data source " 
    })
    	importedDataFromAt?: Date;

    @Column({
    	field: "imported_data_end_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Most recent data that we've requested from this data source " 
    })
    	importedDataEndAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Encrypted user credentials for accessing third party data" 
    })
    	credentials?: string;

    @Column({
    	field: "connector_requests",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Most recent data that we've requested from this data source " 
    })
    	connectorRequests?: Date;

}