import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface jobsAttributes {
    id?: string;
    queue?: string;
    payload?: string;
    attempts?: number;
    reservedAt?: number;
    availableAt?: number;
    createdAt?: number;
}

@Table({
	tableName: "jobs",
	timestamps: false 
})
export class jobs extends Model<jobsAttributes, jobsAttributes> implements jobsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('jobs_id_seq'::regclass)") 
    })
    @Index({
    	name: "jobs_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "jobs_queue_index",
    	using: "btree",
    	unique: false 
    })
    	queue?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	payload?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	attempts?: number;

    @Column({
    	field: "reserved_at",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	reservedAt?: number;

    @Column({
    	field: "available_at",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	availableAt?: number;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	createdAt?: number;

}