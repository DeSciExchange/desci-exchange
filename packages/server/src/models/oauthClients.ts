import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oauthClientsAttributes {
    id?: string;
    userId?: string;
    name?: string;
    secret?: string;
    provider?: string;
    redirect?: string;
    personalAccessClient?: boolean;
    passwordClient?: boolean;
    revoked?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "oauth_clients",
	timestamps: false 
})
export class oauthClients extends Model<oauthClientsAttributes, oauthClientsAttributes> implements oauthClientsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('oauth_clients_id_seq'::regclass)") 
    })
    @Index({
    	name: "oauth_clients_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "oauth_clients_user_id_index",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	secret?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	provider?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	redirect?: string;

    @Column({
    	field: "personal_access_client",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	personalAccessClient?: boolean;

    @Column({
    	field: "password_client",
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	passwordClient?: boolean;

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

}