import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface votesAttributes {
    id?: number;
    clientId?: string;
    userId?: string;
    value?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    causeVariableId?: number;
    effectVariableId?: number;
    correlationId?: number;
    aggregateCorrelationId?: number;
    isPublic?: boolean;
}

@Table({
	tableName: "votes",
	timestamps: false 
})
export class votes extends Model<votesAttributes, votesAttributes> implements votesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('votes_id_seq'::regclass)") 
    })
    @Index({
    	name: "votes_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "votes_client_id_fk",
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
    	name: "votes_user_id_cause_variable_id_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Value of Vote" 
    })
    	value?: number;

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
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "votes_user_id_cause_variable_id_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "votes_cause_variable_id_index",
    	using: "btree",
    	unique: false 
    })
    	causeVariableId?: number;

    @Column({
    	field: "effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "votes_user_id_cause_variable_id_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "votes_effect_variable_id_index",
    	using: "btree",
    	unique: false 
    })
    	effectVariableId?: number;

    @Column({
    	field: "correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "votes_correlations_id_fk",
    	using: "btree",
    	unique: false 
    })
    	correlationId?: number;

    @Column({
    	field: "aggregate_correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "votes_aggregate_correlations_id_fk",
    	using: "btree",
    	unique: false 
    })
    	aggregateCorrelationId?: number;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

}