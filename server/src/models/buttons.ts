import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface buttonsAttributes {
    accessibilityText?: string;
    action?: string;
    additionalInformation?: string;
    clientId?: string;
    color?: string;
    confirmationText?: string;
    createdAt?: Date;
    deletedAt?: Date;
    functionName?: string;
    functionParameters?: string;
    html?: string;
    elementId?: string;
    image?: string;
    inputFields?: string;
    ionIcon?: string;
    link?: string;
    stateName?: string;
    stateParams?: string;
    successAlertBody?: string;
    successAlertTitle?: string;
    successToastText?: string;
    text?: string;
    title?: string;
    tooltip?: string;
    type?: string;
    updatedAt?: Date;
    userId?: string;
    id?: number;
    slug?: string;
}

@Table({
	tableName: "buttons",
	timestamps: false 
})
export class buttons extends Model<buttonsAttributes, buttonsAttributes> implements buttonsAttributes {

    @Column({
    	field: "accessibility_text",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	accessibilityText?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	action?: string;

    @Column({
    	field: "additional_information",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	additionalInformation?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "buttons_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	color?: string;

    @Column({
    	field: "confirmation_text",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	confirmationText?: string;

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
    	field: "function_name",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	functionName?: string;

    @Column({
    	field: "function_parameters",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	functionParameters?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200) 
    })
    	html?: string;

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
    	field: "ion_icon",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	ionIcon?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	link?: string;

    @Column({
    	field: "state_name",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	stateName?: string;

    @Column({
    	field: "state_params",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	stateParams?: string;

    @Column({
    	field: "success_alert_body",
    	allowNull: true,
    	type: DataType.STRING(200) 
    })
    	successAlertBody?: string;

    @Column({
    	field: "success_alert_title",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	successAlertTitle?: string;

    @Column({
    	field: "success_toast_text",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	successToastText?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	text?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	tooltip?: string;

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
    	name: "buttons_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('buttons_id_seq'::regclass)") 
    })
    @Index({
    	name: "buttons_pkey",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "buttons_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "buttons_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

}