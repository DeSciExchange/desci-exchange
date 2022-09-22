import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface trackingReminderNotificationsAttributes {
    id?: number;
    trackingReminderId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    userId?: string;
    notifiedAt?: Date;
    receivedAt?: Date;
    clientId?: string;
    variableId?: number;
    notifyAt?: Date;
    userVariableId?: number;
}

@Table({
	tableName: "tracking_reminder_notifications",
	timestamps: false 
})
export class trackingReminderNotifications extends Model<trackingReminderNotificationsAttributes, trackingReminderNotificationsAttributes> implements trackingReminderNotificationsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('tracking_reminder_notifications_id_seq'::regclass)") 
    })
    @Index({
    	name: "tracking_reminder_notifications_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "tracking_reminder_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "notify_at_tracking_reminder_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "tracking_reminder_notifications_tracking_reminders_id_fk",
    	using: "btree",
    	unique: false 
    })
    	trackingReminderId?: number;

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
    	name: "tracking_reminder_notifications_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "notified_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "UTC time when the notification was sent." 
    })
    	notifiedAt?: Date;

    @Column({
    	field: "received_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	receivedAt?: Date;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "tracking_reminder_notifications_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "tracking_reminder_notifications_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableId?: number;

    @Column({
    	field: "notify_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "notify_at_tracking_reminder_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	notifyAt?: Date;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "tracking_reminder_notifications_user_variables_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userVariableId?: number;

}