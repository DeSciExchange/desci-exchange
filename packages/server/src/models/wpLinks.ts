import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpLinksAttributes {
    linkId?: string;
    linkUrl?: string;
    linkName?: string;
    linkImage?: string;
    linkTarget?: string;
    linkDescription?: string;
    linkVisible?: string;
    linkOwner?: string;
    linkRating?: number;
    linkUpdated?: Date;
    linkRel?: string;
    linkNotes?: string;
    linkRss?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_links",
	timestamps: false 
})
export class wpLinks extends Model<wpLinksAttributes, wpLinksAttributes> implements wpLinksAttributes {

    @Column({
    	field: "link_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each row of the table.",
    	defaultValue: Sequelize.literal("nextval('wp_links_link_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_links_pkey",
    	using: "btree",
    	unique: true 
    })
    	linkId?: string;

    @Column({
    	field: "link_url",
    	allowNull: true,
    	type: DataType.STRING(760),
    	comment: "Unique universal resource locator for the link." 
    })
    @Index({
    	name: "wp_links_link_url_uindex",
    	using: "btree",
    	unique: true 
    })
    	linkUrl?: string;

    @Column({
    	field: "link_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Name of the link." 
    })
    	linkName?: string;

    @Column({
    	field: "link_image",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "URL of an image related to the link." 
    })
    	linkImage?: string;

    @Column({
    	field: "link_target",
    	allowNull: true,
    	type: DataType.STRING(25),
    	comment: "The target frame for the link. e.g. _blank, _top, _none." 
    })
    	linkTarget?: string;

    @Column({
    	field: "link_description",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Description of the link." 
    })
    	linkDescription?: string;

    @Column({
    	field: "link_visible",
    	allowNull: true,
    	type: DataType.STRING(20),
    	comment: "Control if the link is public or private.",
    	defaultValue: Sequelize.literal("'Y'::character varying") 
    })
    @Index({
    	name: "link_visible",
    	using: "btree",
    	unique: false 
    })
    	linkVisible?: string;

    @Column({
    	field: "link_owner",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "ID of user who created the link.",
    	defaultValue: Sequelize.literal("'1'::bigint") 
    })
    @Index({
    	name: "wp_links_wp_users_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	linkOwner?: string;

    @Column({
    	field: "link_rating",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Add a rating between 0-10 for the link.",
    	defaultValue: Sequelize.literal("0") 
    })
    	linkRating?: number;

    @Column({
    	field: "link_updated",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	linkUpdated?: Date;

    @Column({
    	field: "link_rel",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Relationship of link." 
    })
    	linkRel?: string;

    @Column({
    	field: "link_notes",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Notes about the link." 
    })
    	linkNotes?: string;

    @Column({
    	field: "link_rss",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: Sequelize.literal("''::character varying") 
    })
    	linkRss?: string;

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