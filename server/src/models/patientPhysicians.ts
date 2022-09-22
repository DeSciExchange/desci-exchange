import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface patientPhysiciansAttributes {
    id?: number;
    patientUserId?: string;
    physicianUserId?: string;
    scopes?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({
	tableName: "patient_physicians",
	timestamps: false 
})
export class patientPhysicians extends Model<patientPhysiciansAttributes, patientPhysiciansAttributes> implements patientPhysiciansAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('patient_physicians_id_seq'::regclass)") 
    })
    @Index({
    	name: "patient_physicians_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "patient_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The patient who has granted data access to the physician. " 
    })
    @Index({
    	name: "patients_patient_user_id_physician_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    	patientUserId?: string;

    @Column({
    	field: "physician_user_id",
    	allowNull: true,
    	type: DataType.BIGINT,
    	comment: "The physician who has been granted access to the patients data." 
    })
    @Index({
    	name: "patients_patient_user_id_physician_user_id_uindex",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "patient_physicians_wp_users_ID_fk_2",
    	using: "btree",
    	unique: false 
    })
    	physicianUserId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2000),
    	comment: "Whether the physician has read access and/or write access to the data." 
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