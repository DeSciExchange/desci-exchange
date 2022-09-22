import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpUsersAttributes {
    id?: string;
    clientId?: string;
    userLogin?: string;
    userEmail?: string;
    email?: string;
    userPass?: string;
    userNicename?: string;
    userUrl?: string;
    userRegistered?: Date;
    userActivationKey?: string;
    userStatus?: number;
    displayName?: string;
    avatarImage?: string;
    regProvider?: string;
    providerId?: string;
    providerToken?: string;
    rememberToken?: string;
    updatedAt?: Date;
    createdAt?: Date;
    refreshToken?: string;
    unsubscribed?: boolean;
    oldUser?: boolean;
    stripeActive?: boolean;
    stripeId?: string;
    stripeSubscription?: string;
    stripePlan?: string;
    lastFour?: string;
    trialEndsAt?: Date;
    subscriptionEndsAt?: Date;
    roles?: string;
    timeZoneOffset?: number;
    deletedAt?: Date;
    earliestReminderTime?: string;
    latestReminderTime?: string;
    pushNotificationsEnabled?: boolean;
    trackLocation?: boolean;
    combineNotifications?: boolean;
    sendReminderNotificationEmails?: boolean;
    sendPredictorEmails?: boolean;
    getPreviewBuilds?: boolean;
    subscriptionProvider?: string;
    lastSmsTrackingReminderNotificationId?: string;
    smsNotificationsEnabled?: boolean;
    phoneVerificationCode?: string;
    phoneNumber?: string;
    hasAndroidApp?: boolean;
    hasIosApp?: boolean;
    hasChromeExtension?: boolean;
    referrerUserId?: string;
    address?: string;
    birthday?: string;
    country?: string;
    coverPhoto?: string;
    currency?: string;
    firstName?: string;
    gender?: string;
    language?: string;
    lastName?: string;
    state?: string;
    tagLine?: string;
    verified?: string;
    zipCode?: string;
    cardBrand?: string;
    cardLastFour?: string;
    lastLoginAt?: Date;
    timezone?: string;
    numberOfCorrelations?: number;
    numberOfConnections?: number;
    numberOfTrackingReminders?: number;
    numberOfUserVariables?: number;
    numberOfRawMeasurementsWithTags?: number;
    numberOfRawMeasurementsWithTagsAtLastCorrelation?: number;
    numberOfVotes?: number;
    numberOfStudies?: number;
    lastCorrelationAt?: Date;
    lastEmailAt?: Date;
    lastPushAt?: Date;
    primaryOutcomeVariableId?: number;
    spam?: number;
    deleted?: number;
    wpPostId?: string;
    analysisEndedAt?: Date;
    analysisRequestedAt?: Date;
    analysisStartedAt?: Date;
    internalErrorMessage?: string;
    newestDataAt?: Date;
    reasonForAnalysis?: string;
    userErrorMessage?: string;
    status?: string;
    analysisSettingsModifiedAt?: Date;
    numberOfApplications?: number;
    numberOfOauthAccessTokens?: number;
    numberOfOauthAuthorizationCodes?: number;
    numberOfOauthClients?: number;
    numberOfOauthRefreshTokens?: number;
    numberOfButtonClicks?: number;
    numberOfCollaborators?: number;
    numberOfConnectorImports?: number;
    numberOfConnectorRequests?: number;
    numberOfMeasurementExports?: number;
    numberOfMeasurementImports?: number;
    numberOfMeasurements?: number;
    numberOfSentEmails?: number;
    numberOfSubscriptions?: number;
    numberOfTrackingReminderNotifications?: number;
    numberOfUserTags?: number;
    numberOfUsersWhereReferrerUser?: number;
    shareAllData?: boolean;
    deletionReason?: string;
    password?: string;
    numberOfPatients?: number;
    isPublic?: boolean;
    sortOrder?: number;
    slug?: string;
    numberOfSharers?: number;
    numberOfTrustees?: number;
    ethAddress?: string;
}

@Table({
	tableName: "wp_users",
	timestamps: false 
})
export class wpUsers extends Model<wpUsersAttributes, wpUsersAttributes> implements wpUsersAttributes {

    @Column({
    	field: "ID",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each user.",
    	defaultValue: Sequelize.literal("nextval('\"wp_users_ID_seq\"'::regclass)") 
    })
    @Index({
    	name: "wp_users_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

    @Column({
    	field: "user_login",
    	allowNull: true,
    	type: DataType.STRING(60),
    	comment: "Unique username for the user." 
    })
    @Index({
    	name: "user_login_key",
    	using: "btree",
    	unique: true 
    })
    	userLogin?: string;

    @Column({
    	field: "user_email",
    	allowNull: true,
    	type: DataType.STRING(100),
    	comment: "Email address of the user." 
    })
    @Index({
    	name: "user_email",
    	using: "btree",
    	unique: true 
    })
    	userEmail?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(320),
    	comment: "Needed for laravel password resets because WP user_email field will not work" 
    })
    	email?: string;

    @Column({
    	field: "user_pass",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Hash of the user’s password." 
    })
    	userPass?: string;

    @Column({
    	field: "user_nicename",
    	allowNull: true,
    	type: DataType.STRING(50),
    	comment: "Display name for the user." 
    })
    @Index({
    	name: "user_nicename",
    	using: "btree",
    	unique: false 
    })
    	userNicename?: string;

    @Column({
    	field: "user_url",
    	allowNull: true,
    	type: DataType.STRING(100),
    	defaultValue: Sequelize.literal("''::character varying") 
    })
    	userUrl?: string;

    @Column({
    	field: "user_registered",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "Time and date the user registered." 
    })
    	userRegistered?: Date;

    @Column({
    	field: "user_activation_key",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Used for resetting passwords." 
    })
    	userActivationKey?: string;

    @Column({
    	field: "user_status",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Was used in Multisite pre WordPress 3.0 to indicate a spam user.",
    	defaultValue: Sequelize.literal("0") 
    })
    	userStatus?: number;

    @Column({
    	field: "display_name",
    	allowNull: true,
    	type: DataType.STRING(250),
    	comment: "Desired name to be used publicly in the site, can be user_login, user_nicename, first name or last name defined in wp_usermeta." 
    })
    	displayName?: string;

    @Column({
    	field: "avatar_image",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	avatarImage?: string;

    @Column({
    	field: "reg_provider",
    	allowNull: true,
    	type: DataType.STRING(25),
    	comment: "Registered via" 
    })
    	regProvider?: string;

    @Column({
    	field: "provider_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Unique id from provider" 
    })
    	providerId?: string;

    @Column({
    	field: "provider_token",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Access token from provider" 
    })
    	providerToken?: string;

    @Column({
    	field: "remember_token",
    	allowNull: true,
    	type: DataType.STRING(100),
    	comment: "Remember me token" 
    })
    	rememberToken?: string;

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
    	field: "refresh_token",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Refresh token from provider" 
    })
    	refreshToken?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Indicates whether the use has specified that they want no emails or any form of communication. ",
    	defaultValue: Sequelize.literal("false") 
    })
    	unsubscribed?: boolean;

    @Column({
    	field: "old_user",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	oldUser?: boolean;

    @Column({
    	field: "stripe_active",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	stripeActive?: boolean;

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
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "An array containing all roles possessed by the user.  This indicates whether the use has roles such as administrator, developer, patient, student, researcher or physician. " 
    })
    	roles?: string;

    @Column({
    	field: "time_zone_offset",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "The time-zone offset is the difference, in minutes, between UTC and local time. Note that this means that the offset is positive if the local timezone is behind UTC (i.e. UTC−06:00 Central) and negative if it is ahead." 
    })
    	timeZoneOffset?: number;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "earliest_reminder_time",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Earliest time of day at which reminders should appear in HH:MM:SS format in user timezone",
    	defaultValue: Sequelize.literal("'07:00:00'::time without time zone") 
    })
    	earliestReminderTime?: string;

    @Column({
    	field: "latest_reminder_time",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Latest time of day at which reminders should appear in HH:MM:SS format in user timezone",
    	defaultValue: Sequelize.literal("'21:00:00'::time without time zone") 
    })
    	latestReminderTime?: string;

    @Column({
    	field: "push_notifications_enabled",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we send the user push notifications?",
    	defaultValue: Sequelize.literal("true") 
    })
    	pushNotificationsEnabled?: boolean;

    @Column({
    	field: "track_location",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Set to true if the user wants to track their location",
    	defaultValue: Sequelize.literal("false") 
    })
    	trackLocation?: boolean;

    @Column({
    	field: "combine_notifications",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we combine push notifications or send one for each tracking reminder notification?",
    	defaultValue: Sequelize.literal("false") 
    })
    	combineNotifications?: boolean;

    @Column({
    	field: "send_reminder_notification_emails",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we send reminder notification emails?",
    	defaultValue: Sequelize.literal("false") 
    })
    	sendReminderNotificationEmails?: boolean;

    @Column({
    	field: "send_predictor_emails",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we send predictor emails?",
    	defaultValue: Sequelize.literal("true") 
    })
    	sendPredictorEmails?: boolean;

    @Column({
    	field: "get_preview_builds",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we send preview builds of the mobile application?",
    	defaultValue: Sequelize.literal("false") 
    })
    	getPreviewBuilds?: boolean;

    @Column({
    	field: "subscription_provider",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	subscriptionProvider?: string;

    @Column({
    	field: "last_sms_tracking_reminder_notification_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	lastSmsTrackingReminderNotificationId?: string;

    @Column({
    	field: "sms_notifications_enabled",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Should we send tracking reminder notifications via tex messages?",
    	defaultValue: Sequelize.literal("false") 
    })
    	smsNotificationsEnabled?: boolean;

    @Column({
    	field: "phone_verification_code",
    	allowNull: true,
    	type: DataType.STRING(25) 
    })
    	phoneVerificationCode?: string;

    @Column({
    	field: "phone_number",
    	allowNull: true,
    	type: DataType.STRING(25) 
    })
    	phoneNumber?: string;

    @Column({
    	field: "has_android_app",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	hasAndroidApp?: boolean;

    @Column({
    	field: "has_ios_app",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	hasIosApp?: boolean;

    @Column({
    	field: "has_chrome_extension",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	hasChromeExtension?: boolean;

    @Column({
    	field: "referrer_user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "wp_users_wp_users_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	referrerUserId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	address?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	birthday?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	country?: string;

    @Column({
    	field: "cover_photo",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	coverPhoto?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	currency?: string;

    @Column({
    	field: "first_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	firstName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	gender?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	language?: string;

    @Column({
    	field: "last_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	lastName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	state?: string;

    @Column({
    	field: "tag_line",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	tagLine?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	verified?: string;

    @Column({
    	field: "zip_code",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	zipCode?: string;

    @Column({
    	field: "card_brand",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	cardBrand?: string;

    @Column({
    	field: "card_last_four",
    	allowNull: true,
    	type: DataType.STRING(4) 
    })
    	cardLastFour?: string;

    @Column({
    	field: "last_login_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastLoginAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	timezone?: string;

    @Column({
    	field: "number_of_correlations",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCorrelations?: number;

    @Column({
    	field: "number_of_connections",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfConnections?: number;

    @Column({
    	field: "number_of_tracking_reminders",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfTrackingReminders?: number;

    @Column({
    	field: "number_of_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfUserVariables?: number;

    @Column({
    	field: "number_of_raw_measurements_with_tags",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfRawMeasurementsWithTags?: number;

    @Column({
    	field: "number_of_raw_measurements_with_tags_at_last_correlation",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfRawMeasurementsWithTagsAtLastCorrelation?: number;

    @Column({
    	field: "number_of_votes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfVotes?: number;

    @Column({
    	field: "number_of_studies",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfStudies?: number;

    @Column({
    	field: "last_correlation_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastCorrelationAt?: Date;

    @Column({
    	field: "last_email_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastEmailAt?: Date;

    @Column({
    	field: "last_push_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	lastPushAt?: Date;

    @Column({
    	field: "primary_outcome_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "wp_users_variables_id_fk",
    	using: "btree",
    	unique: false 
    })
    	primaryOutcomeVariableId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'0'::smallint") 
    })
    	spam?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("'0'::smallint") 
    })
    	deleted?: number;

    @Column({
    	field: "wp_post_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "wp_users_wp_posts_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	wpPostId?: string;

    @Column({
    	field: "analysis_ended_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisEndedAt?: Date;

    @Column({
    	field: "analysis_requested_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisRequestedAt?: Date;

    @Column({
    	field: "analysis_started_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	analysisStartedAt?: Date;

    @Column({
    	field: "internal_error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	internalErrorMessage?: string;

    @Column({
    	field: "newest_data_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	newestDataAt?: Date;

    @Column({
    	field: "reason_for_analysis",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	reasonForAnalysis?: string;

    @Column({
    	field: "user_error_message",
    	allowNull: true,
    	type: DataType.STRING 
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
    	field: "number_of_applications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Applications for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from applications\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_applications = count(grouped.total)\n                ]\n                " 
    })
    	numberOfApplications?: number;

    @Column({
    	field: "number_of_oauth_access_tokens",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Access Tokens for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(access_token) as total, user_id\n                            from oa_access_tokens\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_oauth_access_tokens = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthAccessTokens?: number;

    @Column({
    	field: "number_of_oauth_authorization_codes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Authorization Codes for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(authorization_code) as total, user_id\n                            from oa_authorization_codes\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_oauth_authorization_codes = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthAuthorizationCodes?: number;

    @Column({
    	field: "number_of_oauth_clients",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Clients for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(client_id) as total, user_id\n                            from oa_clients\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_oauth_clients = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthClients?: number;

    @Column({
    	field: "number_of_oauth_refresh_tokens",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Refresh Tokens for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(refresh_token) as total, user_id\n                            from oa_refresh_tokens\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_oauth_refresh_tokens = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthRefreshTokens?: number;

    @Column({
    	field: "number_of_button_clicks",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Button Clicks for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from button_clicks\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_button_clicks = count(grouped.total)\n                ]\n                " 
    })
    	numberOfButtonClicks?: number;

    @Column({
    	field: "number_of_collaborators",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Collaborators for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from collaborators\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_collaborators = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCollaborators?: number;

    @Column({
    	field: "number_of_connector_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Imports for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from connector_imports\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_connector_imports = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorImports?: number;

    @Column({
    	field: "number_of_connector_requests",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Requests for this User.\n                [Formula: \n                    update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from connector_requests\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_connector_requests = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorRequests?: number;

    @Column({
    	field: "number_of_measurement_exports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurement Exports for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from measurement_exports\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_measurement_exports = count(grouped.total)]" 
    })
    	numberOfMeasurementExports?: number;

    @Column({
    	field: "number_of_measurement_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurement Imports for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from measurement_imports\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_measurement_imports = count(grouped.total)]" 
    })
    	numberOfMeasurementImports?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from measurements\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_sent_emails",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Sent Emails for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from sent_emails\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_sent_emails = count(grouped.total)]" 
    })
    	numberOfSentEmails?: number;

    @Column({
    	field: "number_of_subscriptions",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Subscriptions for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from subscriptions\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_subscriptions = count(grouped.total)]" 
    })
    	numberOfSubscriptions?: number;

    @Column({
    	field: "number_of_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Tracking Reminder Notifications for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from tracking_reminder_notifications\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_tracking_reminder_notifications = count(grouped.total)]" 
    })
    	numberOfTrackingReminderNotifications?: number;

    @Column({
    	field: "number_of_user_tags",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Tags for this User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(id) as total, user_id\n                            from user_tags\n                            group by user_id\n                        )\n                        as grouped on wp_users.ID = grouped.user_id\n                    set wp_users.number_of_user_tags = count(grouped.total)]" 
    })
    	numberOfUserTags?: number;

    @Column({
    	field: "number_of_users_where_referrer_user",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Users for this Referrer User.\n                    [Formula: update wp_users\n                        left join (\n                            select count(ID) as total, referrer_user_id\n                            from wp_users\n                            group by referrer_user_id\n                        )\n                        as grouped on wp_users.ID = grouped.referrer_user_id\n                    set wp_users.number_of_users_where_referrer_user = count(grouped.total)]" 
    })
    	numberOfUsersWhereReferrerUser?: number;

    @Column({
    	field: "share_all_data",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	shareAllData?: boolean;

    @Column({
    	field: "deletion_reason",
    	allowNull: true,
    	type: DataType.STRING(280),
    	comment: "The reason the user deleted their account." 
    })
    	deletionReason?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	password?: string;

    @Column({
    	field: "number_of_patients",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfPatients?: number;

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
    	name: "wp_users_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

    @Column({
    	field: "number_of_sharers",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of people sharing their data with you." 
    })
    	numberOfSharers?: number;

    @Column({
    	field: "number_of_trustees",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of people that you are sharing your data with." 
    })
    	numberOfTrustees?: number;

    @Column({
    	field: "eth_address",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "wp_users_eth_address_index",
    	using: "btree",
    	unique: false 
    })
    	ethAddress?: string;

}