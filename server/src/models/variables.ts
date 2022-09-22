import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface variablesAttributes {
    id?: number;
    name?: string;
    numberOfUserVariables?: number;
    variableCategoryId?: number;
    defaultUnitId?: number;
    defaultValue?: number;
    causeOnly?: boolean;
    clientId?: string;
    combinationOperation?: string;
    commonAlias?: string;
    createdAt?: Date;
    description?: string;
    durationOfAction?: number;
    fillingValue?: number;
    imageUrl?: string;
    informationalUrl?: string;
    ionIcon?: string;
    kurtosis?: number;
    maximumAllowedValue?: number;
    maximumRecordedValue?: number;
    mean?: number;
    median?: number;
    minimumAllowedValue?: number;
    minimumRecordedValue?: number;
    numberOfAggregateCorrelationsAsCause?: number;
    mostCommonOriginalUnitId?: number;
    mostCommonValue?: number;
    numberOfAggregateCorrelationsAsEffect?: number;
    numberOfUniqueValues?: number;
    onsetDelay?: number;
    outcome?: boolean;
    parentId?: number;
    price?: number;
    productUrl?: string;
    secondMostCommonValue?: number;
    skewness?: number;
    standardDeviation?: number;
    status?: string;
    thirdMostCommonValue?: number;
    updatedAt?: Date;
    variance?: number;
    mostCommonConnectorId?: number;
    synonyms?: string;
    wikipediaUrl?: string;
    brandName?: string;
    valence?: string;
    wikipediaTitle?: string;
    numberOfTrackingReminders?: number;
    upc_12?: string;
    upc_14?: string;
    numberCommonTaggedBy?: number;
    numberOfCommonTags?: number;
    deletedAt?: Date;
    mostCommonSourceName?: string;
    dataSourcesCount?: string;
    optimalValueMessage?: string;
    bestCauseVariableId?: number;
    bestEffectVariableId?: number;
    commonMaximumAllowedDailyValue?: number;
    commonMinimumAllowedDailyValue?: number;
    commonMinimumAllowedNonZeroValue?: number;
    minimumAllowedSecondsBetweenMeasurements?: number;
    averageSecondsBetweenMeasurements?: number;
    medianSecondsBetweenMeasurements?: number;
    numberOfRawMeasurementsWithTagsJoinsChildren?: number;
    additionalMetaData?: string;
    manualTracking?: boolean;
    analysisSettingsModifiedAt?: Date;
    newestDataAt?: Date;
    analysisRequestedAt?: Date;
    reasonForAnalysis?: string;
    analysisStartedAt?: Date;
    analysisEndedAt?: Date;
    userErrorMessage?: string;
    internalErrorMessage?: string;
    latestTaggedMeasurementStartAt?: Date;
    earliestTaggedMeasurementStartAt?: Date;
    latestNonTaggedMeasurementStartAt?: Date;
    earliestNonTaggedMeasurementStartAt?: Date;
    wpPostId?: string;
    numberOfSoftDeletedMeasurements?: number;
    charts?: object;
    creatorUserId?: string;
    bestAggregateCorrelationId?: number;
    fillingType?: string;
    numberOfOutcomePopulationStudies?: number;
    numberOfPredictorPopulationStudies?: number;
    numberOfApplicationsWhereOutcomeVariable?: number;
    numberOfApplicationsWherePredictorVariable?: number;
    numberOfCommonTagsWhereTagVariable?: number;
    numberOfCommonTagsWhereTaggedVariable?: number;
    numberOfOutcomeCaseStudies?: number;
    numberOfMeasurements?: number;
    numberOfPredictorCaseStudies?: number;
    numberOfStudiesWhereCauseVariable?: number;
    numberOfStudiesWhereEffectVariable?: number;
    numberOfTrackingReminderNotifications?: number;
    numberOfUserTagsWhereTagVariable?: number;
    numberOfUserTagsWhereTaggedVariable?: number;
    numberOfVariablesWhereBestCauseVariable?: number;
    numberOfVariablesWhereBestEffectVariable?: number;
    numberOfVotesWhereCauseVariable?: number;
    numberOfVotesWhereEffectVariable?: number;
    numberOfUsersWherePrimaryOutcomeVariable?: number;
    deletionReason?: string;
    maximumAllowedDailyValue?: number;
    recordSizeInKb?: number;
    numberOfCommonJoinedVariables?: number;
    numberOfCommonIngredients?: number;
    numberOfCommonFoods?: number;
    numberOfCommonChildren?: number;
    numberOfCommonParents?: number;
    numberOfUserJoinedVariables?: number;
    numberOfUserIngredients?: number;
    numberOfUserFoods?: number;
    numberOfUserChildren?: number;
    numberOfUserParents?: number;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
    isGoal?: boolean;
    controllable?: boolean;
    boring?: boolean;
    canonicalVariableId?: number;
    predictor?: boolean;
    sourceUrl?: string;
}

@Table({
	tableName: "variables",
	timestamps: false 
})
export class variables extends Model<variablesAttributes, variablesAttributes> implements variablesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('variables_id_seq'::regclass)") 
    })
    @Index({
    	name: "variables_pkey",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "IDX_cat_unit_public_name",
    	using: "btree",
    	unique: false 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(125),
    	comment: "User-defined variable display name" 
    })
    @Index({
    	name: "IDX_cat_unit_public_name",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "variables_public_name_number_of_user_variables_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "variables_name_UNIQUE",
    	using: "btree",
    	unique: true 
    })
    	name?: string;

    @Column({
    	field: "number_of_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of variables",
    	defaultValue: Sequelize.literal("0") 
    })
    @Index({
    	name: "IDX_cat_unit_public_name",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "variables_public_name_number_of_user_variables_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "public_deleted_at_synonyms_number_of_user_variables_index",
    	using: "btree",
    	unique: false 
    })
    	numberOfUserVariables?: number;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Variable category ID" 
    })
    @Index({
    	name: "IDX_cat_unit_public_name",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "default_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of the default unit for the variable" 
    })
    @Index({
    	name: "IDX_cat_unit_public_name",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "fk_variableDefaultUnit",
    	using: "btree",
    	unique: false 
    })
    	defaultUnitId?: number;

    @Column({
    	field: "default_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	defaultValue?: number;

    @Column({
    	field: "cause_only",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user" 
    })
    	causeOnly?: boolean;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "variables_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "combination_operation",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "How to combine values of this variable (for instance, to see a summary of the values over a month) SUM or MEAN" 
    })
    	combinationOperation?: string;

    @Column({
    	field: "common_alias",
    	allowNull: true,
    	type: DataType.STRING(125) 
    })
    	commonAlias?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	description?: string;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "How long the effect of a measurement in this variable lasts" 
    })
    	durationOfAction?: number;

    @Column({
    	field: "filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value for replacing null measurements",
    	defaultValue: Sequelize.literal("'-1'::double precision") 
    })
    	fillingValue?: number;

    @Column({
    	field: "image_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	imageUrl?: string;

    @Column({
    	field: "informational_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	informationalUrl?: string;

    @Column({
    	field: "ion_icon",
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	ionIcon?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Kurtosis" 
    })
    	kurtosis?: number;

    @Column({
    	field: "maximum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Maximum reasonable value for a single measurement for this variable in the default unit. " 
    })
    	maximumAllowedValue?: number;

    @Column({
    	field: "maximum_recorded_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Maximum recorded value of this variable" 
    })
    	maximumRecordedValue?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Mean" 
    })
    	mean?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Median" 
    })
    	median?: number;

    @Column({
    	field: "minimum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Minimum reasonable value for this variable (uses default unit)" 
    })
    	minimumAllowedValue?: number;

    @Column({
    	field: "minimum_recorded_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Minimum recorded value of this variable" 
    })
    	minimumRecordedValue?: number;

    @Column({
    	field: "number_of_aggregate_correlations_as_cause",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of aggregate correlations for which this variable is the cause variable" 
    })
    	numberOfAggregateCorrelationsAsCause?: number;

    @Column({
    	field: "most_common_original_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Most common Unit ID" 
    })
    	mostCommonOriginalUnitId?: number;

    @Column({
    	field: "most_common_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Most common value" 
    })
    	mostCommonValue?: number;

    @Column({
    	field: "number_of_aggregate_correlations_as_effect",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of aggregate correlations for which this variable is the effect variable" 
    })
    	numberOfAggregateCorrelationsAsEffect?: number;

    @Column({
    	field: "number_of_unique_values",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of unique values" 
    })
    	numberOfUniqueValues?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "How long it takes for a measurement in this variable to take effect" 
    })
    	onsetDelay?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables." 
    })
    	outcome?: boolean;

    @Column({
    	field: "parent_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of the parent variable if this variable has any parent" 
    })
    	parentId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Price" 
    })
    	price?: number;

    @Column({
    	field: "product_url",
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "Product URL" 
    })
    	productUrl?: string;

    @Column({
    	field: "second_most_common_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	secondMostCommonValue?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Skewness" 
    })
    	skewness?: number;

    @Column({
    	field: "standard_deviation",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Standard Deviation" 
    })
    	standardDeviation?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(25),
    	comment: "status",
    	defaultValue: Sequelize.literal("'WAITING'::character varying") 
    })
    	status?: string;

    @Column({
    	field: "third_most_common_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	thirdMostCommonValue?: number;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Variance" 
    })
    	variance?: number;

    @Column({
    	field: "most_common_connector_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	mostCommonConnectorId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(600),
    	comment: "The primary variable name and any synonyms for it. This field should be used for non-specific variable searches." 
    })
    @Index({
    	name: "public_deleted_at_synonyms_number_of_user_variables_index",
    	using: "btree",
    	unique: false 
    })
    	synonyms?: string;

    @Column({
    	field: "wikipedia_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	wikipediaUrl?: string;

    @Column({
    	field: "brand_name",
    	allowNull: true,
    	type: DataType.STRING(125) 
    })
    	brandName?: string;

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	upc_12?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	upc_14?: string;

    @Column({
    	field: "number_common_tagged_by",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberCommonTaggedBy?: number;

    @Column({
    	field: "number_of_common_tags",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCommonTags?: number;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "public_deleted_at_synonyms_number_of_user_variables_index",
    	using: "btree",
    	unique: false 
    })
    	deletedAt?: Date;

    @Column({
    	field: "most_common_source_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	mostCommonSourceName?: string;

    @Column({
    	field: "data_sources_count",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Array of connector or client measurement data source names as key with number of users as value" 
    })
    	dataSourcesCount?: string;

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
    @Index({
    	name: "variables_best_cause_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	bestCauseVariableId?: number;

    @Column({
    	field: "best_effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "variables_best_effect_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	bestEffectVariableId?: number;

    @Column({
    	field: "common_maximum_allowed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	commonMaximumAllowedDailyValue?: number;

    @Column({
    	field: "common_minimum_allowed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	commonMinimumAllowedDailyValue?: number;

    @Column({
    	field: "common_minimum_allowed_non_zero_value",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	commonMinimumAllowedNonZeroValue?: number;

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
    	field: "number_of_raw_measurements_with_tags_joins_children",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfRawMeasurementsWithTagsJoinsChildren?: number;

    @Column({
    	field: "additional_meta_data",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	additionalMetaData?: string;

    @Column({
    	field: "manual_tracking",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	manualTracking?: boolean;

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
    	name: "variables_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_soft_deleted_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Formula: update variables v \n                inner join (\n                    select measurements.variable_id, count(measurements.id) as number_of_soft_deleted_measurements \n                    from measurements\n                    where measurements.deleted_at is not null\n                    group by measurements.variable_id\n                    ) m on v.id = m.variable_id\n                set v.number_of_soft_deleted_measurements = m.number_of_soft_deleted_measurements\n            " 
    })
    	numberOfSoftDeletedMeasurements?: number;

    @Column({
    	allowNull: true,
    	type: DataType.JSON 
    })
    	charts?: object;

    @Column({
    	field: "creator_user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	creatorUserId?: string;

    @Column({
    	field: "best_aggregate_correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "variables_aggregate_correlations_id_fk",
    	using: "btree",
    	unique: false 
    })
    	bestAggregateCorrelationId?: number;

    @Column({
    	field: "filling_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	fillingType?: string;

    @Column({
    	field: "number_of_outcome_population_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Global Population Studies for this Cause Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, cause_variable_id\n                            from aggregate_correlations\n                            group by cause_variable_id\n                        )\n                        as grouped on variables.id = grouped.cause_variable_id\n                    set variables.number_of_outcome_population_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomePopulationStudies?: number;

    @Column({
    	field: "number_of_predictor_population_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Global Population Studies for this Effect Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, effect_variable_id\n                            from aggregate_correlations\n                            group by effect_variable_id\n                        )\n                        as grouped on variables.id = grouped.effect_variable_id\n                    set variables.number_of_predictor_population_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfPredictorPopulationStudies?: number;

    @Column({
    	field: "number_of_applications_where_outcome_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Applications for this Outcome Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, outcome_variable_id\n                            from applications\n                            group by outcome_variable_id\n                        )\n                        as grouped on variables.id = grouped.outcome_variable_id\n                    set variables.number_of_applications_where_outcome_variable = count(grouped.total)\n                ]\n                " 
    })
    	numberOfApplicationsWhereOutcomeVariable?: number;

    @Column({
    	field: "number_of_applications_where_predictor_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Applications for this Predictor Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, predictor_variable_id\n                            from applications\n                            group by predictor_variable_id\n                        )\n                        as grouped on variables.id = grouped.predictor_variable_id\n                    set variables.number_of_applications_where_predictor_variable = count(grouped.total)\n                ]\n                " 
    })
    	numberOfApplicationsWherePredictorVariable?: number;

    @Column({
    	field: "number_of_common_tags_where_tag_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Common Tags for this Tag Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, tag_variable_id\n                            from common_tags\n                            group by tag_variable_id\n                        )\n                        as grouped on variables.id = grouped.tag_variable_id\n                    set variables.number_of_common_tags_where_tag_variable = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCommonTagsWhereTagVariable?: number;

    @Column({
    	field: "number_of_common_tags_where_tagged_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Common Tags for this Tagged Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, tagged_variable_id\n                            from common_tags\n                            group by tagged_variable_id\n                        )\n                        as grouped on variables.id = grouped.tagged_variable_id\n                    set variables.number_of_common_tags_where_tagged_variable = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCommonTagsWhereTaggedVariable?: number;

    @Column({
    	field: "number_of_outcome_case_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Cause Variable.\n                [Formula: \n                    update variables\n                        left join (\n                            select count(id) as total, cause_variable_id\n                            from correlations\n                            group by cause_variable_id\n                        )\n                        as grouped on variables.id = grouped.cause_variable_id\n                    set variables.number_of_outcome_case_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomeCaseStudies?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, variable_id\n                            from measurements\n                            group by variable_id\n                        )\n                        as grouped on variables.id = grouped.variable_id\n                    set variables.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_predictor_case_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Effect Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, effect_variable_id\n                            from correlations\n                            group by effect_variable_id\n                        )\n                        as grouped on variables.id = grouped.effect_variable_id\n                    set variables.number_of_predictor_case_studies = count(grouped.total)]" 
    })
    	numberOfPredictorCaseStudies?: number;

    @Column({
    	field: "number_of_studies_where_cause_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Studies for this Cause Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, cause_variable_id\n                            from studies\n                            group by cause_variable_id\n                        )\n                        as grouped on variables.id = grouped.cause_variable_id\n                    set variables.number_of_studies_where_cause_variable = count(grouped.total)]" 
    })
    	numberOfStudiesWhereCauseVariable?: number;

    @Column({
    	field: "number_of_studies_where_effect_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Studies for this Effect Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, effect_variable_id\n                            from studies\n                            group by effect_variable_id\n                        )\n                        as grouped on variables.id = grouped.effect_variable_id\n                    set variables.number_of_studies_where_effect_variable = count(grouped.total)]" 
    })
    	numberOfStudiesWhereEffectVariable?: number;

    @Column({
    	field: "number_of_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Tracking Reminder Notifications for this Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, variable_id\n                            from tracking_reminder_notifications\n                            group by variable_id\n                        )\n                        as grouped on variables.id = grouped.variable_id\n                    set variables.number_of_tracking_reminder_notifications = count(grouped.total)]" 
    })
    	numberOfTrackingReminderNotifications?: number;

    @Column({
    	field: "number_of_user_tags_where_tag_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Tags for this Tag Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, tag_variable_id\n                            from user_tags\n                            group by tag_variable_id\n                        )\n                        as grouped on variables.id = grouped.tag_variable_id\n                    set variables.number_of_user_tags_where_tag_variable = count(grouped.total)]" 
    })
    	numberOfUserTagsWhereTagVariable?: number;

    @Column({
    	field: "number_of_user_tags_where_tagged_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Tags for this Tagged Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, tagged_variable_id\n                            from user_tags\n                            group by tagged_variable_id\n                        )\n                        as grouped on variables.id = grouped.tagged_variable_id\n                    set variables.number_of_user_tags_where_tagged_variable = count(grouped.total)]" 
    })
    	numberOfUserTagsWhereTaggedVariable?: number;

    @Column({
    	field: "number_of_variables_where_best_cause_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Best Cause Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, best_cause_variable_id\n                            from variables\n                            group by best_cause_variable_id\n                        )\n                        as grouped on variables.id = grouped.best_cause_variable_id\n                    set variables.number_of_variables_where_best_cause_variable = count(grouped.total)]" 
    })
    	numberOfVariablesWhereBestCauseVariable?: number;

    @Column({
    	field: "number_of_variables_where_best_effect_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Best Effect Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, best_effect_variable_id\n                            from variables\n                            group by best_effect_variable_id\n                        )\n                        as grouped on variables.id = grouped.best_effect_variable_id\n                    set variables.number_of_variables_where_best_effect_variable = count(grouped.total)]" 
    })
    	numberOfVariablesWhereBestEffectVariable?: number;

    @Column({
    	field: "number_of_votes_where_cause_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Votes for this Cause Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, cause_variable_id\n                            from votes\n                            group by cause_variable_id\n                        )\n                        as grouped on variables.id = grouped.cause_variable_id\n                    set variables.number_of_votes_where_cause_variable = count(grouped.total)]" 
    })
    	numberOfVotesWhereCauseVariable?: number;

    @Column({
    	field: "number_of_votes_where_effect_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Votes for this Effect Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(id) as total, effect_variable_id\n                            from votes\n                            group by effect_variable_id\n                        )\n                        as grouped on variables.id = grouped.effect_variable_id\n                    set variables.number_of_votes_where_effect_variable = count(grouped.total)]" 
    })
    	numberOfVotesWhereEffectVariable?: number;

    @Column({
    	field: "number_of_users_where_primary_outcome_variable",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Users for this Primary Outcome Variable.\n                    [Formula: update variables\n                        left join (\n                            select count(ID) as total, primary_outcome_variable_id\n                            from wp_users\n                            group by primary_outcome_variable_id\n                        )\n                        as grouped on variables.id = grouped.primary_outcome_variable_id\n                    set variables.number_of_users_where_primary_outcome_variable = count(grouped.total)]" 
    })
    	numberOfUsersWherePrimaryOutcomeVariable?: number;

    @Column({
    	field: "deletion_reason",
    	allowNull: true,
    	type: DataType.STRING(280),
    	comment: "The reason the variable was deleted." 
    })
    	deletionReason?: string;

    @Column({
    	field: "maximum_allowed_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The maximum allowed value in the default unit for measurements aggregated over a single day. " 
    })
    	maximumAllowedDailyValue?: number;

    @Column({
    	field: "record_size_in_kb",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	recordSizeInKb?: number;

    @Column({
    	field: "number_of_common_joined_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Joined variables are duplicate variables measuring the same thing. " 
    })
    	numberOfCommonJoinedVariables?: number;

    @Column({
    	field: "number_of_common_ingredients",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this variable can be used to synthetically generate ingredient measurements. " 
    })
    	numberOfCommonIngredients?: number;

    @Column({
    	field: "number_of_common_foods",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this ingredient variable can be synthetically generate by food measurements. " 
    })
    	numberOfCommonFoods?: number;

    @Column({
    	field: "number_of_common_children",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this parent category variable can be synthetically generated by measurements from its child variables. " 
    })
    	numberOfCommonChildren?: number;

    @Column({
    	field: "number_of_common_parents",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this parent category variable can be synthetically generated by measurements from its child variables. " 
    })
    	numberOfCommonParents?: number;

    @Column({
    	field: "number_of_user_joined_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Joined variables are duplicate variables measuring the same thing. This only includes ones created by users. " 
    })
    	numberOfUserJoinedVariables?: number;

    @Column({
    	field: "number_of_user_ingredients",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this variable can be used to synthetically generate ingredient measurements. This only includes ones created by users. " 
    })
    	numberOfUserIngredients?: number;

    @Column({
    	field: "number_of_user_foods",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this ingredient variable can be synthetically generate by food measurements. This only includes ones created by users. " 
    })
    	numberOfUserFoods?: number;

    @Column({
    	field: "number_of_user_children",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this parent category variable can be synthetically generated by measurements from its child variables. This only includes ones created by users. " 
    })
    	numberOfUserChildren?: number;

    @Column({
    	field: "number_of_user_parents",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Measurements for this parent category variable can be synthetically generated by measurements from its child variables. This only includes ones created by users. " 
    })
    	numberOfUserParents?: number;

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
    	name: "variables_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	field: "is_goal",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  The foods you eat are not generally an objective end in themselves. " 
    })
    	isGoal?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "You can control the foods you eat directly. However, symptom severity or weather is not directly controllable. " 
    })
    	controllable?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "The variable is boring if the average person would not be interested in its causes or effects. " 
    })
    	boring?: boolean;

    @Column({
    	field: "canonical_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "If a variable duplicates another but with a different name, set the canonical variable id to match the variable with the more appropriate name.  Then only the canonical variable will be displayed and all data for the duplicate variable will be included when fetching data for the canonical variable. " 
    })
    	canonicalVariableId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "predictor is true if the variable is a factor that could influence an outcome of interest" 
    })
    	predictor?: boolean;

    @Column({
    	field: "source_url",
    	allowNull: true,
    	type: DataType.STRING(2083),
    	comment: "URL for the website related to the database containing the info that was used to create this variable such as https://world.openfoodfacts.org or https://dsld.od.nih.gov/dsld " 
    })
    	sourceUrl?: string;

}