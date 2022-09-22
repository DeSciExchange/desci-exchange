import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userVariableOutcomeCategoryAttributes {
    id?: number;
    userVariableId?: number;
    variableId?: number;
    variableCategoryId?: number;
    numberOfOutcomeUserVariables?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "user_variable_outcome_category",
	timestamps: false 
})
export class userVariableOutcomeCategory extends Model<userVariableOutcomeCategoryAttributes, userVariableOutcomeCategoryAttributes> implements userVariableOutcomeCategoryAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_variable_outcome_category_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_variable_outcome_category_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "user_variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_variable_outcome_category_uindex",
    	using: "btree",
    	unique: true 
    })
    	userVariableId?: number;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_variable_outcome_category_variables_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableId?: number;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "user_variable_outcome_category_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_variable_outcome_category_variable_categories_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "number_of_outcome_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfOutcomeUserVariables?: number;

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