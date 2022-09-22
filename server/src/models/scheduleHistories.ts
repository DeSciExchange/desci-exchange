import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface scheduleHistoriesAttributes {
    id?: number;
    scheduleId?: number;
    command?: string;
    params?: string;
    output?: string;
    options?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "schedule_histories",
	timestamps: false 
})
export class scheduleHistories extends Model<scheduleHistoriesAttributes, scheduleHistoriesAttributes> implements scheduleHistoriesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('schedule_histories_id_seq'::regclass)") 
    })
    @Index({
    	name: "schedule_histories_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "schedule_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "schedule_histories_schedule_id_foreign",
    	using: "btree",
    	unique: false 
    })
    	scheduleId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	command?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	params?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	output?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	options?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

}