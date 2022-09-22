import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface collaboratorsAttributes {
    id?: number;
    userId?: string;
    appId?: number;
    type?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "collaborators",
	timestamps: false 
})
export class collaborators extends Model<collaboratorsAttributes, collaboratorsAttributes> implements collaboratorsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('collaborators_id_seq'::regclass)") 
    })
    @Index({
    	name: "collaborators_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "collaborators_user_client_index",
    	using: "btree",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "app_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "collaborators_applications_id_fk",
    	using: "btree",
    	unique: false 
    })
    	appId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: Sequelize.literal("'collaborator'::character varying") 
    })
    	type?: string;

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
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "collaborators_user_client_index",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "collaborators_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

}