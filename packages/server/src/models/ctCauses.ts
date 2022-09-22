import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ctCausesAttributes {
    id?: number;
    name?: string;
    variableId?: number;
    updatedAt?: Date;
    createdAt?: Date;
    deletedAt?: Date;
    numberOfConditions?: number;
}

@Table({
	tableName: "ct_causes",
	timestamps: false 
})
export class ctCauses extends Model<ctCausesAttributes, ctCausesAttributes> implements ctCausesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('ct_causes_id_seq'::regclass)") 
    })
    @Index({
    	name: "ct_causes_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "causeName",
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
    	name: "ct_causes_variable_id_uindex",
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
    	field: "number_of_conditions",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfConditions?: number;

}