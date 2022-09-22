import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface cohortStudiesAttributes {
    id: number;
    cohortStudyStatisticsId?: number;
    causeVariableId?: number;
    effectVariableId?: number;
    userId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    analysisParameters?: string;
    userStudyText?: string;
    userTitle?: string;
    studyStatus?: string;
    commentStatus?: string;
    studyPassword?: string;
    studyImages?: string;
    updatedAt?: Date;
    clientId?: string;
    publishedAt?: Date;
    wpPostId?: number;
    cohortCorrelationId?: number;
    newestDataAt?: Date;
    analysisRequestedAt?: Date;
    reasonForAnalysis?: string;
    analysisEndedAt?: Date;
    analysisStartedAt?: Date;
    internalErrorMessage?: string;
    userErrorMessage?: string;
    status?: string;
    analysisSettingsModifiedAt?: Date;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
}

@Table({
	tableName: "cohort_studies",
	timestamps: false 
})
export class cohortStudies extends Model<cohortStudiesAttributes, cohortStudiesAttributes> implements cohortStudiesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	comment: "Unique ID for the cohort study" 
    })
    @Index({
    	name: "cohort_studies_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: number;

    @Column({
    	field: "cohort_study_statistics_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ID of associated analytical results" 
    })
    	cohortStudyStatisticsId?: number;

    @Column({
    	field: "cause_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Variable ID of the predictor variable" 
    })
    @Index({
    	name: "cohort_studies_cause_variable_id",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "cause_variable_id",
    	using: "btree",
    	unique: false 
    })
    	causeVariableId?: number;

    @Column({
    	field: "effect_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Variable ID of the outcome variable" 
    })
    @Index({
    	name: "effect_variable_id",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "cohort_studies_effect_variable_id",
    	using: "btree",
    	unique: false 
    })
    	effectVariableId?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "User ID of the principal investigator for the study" 
    })
    @Index({
    	name: "user_cause_effect",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

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

    @Column({
    	field: "analysis_parameters",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Additional parameters for the study such as experiment_end_time, experiment_start_time, cause_variable_filling_value, effect_variable_filling_value" 
    })
    	analysisParameters?: string;

    @Column({
    	field: "user_study_text",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Overrides auto-generated study text" 
    })
    	userStudyText?: string;

    @Column({
    	field: "user_title",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	userTitle?: string;

    @Column({
    	field: "study_status",
    	allowNull: true,
    	type: DataType.STRING(20),
    	defaultValue: Sequelize.literal("'publish'::character varying") 
    })
    	studyStatus?: string;

    @Column({
    	field: "comment_status",
    	allowNull: true,
    	type: DataType.STRING(20),
    	defaultValue: Sequelize.literal("'open'::character varying") 
    })
    	commentStatus?: string;

    @Column({
    	field: "study_password",
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	studyPassword?: string;

    @Column({
    	field: "study_images",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Provided images will override the auto-generated images" 
    })
    	studyImages?: string;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "cohort_studies_client_id_fk",
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
    	type: DataType.INTEGER 
    })
    	wpPostId?: number;

    @Column({
    	field: "cohort_correlation_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	cohortCorrelationId?: number;

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
    	field: "analysis_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisEndedAt?: Date;

    @Column({
    	field: "analysis_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisStartedAt?: Date;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	internalErrorMessage?: string;

    @Column({
    	field: "user_error_message",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	userErrorMessage?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(25) 
    })
    	status?: string;

    @Column({
    	field: "analysis_settings_modified_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisSettingsModifiedAt?: Date;

    @Column({
    	field: "is_public",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Indicates whether the study is private or should be publicly displayed." 
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
    	name: "cohort_studies_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

}