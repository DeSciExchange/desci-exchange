import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface trackerLogAttributes {
    id?: string;
    sessionId?: string;
    pathId?: string;
    queryId?: string;
    method?: string;
    routePathId?: string;
    isAjax?: boolean;
    isSecure?: boolean;
    isJson?: boolean;
    wantsJson?: boolean;
    errorId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    clientId?: string;
    userId?: string;
    deletedAt?: Date;
}

@Table({
	tableName: "tracker_log",
	timestamps: false 
})
export class trackerLog extends Model<trackerLogAttributes, trackerLogAttributes> implements trackerLogAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('tracker_log_id_seq'::regclass)") 
    })
    @Index({
    	name: "tracker_log_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "session_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_session_id_index",
    	using: "btree",
    	unique: false 
    })
    	sessionId?: string;

    @Column({
    	field: "path_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_path_id_index",
    	using: "btree",
    	unique: false 
    })
    	pathId?: string;

    @Column({
    	field: "query_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_query_id_index",
    	using: "btree",
    	unique: false 
    })
    	queryId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    @Index({
    	name: "tracker_log_method_index",
    	using: "btree",
    	unique: false 
    })
    	method?: string;

    @Column({
    	field: "route_path_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_route_path_id_index",
    	using: "btree",
    	unique: false 
    })
    	routePathId?: string;

    @Column({
    	field: "is_ajax",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isAjax?: boolean;

    @Column({
    	field: "is_secure",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isSecure?: boolean;

    @Column({
    	field: "is_json",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isJson?: boolean;

    @Column({
    	field: "wants_json",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	wantsJson?: boolean;

    @Column({
    	field: "error_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_error_id_index",
    	using: "btree",
    	unique: false 
    })
    	errorId?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    @Index({
    	name: "tracker_log_created_at_index",
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
    	name: "tracker_log_updated_at_index",
    	using: "btree",
    	unique: false 
    })
    	updatedAt?: Date;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "tracker_log_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tracker_log_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}