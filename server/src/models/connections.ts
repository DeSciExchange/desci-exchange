import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface connectionsAttributes {
    id?: number;
    clientId?: string;
    userId?: string;
    connectorId?: number;
    connectStatus?: string;
    connectError?: string;
    updateRequestedAt?: Date;
    updateStatus?: string;
    updateError?: string;
    lastSuccessfulUpdatedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    totalMeasurementsInLastUpdate?: number;
    userMessage?: string;
    latestMeasurementAt?: Date;
    importStartedAt?: Date;
    importEndedAt?: Date;
    reasonForImport?: string;
    userErrorMessage?: string;
    internalErrorMessage?: string;
    wpPostId?: string;
    numberOfConnectorImports?: number;
    numberOfConnectorRequests?: number;
    credentials?: string;
    importedDataFromAt?: Date;
    importedDataEndAt?: Date;
    numberOfMeasurements?: number;
    isPublic?: boolean;
    slug?: string;
    meta?: string;
}

@Table({
	tableName: "connections",
	timestamps: false 
})
export class connections extends Model<connectionsAttributes, connectionsAttributes> implements connectionsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('connections_id_seq'::regclass)") 
    })
    @Index({
    	name: "connections_pkey",
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
    	name: "connections_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "UX_userId_connectorId",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "connector_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The id for the connector data source for which the connection is connected" 
    })
    @Index({
    	name: "UX_userId_connectorId",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "connections_connectors_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectorId?: number;

    @Column({
    	field: "connect_status",
    	allowNull: true,
    	type: DataType.STRING(32),
    	comment: "Indicates whether a connector is currently connected to a service for a user." 
    })
    @Index({
    	name: "IDX_status",
    	using: "btree",
    	unique: false 
    })
    	connectStatus?: string;

    @Column({
    	field: "connect_error",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Error message if there is a problem with authorizing this connection." 
    })
    	connectError?: string;

    @Column({
    	field: "update_requested_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "status_update_requested",
    	using: "btree",
    	unique: false 
    })
    	updateRequestedAt?: Date;

    @Column({
    	field: "update_status",
    	allowNull: true,
    	type: DataType.STRING(32),
    	comment: "Indicates whether a connector is currently updated." 
    })
    @Index({
    	name: "status_update_requested",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "status",
    	using: "btree",
    	unique: false 
    })
    	updateStatus?: string;

    @Column({
    	field: "update_error",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Indicates if there was an error during the update." 
    })
    	updateError?: string;

    @Column({
    	field: "last_successful_updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastSuccessfulUpdatedAt?: Date;

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
    	field: "total_measurements_in_last_update",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	totalMeasurementsInLastUpdate?: number;

    @Column({
    	field: "user_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	userMessage?: string;

    @Column({
    	field: "latest_measurement_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestMeasurementAt?: Date;

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
    	type: DataType.STRING 
    })
    	userErrorMessage?: string;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	internalErrorMessage?: string;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "connections_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_connector_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Imports for this Connection.\n                [Formula: \n                    update connections\n                        left join (\n                            select count(id) as total, connection_id\n                            from connector_imports\n                            group by connection_id\n                        )\n                        as grouped on connections.id = grouped.connection_id\n                    set connections.number_of_connector_imports = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorImports?: number;

    @Column({
    	field: "number_of_connector_requests",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Requests for this Connection.\n                [Formula: \n                    update connections\n                        left join (\n                            select count(id) as total, connection_id\n                            from connector_requests\n                            group by connection_id\n                        )\n                        as grouped on connections.id = grouped.connection_id\n                    set connections.number_of_connector_requests = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorRequests?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Encrypted user credentials for accessing third party data" 
    })
    	credentials?: string;

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
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Connection.\n                    [Formula: update connections\n                        left join (\n                            select count(id) as total, connection_id\n                            from measurements\n                            group by connection_id\n                        )\n                        as grouped on connections.id = grouped.connection_id\n                    set connections.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "connections_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Additional meta data instructions for import, such as a list of repositories the Github connector should import from. " 
    })
    	meta?: string;

}