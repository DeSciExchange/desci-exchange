import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctConditionTreatmentAttributes {
    id?: number;
    conditionId?: number;
    treatmentId?: number;
    conditionVariableId?: number;
    treatmentVariableId?: number;
    majorImprovement?: number;
    moderateImprovement?: number;
    noEffect?: number;
    worse?: number;
    muchWorse?: number;
    popularity?: number;
    averageEffect?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "ct_condition_treatment",
	timestamps: false 
})
export class ctConditionTreatment extends Model<ctConditionTreatmentAttributes, ctConditionTreatmentAttributes> implements ctConditionTreatmentAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_condition_treatment_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_condition_treatment_pkey",
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
    	name: "treatment_id_condition_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_treatment_conditions_id_fk",
    	using: "btree",
    	unique: false 
    })
    	conditionId?: number;

    @Column({
    	field: "treatment_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_id_condition_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	treatmentId?: number;

    @Column({
    	field: "condition_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_variable_id_condition_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "ct_condition_treatment_variables_id_fk_2",
    	using: "btree",
    	unique: false 
    })
    	conditionVariableId?: number;

    @Column({
    	field: "treatment_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_variable_id_condition_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	treatmentVariableId?: number;

    @Column({
    	field: "major_improvement",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	majorImprovement?: number;

    @Column({
    	field: "moderate_improvement",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	moderateImprovement?: number;

    @Column({
    	field: "no_effect",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	noEffect?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	worse?: number;

    @Column({
    	field: "much_worse",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	muchWorse?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	popularity?: number;

    @Column({
    	field: "average_effect",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	averageEffect?: number;

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