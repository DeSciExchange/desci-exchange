import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface correlationUsefulnessVotesAttributes {
    id?: number;
    causeVariableId?: number;
    effectVariableId?: number;
    correlationId?: number;
    aggregateCorrelationId?: number;
    userId?: string;
    vote?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
    isPublic?: boolean;
}

@Table({
	tableName: "correlation_usefulness_votes",
	timestamps: false 
})
export class correlationUsefulnessVotes extends Model<correlationUsefulnessVotesAttributes, correlationUsefulnessVotesAttributes> implements correlationUsefulnessVotesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('correlation_usefulness_votes_id_seq'::regclass)") 
    })
    @Index({
    	name: "correlation_usefulness_votes_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "correlation_usefulness_votes_user_cause_effect_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlation_usefulness_votes_cause_variables_id_fk",
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
    	name: "correlation_usefulness_votes_user_cause_effect_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlation_usefulness_votes_effect_variables_id_fk",
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
    	name: "correlation_usefulness_votes_correlations_id_fk",
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
    	name: "correlation_usefulness_votes_aggregate_correlations_id_fk",
    	using: "btree",
    	unique: false 
    })
    	aggregateCorrelationId?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "correlation_usefulness_votes_user_cause_effect_uindex",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The opinion of the data owner on whether or not knowledge of this \n                    relationship is useful in helping them improve an outcome of interest. \n                    -1 corresponds to a down vote. 1 corresponds to an up vote. 0 corresponds to removal of a \n                    previous vote.  null corresponds to never having voted before." 
    })
    	vote?: number;

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
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "correlation_usefulness_votes_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

}