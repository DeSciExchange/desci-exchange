import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctConditionsAttributes {
    id?: number;
    name?: string;
    variableId?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    numberOfTreatments?: number;
    numberOfSymptoms?: number;
    numberOfCauses?: number;
}

@Table({
	tableName: "ct_conditions",
	timestamps: false 
})
export class ctConditions extends Model<ctConditionsAttributes, ctConditionsAttributes> implements ctConditionsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_conditions_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_conditions_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "conName",
    	using: "btree",
    	unique: true 
    })
    	name?: string;

    @Column({
    	field: "variable_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "ct_conditions_variable_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	variableId?: number;

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
    	field: "number_of_treatments",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfTreatments?: number;

    @Column({
    	field: "number_of_symptoms",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfSymptoms?: number;

    @Column({
    	field: "number_of_causes",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfCauses?: number;

}