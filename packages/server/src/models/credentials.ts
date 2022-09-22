import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface credentialsAttributes {
    userId: string;
    connectorId: number;
    attrKey: string;
    attrValue?: Uint8Array;
    status?: string;
    message?: string;
    expiresAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "credentials",
	timestamps: false 
})
export class credentials extends Model<credentialsAttributes, credentialsAttributes> implements credentialsAttributes {

    @Column({
    	field: "user_id",
    	primaryKey: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "credentials_pkey",
    	using: "btree",
    	unique: true 
    })
    	userId!: string;

    @Column({
    	field: "connector_id",
    	primaryKey: true,
    	type: DataType.INTEGER,
    	comment: "Connector id" 
    })
    @Index({
    	name: "IDX_status_expires_connector",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "credentials_pkey",
    	using: "btree",
    	unique: true 
    })
    	connectorId!: number;

    @Column({
    	field: "attr_key",
    	primaryKey: true,
    	type: DataType.STRING(16),
    	comment: "Attribute name such as token, userid, username, or password" 
    })
    @Index({
    	name: "credentials_pkey",
    	using: "btree",
    	unique: true 
    })
    	attrKey!: string;

    @Column({
    	field: "attr_value",
    	allowNull: true,
    	type: DataType.BLOB,
    	comment: "Encrypted value for the attribute specified" 
    })
    	attrValue?: Uint8Array;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32),
    	defaultValue: Sequelize.literal("'UPDATED'::character varying") 
    })
    @Index({
    	name: "IDX_status_expires_connector",
    	using: "btree",
    	unique: false 
    })
    	status?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	message?: string;

    @Column({
    	field: "expires_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "IDX_status_expires_connector",
    	using: "btree",
    	unique: false 
    })
    	expiresAt?: Date;

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
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "credentials_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

}