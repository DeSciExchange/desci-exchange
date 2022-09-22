import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface sharerTrusteesAttributes {
    id?: number;
    sharerUserId?: string;
    trusteeUserId?: string;
    scopes?: string;
    relationshipType?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "sharer_trustees",
	timestamps: false 
})
export class sharerTrustees extends Model<sharerTrusteesAttributes, sharerTrusteesAttributes> implements sharerTrusteesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('sharer_trustees_id_seq'::regclass)") 
    })
    @Index({
    	name: "sharer_trustees_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "sharer_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The sharer who has granted data access to the trustee. " 
    })
    @Index({
    	name: "sharer_user_id_trustee_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	sharerUserId?: string;

    @Column({
    	field: "trustee_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The trustee who has been granted access to the sharer data." 
    })
    @Index({
    	name: "sharer_user_id_trustee_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "sharer_trustees_wp_users_ID_fk_2",
    	using: "btree",
    	unique: false 
    })
    	trusteeUserId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2000),
    	comment: "Whether the trustee has read access and/or write access to the data." 
    })
    	scopes?: string;

    @Column({
    	field: "relationship_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	relationshipType?: string;

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

}