import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface trackingRemindersAttributes {
    id?: number;
    userId?: string;
    clientId?: string;
    variableId?: number;
    defaultValue?: number;
    reminderStartTime?: string;
    reminderEndTime?: string;
    reminderSound?: string;
    reminderFrequency?: number;
    popUp?: boolean;
    sms?: boolean;
    email?: boolean;
    notificationBar?: boolean;
    lastTracked?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    startTrackingDate?: string;
    stopTrackingDate?: string;
    instructions?: string;
    deletedAt?: Date;
    imageUrl?: string;
    userVariableId?: number;
    latestTrackingReminderNotificationNotifyAt?: Date;
    numberOfTrackingReminderNotifications?: number;
}

@Table({
	tableName: "tracking_reminders",
	timestamps: false 
})
export class trackingReminders extends Model<trackingRemindersAttributes, trackingRemindersAttributes> implements trackingRemindersAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('tracking_reminders_id_seq'::regclass)") 
    })
    @Index({
    	name: "tracking_reminders_pkey",
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
    	name: "tracking_reminders_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "UK_user_var_time_freq",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_client",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "user_client",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "tracking_reminders_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Id for the variable to be tracked" 
    })
    @Index({
    	name: "tracking_reminders_user_variables_variable_id_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "UK_user_var_time_freq",
    	using: "btree",
    	unique: true 
    })
    	variableId?: number;

    @Column({
    	field: "default_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Default value to use for the measurement when tracking" 
    })
    	defaultValue?: number;

    @Column({
    	field: "reminder_start_time",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "LOCAL TIME: Earliest time of day at which reminders should appear",
    	defaultValue: Sequelize.literal("'00:00:00'::time without time zone") 
    })
    @Index({
    	name: "UK_user_var_time_freq",
    	using: "btree",
    	unique: true 
    })
    	reminderStartTime?: string;

    @Column({
    	field: "reminder_end_time",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "LOCAL TIME: Latest time of day at which reminders should appear" 
    })
    	reminderEndTime?: string;

    @Column({
    	field: "reminder_sound",
    	allowNull: true,
    	type: DataType.STRING(125),
    	comment: "String identifier for the sound to accompany the reminder" 
    })
    	reminderSound?: string;

    @Column({
    	field: "reminder_frequency",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of seconds between one reminder and the next" 
    })
    @Index({
    	name: "UK_user_var_time_freq",
    	using: "btree",
    	unique: true 
    })
    	reminderFrequency?: number;

    @Column({
    	field: "pop_up",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "True if the reminders should appear as a popup notification" 
    })
    	popUp?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "True if the reminders should be delivered via SMS" 
    })
    	sms?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "True if the reminders should be delivered via email" 
    })
    	email?: boolean;

    @Column({
    	field: "notification_bar",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "True if the reminders should appear in the notification bar" 
    })
    	notificationBar?: boolean;

    @Column({
    	field: "last_tracked",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastTracked?: Date;

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
    	field: "start_tracking_date",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Earliest date on which the user should be reminded to track in YYYY-MM-DD format" 
    })
    	startTrackingDate?: string;

    @Column({
    	field: "stop_tracking_date",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Latest date on which the user should be reminded to track  in YYYY-MM-DD format" 
    })
    	stopTrackingDate?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	instructions?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "image_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	imageUrl?: string;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "tracking_reminders_user_variables_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userVariableId?: number;

    @Column({
    	field: "latest_tracking_reminder_notification_notify_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestTrackingReminderNotificationNotifyAt?: Date;

    @Column({
    	field: "number_of_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Tracking Reminder Notifications for this Tracking Reminder.\n                    [Formula: update tracking_reminders\n                        left join (\n                            select count(id) as total, tracking_reminder_id\n                            from tracking_reminder_notifications\n                            group by tracking_reminder_id\n                        )\n                        as grouped on tracking_reminders.id = grouped.tracking_reminder_id\n                    set tracking_reminders.number_of_tracking_reminder_notifications = count(grouped.total)]" 
    })
    	numberOfTrackingReminderNotifications?: number;

}