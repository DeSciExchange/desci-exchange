import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface sessionsAttributes {
    id?: string;
    userId?: string;
    ipAddress?: string;
    userAgent?: string;
    payload?: string;
    lastActivity?: number;
}

@Table({
	tableName: "sessions",
	timestamps: false 
})
export class sessions extends Model<sessionsAttributes, sessionsAttributes> implements sessionsAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "sessions_id_unique",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	userId?: string;

    @Column({
    	field: "ip_address",
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	ipAddress?: string;

    @Column({
    	field: "user_agent",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	userAgent?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	payload?: string;

    @Column({
    	field: "last_activity",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	lastActivity?: number;

}