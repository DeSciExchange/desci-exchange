import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface deviceTokensAttributes {
    deviceToken: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    userId?: string;
    numberOfWaitingTrackingReminderNotifications?: number;
    lastNotifiedAt?: Date;
    platform?: string;
    numberOfNewTrackingReminderNotifications?: number;
    numberOfNotificationsLastSent?: number;
    errorMessage?: string;
    lastCheckedAt?: Date;
    receivedAt?: Date;
    serverIp?: string;
    serverHostname?: string;
    clientId?: string;
}

@Table({
	tableName: "device_tokens",
	timestamps: false 
})
export class deviceTokens extends Model<deviceTokensAttributes, deviceTokensAttributes> implements deviceTokensAttributes {

    @Column({
    	field: "device_token",
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "device_tokens_pkey",
    	using: "btree",
    	unique: true 
    })
    	deviceToken!: string;

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
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "index_user_id",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "number_of_waiting_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of notifications waiting in the reminder inbox" 
    })
    	numberOfWaitingTrackingReminderNotifications?: number;

    @Column({
    	field: "last_notified_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastNotifiedAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	platform?: string;

    @Column({
    	field: "number_of_new_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of notifications that have come due since last notification" 
    })
    	numberOfNewTrackingReminderNotifications?: number;

    @Column({
    	field: "number_of_notifications_last_sent",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of notifications that were sent at last_notified_at batch" 
    })
    	numberOfNotificationsLastSent?: number;

    @Column({
    	field: "error_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	errorMessage?: string;

    @Column({
    	field: "last_checked_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastCheckedAt?: Date;

    @Column({
    	field: "received_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	receivedAt?: Date;

    @Column({
    	field: "server_ip",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	serverIp?: string;

    @Column({
    	field: "server_hostname",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	serverHostname?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "device_tokens_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

}