import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oaAuthorizationCodesAttributes {
    authorizationCode: string;
    clientId?: string;
    userId?: string;
    redirectUri?: string;
    expires?: Date;
    scope?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "oa_authorization_codes",
	timestamps: false 
})
export class oaAuthorizationCodes extends Model<oaAuthorizationCodesAttributes, oaAuthorizationCodesAttributes> implements oaAuthorizationCodesAttributes {

    @Column({
    	field: "authorization_code",
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    @Index({
    	name: "oa_authorization_codes_pkey",
    	using: "btree",
    	unique: true 
    })
    	authorizationCode!: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "bshaffer_oauth_authorization_codes_client_id_fk",
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
    	name: "bshaffer_oauth_authorization_codes_user_id_fk",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "redirect_uri",
    	allowNull: true,
    	type: DataType.STRING(2000) 
    })
    	redirectUri?: string;

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