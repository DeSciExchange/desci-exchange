import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oauthAuthCodesAttributes {
    id: string;
    userId?: string;
    clientId?: string;
    scopes?: string;
    revoked?: boolean;
    expiresAt?: Date;
}

@Table({
	tableName: "oauth_auth_codes",
	timestamps: false 
})
export class oauthAuthCodes extends Model<oauthAuthCodesAttributes, oauthAuthCodesAttributes> implements oauthAuthCodesAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "oauth_auth_codes_pkey",
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
    	name: "oauth_auth_codes_user_id_index",
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
    	type: DataType.STRING 
    })
    	scopes?: string;

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