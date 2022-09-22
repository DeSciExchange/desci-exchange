import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface commonTagsAttributes {
    id?: number;
    taggedVariableId?: number;
    tagVariableId?: number;
    numberOfDataPoints?: number;
    standardError?: number;
    tagVariableUnitId?: number;
    taggedVariableUnitId?: number;
    conversionFactor?: number;
    clientId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "common_tags",
	timestamps: false 
})
export class commonTags extends Model<commonTagsAttributes, commonTagsAttributes> implements commonTagsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('common_tags_id_seq'::regclass)") 
    })
    @Index({
    	name: "common_tags_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "tagged_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "This is the id of the variable being tagged with an ingredient or something." 
    })
    @Index({
    	name: "UK_tag_tagged",
    	using: "btree",
    	unique: true 
    })
    	taggedVariableId?: number;

    @Column({
    	field: "tag_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "This is the id of the ingredient variable whose value is determined based on the value of the tagged variable." 
    })
    @Index({
    	name: "UK_tag_tagged",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "common_tags_tag_variable_id_variables_id_fk",
    	using: "btree",
    	unique: false 
    })
    	tagVariableId?: number;

    @Column({
    	field: "number_of_data_points",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The number of data points used to estimate the mean. " 
    })
    	numberOfDataPoints?: number;

    @Column({
    	field: "standard_error",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Measure of variability of the \nmean value as a function of the number of data points." 
    })
    	standardError?: number;

    @Column({
    	field: "tag_variable_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The id for the unit of the tag (ingredient) variable." 
    })
    @Index({
    	name: "common_tags_tag_variable_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	tagVariableUnitId?: number;

    @Column({
    	field: "tagged_variable_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The unit for the source variable to be tagged." 
    })
    @Index({
    	name: "common_tags_tagged_variable_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	taggedVariableUnitId?: number;

    @Column({
    	field: "conversion_factor",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Number by which we multiply the tagged variable's value to obtain the tag variable's value" 
    })
    	conversionFactor?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "common_tags_client_id_fk",
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

}