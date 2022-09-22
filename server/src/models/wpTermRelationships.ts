import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpTermRelationshipsAttributes {
    objectId: string;
    termTaxonomyId: string;
    termOrder?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_term_relationships",
	timestamps: false 
})
export class wpTermRelationships extends Model<wpTermRelationshipsAttributes, wpTermRelationshipsAttributes> implements wpTermRelationshipsAttributes {

    @Column({
    	field: "object_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "The ID of the post object." 
    })
    @Index({
    	name: "wp_term_relationships_pkey",
    	using: "btree",
    	unique: true 
    })
    	objectId!: string;

    @Column({
    	field: "term_taxonomy_id",
    	primaryKey: true,
    	type: DataType.BIGINT,
    	comment: "The ID of the term / taxonomy pair." 
    })
    @Index({
    	name: "wp_term_relationships_pkey",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "term_taxonomy_id",
    	using: "btree",
    	unique: false 
    })
    	termTaxonomyId!: string;

    @Column({
    	field: "term_order",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Allow ordering of terms for an object, not fully used." 
    })
    	termOrder?: number;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

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
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

}