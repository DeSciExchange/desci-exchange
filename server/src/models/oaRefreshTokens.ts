import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oaRefreshTokensAttributes {
    refreshToken: string;
    clientId?: string;
    userId?: string;
    expires?: Date;
    scope?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "oa_refresh_tokens",
	timestamps: false 
})
export class oaRefreshTokens extends Model<oaRefreshTokensAttributes, oaRefreshTokensAttributes> implements oaRefreshTokensAttributes {

    @Column({
    	field: "refresh_token",
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    @Index({
    	name: "oa_refresh_tokens_pkey",
    	using: "btree",
    	unique: true 
    })
    	refreshToken!: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "refresh_tokens_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "bshaffer_oauth_refresh_tokens_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	expires?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2000) 
    })
    	scope?: string;

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
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

}