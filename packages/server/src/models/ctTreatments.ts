import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctTreatmentsAttributes {
    id?: number;
    name?: string;
    variableId?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    numberOfConditions?: number;
    numberOfSideEffects?: number;
}

@Table({
	tableName: "ct_treatments",
	timestamps: false 
})
export class ctTreatments extends Model<ctTreatmentsAttributes, ctTreatmentsAttributes> implements ctTreatmentsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_treatments_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_treatments_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "treName",
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
    	name: "ct_treatments_variables_id_fk",
    	using: "btree",
    	unique: false 
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
    	field: "number_of_conditions",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfConditions?: number;

    @Column({
    	field: "number_of_side_effects",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfSideEffects?: number;

}