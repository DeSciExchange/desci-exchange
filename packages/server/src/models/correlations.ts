import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface correlationsAttributes {
    id?: number;
    userId?: string;
    causeVariableId?: number;
    effectVariableId?: number;
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
    forwardSpearmanCorrelationCoefficient?: number;
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
    groupedCauseValueClosestToValuePredictingLowOutcome?: number;
    groupedCauseValueClosestToValuePredictingHighOutcome?: number;
    clientId?: string;
    publishedAt?: Date;
    wpPostId?: string;
    status?: string;
    causeVariableCategoryId?: number;
    effectVariableCategoryId?: number;
    interestingVariableCategoryPair?: boolean;
    newestDataAt?: Date;
    analysisRequestedAt?: Date;
    reasonForAnalysis?: string;
    analysisStartedAt?: Date;
    analysisEndedAt?: Date;
    userErrorMessage?: string;
    internalErrorMessage?: string;
    causeUserVariableId?: number;
    effectUserVariableId?: number;
    latestMeasurementStartAt?: Date;
    earliestMeasurementStartAt?: Date;
    causeBaselineAveragePerDay?: number;
    causeBaselineAveragePerDurationOfAction?: number;
    causeTreatmentAveragePerDay?: number;
    causeTreatmentAveragePerDurationOfAction?: number;
    effectBaselineAverage?: number;
    effectBaselineRelativeStandardDeviation?: number;
    effectBaselineStandardDeviation?: number;
    effectFollowUpAverage?: number;
    effectFollowUpPercentChangeFromBaseline?: number;
    zScore?: number;
    experimentStartAt?: Date;
    experimentEndAt?: Date;
    aggregateCorrelationId?: number;
    aggregatedAt?: Date;
    usefulnessVote?: number;
    causalityVote?: number;
    deletionReason?: string;
    recordSizeInKb?: number;
    correlationsOverDurations?: string;
    correlationsOverDelays?: string;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
    boring?: boolean;
    outcomeIsGoal?: boolean;
    predictorIsControllable?: boolean;
    plausiblyCausal?: boolean;
    obvious?: boolean;
    numberOfUpVotes?: number;
    numberOfDownVotes?: number;
    strengthLevel?: string;
    confidenceLevel?: string;
    relationship?: string;
}

@Table({
	tableName: "correlations",
	timestamps: false 
})
export class correlations extends Model<correlationsAttributes, correlationsAttributes> implements correlationsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('correlations_id_seq'::regclass)") 
    })
    @Index({
    	name: "correlations_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "user_id_effect_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "user_id_cause_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_cause_variable_id_effect_variable_id_uinde",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlations_pk",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_id_cause_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_cause_variable_id_effect_variable_id_uinde",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlations_pk",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlations_cause_variable_id_fk",
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
    	name: "user_id_effect_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_cause_variable_id_effect_variable_id_uinde",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlations_pk",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "correlations_effect_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	effectVariableId?: number;

    @Column({
    	field: "qm_score",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A number representative of the relative importance of the relationship based on the strength, \n                    usefulness, and plausible causality.  The higher the number, the greater the perceived importance.  \n                    This value can be used for sorting relationships by importance.  " 
    })
    @Index({
    	name: "user_id_effect_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "user_id_cause_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    	qmScore?: number;

    @Column({
    	field: "forward_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Pearson correlation coefficient between cause and effect measurements" 
    })
    	forwardPearsonCorrelationCoefficient?: number;

    @Column({
    	field: "value_predicting_high_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "cause value that predicts an above average effect value (in default unit for cause variable)" 
    })
    	valuePredictingHighOutcome?: number;

    @Column({
    	field: "value_predicting_low_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "cause value that predicts a below average effect value (in default unit for cause variable)" 
    })
    	valuePredictingLowOutcome?: number;

    @Column({
    	field: "predicts_high_effect_change",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The percent change in the outcome typically seen when the predictor value is closer to the predictsHighEffect value. " 
    })
    	predictsHighEffectChange?: number;

    @Column({
    	field: "predicts_low_effect_change",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The percent change in the outcome from average typically seen when the predictor value is closer to the predictsHighEffect value." 
    })
    	predictsLowEffectChange?: number;

    @Column({
    	field: "average_effect",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average effect variable measurement value used in analysis in the common unit. " 
    })
    	averageEffect?: number;

    @Column({
    	field: "average_effect_following_high_cause",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average effect variable measurement value following an above average cause value (in the common unit). " 
    })
    	averageEffectFollowingHighCause?: number;

    @Column({
    	field: "average_effect_following_low_cause",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average effect variable measurement value following a below average cause value (in the common unit). " 
    })
    	averageEffectFollowingLowCause?: number;

    @Column({
    	field: "average_daily_low_cause",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average of below average cause values (in the common unit). " 
    })
    	averageDailyLowCause?: number;

    @Column({
    	field: "average_daily_high_cause",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average of above average cause values (in the common unit). " 
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
    	type: DataType.INTEGER,
    	comment: "The number of times the cause measurement value was different from the one preceding it. " 
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
    	type: DataType.INTEGER,
    	comment: "Unit ID of Cause" 
    })
    @Index({
    	name: "correlations_cause_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	causeUnitId?: number;

    @Column({
    	field: "confidence_interval",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A margin of error around the effect size.  Wider confidence intervals reflect greater uncertainty about the true value of the correlation." 
    })
    	confidenceInterval?: number;

    @Column({
    	field: "critical_t_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value of t from lookup table which t must exceed for significance." 
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
    @Index({
    	name: "user_id_effect_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_user_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "user_id_cause_variable_id_deleted_at_qm_score_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "correlations_deleted_at_analysis_ended_at_index",
    	using: "btree",
    	unique: false 
    })
    	deletedAt?: Date;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Time over which the cause is expected to produce a perceivable effect following the onset delay" 
    })
    	durationOfAction?: number;

    @Column({
    	field: "effect_changes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The number of times the effect measurement value was different from the one preceding it. " 
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
    	field: "forward_spearman_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Predictive spearman correlation of the lagged pair data. While the Pearson correlation assesses linear relationships, the Spearman correlation assesses monotonic relationships (whether linear or not)." 
    })
    	forwardSpearmanCorrelationCoefficient?: number;

    @Column({
    	field: "number_of_days",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfDays?: number;

    @Column({
    	field: "number_of_pairs",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of points that went into the correlation calculation" 
    })
    	numberOfPairs?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "User estimated or default time after cause measurement before a perceivable effect is observed" 
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
    	type: DataType.DOUBLE,
    	comment: "Optimal Pearson Product" 
    })
    	optimalPearsonProduct?: number;

    @Column({
    	field: "p_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The measure of statistical significance. A value less than 0.05 means that a correlation is statistically significant or consistent enough that it is unlikely to be a coincidence." 
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
    	type: DataType.DOUBLE,
    	comment: "Predictive Pearson Correlation Coefficient" 
    })
    	predictivePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "reverse_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation" 
    })
    	reversePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "statistical_significance",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A function of the effect size and sample size" 
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
    	type: DataType.DOUBLE,
    	comment: "Function of correlation and number of samples." 
    })
    	tValue?: number;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "correlations_updated_at_index",
    	using: "btree",
    	unique: false 
    })
    	updatedAt?: Date;

    @Column({
    	field: "grouped_cause_value_closest_to_value_predicting_low_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A realistic daily value (not a fraction from averaging) that typically precedes below average outcome values. " 
    })
    	groupedCauseValueClosestToValuePredictingLowOutcome?: number;

    @Column({
    	field: "grouped_cause_value_closest_to_value_predicting_high_outcome",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A realistic daily value (not a fraction from averaging) that typically precedes below average outcome values. " 
    })
    	groupedCauseValueClosestToValuePredictingHighOutcome?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "correlations_client_id_fk",
    	using: "btree",
    	unique: false 
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
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "correlations_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

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
    @Index({
    	name: "correlations_cause_variable_category_id_fk",
    	using: "btree",
    	unique: false 
    })
    	causeVariableCategoryId?: number;

    @Column({
    	field: "effect_variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "c_effect_variable_category_id_fk",
    	using: "btree",
    	unique: false 
    })
    	effectVariableCategoryId?: number;

    @Column({
    	field: "interesting_variable_category_pair",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "True if the combination of cause and effect variable categories are generally interesting.  For instance, treatment cause variables paired with symptom effect variables are interesting. " 
    })
    	interestingVariableCategoryPair?: boolean;

    @Column({
    	field: "newest_data_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The time the source data was last updated. This indicated whether the analysis is stale and should be performed again. " 
    })
    	newestDataAt?: Date;

    @Column({
    	field: "analysis_requested_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisRequestedAt?: Date;

    @Column({
    	field: "reason_for_analysis",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "The reason analysis was requested." 
    })
    	reasonForAnalysis?: string;

    @Column({
    	field: "analysis_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "correlations_analysis_started_at_index",
    	using: "btree",
    	unique: false 
    })
    	analysisStartedAt?: Date;

    @Column({
    	field: "analysis_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "correlations_deleted_at_analysis_ended_at_index",
    	using: "btree",
    	unique: false 
    })
    	analysisEndedAt?: Date;

    @Column({
    	field: "user_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	userErrorMessage?: string;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	internalErrorMessage?: string;

    @Column({
    	field: "cause_user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "correlations_user_variables_cause_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	causeUserVariableId?: number;

    @Column({
    	field: "effect_user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "correlations_user_variables_effect_user_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	effectUserVariableId?: number;

    @Column({
    	field: "latest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestMeasurementStartAt?: Date;

    @Column({
    	field: "earliest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestMeasurementStartAt?: Date;

    @Column({
    	field: "cause_baseline_average_per_day",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Predictor Average at Baseline (The average low non-treatment value of the predictor per day)" 
    })
    	causeBaselineAveragePerDay?: number;

    @Column({
    	field: "cause_baseline_average_per_duration_of_action",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Predictor Average at Baseline (The average low non-treatment value of the predictor per duration of action)" 
    })
    	causeBaselineAveragePerDurationOfAction?: number;

    @Column({
    	field: "cause_treatment_average_per_day",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Predictor Average During Treatment (The average high value of the predictor per day considered to be the treatment dosage)" 
    })
    	causeTreatmentAveragePerDay?: number;

    @Column({
    	field: "cause_treatment_average_per_duration_of_action",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Predictor Average During Treatment (The average high value of the predictor per duration of action considered to be the treatment dosage)" 
    })
    	causeTreatmentAveragePerDurationOfAction?: number;

    @Column({
    	field: "effect_baseline_average",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Outcome Average at Baseline (The normal value for the outcome seen without treatment during the previous duration of action time span)" 
    })
    	effectBaselineAverage?: number;

    @Column({
    	field: "effect_baseline_relative_standard_deviation",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Outcome Average at Baseline (The average value seen for the outcome without treatment during the previous duration of action time span)" 
    })
    	effectBaselineRelativeStandardDeviation?: number;

    @Column({
    	field: "effect_baseline_standard_deviation",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Outcome Relative Standard Deviation at Baseline (How much the outcome value normally fluctuates without treatment during the previous duration of action time span)" 
    })
    	effectBaselineStandardDeviation?: number;

    @Column({
    	field: "effect_follow_up_average",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Outcome Average at Follow-Up (The average value seen for the outcome during the duration of action following the onset delay of the treatment)" 
    })
    	effectFollowUpAverage?: number;

    @Column({
    	field: "effect_follow_up_percent_change_from_baseline",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Outcome Average at Follow-Up (The average value seen for the outcome during the duration of action following the onset delay of the treatment)" 
    })
    	effectFollowUpPercentChangeFromBaseline?: number;

    @Column({
    	field: "z_score",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The absolute value of the change over duration of action following the onset delay of treatment divided by the baseline outcome relative standard deviation. A.K.A The number of standard deviations from the mean. A zScore > 2 means pValue < 0.05 and is typically considered statistically significant." 
    })
    	zScore?: number;

    @Column({
    	field: "experiment_start_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The earliest data used in the analysis. " 
    })
    	experimentStartAt?: Date;

    @Column({
    	field: "experiment_end_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The latest data used in the analysis. " 
    })
    	experimentEndAt?: Date;

    @Column({
    	field: "aggregate_correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "correlations_aggregate_correlations_id_fk",
    	using: "btree",
    	unique: false 
    })
    	aggregateCorrelationId?: number;

    @Column({
    	field: "aggregated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	aggregatedAt?: Date;

    @Column({
    	field: "usefulness_vote",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The opinion of the data owner on whether or not knowledge of this relationship is useful. \n                        -1 corresponds to a down vote. 1 corresponds to an up vote. 0 corresponds to removal of a \n                        previous vote.  null corresponds to never having voted before." 
    })
    	usefulnessVote?: number;

    @Column({
    	field: "causality_vote",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The opinion of the data owner on whether or not there is a plausible mechanism of action\n                        by which the predictor variable could influence the outcome variable." 
    })
    	causalityVote?: number;

    @Column({
    	field: "deletion_reason",
    	allowNull: true,
    	type: DataType.STRING(280),
    	comment: "The reason the variable was deleted." 
    })
    	deletionReason?: string;

    @Column({
    	field: "record_size_in_kb",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	recordSizeInKb?: number;

    @Column({
    	field: "correlations_over_durations",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Pearson correlations calculated with various duration of action lengths. This can be used to compare short and long term effects. " 
    })
    	correlationsOverDurations?: string;

    @Column({
    	field: "correlations_over_delays",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Pearson correlations calculated with various onset delay lags used to identify reversed causality or asses the significant of a correlation with a given lag parameters. " 
    })
    	correlationsOverDelays?: string;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	field: "sort_order",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sortOrder?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "correlations_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The relationship is boring if it is obvious, the predictor is not controllable, the outcome is not a goal, the relationship could not be causal, or the confidence is low. " 
    })
    	boring?: boolean;

    @Column({
    	field: "outcome_is_goal",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  The foods you eat are not generally an objective end in themselves. " 
    })
    	outcomeIsGoal?: boolean;

    @Column({
    	field: "predictor_is_controllable",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  Symptom severity is not directly controllable. " 
    })
    	predictorIsControllable?: boolean;

    @Column({
    	field: "plausibly_causal",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of aspirin on headaches is plausibly causal. The effect of aspirin on precipitation does not have a plausible causal relationship. " 
    })
    	plausiblyCausal?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of aspirin on headaches is obvious. The effect of aspirin on productivity is not obvious. " 
    })
    	obvious?: boolean;

    @Column({
    	field: "number_of_up_votes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of people who feel this relationship is plausible and useful. " 
    })
    	numberOfUpVotes?: number;

    @Column({
    	field: "number_of_down_votes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of people who feel this relationship is implausible or not useful. " 
    })
    	numberOfDownVotes?: number;

    @Column({
    	field: "strength_level",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Strength level describes magnitude of the change in outcome observed following changes in the predictor. " 
    })
    	strengthLevel?: string;

    @Column({
    	field: "confidence_level",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Describes the confidence that the strength level will remain consist in the future.  The more data there is, the lesser the chance that the findings are a spurious correlation. " 
    })
    	confidenceLevel?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "If higher predictor values generally precede HIGHER outcome values, the relationship is considered POSITIVE.  If higher predictor values generally precede LOWER outcome values, the relationship is considered NEGATIVE. " 
    })
    	relationship?: string;

}