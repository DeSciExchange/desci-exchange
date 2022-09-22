import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface lightsailInstancesAttributes {
    id?: number;
    clientId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
    userId?: string;
    name?: string;
    arn?: string;
    supportCode?: string;
    externalCreatedAt?: string;
    location?: string;
    resourceType?: string;
    tags?: string;
    blueprintId?: string;
    blueprintName?: string;
    bundleId?: string;
    addOns?: string;
    isStaticIp?: boolean;
    privateIpAddress?: string;
    publicIpAddress?: string;
    ipv6Addresses?: string;
    ipAddressType?: string;
    hardware?: string;
    networking?: string;
    state?: string;
    username?: string;
    sshKeyName?: string;
    jenkinsLabels?: string;
    computer?: string;
}

@Table({
	tableName: "lightsail_instances",
	timestamps: false 
})
export class lightsailInstances extends Model<lightsailInstancesAttributes, lightsailInstancesAttributes> implements lightsailInstancesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	comment: "Automatically generated unique id for the lightsail instance",
    	defaultValue: Sequelize.literal("nextval('lightsail_instances_id_seq'::regclass)") 
    })
    @Index({
    	name: "lightsail_instances_pkey",
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
    	name: "lightsail_instances_client_id_fk",
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
    	name: "lightsail_instances_wp_users_ID_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: cc-wp" 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: arn:aws:lightsail:us-east-1:335072289018:Instance/14eb6cec-1c74-429a-96f5-8f8f5e5fbbc1" 
    })
    	arn?: string;

    @Column({
    	field: "support_code",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: 102336889266/i-005d61af88d99927e" 
    })
    	supportCode?: string;

    @Column({
    	field: "external_created_at",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: 2021-03-22T01:47:10+00:00" 
    })
    	externalCreatedAt?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: {availabilityZone:us-east-1a,regionName:us-east-1}" 
    })
    	location?: string;

    @Column({
    	field: "resource_type",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: Instance" 
    })
    	resourceType?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: [{key:wordpress},{key:HEALTH_CHECK_URL,value:https://CrowdsourcingCures.org}]" 
    })
    	tags?: string;

    @Column({
    	field: "blueprint_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: wordpress" 
    })
    	blueprintId?: string;

    @Column({
    	field: "blueprint_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: WordPress" 
    })
    	blueprintName?: string;

    @Column({
    	field: "bundle_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: micro_2_0" 
    })
    	bundleId?: string;

    @Column({
    	field: "add_ons",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: [{name:AutoSnapshot,status:Enabled,snapshotTimeOfDay:00:00}]" 
    })
    	addOns?: string;

    @Column({
    	field: "is_static_ip",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Example: 1" 
    })
    	isStaticIp?: boolean;

    @Column({
    	field: "private_ip_address",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: 172.26.7.226" 
    })
    	privateIpAddress?: string;

    @Column({
    	field: "public_ip_address",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: 3.224.6.200" 
    })
    	publicIpAddress?: string;

    @Column({
    	field: "ipv6_addresses",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: [2600:1f18:1ae:1700:c92e:b66f:52cd:5f01]" 
    })
    	ipv6Addresses?: string;

    @Column({
    	field: "ip_address_type",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: dualstack" 
    })
    	ipAddressType?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: {cpuCount:1,disks:[{createdAt:2021-03-22T01:47:10+00:00,sizeInGb:40,isSystemDisk:true,iops:120,path:/dev/xvda,attachedTo:cc-wp,attachmentState:attached}],ramSizeInGb:1}" 
    })
    	hardware?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: {monthlyTransfer:{gbPerMonthAllocated:2048},ports:[{fromPort:80,toPort:80,protocol:tcp,accessFrom:Anywhere (0.0.0.0/0),accessType:public,commonName:,accessDirection:inbound,cidrs:[0.0.0.0/0],ipv6Cidrs:[],cidrListAliases:[]},{fromPort:8000,toPort:8000,protocol:tcp,accessFrom:Custom,accessType:public,commonName:,accessDirection:inbound,cidrs:[24.178.226.180/32],ipv6Cidrs:[],cidrListAliases:[]},{fromPort:7777,toPort:7777,protocol:tcp,accessFrom:Custom,accessType:public,commonName:,accessDirection:inbound,cidrs:[24.178.226.180/32],ipv6Cidrs:[],cidrListAliases:[]},{fromPort:6379,toPort:6379,protocol:tcp,accessFrom:Custom,accessType:public,commonName:,accessDirection:inbound,cidrs:[24.178.226.180/32],ipv6Cidrs:[],cidrListAliases:[]},{fromPort:888,toPort:888,protocol:tcp,accessFrom:Custom,accessType:public,commonName:,accessDirection:inbound,cidrs:[24.178.226.180/32],ipv6Cidrs:[],cidrListAliases:[]},{fromPort:20,toPort:20,protocol:tcp,accessFrom:Custom,accessType:public,commonName:,accessDirection:inbound,c" 
    })
    	networking?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: {code:16,name:running}" 
    })
    	state?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: bitnami" 
    })
    	username?: string;

    @Column({
    	field: "ssh_key_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: qm-aws-20160528" 
    })
    	sshKeyName?: string;

    @Column({
    	field: "jenkins_labels",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "Example: []" 
    })
    	jenkinsLabels?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "Example: " 
    })
    	computer?: string;

}