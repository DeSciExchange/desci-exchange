import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface variableOutcomeCategoryAttributes {
    id?: number;
    variableId?: number;
    variableCategoryId?: number;
    numberOfOutcomeVariables?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "variable_outcome_category",
	timestamps: false 
})
export class variableOutcomeCategory extends Model<variableOutcomeCategoryAttributes, variableOutcomeCategoryAttributes> implements variableOutcomeCategoryAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('variable_outcome_category_id_seq'::regclass)") 
    })
    @Index({
    	name: "variable_outcome_category_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "variable_outcome_category_uindex",
    	using: "btree",
    	unique: true 
    })
    	variableId?: number;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "variable_outcome_category_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "v_outcome_category_variable_categories_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "number_of_outcome_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfOutcomeVariables?: number;

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