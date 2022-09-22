import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface applicationsAttributes {
    id?: number;
    organizationId?: number;
    clientId?: string;
    appDisplayName?: string;
    appDescription?: string;
    longDescription?: string;
    userId?: string;
    iconUrl?: string;
    textLogo?: string;
    splashScreen?: string;
    homepageUrl?: string;
    appType?: string;
    appDesign?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    enabled?: number;
    stripeActive?: number;
    stripeId?: string;
    stripeSubscription?: string;
    stripePlan?: string;
    lastFour?: string;
    trialEndsAt?: Date;
    subscriptionEndsAt?: Date;
    companyName?: string;
    country?: string;
    address?: string;
    state?: string;
    city?: string;
    zip?: string;
    planId?: number;
    exceedingCallCount?: number;
    exceedingCallCharge?: string;
    study?: number;
    billingEnabled?: number;
    outcomeVariableId?: number;
    predictorVariableId?: number;
    physician?: number;
    additionalSettings?: string;
    appStatus?: string;
    buildEnabled?: boolean;
    wpPostId?: string;
    numberOfCollaboratorsWhereApp?: number;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
}

@Table({
	tableName: "applications",
	timestamps: false 
})
export class applications extends Model<applicationsAttributes, applicationsAttributes> implements applicationsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('applications_id_seq'::regclass)") 
    })
    @Index({
    	name: "applications_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "organization_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	organizationId?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "applications_client_id_unique",
    	using: "btree",
    	unique: true 
    })
    	clientId?: string;

    @Column({
    	field: "app_display_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	appDisplayName?: string;

    @Column({
    	field: "app_description",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	appDescription?: string;

    @Column({
    	field: "long_description",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	longDescription?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "applications_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "icon_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	iconUrl?: string;

    @Column({
    	field: "text_logo",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	textLogo?: string;

    @Column({
    	field: "splash_screen",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	splashScreen?: string;

    @Column({
    	field: "homepage_url",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	homepageUrl?: string;

    @Column({
    	field: "app_type",
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	appType?: string;

    @Column({
    	field: "app_design",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	appDesign?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'1'::smallint") 
    })
    	enabled?: number;

    @Column({
    	field: "stripe_active",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'0'::smallint") 
    })
    	stripeActive?: number;

    @Column({
    	field: "stripe_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	stripeId?: string;

    @Column({
    	field: "stripe_subscription",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	stripeSubscription?: string;

    @Column({
    	field: "stripe_plan",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	stripePlan?: string;

    @Column({
    	field: "last_four",
    	allowNull: true,
    	type: DataType.STRING(4) 
    })
    	lastFour?: string;

    @Column({
    	field: "trial_ends_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	trialEndsAt?: Date;

    @Column({
    	field: "subscription_ends_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	subscriptionEndsAt?: Date;

    @Column({
    	field: "company_name",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	companyName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	country?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	address?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	state?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	city?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	zip?: string;

    @Column({
    	field: "plan_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	planId?: number;

    @Column({
    	field: "exceeding_call_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("0") 
    })
    	exceedingCallCount?: number;

    @Column({
    	field: "exceeding_call_charge",
    	allowNull: true,
    	type: DataType.DECIMAL(16,2) 
    })
    	exceedingCallCharge?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'0'::smallint") 
    })
    	study?: number;

    @Column({
    	field: "billing_enabled",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'1'::smallint") 
    })
    	billingEnabled?: number;

    @Column({
    	field: "outcome_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "applications_outcome_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	outcomeVariableId?: number;

    @Column({
    	field: "predictor_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "applications_predictor_variable_id_fk",
    	using: "btree",
    	unique: false 
    })
    	predictorVariableId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'0'::smallint") 
    })
    	physician?: number;

    @Column({
    	field: "additional_settings",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	additionalSettings?: string;

    @Column({
    	field: "app_status",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "The current build status for the iOS app, Android app, and Chrome extension." 
    })
    	appStatus?: string;

    @Column({
    	field: "build_enabled",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	buildEnabled?: boolean;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "applications_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "number_of_collaborators_where_app",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Collaborators for this App.\n                [Formula: \n                    update applications\n                        left join (\n                            select count(id) as total, app_id\n                            from collaborators\n                            group by app_id\n                        )\n                        as grouped on applications.id = grouped.app_id\n                    set applications.number_of_collaborators_where_app = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCollaboratorsWhereApp?: number;

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
    	name: "applications_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

}