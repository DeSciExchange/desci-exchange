import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface mediaAttributes {
    id?: string;
    modelType?: string;
    modelId?: string;
    collectionName?: string;
    name?: string;
    fileName?: string;
    mimeType?: string;
    disk?: string;
    size?: string;
    manipulations?: object;
    customProperties?: object;
    responsiveImages?: object;
    orderColumn?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "media",
	timestamps: false 
})
export class media extends Model<mediaAttributes, mediaAttributes> implements mediaAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('media_id_seq'::regclass)") 
    })
    @Index({
    	name: "media_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "model_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "media_model_type_model_id_index",
    	using: "btree",
    	unique: false 
    })
    	modelType?: string;

    @Column({
    	field: "model_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "media_model_type_model_id_index",
    	using: "btree",
    	unique: false 
    })
    	modelId?: string;

    @Column({
    	field: "collection_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	collectionName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	field: "file_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	fileName?: string;

    @Column({
    	field: "mime_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	mimeType?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	disk?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	size?: string;

    @Column({
    	allowNull: true,
    	type: DataType.JSON 
    })
    	manipulations?: object;

    @Column({
    	field: "custom_properties",
    	allowNull: true,
    	type: DataType.JSON 
    })
    	customProperties?: object;

    @Column({
    	field: "responsive_images",
    	allowNull: true,
    	type: DataType.JSON 
    })
    	responsiveImages?: object;

    @Column({
    	field: "order_column",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	orderColumn?: number;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

}