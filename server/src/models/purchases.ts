import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface purchasesAttributes {
    id?: string;
    subscriberUserId?: string;
    referrerUserId?: string;
    updatedAt?: Date;
    createdAt?: Date;
    subscriptionProvider?: string;
    lastFour?: string;
    productId?: string;
    subscriptionProviderTransactionId?: string;
    coupon?: string;
    clientId?: string;
    refundedAt?: string;
    deletedAt?: Date;
}

@Table({
	tableName: "purchases",
	timestamps: false 
})
export class purchases extends Model<purchasesAttributes, purchasesAttributes> implements purchasesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('purchases_id_seq'::regclass)") 
    })
    @Index({
    	name: "purchases_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "subscriber_user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "subscriber_referrer",
    	using: "btree",
    	unique: true 
    })
    	subscriberUserId?: string;

    @Column({
    	field: "referrer_user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "subscriber_referrer",
    	using: "btree",
    	unique: true 
    })
    	referrerUserId?: string;

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
    	field: "subscription_provider",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	subscriptionProvider?: string;

    @Column({
    	field: "last_four",
    	allowNull: true,
    	type: DataType.STRING(4) 
    })
    	lastFour?: string;

    @Column({
    	field: "product_id",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	productId?: string;

    @Column({
    	field: "subscription_provider_transaction_id",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	subscriptionProviderTransactionId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	coupon?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "purchases_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "refunded_at",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	refundedAt?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}