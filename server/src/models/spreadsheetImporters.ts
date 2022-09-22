import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface spreadsheetImportersAttributes {
    id?: number;
    name?: string;
    displayName?: string;
    image?: string;
    getItUrl?: string;
    shortDescription?: string;
    longDescription?: string;
    enabled?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    clientId?: string;
    deletedAt?: Date;
    wpPostId?: string;
    numberOfMeasurementImports?: number;
    numberOfMeasurements?: number;
    sortOrder?: number;
}

@Table({
	tableName: "spreadsheet_importers",
	timestamps: false 
})
export class spreadsheetImporters extends Model<spreadsheetImportersAttributes, spreadsheetImportersAttributes> implements spreadsheetImportersAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	comment: "Spreadsheet Importer ID number",
    	defaultValue: Sequelize.literal("nextval('spreadsheet_importers_id_seq'::regclass)") 
    })
    @Index({
    	name: "spreadsheet_importers_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(30),
    	comment: "Lowercase system name for the data source" 
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
    	comment: "URL to the image of the Spreadsheet Importer logo" 
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
    	comment: "Set to 1 if the Spreadsheet Importer should be returned when listing Spreadsheet Importers",
    	defaultValue: Sequelize.literal("true") 
    })
    	enabled?: boolean;

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
    	name: "spreadsheet_importers_client_id_fk",
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
    	name: "spreadsheet_importers_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_measurement_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Spreadsheet Import Requests for this Spreadsheet Importer.\n                            [Formula:\n                                update spreadsheet_importers\n                                    left join (\n                                        select count(id) as total, spreadsheet_importer_id\n                                        from spreadsheet_importer_requests\n                                        group by spreadsheet_importer_id\n                                    )\n                                    as grouped on spreadsheet_importers.id = grouped.spreadsheet_importer_id\n                                set spreadsheet_importers.number_of_spreadsheet_importer_requests = count(grouped.total)\n                            ]\n                            " 
    })
    	numberOfMeasurementImports?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Spreadsheet Importer.\n                                [Formula: update spreadsheet_importers\n                                    left join (\n                                        select count(id) as total, spreadsheet_importer_id\n                                        from measurements\n                                        group by spreadsheet_importer_id\n                                    )\n                                    as grouped on spreadsheet_importers.id = grouped.spreadsheet_importer_id\n                                set spreadsheet_importers.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "sort_order",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sortOrder?: number;

}