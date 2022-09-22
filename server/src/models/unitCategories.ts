import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface unitCategoriesAttributes {
    id?: number;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    canBeSummed?: boolean;
    deletedAt?: Date;
    sortOrder?: number;
}

@Table({
	tableName: "unit_categories",
	timestamps: false 
})
export class unitCategories extends Model<unitCategoriesAttributes, unitCategoriesAttributes> implements unitCategoriesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('unit_categories_id_seq'::regclass)") 
    })
    @Index({
    	name: "unit_categories_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64),
    	comment: "Unit category name" 
    })
    @Index({
    	name: "unit_categories_name_UNIQUE",
    	using: "btree",
    	unique: true 
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
    	field: "can_be_summed",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    	canBeSummed?: boolean;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	field: "sort_order",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sortOrder?: number;

}