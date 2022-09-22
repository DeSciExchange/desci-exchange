import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctConditionCauseAttributes {
    id?: number;
    conditionId?: number;
    causeId?: number;
    conditionVariableId?: number;
    causeVariableId?: number;
    votesPercent?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "ct_condition_cause",
	timestamps: false 
})
export class ctConditionCause extends Model<ctConditionCauseAttributes, ctConditionCauseAttributes> implements ctConditionCauseAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_condition_cause_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_condition_cause_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "condition_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_cause_cause_id_condition_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_cause_ct_conditions_id_condition_fk",
    	using: "btree",
    	unique: false 
    })
    	conditionId?: number;

    @Column({
    	field: "cause_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_cause_cause_id_condition_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	causeId?: number;

    @Column({
    	field: "condition_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_cause_cause_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_cause_variables_id_condition_fk",
    	using: "btree",
    	unique: false 
    })
    	conditionVariableId?: number;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_cause_cause_uindex",
    	using: "btree",
    	unique: true 
    })
    	causeVariableId?: number;

    @Column({
    	field: "votes_percent",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	votesPercent?: number;

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
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}