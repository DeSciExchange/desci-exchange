import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface childParentsAttributes {
    id?: number;
    childUserId?: string;
    parentUserId?: string;
    scopes?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "child_parents",
	timestamps: false 
})
export class childParents extends Model<childParentsAttributes, childParentsAttributes> implements childParentsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('child_parents_id_seq'::regclass)") 
    })
    @Index({
    	name: "child_parents_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "child_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The child who has granted data access to the parent. " 
    })
    @Index({
    	name: "child_user_id_parent_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	childUserId?: string;

    @Column({
    	field: "parent_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The parent who has been granted access to the child data." 
    })
    @Index({
    	name: "child_user_id_parent_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "child_parents_wp_users_ID_fk_2",
    	using: "btree",
    	unique: false 
    })
    	parentUserId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2000),
    	comment: "Whether the parent has read access and/or write access to the data." 
    })
    	scopes?: string;

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