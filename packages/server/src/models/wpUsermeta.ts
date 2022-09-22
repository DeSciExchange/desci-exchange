import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpUsermetaAttributes {
    umetaId?: string;
    userId?: string;
    metaKey?: string;
    metaValue?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_usermeta",
	timestamps: false 
})
export class wpUsermeta extends Model<wpUsermetaAttributes, wpUsermetaAttributes> implements wpUsermetaAttributes {

    @Column({
    	field: "umeta_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each row of the table.",
    	defaultValue: Sequelize.literal("nextval('wp_usermeta_umeta_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_usermeta_pkey",
    	using: "btree",
    	unique: true 
    })
    	umetaId?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "ID of the related user.",
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    @Index({
    	name: "user_id",
    	using: "btree",
    	unique: false 
    })
    	userId?: string;

    @Column({
    	field: "meta_key",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "An identifying key for the piece of data." 
    })
    @Index({
    	name: "wp_usermeta_meta_key",
    	using: "btree",
    	unique: false 
    })
    	metaKey?: string;

    @Column({
    	field: "meta_value",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "The actual piece of data." 
    })
    	metaValue?: string;

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

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	clientId?: string;

}