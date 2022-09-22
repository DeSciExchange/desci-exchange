import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oauthRefreshTokensAttributes {
    id: string;
    accessTokenId?: string;
    revoked?: boolean;
    expiresAt?: Date;
}

@Table({
	tableName: "oauth_refresh_tokens",
	timestamps: false 
})
export class oauthRefreshTokens extends Model<oauthRefreshTokensAttributes, oauthRefreshTokensAttributes> implements oauthRefreshTokensAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "oauth_refresh_tokens_pkey",
    	using: "btree",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "access_token_id",
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "oauth_refresh_tokens_access_token_id_index",
    	using: "btree",
    	unique: false 
    })
    	accessTokenId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	revoked?: boolean;

    @Column({
    	field: "expires_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	expiresAt?: Date;

}