import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpPostmetaAttributes {
    metaId?: string;
    postId?: string;
    metaKey?: string;
    metaValue?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_postmeta",
	timestamps: false 
})
export class wpPostmeta extends Model<wpPostmetaAttributes, wpPostmetaAttributes> implements wpPostmetaAttributes {

    @Column({
    	field: "meta_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	comment: "Unique number assigned to each row of the table.",
    	defaultValue: Sequelize.literal("nextval('wp_postmeta_meta_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_postmeta_pkey",
    	using: "btree",
    	unique: true 
    })
    	metaId?: string;

    @Column({
    	field: "post_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The ID of the post the data relates to.",
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    @Index({
    	name: "post_id",
    	using: "btree",
    	unique: false 
    })
    	postId?: string;

    @Column({
    	field: "meta_key",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "An identifying key for the piece of data." 
    })
    @Index({
    	name: "wp_postmeta_meta_key",
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