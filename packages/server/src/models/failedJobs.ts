import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface failedJobsAttributes {
    id?: string;
    connection?: string;
    queue?: string;
    payload?: string;
    exception?: string;
    failedAt?: Date;
}

@Table({
	tableName: "failed_jobs",
	timestamps: false 
})
export class failedJobs extends Model<failedJobsAttributes, failedJobsAttributes> implements failedJobsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('failed_jobs_id_seq'::regclass)") 
    })
    @Index({
    	name: "failed_jobs_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	connection?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	queue?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	payload?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	exception?: string;

    @Column({
    	field: "failed_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	failedAt?: Date;

}