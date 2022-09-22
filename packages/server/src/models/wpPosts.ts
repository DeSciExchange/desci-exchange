import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpPostsAttributes {
    id?: string;
    postAuthor?: string;
    postDate?: Date;
    postDateGmt?: Date;
    postContent?: string;
    postTitle?: string;
    postExcerpt?: string;
    postStatus?: string;
    commentStatus?: string;
    pingStatus?: string;
    postPassword?: string;
    postName?: string;
    toPing?: string;
    pinged?: string;
    postModified?: Date;
    postModifiedGmt?: Date;
    postContentFiltered?: string;
    postParent?: string;
    guid?: string;
    menuOrder?: number;
    postType?: string;
    postMimeType?: string;
    commentCount?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
    recordSizeInKb?: number;
}

@Table({
	tableName: "wp_posts",
	timestamps: false 
})
export class wpPosts extends Model<wpPostsAttributes, wpPostsAttributes> implements wpPostsAttributes {

    @Column({
    	field: "ID",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each post.",
    	defaultValue: Sequelize.literal("nextval('\"wp_posts_ID_seq\"'::regclass)") 
    })
    @Index({
    	name: "wp_posts_pkey",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "type_status_date",
    	using: "btree",
    	unique: false 
    })
    	id?: string;

    @Column({
    	field: "post_author",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The user ID who created it.",
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    @Index({
    	name: "idx_wp_posts_post_author_post_modified_deleted_at",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "post_author",
    	using: "btree",
    	unique: false 
    })
    	postAuthor?: string;

    @Column({
    	field: "post_date",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "type_status_date",
    	using: "btree",
    	unique: false 
    })
    	postDate?: Date;

    @Column({
    	field: "post_date_gmt",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	postDateGmt?: Date;

    @Column({
    	field: "post_content",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Holds all the content for the post, including HTML, shortcodes and other content." 
    })
    	postContent?: string;

    @Column({
    	field: "post_title",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Title of the post." 
    })
    	postTitle?: string;

    @Column({
    	field: "post_excerpt",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Custom intro or short version of the content." 
    })
    	postExcerpt?: string;

    @Column({
    	field: "post_status",
    	allowNull: true,
    	type: DataType.STRING(20),
    	comment: "Status of the post, e.g. ‘draft’, ‘pending’, ‘private’, ‘publish’. Also a great WordPress <a href=\"https://poststatus.com/\" target=\"_blank\">news site</a>.",
    	defaultValue: Sequelize.literal("'publish'::character varying") 
    })
    @Index({
    	name: "type_status_date",
    	using: "btree",
    	unique: false 
    })
    	postStatus?: string;

    @Column({
    	field: "comment_status",
    	allowNull: true,
    	type: DataType.STRING(20),
    	comment: "If comments are allowed.",
    	defaultValue: Sequelize.literal("'open'::character varying") 
    })
    	commentStatus?: string;

    @Column({
    	field: "ping_status",
    	allowNull: true,
    	type: DataType.STRING(20),
    	comment: "If the post allows <a href=\"http://codex.wordpress.org/Introduction_to_Blogging#Pingbacks\" target=\"_blank\">ping and trackbacks</a>.",
    	defaultValue: Sequelize.literal("'open'::character varying") 
    })
    	pingStatus?: string;

    @Column({
    	field: "post_password",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Optional password used to view the post." 
    })
    	postPassword?: string;

    @Column({
    	field: "post_name",
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "URL friendly slug of the post title." 
    })
    @Index({
    	name: "post_name",
    	using: "btree",
    	unique: false 
    })
    	postName?: string;

    @Column({
    	field: "to_ping",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "A list of URLs WordPress should send pingbacks to when updated." 
    })
    	toPing?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "A list of URLs WordPress has sent pingbacks to when updated." 
    })
    	pinged?: string;

    @Column({
    	field: "post_modified",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "idx_wp_posts_post_author_post_modified_deleted_at",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "wp_posts_post_modified_index",
    	using: "btree",
    	unique: false 
    })
    	postModified?: Date;

    @Column({
    	field: "post_modified_gmt",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	postModifiedGmt?: Date;

    @Column({
    	field: "post_content_filtered",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Used by plugins to cache a version of post_content typically passed through the ‘the_content’ filter. Not used by WordPress core itself." 
    })
    	postContentFiltered?: string;

    @Column({
    	field: "post_parent",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "Used to create a relationship between this post and another when this post is a revision, attachment or another type.",
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    @Index({
    	name: "post_parent",
    	using: "btree",
    	unique: false 
    })
    	postParent?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Global Unique Identifier, the permanent URL to the post, not the permalink version." 
    })
    	guid?: string;

    @Column({
    	field: "menu_order",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Holds the display number for pages and other non-post types.",
    	defaultValue: Sequelize.literal("0") 
    })
    	menuOrder?: number;

    @Column({
    	field: "post_type",
    	allowNull: true,
    	type: DataType.STRING(20),
    	comment: "The content type identifier.",
    	defaultValue: Sequelize.literal("'post'::character varying") 
    })
    @Index({
    	name: "type_status_date",
    	using: "btree",
    	unique: false 
    })
    	postType?: string;

    @Column({
    	field: "post_mime_type",
    	allowNull: true,
    	type: DataType.STRING(100),
    	comment: "Only used for attachments, the MIME type of the uploaded file." 
    })
    	postMimeType?: string;

    @Column({
    	field: "comment_count",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "Total number of comments, pingbacks and trackbacks.",
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    	commentCount?: string;

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
    @Index({
    	name: "idx_wp_posts_post_author_post_modified_deleted_at",
    	using: "btree",
    	unique: false 
    })
    	deletedAt?: Date;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

    @Column({
    	field: "record_size_in_kb",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	recordSizeInKb?: number;

}