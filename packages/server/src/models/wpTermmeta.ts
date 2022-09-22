import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wpTermmetaAttributes {
    metaId?: string;
    termId?: string;
    metaKey?: string;
    metaValue?: string;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    clientId?: string;
}

@Table({
	tableName: "wp_termmeta",
	timestamps: false 
})
export class wpTermmeta extends Model<wpTermmetaAttributes, wpTermmetaAttributes> implements wpTermmetaAttributes {

    @Column({
    	field: "meta_id",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('wp_termmeta_meta_id_seq'::regclass)") 
    })
    @Index({
    	name: "wp_termmeta_pkey",
    	using: "btree",
    	unique: true 
    })
    	metaId?: string;

    @Column({
    	field: "term_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("'0'::bigint") 
    })
    @Index({
    	name: "term_id",
    	using: "btree",
    	unique: false 
    })
    	termId?: string;

    @Column({
    	field: "meta_key",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "wp_termmeta_meta_key",
    	using: "btree",
    	unique: false 
    })
    	metaKey?: string;

    @Column({
    	field: "meta_value",
    	allowNull: true,
    	type: DataType.STRING 
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