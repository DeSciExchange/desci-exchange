import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface variablePredictorCategoryAttributes {
    id?: number;
    variableId?: number;
    variableCategoryId?: number;
    numberOfPredictorVariables?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "variable_predictor_category",
	timestamps: false 
})
export class variablePredictorCategory extends Model<variablePredictorCategoryAttributes, variablePredictorCategoryAttributes> implements variablePredictorCategoryAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('variable_predictor_category_id_seq'::regclass)") 
    })
    @Index({
    	name: "variable_predictor_category_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	variableId?: number;

    @Column({
    	field: "variable_category_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	variableCategoryId?: number;

    @Column({
    	field: "number_of_predictor_variables",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfPredictorVariables?: number;

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

}