import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userVariablesAttributes {
    id?: number;
    parentId?: number;
    clientId?: string;
    userId?: string;
    variableId?: number;
    defaultUnitId?: number;
    minimumAllowedValue?: number;
    maximumAllowedValue?: number;
    fillingValue?: number;
    joinWith?: number;
    onsetDelay?: number;
    durationOfAction?: number;
    variableCategoryId?: number;
    causeOnly?: boolean;
    fillingType?: string;
    numberOfProcessedDailyMeasurements?: number;
    measurementsAtLastAnalysis?: number;
    lastUnitId?: number;
    lastOriginalUnitId?: number;
    lastValue?: number;
    lastOriginalValue?: number;
    numberOfCorrelations?: number;
    status?: string;
    standardDeviation?: number;
    variance?: number;
    minimumRecordedValue?: number;
    maximumRecordedValue?: number;
    mean?: number;
    median?: number;
    mostCommonOriginalUnitId?: number;
    mostCommonValue?: number;
    numberOfUniqueDailyValues?: number;
    numberOfUniqueValues?: number;
    numberOfChanges?: number;
    skewness?: number;
    kurtosis?: number;
    latitude?: number;
    longitude?: number;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date;
    outcome?: boolean;
    dataSourcesCount?: string;
    earliestFillingTime?: number;
    latestFillingTime?: number;
    lastProcessedDailyValue?: number;
    outcomeOfInterest?: boolean;
    predictorOfInterest?: boolean;
    experimentStartTime?: Date;
    experimentEndTime?: Date;
    description?: string;
    deletedAt?: Date;
    alias?: string;
    secondToLastValue?: number;
    thirdToLastValue?: number;
    numberOfUserCorrelationsAsEffect?: number;
    numberOfUserCorrelationsAsCause?: number;
    combinationOperation?: string;
    informationalUrl?: string;
    mostCommonConnectorId?: number;
    valence?: string;
    wikipediaTitle?: string;
    numberOfTrackingReminders?: number;
    numberOfRawMeasurementsWithTagsJoinsChildren?: number;
    mostCommonSourceName?: string;
    optimalValueMessage?: string;
    bestCauseVariableId?: number;
    bestEffectVariableId?: number;
    userMaximumAllowedDailyValue?: number;
    userMinimumAllowedDailyValue?: number;
    userMinimumAllowedNonZeroValue?: number;
    minimumAllowedSecondsBetweenMeasurements?: number;
    averageSecondsBetweenMeasurements?: number;
    medianSecondsBetweenMeasurements?: number;
    lastCorrelatedAt?: Date;
    numberOfMeasurementsWithTagsAtLastCorrelation?: number;
    analysisSettingsModifiedAt?: Date;
    newestDataAt?: Date;
    analysisRequestedAt?: Date;
    reasonForAnalysis?: string;
    analysisStartedAt?: Date;
    analysisEndedAt?: Date;
    userErrorMessage?: string;
    internalErrorMessage?: string;
    earliestSourceMeasurementStartAt?: Date;
    latestSourceMeasurementStartAt?: Date;
    latestTaggedMeasurementStartAt?: Date;
    earliestTaggedMeasurementStartAt?: Date;
    latestNonTaggedMeasurementStartAt?: Date;
    earliestNonTaggedMeasurementStartAt?: Date;
    wpPostId?: string;
    numberOfSoftDeletedMeasurements?: number;
    bestUserCorrelationId?: number;
    numberOfMeasurements?: number;
    numberOfTrackingReminderNotifications?: number;
    deletionReason?: string;
    recordSizeInKb?: number;
    numberOfCommonTags?: number;
    numberCommonTaggedBy?: number;
    numberOfCommonJoinedVariables?: number;
    numberOfCommonIngredients?: number;
    numberOfCommonFoods?: number;
    numberOfCommonChildren?: number;
    numberOfCommonParents?: number;
    numberOfUserTags?: number;
    numberUserTaggedBy?: number;
    numberOfUserJoinedVariables?: number;
    numberOfUserIngredients?: number;
    numberOfUserFoods?: number;
    numberOfUserChildren?: number;
    numberOfUserParents?: number;
    isPublic?: boolean;
    slug?: string;
    isGoal?: boolean;
    controllable?: boolean;
    boring?: boolean;
    predictor?: boolean;
}

@Table({
	tableName: "user_variables",
	timestamps: false 
})
export class userVariables extends Model<userVariablesAttributes, userVariablesAttributes> implements userVariablesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_variables_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_variables_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "parent_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of the parent variable if this variable has any parent" 
    })
    	parentId?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "user_variables_client_id_fk",
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
    	name: "uv_user_id",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_variables_user_id_latest_tagged_measurement_time_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of variable" 
    })
    @Index({
    	name: "uv_user_id",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "fk_variableSettings",
    	using: "btree",
    	unique: false 
    })
    	variableId?: number;

    @Column({
    	field: "default_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of unit to use for this variable" 
    })
    @Index({
    	name: "user_variables_default_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	defaultUnitId?: number;

    @Column({
    	field: "minimum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Minimum reasonable value for this variable (uses default unit)" 
    })
    	minimumAllowedValue?: number;

    @Column({
    	field: "maximum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Maximum reasonable value for this variable (uses default unit)" 
    })
    	maximumAllowedValue?: number;

    @Column({
    	field: "filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value for replacing null measurements",
    	defaultValue: Sequelize.literal("'-1'::double precision") 
    })
    	fillingValue?: number;

    @Column({
    	field: "join_with",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables" 
    })
    	joinWith?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	onsetDelay?: number;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect" 
    })
    	durationOfAction?: number;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of variable category" 
    })
    @Index({
    	name: "user_variables_variable_category_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "cause_only",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user" 
    })
    	causeOnly?: boolean;

    @Column({
    	field: "filling_type",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "0 -> No filling, 1 -> Use filling-value" 
    })
    	fillingType?: string;

    @Column({
    	field: "number_of_processed_daily_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of processed measurements" 
    })
    	numberOfProcessedDailyMeasurements?: number;

    @Column({
    	field: "measurements_at_last_analysis",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	measurementsAtLastAnalysis?: number;

    @Column({
    	field: "last_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	lastUnitId?: number;

    @Column({
    	field: "last_original_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of last original Unit" 
    })
    	lastOriginalUnitId?: number;

    @Column({
    	field: "last_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	lastValue?: number;

    @Column({
    	field: "last_original_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	lastOriginalValue?: number;

    @Column({
    	field: "number_of_correlations",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCorrelations?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(25) 
    })
    	status?: string;

    @Column({
    	field: "standard_deviation",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	standardDeviation?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	variance?: number;

    @Column({
    	field: "minimum_recorded_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	minimumRecordedValue?: number;

    @Column({
    	field: "maximum_recorded_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	maximumRecordedValue?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	mean?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	median?: number;

    @Column({
    	field: "most_common_original_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	mostCommonOriginalUnitId?: number;

    @Column({
    	field: "most_common_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	mostCommonValue?: number;

    @Column({
    	field: "number_of_unique_daily_values",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUniqueDailyValues?: number;

    @Column({
    	field: "number_of_unique_values",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUniqueValues?: number;

    @Column({
    	field: "number_of_changes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfChanges?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	skewness?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	kurtosis?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	latitude?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	longitude?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	location?: string;

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
    	type: DataType.BOOLEAN 
    })
    	outcome?: boolean;

    @Column({
    	field: "data_sources_count",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	dataSourcesCount?: string;

    @Column({
    	field: "earliest_filling_time",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	earliestFillingTime?: number;

    @Column({
    	field: "latest_filling_time",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	latestFillingTime?: number;

    @Column({
    	field: "last_processed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	lastProcessedDailyValue?: number;

    @Column({
    	field: "outcome_of_interest",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	outcomeOfInterest?: boolean;

    @Column({
    	field: "predictor_of_interest",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	predictorOfInterest?: boolean;

    @Column({
    	field: "experiment_start_time",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	experimentStartTime?: Date;

    @Column({
    	field: "experiment_end_time",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	experimentEndTime?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	description?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(125) 
    })
    	alias?: string;

    @Column({
    	field: "second_to_last_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	secondToLastValue?: number;

    @Column({
    	field: "third_to_last_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	thirdToLastValue?: number;

    @Column({
    	field: "number_of_user_correlations_as_effect",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserCorrelationsAsEffect?: number;

    @Column({
    	field: "number_of_user_correlations_as_cause",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserCorrelationsAsCause?: number;

    @Column({
    	field: "combination_operation",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	combinationOperation?: string;

    @Column({
    	field: "informational_url",
    	allowNull: true,
    	type: DataType.STRING(2000) 
    })
    	informationalUrl?: string;

    @Column({
    	field: "most_common_connector_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	mostCommonConnectorId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	valence?: string;

    @Column({
    	field: "wikipedia_title",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	wikipediaTitle?: string;

    @Column({
    	field: "number_of_tracking_reminders",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfTrackingReminders?: number;

    @Column({
    	field: "number_of_raw_measurements_with_tags_joins_children",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfRawMeasurementsWithTagsJoinsChildren?: number;

    @Column({
    	field: "most_common_source_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	mostCommonSourceName?: string;

    @Column({
    	field: "optimal_value_message",
    	allowNull: true,
    	type: DataType.STRING(500) 
    })
    	optimalValueMessage?: string;

    @Column({
    	field: "best_cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	bestCauseVariableId?: number;

    @Column({
    	field: "best_effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	bestEffectVariableId?: number;

    @Column({
    	field: "user_maximum_allowed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	userMaximumAllowedDailyValue?: number;

    @Column({
    	field: "user_minimum_allowed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	userMinimumAllowedDailyValue?: number;

    @Column({
    	field: "user_minimum_allowed_non_zero_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	userMinimumAllowedNonZeroValue?: number;

    @Column({
    	field: "minimum_allowed_seconds_between_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	minimumAllowedSecondsBetweenMeasurements?: number;

    @Column({
    	field: "average_seconds_between_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	averageSecondsBetweenMeasurements?: number;

    @Column({
    	field: "median_seconds_between_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	medianSecondsBetweenMeasurements?: number;

    @Column({
    	field: "last_correlated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastCorrelatedAt?: Date;

    @Column({
    	field: "number_of_measurements_with_tags_at_last_correlation",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfMeasurementsWithTagsAtLastCorrelation?: number;

    @Column({
    	field: "analysis_settings_modified_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisSettingsModifiedAt?: Date;

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
    	type: DataType.STRING(255) 
    })
    	reasonForAnalysis?: string;

    @Column({
    	field: "analysis_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "user_variables_analysis_started_at_index",
    	using: "btree",
    	unique: false 
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
    	field: "earliest_source_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestSourceMeasurementStartAt?: Date;

    @Column({
    	field: "latest_source_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestSourceMeasurementStartAt?: Date;

    @Column({
    	field: "latest_tagged_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestTaggedMeasurementStartAt?: Date;

    @Column({
    	field: "earliest_tagged_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestTaggedMeasurementStartAt?: Date;

    @Column({
    	field: "latest_non_tagged_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestNonTaggedMeasurementStartAt?: Date;

    @Column({
    	field: "earliest_non_tagged_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestNonTaggedMeasurementStartAt?: Date;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "user_variables_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_soft_deleted_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfSoftDeletedMeasurements?: number;

    @Column({
    	field: "best_user_correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_variables_correlations_qm_score_fk",
    	using: "btree",
    	unique: false 
    })
    	bestUserCorrelationId?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfTrackingReminderNotifications?: number;

    @Column({
    	field: "deletion_reason",
    	allowNull: true,
    	type: DataType.STRING(280) 
    })
    	deletionReason?: string;

    @Column({
    	field: "record_size_in_kb",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	recordSizeInKb?: number;

    @Column({
    	field: "number_of_common_tags",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonTags?: number;

    @Column({
    	field: "number_common_tagged_by",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberCommonTaggedBy?: number;

    @Column({
    	field: "number_of_common_joined_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonJoinedVariables?: number;

    @Column({
    	field: "number_of_common_ingredients",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonIngredients?: number;

    @Column({
    	field: "number_of_common_foods",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonFoods?: number;

    @Column({
    	field: "number_of_common_children",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonChildren?: number;

    @Column({
    	field: "number_of_common_parents",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonParents?: number;

    @Column({
    	field: "number_of_user_tags",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserTags?: number;

    @Column({
    	field: "number_user_tagged_by",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberUserTaggedBy?: number;

    @Column({
    	field: "number_of_user_joined_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserJoinedVariables?: number;

    @Column({
    	field: "number_of_user_ingredients",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserIngredients?: number;

    @Column({
    	field: "number_of_user_foods",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserFoods?: number;

    @Column({
    	field: "number_of_user_children",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserChildren?: number;

    @Column({
    	field: "number_of_user_parents",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserParents?: number;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200) 
    })
    @Index({
    	name: "user_variables_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	field: "is_goal",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isGoal?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	controllable?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	boring?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	predictor?: boolean;

}