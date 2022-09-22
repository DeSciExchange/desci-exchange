import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface connectorsAttributes {
    id?: number;
    name?: string;
    displayName?: string;
    image?: string;
    getItUrl?: string;
    shortDescription?: string;
    longDescription?: string;
    enabled?: boolean;
    oauth?: boolean;
    qmClient?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    clientId?: string;
    deletedAt?: Date;
    wpPostId?: string;
    numberOfConnections?: number;
    numberOfConnectorImports?: number;
    numberOfConnectorRequests?: number;
    numberOfMeasurements?: number;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
    availableOutsideUs?: boolean;
}

@Table({
	tableName: "connectors",
	timestamps: false 
})
export class connectors extends Model<connectorsAttributes, connectorsAttributes> implements connectorsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	comment: "Connector ID number",
    	defaultValue: Sequelize.literal("nextval('connectors_id_seq'::regclass)") 
    })
    @Index({
    	name: "connectors_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(30),
    	comment: "Lowercase system name for the data source" 
    })
    @Index({
    	name: "connectors_name_unique",
    	using: "btree",
    	unique: true 
    })
    	name?: string;

    @Column({
    	field: "display_name",
    	allowNull: true,
    	type: DataType.STRING(30),
    	comment: "Pretty display name for the data source" 
    })
    	displayName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "URL to the image of the connector logo" 
    })
    	image?: string;

    @Column({
    	field: "get_it_url",
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "URL to a site where one can get this device or application" 
    })
    	getItUrl?: string;

    @Column({
    	field: "short_description",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Short description of the service (such as the categories it tracks)" 
    })
    	shortDescription?: string;

    @Column({
    	field: "long_description",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Longer paragraph description of the data provider" 
    })
    	longDescription?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Set to 1 if the connector should be returned when listing connectors",
    	defaultValue: Sequelize.literal("true") 
    })
    	enabled?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Set to 1 if the connector uses OAuth authentication as opposed to username/password",
    	defaultValue: Sequelize.literal("false") 
    })
    	oauth?: boolean;

    @Column({
    	field: "qm_client",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Whether its a connector or one of our clients",
    	defaultValue: Sequelize.literal("false") 
    })
    	qmClient?: boolean;

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
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "connectors_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "connectors_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_connections",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connections for this Connector.\n                [Formula: \n                    update connectors\n                        left join (\n                            select count(id) as total, connector_id\n                            from connections\n                            group by connector_id\n                        )\n                        as grouped on connectors.id = grouped.connector_id\n                    set connectors.number_of_connections = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnections?: number;

    @Column({
    	field: "number_of_connector_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Imports for this Connector.\n                [Formula: \n                    update connectors\n                        left join (\n                            select count(id) as total, connector_id\n                            from connector_imports\n                            group by connector_id\n                        )\n                        as grouped on connectors.id = grouped.connector_id\n                    set connectors.number_of_connector_imports = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorImports?: number;

    @Column({
    	field: "number_of_connector_requests",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Requests for this Connector.\n                [Formula: \n                    update connectors\n                        left join (\n                            select count(id) as total, connector_id\n                            from connector_requests\n                            group by connector_id\n                        )\n                        as grouped on connectors.id = grouped.connector_id\n                    set connectors.number_of_connector_requests = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorRequests?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Connector.\n                    [Formula: update connectors\n                        left join (\n                            select count(id) as total, connector_id\n                            from measurements\n                            group by connector_id\n                        )\n                        as grouped on connectors.id = grouped.connector_id\n                    set connectors.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	field: "sort_order",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sortOrder?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "connectors_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	field: "available_outside_us",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	availableOutsideUs?: boolean;

}