import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpTermTaxonomyAttributes {
    termTaxonomyId?: string;
    termId?: string;
    taxonomy?: string;
    description?: string;
    parent?: string;
    count?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_term_taxonomy",
	timestamps: false 
})
export class wpTermTaxonomy extends Model<wpTermTaxonomyAttributes, wpTermTaxonomyAttributes> implements wpTermTaxonomyAttributes {

    @Column({
    	field: "term_taxonomy_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each row of the table.",
    	defaultValue: Sequelize.literal("nextval('wp_term_taxonomy_term_taxonomy_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_term_taxonomy_pkey",
    	using: "btree",
    	unique: true 
    })
    	termTaxonomyId?: string;

    @Column({
    	field: "term_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The ID of the related term." 
    })
    @Index({
    	name: "term_id_taxonomy",
    	using: "btree",
    	unique: true 
    })
    	termId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32),
    	comment: "The slug of the taxonomy. This can be the <a href=\"http://codex.wordpress.org/Taxonomies#Default_Taxonomies\" target=\"_blank\">built in taxonomies</a> or any taxonomy registered using <a href=\"http://codex.wordpress.org/Function_Reference/register_taxonomy\" target=\"_blank\">register_taxonomy()</a>." 
    })
    @Index({
    	name: "term_id_taxonomy",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "taxonomy",
    	using: "btree",
    	unique: false 
    })
    	taxonomy?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Description of the term in this taxonomy." 
    })
    	description?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "ID of a parent term. Used for hierarchical taxonomies like Categories." 
    })
    	parent?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "Number of post objects assigned the term for this taxonomy." 
    })
    	count?: string;

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