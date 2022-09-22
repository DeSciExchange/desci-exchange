import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface githubRepositoriesAttributes {
    id?: number;
    clientId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
    userId?: string;
    githubRepositoryId?: number;
    nodeId?: string;
    name?: string;
    fullName?: string;
    private?: boolean;
    owner?: string;
    htmlUrl?: string;
    description?: string;
    fork?: boolean;
    url?: string;
    forksUrl?: string;
    keysUrl?: string;
    collaboratorsUrl?: string;
    teamsUrl?: string;
    hooksUrl?: string;
    issueEventsUrl?: string;
    eventsUrl?: string;
    assigneesUrl?: string;
    branchesUrl?: string;
    tagsUrl?: string;
    blobsUrl?: string;
    gitTagsUrl?: string;
    gitRefsUrl?: string;
    treesUrl?: string;
    statusesUrl?: string;
    languagesUrl?: string;
    stargazersUrl?: string;
    contributorsUrl?: string;
    subscribersUrl?: string;
    subscriptionUrl?: string;
    commitsUrl?: string;
    gitCommitsUrl?: string;
    commentsUrl?: string;
    issueCommentUrl?: string;
    contentsUrl?: string;
    compareUrl?: string;
    mergesUrl?: string;
    archiveUrl?: string;
    downloadsUrl?: string;
    issuesUrl?: string;
    pullsUrl?: string;
    milestonesUrl?: string;
    notificationsUrl?: string;
    labelsUrl?: string;
    releasesUrl?: string;
    deploymentsUrl?: string;
    pushedAt?: string;
    gitUrl?: string;
    sshUrl?: string;
    cloneUrl?: string;
    svnUrl?: string;
    homepage?: string;
    size?: number;
    stargazersCount?: number;
    watchersCount?: number;
    language?: string;
    hasIssues?: boolean;
    hasProjects?: boolean;
    hasDownloads?: boolean;
    hasWiki?: boolean;
    hasPages?: boolean;
    forksCount?: number;
    archived?: boolean;
    disabled?: boolean;
    openIssuesCount?: number;
    allowForking?: boolean;
    isTemplate?: boolean;
    topics?: string;
    visibility?: string;
    forks?: number;
    openIssues?: number;
    watchers?: number;
    defaultBranch?: string;
    permissions?: string;
    tempCloneToken?: string;
    allowSquashMerge?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowAutoMerge?: boolean;
    deleteBranchOnMerge?: boolean;
    networkCount?: number;
    subscribersCount?: number;
    score?: number;
    mirrorUrl?: string;
    license?: string;
}

@Table({
	tableName: "github_repositories",
	timestamps: false 
})
export class githubRepositories extends Model<githubRepositoriesAttributes, githubRepositoriesAttributes> implements githubRepositoriesAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Automatically generated unique id for the github repository" 
    })
    @Index({
    	name: "github_repositories_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80),
    	comment: "The ID for the API client that created the record" 
    })
    @Index({
    	name: "github_repositories_oa_clients_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The time the record was originally created",
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The time the record was deleted" 
    })
    	deletedAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	comment: "The time the record was last modified" 
    })
    	updatedAt?: Date;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The QuantiModo user ID for the owner of the record" 
    })
    @Index({
    	name: "github_repositories_wp_users_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "github_repository_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Github repository id Example: 158861117" 
    })
    @Index({
    	name: "github_repositories_github_repository_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	githubRepositoryId?: number;

    @Column({
    	field: "node_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: MDEwOlJlcG9zaXRvcnkxNTg4NjExMTc=" 
    })
    	nodeId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: qm-api" 
    })
    @Index({
    	name: "github_repositories_name_uindex",
    	using: "btree",
    	unique: true 
    })
    	name?: string;

    @Column({
    	field: "full_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: mikepsinn/qm-api" 
    })
    	fullName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	private?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: login:mikepsinn,id:2808553,node_id:MDQ6VXNlcjI4MDg1NTM=,avatar_url:https://avatars.githubusercontent.com/u/2808553?v=4,gravatar_id:,url:https://api.github.com/users/mikepsinn,html_url:https://github.com/mikepsinn,followers_url:https://api.github.com/users/mikepsinn/followers,following_url:https://api.github.com/users/mikepsinn/following/other_user,gists_url:https://api.github.com/users/mikepsinn/gists/gist_id,starred_url:https://api.github.com/users/mikepsinn/starred/owner/repo,subscriptions_url:https://api.github.com/users/mikepsinn/subscriptions,organizations_url:https://api.github.com/users/mikepsinn/orgs,repos_url:https://api.github.com/users/mikepsinn/repos,events_url:https://api.github.com/users/mikepsinn/events/privacy,received_events_url:https://api.github.com/users/mikepsinn/received_events,type:User,site_admin:false" 
    })
    	owner?: string;

    @Column({
    	field: "html_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://github.com/mikepsinn/qm-api" 
    })
    @Index({
    	name: "github_repositories_html_url_uindex",
    	using: "btree",
    	unique: true 
    })
    	htmlUrl?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: I'm a description" 
    })
    	description?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	fork?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api" 
    })
    @Index({
    	name: "github_repositories_url_uindex",
    	using: "btree",
    	unique: true 
    })
    	url?: string;

    @Column({
    	field: "forks_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/forks" 
    })
    	forksUrl?: string;

    @Column({
    	field: "keys_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/keys/key_id" 
    })
    	keysUrl?: string;

    @Column({
    	field: "collaborators_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/collaborators/collaborator" 
    })
    	collaboratorsUrl?: string;

    @Column({
    	field: "teams_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/teams" 
    })
    	teamsUrl?: string;

    @Column({
    	field: "hooks_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/hooks" 
    })
    	hooksUrl?: string;

    @Column({
    	field: "issue_events_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/issues/events/number" 
    })
    	issueEventsUrl?: string;

    @Column({
    	field: "events_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/events" 
    })
    	eventsUrl?: string;

    @Column({
    	field: "assignees_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/assignees/user" 
    })
    	assigneesUrl?: string;

    @Column({
    	field: "branches_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/branches/branch" 
    })
    	branchesUrl?: string;

    @Column({
    	field: "tags_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/tags" 
    })
    	tagsUrl?: string;

    @Column({
    	field: "blobs_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/git/blobs/sha" 
    })
    	blobsUrl?: string;

    @Column({
    	field: "git_tags_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/git/tags/sha" 
    })
    	gitTagsUrl?: string;

    @Column({
    	field: "git_refs_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/git/refs/sha" 
    })
    	gitRefsUrl?: string;

    @Column({
    	field: "trees_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/git/trees/sha" 
    })
    	treesUrl?: string;

    @Column({
    	field: "statuses_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/statuses/sha" 
    })
    	statusesUrl?: string;

    @Column({
    	field: "languages_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/languages" 
    })
    	languagesUrl?: string;

    @Column({
    	field: "stargazers_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/stargazers" 
    })
    	stargazersUrl?: string;

    @Column({
    	field: "contributors_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/contributors" 
    })
    	contributorsUrl?: string;

    @Column({
    	field: "subscribers_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/subscribers" 
    })
    	subscribersUrl?: string;

    @Column({
    	field: "subscription_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/subscription" 
    })
    	subscriptionUrl?: string;

    @Column({
    	field: "commits_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/commits/sha" 
    })
    	commitsUrl?: string;

    @Column({
    	field: "git_commits_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/git/commits/sha" 
    })
    	gitCommitsUrl?: string;

    @Column({
    	field: "comments_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/comments/number" 
    })
    	commentsUrl?: string;

    @Column({
    	field: "issue_comment_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/issues/comments/number" 
    })
    	issueCommentUrl?: string;

    @Column({
    	field: "contents_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/contents/+path" 
    })
    	contentsUrl?: string;

    @Column({
    	field: "compare_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/compare/base...head" 
    })
    	compareUrl?: string;

    @Column({
    	field: "merges_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/merges" 
    })
    	mergesUrl?: string;

    @Column({
    	field: "archive_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/archive_format/ref" 
    })
    	archiveUrl?: string;

    @Column({
    	field: "downloads_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/downloads" 
    })
    	downloadsUrl?: string;

    @Column({
    	field: "issues_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/issues/number" 
    })
    	issuesUrl?: string;

    @Column({
    	field: "pulls_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/pulls/number" 
    })
    	pullsUrl?: string;

    @Column({
    	field: "milestones_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/milestones/number" 
    })
    	milestonesUrl?: string;

    @Column({
    	field: "notifications_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/notifications?since,all,participating" 
    })
    	notificationsUrl?: string;

    @Column({
    	field: "labels_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/labels/name" 
    })
    	labelsUrl?: string;

    @Column({
    	field: "releases_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/releases/id" 
    })
    	releasesUrl?: string;

    @Column({
    	field: "deployments_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://api.github.com/repos/mikepsinn/qm-api/deployments" 
    })
    	deploymentsUrl?: string;

    @Column({
    	field: "pushed_at",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: 2021-10-24T00:07:07Z" 
    })
    	pushedAt?: string;

    @Column({
    	field: "git_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: git://github.com/mikepsinn/qm-api.git" 
    })
    @Index({
    	name: "github_repositories_git_url_uindex",
    	using: "btree",
    	unique: true 
    })
    	gitUrl?: string;

    @Column({
    	field: "ssh_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: git@github.com:mikepsinn/qm-api.git" 
    })
    @Index({
    	name: "github_repositories_ssh_url_uindex",
    	using: "btree",
    	unique: true 
    })
    	sshUrl?: string;

    @Column({
    	field: "clone_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://github.com/mikepsinn/qm-api.git" 
    })
    	cloneUrl?: string;

    @Column({
    	field: "svn_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://github.com/mikepsinn/qm-api" 
    })
    	svnUrl?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: https://quantimo.do" 
    })
    	homepage?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 178451" 
    })
    	size?: number;

    @Column({
    	field: "stargazers_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 2" 
    })
    	stargazersCount?: number;

    @Column({
    	field: "watchers_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 2" 
    })
    	watchersCount?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: PHP" 
    })
    	language?: string;

    @Column({
    	field: "has_issues",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	hasIssues?: boolean;

    @Column({
    	field: "has_projects",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	hasProjects?: boolean;

    @Column({
    	field: "has_downloads",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	hasDownloads?: boolean;

    @Column({
    	field: "has_wiki",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	hasWiki?: boolean;

    @Column({
    	field: "has_pages",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	hasPages?: boolean;

    @Column({
    	field: "forks_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 0" 
    })
    	forksCount?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	archived?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	disabled?: boolean;

    @Column({
    	field: "open_issues_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 89" 
    })
    	openIssuesCount?: number;

    @Column({
    	field: "allow_forking",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	allowForking?: boolean;

    @Column({
    	field: "is_template",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	isTemplate?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: [digital-health,health,healthcare-data]" 
    })
    	topics?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: private" 
    })
    	visibility?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 0" 
    })
    	forks?: number;

    @Column({
    	field: "open_issues",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 89" 
    })
    	openIssues?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 2" 
    })
    	watchers?: number;

    @Column({
    	field: "default_branch",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: develop" 
    })
    	defaultBranch?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: admin:true,maintain:true,push:true,triage:true,pull:true" 
    })
    	permissions?: string;

    @Column({
    	field: "temp_clone_token",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: AAVNV2SECRETYTBOS7ZI" 
    })
    	tempCloneToken?: string;

    @Column({
    	field: "allow_squash_merge",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	allowSquashMerge?: boolean;

    @Column({
    	field: "allow_merge_commit",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	allowMergeCommit?: boolean;

    @Column({
    	field: "allow_rebase_merge",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	allowRebaseMerge?: boolean;

    @Column({
    	field: "allow_auto_merge",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	allowAutoMerge?: boolean;

    @Column({
    	field: "delete_branch_on_merge",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: " 
    })
    	deleteBranchOnMerge?: boolean;

    @Column({
    	field: "network_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 0" 
    })
    	networkCount?: number;

    @Column({
    	field: "subscribers_count",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 0" 
    })
    	subscribersCount?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Example: 0" 
    })
    	score?: number;

    @Column({
    	field: "mirror_url",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: git@github.com:mikepsinn/qm-api.git" 
    })
    	mirrorUrl?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100),
    	comment: "GPL-3.0" 
    })
    	license?: string;

}