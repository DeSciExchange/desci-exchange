import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctTreatmentSideEffectAttributes {
    id?: number;
    treatmentVariableId?: number;
    sideEffectVariableId?: number;
    treatmentId?: number;
    sideEffectId?: number;
    votesPercent?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "ct_treatment_side_effect",
	timestamps: false 
})
export class ctTreatmentSideEffect extends Model<ctTreatmentSideEffectAttributes, ctTreatmentSideEffectAttributes> implements ctTreatmentSideEffectAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_treatment_side_effect_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_treatment_side_effect_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "treatment_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_variable_id_side_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	treatmentVariableId?: number;

    @Column({
    	field: "side_effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_variable_id_side_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "side_effect_variables_id_fk",
    	using: "btree",
    	unique: false 
    })
    	sideEffectVariableId?: number;

    @Column({
    	field: "treatment_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_id_side_effect_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	treatmentId?: number;

    @Column({
    	field: "side_effect_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "treatment_id_side_effect_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "treatment_side_effect_side_effects_id_fk",
    	using: "btree",
    	unique: false 
    })
    	sideEffectId?: number;

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