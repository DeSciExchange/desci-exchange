import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oauthPersonalAccessClientsAttributes {
    id?: string;
    clientId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "oauth_personal_access_clients",
	timestamps: false 
})
export class oauthPersonalAccessClients extends Model<oauthPersonalAccessClientsAttributes, oauthPersonalAccessClientsAttributes> implements oauthPersonalAccessClientsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('oauth_personal_access_clients_id_seq'::regclass)") 
    })
    @Index({
    	name: "oauth_personal_access_clients_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	clientId?: string;

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