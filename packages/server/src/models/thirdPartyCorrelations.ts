import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface thirdPartyCorrelationsAttributes {
    causeId?: number;
    effectId?: number;
    qmScore?: number;
    forwardPearsonCorrelationCoefficient?: number;
    valuePredictingHighOutcome?: number;
    valuePredictingLowOutcome?: number;
    predictsHighEffectChange?: number;
    predictsLowEffectChange?: number;
    averageEffect?: number;
    averageEffectFollowingHighCause?: number;
    averageEffectFollowingLowCause?: number;
    averageDailyLowCause?: number;
    averageDailyHighCause?: number;
    averageForwardPearsonCorrelationOverOnsetDelays?: number;
    averageReversePearsonCorrelationOverOnsetDelays?: number;
    causeChanges?: number;
    causeFillingValue?: number;
    causeNumberOfProcessedDailyMeasurements?: number;
    causeNumberOfRawMeasurements?: number;
    causeUnitId?: number;
    confidenceInterval?: number;
    criticalTValue?: number;
    createdAt?: Date;
    dataSourceName?: string;
    deletedAt?: Date;
    durationOfAction?: number;
    effectChanges?: number;
    effectFillingValue?: number;
    effectNumberOfProcessedDailyMeasurements?: number;
    effectNumberOfRawMeasurements?: number;
    error?: string;
    forwardSpearmanCorrelationCoefficient?: number;
    id?: number;
    numberOfDays?: number;
    numberOfPairs?: number;
    onsetDelay?: number;
    onsetDelayWithStrongestPearsonCorrelation?: number;
    optimalPearsonProduct?: number;
    pValue?: number;
    pearsonCorrelationWithNoOnsetDelay?: number;
    predictivePearsonCorrelationCoefficient?: number;
    reversePearsonCorrelationCoefficient?: number;
    statisticalSignificance?: number;
    strongestPearsonCorrelationCoefficient?: number;
    tValue?: number;
    updatedAt?: Date;
    userId?: string;
    groupedCauseValueClosestToValuePredictingLowOutcome?: number;
    groupedCauseValueClosestToValuePredictingHighOutcome?: number;
    clientId?: string;
    publishedAt?: Date;
    wpPostId?: number;
    status?: string;
    causeVariableCategoryId?: number;
    effectVariableCategoryId?: number;
    interestingVariableCategoryPair?: boolean;
    causeVariableId?: number;
    effectVariableId?: number;
}

@Table({
	tableName: "third_party_correlations",
	timestamps: false 
})
export class thirdPartyCorrelations extends Model<thirdPartyCorrelationsAttributes, thirdPartyCorrelationsAttributes> implements thirdPartyCorrelationsAttributes {

    @Column({
    	field: "cause_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "tpc_user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    	causeId?: number;

    @Column({
    	field: "effect_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "tpc_user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    	effectId?: number;

    @Column({
    	field: "qm_score",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	qmScore?: number;

    @Column({
    	field: "forward_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	forwardPearsonCorrelationCoefficient?: number;

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
    	field: "predicts_high_effect_change",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	predictsHighEffectChange?: number;

    @Column({
    	field: "predicts_low_effect_change",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	predictsLowEffectChange?: number;

    @Column({
    	field: "average_effect",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageEffect?: number;

    @Column({
    	field: "average_effect_following_high_cause",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageEffectFollowingHighCause?: number;

    @Column({
    	field: "average_effect_following_low_cause",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageEffectFollowingLowCause?: number;

    @Column({
    	field: "average_daily_low_cause",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageDailyLowCause?: number;

    @Column({
    	field: "average_daily_high_cause",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageDailyHighCause?: number;

    @Column({
    	field: "average_forward_pearson_correlation_over_onset_delays",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageForwardPearsonCorrelationOverOnsetDelays?: number;

    @Column({
    	field: "average_reverse_pearson_correlation_over_onset_delays",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	averageReversePearsonCorrelationOverOnsetDelays?: number;

    @Column({
    	field: "cause_changes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeChanges?: number;

    @Column({
    	field: "cause_filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	causeFillingValue?: number;

    @Column({
    	field: "cause_number_of_processed_daily_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeNumberOfProcessedDailyMeasurements?: number;

    @Column({
    	field: "cause_number_of_raw_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeNumberOfRawMeasurements?: number;

    @Column({
    	field: "cause_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeUnitId?: number;

    @Column({
    	field: "confidence_interval",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	confidenceInterval?: number;

    @Column({
    	field: "critical_t_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	criticalTValue?: number;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	field: "data_source_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	dataSourceName?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	durationOfAction?: number;

    @Column({
    	field: "effect_changes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectChanges?: number;

    @Column({
    	field: "effect_filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	effectFillingValue?: number;

    @Column({
    	field: "effect_number_of_processed_daily_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectNumberOfProcessedDailyMeasurements?: number;

    @Column({
    	field: "effect_number_of_raw_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectNumberOfRawMeasurements?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	error?: string;

    @Column({
    	field: "forward_spearman_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	forwardSpearmanCorrelationCoefficient?: number;

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('third_party_correlations_id_seq'::regclass)") 
    })
    @Index({
    	name: "third_party_correlations_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "number_of_days",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfDays?: number;

    @Column({
    	field: "number_of_pairs",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfPairs?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	onsetDelay?: number;

    @Column({
    	field: "onset_delay_with_strongest_pearson_correlation",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	onsetDelayWithStrongestPearsonCorrelation?: number;

    @Column({
    	field: "optimal_pearson_product",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	optimalPearsonProduct?: number;

    @Column({
    	field: "p_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	pValue?: number;

    @Column({
    	field: "pearson_correlation_with_no_onset_delay",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	pearsonCorrelationWithNoOnsetDelay?: number;

    @Column({
    	field: "predictive_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	predictivePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "reverse_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	reversePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "statistical_significance",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	statisticalSignificance?: number;

    @Column({
    	field: "strongest_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	strongestPearsonCorrelationCoefficient?: number;

    @Column({
    	field: "t_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	tValue?: number;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "tpc_user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "grouped_cause_value_closest_to_value_predicting_low_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	groupedCauseValueClosestToValuePredictingLowOutcome?: number;

    @Column({
    	field: "grouped_cause_value_closest_to_value_predicting_high_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	groupedCauseValueClosestToValuePredictingHighOutcome?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

    @Column({
    	field: "published_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	publishedAt?: Date;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	wpPostId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(25) 
    })
    	status?: string;

    @Column({
    	field: "cause_variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeVariableCategoryId?: number;

    @Column({
    	field: "effect_variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectVariableCategoryId?: number;

    @Column({
    	field: "interesting_variable_category_pair",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	interestingVariableCategoryPair?: boolean;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	causeVariableId?: number;

    @Column({
    	field: "effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	effectVariableId?: number;

}