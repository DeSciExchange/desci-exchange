import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userVariablePredictorCategoryAttributes {
    id?: number;
    userVariableId?: number;
    variableId?: number;
    variableCategoryId?: number;
    numberOfPredictorUserVariables?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "user_variable_predictor_category",
	timestamps: false 
})
export class userVariablePredictorCategory extends Model<userVariablePredictorCategoryAttributes, userVariablePredictorCategoryAttributes> implements userVariablePredictorCategoryAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_variable_predictor_category_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_variable_predictor_category_pkey",
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
    	name: "user_variable_predictor_category_uindex",
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
    	name: "user_variable_predictor_category_variables_id_fk",
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
    	name: "user_variable_predictor_category_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "user_variable_predictor_category_variable_categories_id_fk",
    	using: "btree",
    	unique: false 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "number_of_predictor_user_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfPredictorUserVariables?: number;

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