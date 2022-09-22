import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userTagsAttributes {
    id?: number;
    taggedVariableId?: number;
    tagVariableId?: number;
    conversionFactor?: number;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    clientId?: string;
    deletedAt?: Date;
    taggedUserVariableId?: number;
    tagUserVariableId?: number;
}

@Table({
	tableName: "user_tags",
	timestamps: false 
})
export class userTags extends Model<userTagsAttributes, userTagsAttributes> implements userTagsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_tags_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_tags_pkey",
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
    	name: "UK_user_tag_tagged",
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
    	name: "UK_user_tag_tagged",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "fk_conversionUnit",
    	using: "btree",
    	unique: false 
    })
    	tagVariableId?: number;

    @Column({
    	field: "conversion_factor",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Number by which we multiply the tagged variable's value to obtain the tag variable's value" 
    })
    	conversionFactor?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "UK_user_tag_tagged",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_tags_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

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
    	name: "user_tags_client_id_fk",
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
    	field: "tagged_user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_tags_tagged_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	taggedUserVariableId?: number;

    @Column({
    	field: "tag_user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	tagUserVariableId?: number;

}