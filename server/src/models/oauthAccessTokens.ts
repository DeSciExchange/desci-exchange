import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oauthAccessTokensAttributes {
    id: string;
    userId?: string;
    clientId?: string;
    name?: string;
    scopes?: string;
    revoked?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    expiresAt?: Date;
}

@Table({
	tableName: "oauth_access_tokens",
	timestamps: false 
})
export class oauthAccessTokens extends Model<oauthAccessTokensAttributes, oauthAccessTokensAttributes> implements oauthAccessTokensAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "oauth_access_tokens_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "oauth_access_tokens_user_id_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	clientId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	scopes?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	revoked?: boolean;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

    @Column({
    	field: "expires_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	expiresAt?: Date;

}