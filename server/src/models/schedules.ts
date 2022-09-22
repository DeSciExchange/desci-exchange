import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface schedulesAttributes {
    id?: number;
    command?: string;
    commandCustom?: string;
    params?: string;
    expression?: string;
    environments?: string;
    options?: string;
    logFilename?: string;
    evenInMaintenanceMode?: boolean;
    withoutOverlapping?: boolean;
    onOneServer?: boolean;
    webhookBefore?: string;
    webhookAfter?: string;
    emailOutput?: string;
    sendmailError?: boolean;
    logSuccess?: boolean;
    logError?: boolean;
    status?: boolean;
    runInBackground?: boolean;
    groups?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    sendmailSuccess?: boolean;
}

@Table({
	tableName: "schedules",
	timestamps: false 
})
export class schedules extends Model<schedulesAttributes, schedulesAttributes> implements schedulesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('schedules_id_seq'::regclass)") 
    })
    @Index({
    	name: "schedules_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	command?: string;

    @Column({
    	field: "command_custom",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	commandCustom?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	params?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	expression?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	environments?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	options?: string;

    @Column({
    	field: "log_filename",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	logFilename?: string;

    @Column({
    	field: "even_in_maintenance_mode",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	evenInMaintenanceMode?: boolean;

    @Column({
    	field: "without_overlapping",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	withoutOverlapping?: boolean;

    @Column({
    	field: "on_one_server",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	onOneServer?: boolean;

    @Column({
    	field: "webhook_before",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	webhookBefore?: string;

    @Column({
    	field: "webhook_after",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	webhookAfter?: string;

    @Column({
    	field: "email_output",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	emailOutput?: string;

    @Column({
    	field: "sendmail_error",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	sendmailError?: boolean;

    @Column({
    	field: "log_success",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	logSuccess?: boolean;

    @Column({
    	field: "log_error",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	logError?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	status?: boolean;

    @Column({
    	field: "run_in_background",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	runInBackground?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	groups?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "sendmail_success",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	sendmailSuccess?: boolean;

}