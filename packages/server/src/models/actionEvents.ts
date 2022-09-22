import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface actionEventsAttributes {
    id?: string;
    batchId?: string;
    userId?: string;
    name?: string;
    actionableType?: string;
    actionableId?: string;
    targetType?: string;
    targetId?: string;
    modelType?: string;
    modelId?: string;
    fields?: string;
    status?: string;
    exception?: string;
    createdAt?: Date;
    updatedAt?: Date;
    original?: string;
    changes?: string;
}

@Table({
	tableName: "action_events",
	timestamps: false 
})
export class actionEvents extends Model<actionEventsAttributes, actionEventsAttributes> implements actionEventsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('action_events_id_seq'::regclass)") 
    })
    @Index({
    	name: "action_events_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "batch_id",
    	allowNull: true,
    	type: DataType.STRING(36) 
    })
    @Index({
    	name: "action_events_batch_id_model_type_model_id_index",
    	using: "btree",
    	unique: false 
    })
    	batchId?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "action_events_user_id_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	field: "actionable_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "action_events_actionable_type_actionable_id_index",
    	using: "btree",
    	unique: false 
    })
    	actionableType?: string;

    @Column({
    	field: "actionable_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "action_events_actionable_type_actionable_id_index",
    	using: "btree",
    	unique: false 
    })
    	actionableId?: string;

    @Column({
    	field: "target_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	targetType?: string;

    @Column({
    	field: "target_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	targetId?: string;

    @Column({
    	field: "model_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "action_events_batch_id_model_type_model_id_index",
    	using: "btree",
    	unique: false 
    })
    	modelType?: string;

    @Column({
    	field: "model_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "action_events_batch_id_model_type_model_id_index",
    	using: "btree",
    	unique: false 
    })
    	modelId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	fields?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(25),
    	defaultValue: Sequelize.literal("'running'::character varying") 
    })
    	status?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	exception?: string;

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
    	allowNull: true,
    	type: DataType.STRING 
    })
    	original?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	changes?: string;

}