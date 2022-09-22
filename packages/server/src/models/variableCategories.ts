import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface variableCategoriesAttributes {
    id?: number;
    name?: string;
    fillingValue?: number;
    maximumAllowedValue?: number;
    minimumAllowedValue?: number;
    durationOfAction?: number;
    onsetDelay?: number;
    combinationOperation?: string;
    causeOnly?: boolean;
    outcome?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    imageUrl?: string;
    defaultUnitId?: number;
    deletedAt?: Date;
    manualTracking?: boolean;
    minimumAllowedSecondsBetweenMeasurements?: number;
    averageSecondsBetweenMeasurements?: number;
    medianSecondsBetweenMeasurements?: number;
    wpPostId?: string;
    fillingType?: string;
    numberOfOutcomePopulationStudies?: number;
    numberOfPredictorPopulationStudies?: number;
    numberOfOutcomeCaseStudies?: number;
    numberOfPredictorCaseStudies?: number;
    numberOfMeasurements?: number;
    numberOfUserVariables?: number;
    numberOfVariables?: number;
    isPublic?: boolean;
    synonyms?: string;
    amazonProductCategory?: string;
    boring?: boolean;
    effectOnly?: boolean;
    predictor?: boolean;
    fontAwesome?: string;
    ionIcon?: string;
    moreInfo?: string;
    valence?: string;
    nameSingular?: string;
    sortOrder?: number;
    slug?: string;
    isGoal?: string;
    controllable?: string;
}

@Table({
	tableName: "variable_categories",
	timestamps: false 
})
export class variableCategories extends Model<variableCategoriesAttributes, variableCategoriesAttributes> implements variableCategoriesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('variable_categories_id_seq'::regclass)") 
    })
    @Index({
    	name: "variable_categories_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64),
    	comment: "Name of the category" 
    })
    	name?: string;

    @Column({
    	field: "filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Value for replacing null measurements" 
    })
    	fillingValue?: number;

    @Column({
    	field: "maximum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Maximum recorded value of this category" 
    })
    	maximumAllowedValue?: number;

    @Column({
    	field: "minimum_allowed_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "Minimum recorded value of this category" 
    })
    	minimumAllowedValue?: number;

    @Column({
    	field: "duration_of_action",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "How long the effect of a measurement in this variable lasts",
    	defaultValue: Sequelize.literal("86400") 
    })
    	durationOfAction?: number;

    @Column({
    	field: "onset_delay",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "How long it takes for a measurement in this variable to take effect",
    	defaultValue: Sequelize.literal("0") 
    })
    	onsetDelay?: number;

    @Column({
    	field: "combination_operation",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "How to combine values of this variable (for instance, to see a summary of the values over a month) SUM or MEAN",
    	defaultValue: Sequelize.literal("'SUM'::character varying") 
    })
    	combinationOperation?: string;

    @Column({
    	field: "cause_only",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "A value of 1 indicates that this category is generally a cause in a causal relationship.  An example of a causeOnly category would be a category such as Work which would generally not be influenced by the behaviour of the user",
    	defaultValue: Sequelize.literal("false") 
    })
    	causeOnly?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	outcome?: boolean;

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
    	field: "image_url",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Image URL" 
    })
    	imageUrl?: string;

    @Column({
    	field: "default_unit_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of the default unit for the category",
    	defaultValue: Sequelize.literal("'12'::smallint") 
    })
    @Index({
    	name: "variable_categories_default_unit_id_fk",
    	using: "btree",
    	unique: false 
    })
    	defaultUnitId?: number;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "manual_tracking",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we include in manual tracking searches?",
    	defaultValue: Sequelize.literal("false") 
    })
    	manualTracking?: boolean;

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
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "variable_categories_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

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
    	comment: "Number of Global Population Studies for this Cause Variable Category.\n                [Formula: \n                    update variable_categories\n                        left join (\n                            select count(id) as total, cause_variable_category_id\n                            from aggregate_correlations\n                            group by cause_variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.cause_variable_category_id\n                    set variable_categories.number_of_outcome_population_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomePopulationStudies?: number;

    @Column({
    	field: "number_of_predictor_population_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Global Population Studies for this Effect Variable Category.\n                [Formula: \n                    update variable_categories\n                        left join (\n                            select count(id) as total, effect_variable_category_id\n                            from aggregate_correlations\n                            group by effect_variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.effect_variable_category_id\n                    set variable_categories.number_of_predictor_population_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfPredictorPopulationStudies?: number;

    @Column({
    	field: "number_of_outcome_case_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Cause Variable Category.\n                [Formula: \n                    update variable_categories\n                        left join (\n                            select count(id) as total, cause_variable_category_id\n                            from correlations\n                            group by cause_variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.cause_variable_category_id\n                    set variable_categories.number_of_outcome_case_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomeCaseStudies?: number;

    @Column({
    	field: "number_of_predictor_case_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Effect Variable Category.\n                [Formula: \n                    update variable_categories\n                        left join (\n                            select count(id) as total, effect_variable_category_id\n                            from correlations\n                            group by effect_variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.effect_variable_category_id\n                    set variable_categories.number_of_predictor_case_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfPredictorCaseStudies?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Variable Category.\n                    [Formula: update variable_categories\n                        left join (\n                            select count(id) as total, variable_category_id\n                            from measurements\n                            group by variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.variable_category_id\n                    set variable_categories.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Variables for this Variable Category.\n                    [Formula: update variable_categories\n                        left join (\n                            select count(id) as total, variable_category_id\n                            from user_variables\n                            group by variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.variable_category_id\n                    set variable_categories.number_of_user_variables = count(grouped.total)]" 
    })
    	numberOfUserVariables?: number;

    @Column({
    	field: "number_of_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Variable Category.\n                    [Formula: update variable_categories\n                        left join (\n                            select count(id) as total, variable_category_id\n                            from variables\n                            group by variable_category_id\n                        )\n                        as grouped on variable_categories.id = grouped.variable_category_id\n                    set variable_categories.number_of_variables = count(grouped.total)]" 
    })
    	numberOfVariables?: number;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	isPublic?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(600),
    	comment: "The primary name and any synonyms for it. This field should be used for non-specific searches." 
    })
    	synonyms?: string;

    @Column({
    	field: "amazon_product_category",
    	allowNull: true,
    	type: DataType.STRING(100),
    	comment: "The Amazon equivalent product category." 
    })
    	amazonProductCategory?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "If boring, the category should be hidden by default." 
    })
    	boring?: boolean;

    @Column({
    	field: "effect_only",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "effect_only is true if people would never be interested in the effects of most variables in the category." 
    })
    	effectOnly?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Predictor is true if people would like to know the effects of most variables in the category." 
    })
    	predictor?: boolean;

    @Column({
    	field: "font_awesome",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	fontAwesome?: string;

    @Column({
    	field: "ion_icon",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	ionIcon?: string;

    @Column({
    	field: "more_info",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "More information displayed when the user is adding reminders and going through the onboarding process. " 
    })
    	moreInfo?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Set the valence positive if more is better for all the variables in the category, negative if more is bad, and neutral if none of the variables have such a valence. Valence is null if there is not a consistent valence for all variables in the category. " 
    })
    	valence?: string;

    @Column({
    	field: "name_singular",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "The singular version of the name." 
    })
    	nameSingular?: string;

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
    	name: "vc_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	field: "is_goal",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  The foods you eat are not generally an objective end in themselves. " 
    })
    	isGoal?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "The effect of a food on the severity of a symptom is useful because you can control the predictor directly. However, the effect of a symptom on the foods you eat is not very useful.  Symptom severity is not directly controllable. " 
    })
    	controllable?: string;

}