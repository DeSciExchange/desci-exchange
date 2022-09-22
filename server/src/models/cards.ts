import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface cardsAttributes {
    actionSheetButtons?: string;
    avatar?: string;
    avatarCircular?: string;
    backgroundColor?: string;
    buttons?: string;
    clientId?: string;
    content?: string;
    createdAt?: Date;
    deletedAt?: Date;
    headerTitle?: string;
    html?: string;
    htmlContent?: string;
    elementId?: string;
    image?: string;
    inputFields?: string;
    intentName?: string;
    ionIcon?: string;
    link?: string;
    parameters?: string;
    sharingBody?: string;
    sharingButtons?: string;
    sharingTitle?: string;
    subHeader?: string;
    subTitle?: string;
    title?: string;
    type?: string;
    updatedAt?: Date;
    userId?: string;
    url?: string;
    id: number;
    slug?: string;
}

@Table({
	tableName: "cards",
	timestamps: false 
})
export class cards extends Model<cardsAttributes, cardsAttributes> implements cardsAttributes {

    @Column({
    	field: "action_sheet_buttons",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	actionSheetButtons?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	avatar?: string;

    @Column({
    	field: "avatar_circular",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	avatarCircular?: string;

    @Column({
    	field: "background_color",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	backgroundColor?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	buttons?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "cards_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	content?: string;

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
    	field: "header_title",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	headerTitle?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	html?: string;

    @Column({
    	field: "html_content",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	htmlContent?: string;

    @Column({
    	field: "element_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	elementId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	image?: string;

    @Column({
    	field: "input_fields",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	inputFields?: string;

    @Column({
    	field: "intent_name",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	intentName?: string;

    @Column({
    	field: "ion_icon",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	ionIcon?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "Link field is deprecated due to ambiguity.  Please use url field instead." 
    })
    	link?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	parameters?: string;

    @Column({
    	field: "sharing_body",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	sharingBody?: string;

    @Column({
    	field: "sharing_buttons",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	sharingButtons?: string;

    @Column({
    	field: "sharing_title",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	sharingTitle?: string;

    @Column({
    	field: "sub_header",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	subHeader?: string;

    @Column({
    	field: "sub_title",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	subTitle?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	type?: string;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "cards_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "URL to go to when the card is clicked" 
    })
    	url?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "cards_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "cards_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

}