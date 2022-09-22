import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oaClientsAttributes {
    clientId: string;
    clientSecret?: string;
    redirectUri?: string;
    grantTypes?: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    iconUrl?: string;
    appIdentifier?: string;
    deletedAt?: Date;
    earliestMeasurementStartAt?: Date;
    latestMeasurementStartAt?: Date;
    numberOfAggregateCorrelations?: number;
    numberOfApplications?: number;
    numberOfOauthAccessTokens?: number;
    numberOfOauthAuthorizationCodes?: number;
    numberOfOauthRefreshTokens?: number;
    numberOfButtonClicks?: number;
    numberOfCollaborators?: number;
    numberOfCommonTags?: number;
    numberOfConnections?: number;
    numberOfConnectorImports?: number;
    numberOfConnectors?: number;
    numberOfCorrelations?: number;
    numberOfMeasurementExports?: number;
    numberOfMeasurementImports?: number;
    numberOfMeasurements?: number;
    numberOfSentEmails?: number;
    numberOfStudies?: number;
    numberOfTrackingReminderNotifications?: number;
    numberOfTrackingReminders?: number;
    numberOfUserTags?: number;
    numberOfUserVariables?: number;
    numberOfVariables?: number;
    numberOfVotes?: number;
}

@Table({
	tableName: "oa_clients",
	timestamps: false 
})
export class oaClients extends Model<oaClientsAttributes, oaClientsAttributes> implements oaClientsAttributes {

    @Column({
    	field: "client_id",
    	primaryKey: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "oa_clients_pkey",
    	using: "btree",
    	unique: true 
    })
    	clientId!: string;

    @Column({
    	field: "client_secret",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	clientSecret?: string;

    @Column({
    	field: "redirect_uri",
    	allowNull: true,
    	type: DataType.STRING(2000) 
    })
    	redirectUri?: string;

    @Column({
    	field: "grant_types",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	grantTypes?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "bshaffer_oauth_clients_user_id_fk",
    	using: "btree",
    	unique: false 
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
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	field: "icon_url",
    	allowNull: true,
    	type: DataType.STRING(2083) 
    })
    	iconUrl?: string;

    @Column({
    	field: "app_identifier",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	appIdentifier?: string;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "earliest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	earliestMeasurementStartAt?: Date;

    @Column({
    	field: "latest_measurement_start_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	latestMeasurementStartAt?: Date;

    @Column({
    	field: "number_of_aggregate_correlations",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Global Population Studies for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from aggregate_correlations\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_aggregate_correlations = count(grouped.total)\n                ]\n                " 
    })
    	numberOfAggregateCorrelations?: number;

    @Column({
    	field: "number_of_applications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Applications for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from applications\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_applications = count(grouped.total)\n                ]\n                " 
    })
    	numberOfApplications?: number;

    @Column({
    	field: "number_of_oauth_access_tokens",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Access Tokens for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(access_token) as total, client_id\n                            from bshaffer_oauth_access_tokens\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_oauth_access_tokens = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthAccessTokens?: number;

    @Column({
    	field: "number_of_oauth_authorization_codes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Authorization Codes for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(authorization_code) as total, client_id\n                            from bshaffer_oauth_authorization_codes\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_oauth_authorization_codes = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthAuthorizationCodes?: number;

    @Column({
    	field: "number_of_oauth_refresh_tokens",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of OAuth Refresh Tokens for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(refresh_token) as total, client_id\n                            from bshaffer_oauth_refresh_tokens\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_oauth_refresh_tokens = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOauthRefreshTokens?: number;

    @Column({
    	field: "number_of_button_clicks",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Button Clicks for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from button_clicks\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_button_clicks = count(grouped.total)\n                ]\n                " 
    })
    	numberOfButtonClicks?: number;

    @Column({
    	field: "number_of_collaborators",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Collaborators for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from collaborators\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_collaborators = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCollaborators?: number;

    @Column({
    	field: "number_of_common_tags",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Common Tags for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from common_tags\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_common_tags = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCommonTags?: number;

    @Column({
    	field: "number_of_connections",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connections for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from connections\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_connections = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnections?: number;

    @Column({
    	field: "number_of_connector_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connector Imports for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from connector_imports\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_connector_imports = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectorImports?: number;

    @Column({
    	field: "number_of_connectors",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Connectors for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from connectors\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_connectors = count(grouped.total)\n                ]\n                " 
    })
    	numberOfConnectors?: number;

    @Column({
    	field: "number_of_correlations",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Client.\n                [Formula: \n                    update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from correlations\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_correlations = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCorrelations?: number;

    @Column({
    	field: "number_of_measurement_exports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurement Exports for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from measurement_exports\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_measurement_exports = count(grouped.total)]" 
    })
    	numberOfMeasurementExports?: number;

    @Column({
    	field: "number_of_measurement_imports",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurement Imports for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from measurement_imports\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_measurement_imports = count(grouped.total)]" 
    })
    	numberOfMeasurementImports?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from measurements\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_sent_emails",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Sent Emails for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from sent_emails\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_sent_emails = count(grouped.total)]" 
    })
    	numberOfSentEmails?: number;

    @Column({
    	field: "number_of_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Studies for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from studies\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_studies = count(grouped.total)]" 
    })
    	numberOfStudies?: number;

    @Column({
    	field: "number_of_tracking_reminder_notifications",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Tracking Reminder Notifications for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from tracking_reminder_notifications\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_tracking_reminder_notifications = count(grouped.total)]" 
    })
    	numberOfTrackingReminderNotifications?: number;

    @Column({
    	field: "number_of_tracking_reminders",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Tracking Reminders for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from tracking_reminders\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_tracking_reminders = count(grouped.total)]" 
    })
    	numberOfTrackingReminders?: number;

    @Column({
    	field: "number_of_user_tags",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Tags for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from user_tags\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_user_tags = count(grouped.total)]" 
    })
    	numberOfUserTags?: number;

    @Column({
    	field: "number_of_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Variables for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from user_variables\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_user_variables = count(grouped.total)]" 
    })
    	numberOfUserVariables?: number;

    @Column({
    	field: "number_of_variables",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from variables\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_variables = count(grouped.total)]" 
    })
    	numberOfVariables?: number;

    @Column({
    	field: "number_of_votes",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Votes for this Client.\n                    [Formula: update bshaffer_oauth_clients\n                        left join (\n                            select count(id) as total, client_id\n                            from votes\n                            group by client_id\n                        )\n                        as grouped on bshaffer_oauth_clients.client_id = grouped.client_id\n                    set bshaffer_oauth_clients.number_of_votes = count(grouped.total)]" 
    })
    	numberOfVotes?: number;

}