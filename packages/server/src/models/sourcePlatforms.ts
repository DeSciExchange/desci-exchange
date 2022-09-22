import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface sourcePlatformsAttributes {
    id?: number;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "source_platforms",
	timestamps: false 
})
export class sourcePlatforms extends Model<sourcePlatformsAttributes, sourcePlatformsAttributes> implements sourcePlatformsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('source_platforms_id_seq'::regclass)") 
    })
    @Index({
    	name: "source_platforms_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	name?: string;

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
    	name: "source_platforms_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

}