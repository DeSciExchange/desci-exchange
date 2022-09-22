import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctCorrelationsAttributes {
    id?: number;
    userId?: number;
    correlationCoefficient?: number;
    causeVariableId?: number;
    effectVariableId?: number;
    onsetDelay?: number;
    durationOfAction?: number;
    numberOfPairs?: number;
    valuePredictingHighOutcome?: number;
    valuePredictingLowOutcome?: number;
    optimalPearsonProduct?: number;
    vote?: number;
    statisticalSignificance?: number;
    causeUnitId?: number;
    causeChanges?: number;
    effectChanges?: number;
    qmScore?: number;
    error?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "ct_correlations",
	timestamps: false 
})
export class ctCorrelations extends Model<ctCorrelationsAttributes, ctCorrelationsAttributes> implements ctCorrelationsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_correlations_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_correlations_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_correlations_user",
    	using: "btree",
    	unique: true 
    })
    	userId?: number;

    @Column({
    	field: "correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	correlationCoefficient?: number;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_correlations_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "cause",
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
    	name: "ct_correlations_user",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "effect",
    	using: "btree",
    	unique: false 
    })
    	effectVariableId?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	onsetDelay?: number;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	durationOfAction?: number;

    @Column({
    	field: "number_of_pairs",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfPairs?: number;

    @Column({
    	field: "value_predicting_high_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	valuePredictingHighOutcome?: number;

    @Column({
    	field: "value_predicting_low_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	valuePredictingLowOutcome?: number;

    @Column({
    	field: "optimal_pearson_product",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	optimalPearsonProduct?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	defaultValue: Sequelize.literal("'0.5'::double precision") 
    })
    	vote?: number;

    @Column({
    	field: "statistical_significance",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	statisticalSignificance?: number;

    @Column({
    	field: "cause_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeUnitId?: number;

    @Column({
    	field: "cause_changes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeChanges?: number;

    @Column({
    	field: "effect_changes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectChanges?: number;

    @Column({
    	field: "qm_score",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	qmScore?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	error?: string;

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

}