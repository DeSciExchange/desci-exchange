import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface connectorRequestsAttributes {
    id?: number;
    connectorId?: number;
    userId?: string;
    connectionId?: number;
    connectorImportId?: number;
    method?: string;
    code?: number;
    uri?: string;
    responseBody?: string;
    requestBody?: string;
    requestHeaders?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    contentType?: string;
    importedDataFromAt?: Date;
}

@Table({
	tableName: "connector_requests",
	timestamps: false 
})
export class connectorRequests extends Model<connectorRequestsAttributes, connectorRequestsAttributes> implements connectorRequestsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('connector_requests_id_seq'::regclass)") 
    })
    @Index({
    	name: "connector_requests_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "connector_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "connector_requests_connectors_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectorId?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "connector_requests_wp_users_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "connection_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "connector_requests_connections_id_fk",
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
    	name: "connector_requests_connector_imports_id_fk",
    	using: "btree",
    	unique: false 
    })
    	connectorImportId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	method?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	code?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	uri?: string;

    @Column({
    	field: "response_body",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	responseBody?: string;

    @Column({
    	field: "request_body",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	requestBody?: string;

    @Column({
    	field: "request_headers",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	requestHeaders?: string;

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
    	field: "content_type",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	contentType?: string;

    @Column({
    	field: "imported_data_from_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Earliest data that we've requested from this data source " 
    })
    	importedDataFromAt?: Date;

}