import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface buttonClicksAttributes {
    cardId?: string;
    buttonId?: string;
    clientId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    id?: number;
    inputFields?: string;
    intentName?: string;
    parameters?: string;
    updatedAt?: Date;
    userId?: string;
}

@Table({
	tableName: "button_clicks",
	timestamps: false 
})
export class buttonClicks extends Model<buttonClicksAttributes, buttonClicksAttributes> implements buttonClicksAttributes {

    @Column({
    	field: "card_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	cardId?: string;

    @Column({
    	field: "button_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	buttonId?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "button_clicks_client_id_fk",
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
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('button_clicks_id_seq'::regclass)") 
    })
    @Index({
    	name: "button_clicks_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

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
    	allowNull: true,
    	type: DataType.STRING 
    })
    	parameters?: string;

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
    	name: "button_clicks_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

}