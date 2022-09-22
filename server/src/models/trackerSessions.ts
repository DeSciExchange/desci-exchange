import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface trackerSessionsAttributes {
    id?: string;
    uuid?: string;
    userId?: string;
    deviceId?: string;
    agentId?: string;
    clientIp?: string;
    refererId?: string;
    cookieId?: string;
    geoipId?: string;
    isRobot?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "tracker_sessions",
	timestamps: false 
})
export class trackerSessions extends Model<trackerSessionsAttributes, trackerSessionsAttributes> implements trackerSessionsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('tracker_sessions_id_seq'::regclass)") 
    })
    @Index({
    	name: "tracker_sessions_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "tracker_sessions_uuid_unique",
    	using: "btree",
    	unique: true 
    })
    	uuid?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_user_id_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "device_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_device_id_index",
    	using: "btree",
    	unique: false 
    })
    	deviceId?: string;

    @Column({
    	field: "agent_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_agent_id_index",
    	using: "btree",
    	unique: false 
    })
    	agentId?: string;

    @Column({
    	field: "client_ip",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "tracker_sessions_client_ip_index",
    	using: "btree",
    	unique: false 
    })
    	clientIp?: string;

    @Column({
    	field: "referer_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_referer_id_index",
    	using: "btree",
    	unique: false 
    })
    	refererId?: string;

    @Column({
    	field: "cookie_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_cookie_id_index",
    	using: "btree",
    	unique: false 
    })
    	cookieId?: string;

    @Column({
    	field: "geoip_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_sessions_geoip_id_index",
    	using: "btree",
    	unique: false 
    })
    	geoipId?: string;

    @Column({
    	field: "is_robot",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isRobot?: boolean;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    @Index({
    	name: "tracker_sessions_created_at_index",
    	using: "btree",
    	unique: false 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "tracker_sessions_updated_at_index",
    	using: "btree",
    	unique: false 
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
    	name: "tracker_sessions_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

}