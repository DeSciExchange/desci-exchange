import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpTermsAttributes {
    termId?: string;
    name?: string;
    slug?: string;
    termGroup?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_terms",
	timestamps: false 
})
export class wpTerms extends Model<wpTermsAttributes, wpTermsAttributes> implements wpTermsAttributes {

    @Column({
    	field: "term_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each term.",
    	defaultValue: Sequelize.literal("nextval('wp_terms_term_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_terms_pkey",
    	using: "btree",
    	unique: true 
    })
    	termId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The name of the term." 
    })
    @Index({
    	name: "name",
    	using: "btree",
    	unique: false 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The URL friendly slug of the name." 
    })
    @Index({
    	name: "slug",
    	using: "btree",
    	unique: false 
    })
    	slug?: string;

    @Column({
    	field: "term_group",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "Ability for themes or plugins to group terms together to use aliases. Not populated by WordPress core itself." 
    })
    	termGroup?: string;

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