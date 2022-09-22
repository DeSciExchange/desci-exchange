import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface aggregateCorrelationsAttributes {
    id?: number;
    forwardPearsonCorrelationCoefficient?: number;
    onsetDelay?: number;
    durationOfAction?: number;
    numberOfPairs?: number;
    valuePredictingHighOutcome?: number;
    valuePredictingLowOutcome?: number;
    optimalPearsonProduct?: number;
    averageVote?: number;
    numberOfUsers?: number;
    numberOfCorrelations?: number;
    statisticalSignificance?: number;
    causeUnitId?: number;
    causeChanges?: number;
    effectChanges?: number;
    aggregateQmScore?: number;
    createdAt?: Date;
    updatedAt?: Date;
    status?: string;
    reversePearsonCorrelationCoefficient?: number;
    predictivePearsonCorrelationCoefficient?: number;
    dataSourceName?: string;
    predictsHighEffectChange?: number;
    predictsLowEffectChange?: number;
    pValue?: number;
    tValue?: number;
    criticalTValue?: number;
    confidenceInterval?: number;
    deletedAt?: Date;
    averageEffect?: number;
    averageEffectFollowingHighCause?: number;
    averageEffectFollowingLowCause?: number;
    averageDailyLowCause?: number;
    averageDailyHighCause?: number;
    populationTraitPearsonCorrelationCoefficient?: number;
    groupedCauseValueClosestToValuePredictingLowOutcome?: number;
    groupedCauseValueClosestToValuePredictingHighOutcome?: number;
    clientId?: string;
    publishedAt?: Date;
    wpPostId?: string;
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
    causeVariableId?: number;
    effectVariableId?: number;
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
    charts?: object;
    numberOfVariablesWhereBestAggregateCorrelation?: number;
    deletionReason?: string;
    recordSizeInKb?: number;
    isPublic?: boolean;
    slug?: string;
    boring?: boolean;
    outcomeIsAGoal?: boolean;
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
	tableName: "aggregate_correlations",
	timestamps: false 
})
export class aggregateCorrelations extends Model<aggregateCorrelationsAttributes, aggregateCorrelationsAttributes> implements aggregateCorrelationsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('aggregate_correlations_id_seq'::regclass)") 
    })
    @Index({
    	name: "aggregate_correlations_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "forward_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Pearson correlation coefficient between cause and effect measurements" 
    })
    	forwardPearsonCorrelationCoefficient?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "User estimated or default time after cause measurement before a perceivable effect is observed" 
    })
    	onsetDelay?: number;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Time over which the cause is expected to produce a perceivable effect following the onset delay" 
    })
    	durationOfAction?: number;

    @Column({
    	field: "number_of_pairs",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of points that went into the correlation calculation" 
    })
    	numberOfPairs?: number;

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
    	field: "optimal_pearson_product",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Optimal Pearson Product" 
    })
    	optimalPearsonProduct?: number;

    @Column({
    	field: "average_vote",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The average opinion on the causal plausibility of a relationship.",
    	defaultValue: Sequelize.literal("'0.5'::double precision") 
    })
    	averageVote?: number;

    @Column({
    	field: "number_of_users",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Users by which correlation is aggregated" 
    })
    	numberOfUsers?: number;

    @Column({
    	field: "number_of_correlations",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Correlations by which correlation is aggregated" 
    })
    	numberOfCorrelations?: number;

    @Column({
    	field: "statistical_significance",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A function of the effect size and sample size" 
    })
    	statisticalSignificance?: number;

    @Column({
    	field: "cause_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Unit ID of Cause" 
    })
    @Index({
    	name: "aggregate_correlations_cause_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	causeUnitId?: number;

    @Column({
    	field: "cause_changes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The number of times the cause measurement value was different from the one preceding it." 
    })
    	causeChanges?: number;

    @Column({
    	field: "effect_changes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The number of times the effect measurement value was different from the one preceding it." 
    })
    	effectChanges?: number;

    @Column({
    	field: "aggregate_qm_score",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A number representative of the relative importance of the relationship based on the strength, usefulness, and plausible causality.  The higher the number, the greater the perceived importance.  This value can be used for sorting relationships by importance. " 
    })
    	aggregateQmScore?: number;

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
    	allowNull: true,
    	type: DataType.STRING(25),
    	comment: "Whether the correlation is being analyzed, needs to be analyzed, or is up to date already." 
    })
    	status?: string;

    @Column({
    	field: "reverse_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation" 
    })
    	reversePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "predictive_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Pearson correlation coefficient of cause and effect values lagged by the onset delay and grouped based on the duration of action. " 
    })
    	predictivePearsonCorrelationCoefficient?: number;

    @Column({
    	field: "data_source_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	dataSourceName?: string;

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
    	field: "p_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The measure of statistical significance. A value less than 0.05 means that a correlation is statistically significant or consistent enough that it is unlikely to be a coincidence." 
    })
    	pValue?: number;

    @Column({
    	field: "t_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Function of correlation and number of samples." 
    })
    	tValue?: number;

    @Column({
    	field: "critical_t_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value of t from lookup table which t must exceed for significance." 
    })
    	criticalTValue?: number;

    @Column({
    	field: "confidence_interval",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "A margin of error around the effect size.  Wider confidence intervals reflect greater uncertainty about the true value of the correlation." 
    })
    	confidenceInterval?: number;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

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
    	field: "population_trait_pearson_correlation_coefficient",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The pearson correlation of pairs which each consist of the average cause value and the average effect value for a given user. " 
    })
    	populationTraitPearsonCorrelationCoefficient?: number;

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
    	name: "aggregate_correlations_client_id_fk",
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
    	name: "aggregate_correlations_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "cause_variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "aggregate_correlations_cause_variable_category_id_fk",
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
    	name: "aggregate_correlations_effect_variable_category_id_fk",
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
    	type: DataType.DATE 
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
    	analysisStartedAt?: Date;

    @Column({
    	field: "analysis_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
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
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "aggregate_correlations_pk",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "cause_variable_id_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	causeVariableId?: number;

    @Column({
    	field: "effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "aggregate_correlations_pk",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "cause_variable_id_effect_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "aggregate_correlations_effect_variable_id_index",
    	using: "btree",
    	unique: false 
    })
    	effectVariableId?: number;

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
    	allowNull: true,
    	type: DataType.JSON 
    })
    	charts?: object;

    @Column({
    	field: "number_of_variables_where_best_aggregate_correlation",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Best Aggregate Correlation." 
    })
    	numberOfVariablesWhereBestAggregateCorrelation?: number;

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
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "aggregate_correlations_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The relationship is boring if it is obvious, the predictor is not controllable, or the outcome is not a goal, the relationship could not be causal, or the confidence is low.  " 
    })
    	boring?: boolean;

    @Column({
    	field: "outcome_is_a_goal",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  The foods you eat are not generally an objective end in themselves. " 
    })
    	outcomeIsAGoal?: boolean;

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