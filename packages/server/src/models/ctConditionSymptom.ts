import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctConditionSymptomAttributes {
    id?: number;
    conditionVariableId?: number;
    conditionId?: number;
    symptomVariableId?: number;
    symptomId?: number;
    votes?: number;
    extreme?: number;
    severe?: number;
    moderate?: number;
    mild?: number;
    minimal?: number;
    noSymptoms?: number;
    updatedAt?: Date;
    deletedAt?: Date;
    createdAt?: Date;
}

@Table({
	tableName: "ct_condition_symptom",
	timestamps: false 
})
export class ctConditionSymptom extends Model<ctConditionSymptomAttributes, ctConditionSymptomAttributes> implements ctConditionSymptomAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_condition_symptom_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_condition_symptom_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "condition_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_symptom_condition_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_symptom_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	conditionVariableId?: number;

    @Column({
    	field: "condition_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_symptom_conditions_fk",
    	using: "btree",
    	unique: false 
    })
    	conditionId?: number;

    @Column({
    	field: "symptom_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_symptom_condition_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_symptom_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	symptomVariableId?: number;

    @Column({
    	field: "symptom_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_condition_symptom_symptoms_fk",
    	using: "btree",
    	unique: false 
    })
    	symptomId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	votes?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	extreme?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	severe?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	moderate?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	mild?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	minimal?: number;

    @Column({
    	field: "no_symptoms",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	noSymptoms?: number;

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
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

}