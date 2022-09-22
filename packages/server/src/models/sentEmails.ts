import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface sentEmailsAttributes {
    id?: number;
    userId?: string;
    type?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
    slug?: string;
    response?: string;
    content?: string;
    wpPostId?: string;
    emailAddress?: string;
    subject?: string;
}

@Table({
	tableName: "sent_emails",
	timestamps: false 
})
export class sentEmails extends Model<sentEmailsAttributes, sentEmailsAttributes> implements sentEmailsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('sent_emails_id_seq'::regclass)") 
    })
    @Index({
    	name: "sent_emails_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "sent_emails_user_id_type_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "sent_emails_user_id_type_index",
    	using: "btree",
    	unique: false 
    })
    	type?: string;

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

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "sent_emails_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	slug?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(140) 
    })
    	response?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	content?: string;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "sent_emails_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "email_address",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	emailAddress?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(78),
    	comment: "A Subject Line is the introduction that identifies the emails intent. \n                    This subject line, displayed to the email user or recipient when they look at their list of messages in their inbox, \n                    should tell the recipient what the message is about, what the sender wants to convey." 
    })
    	subject?: string;

}