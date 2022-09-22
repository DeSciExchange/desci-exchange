import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface telescopeMonitoringAttributes {
    tag?: string;
}

@Table({
	tableName: "telescope_monitoring",
	timestamps: false 
})
export class telescopeMonitoring extends Model<telescopeMonitoringAttributes, telescopeMonitoringAttributes> implements telescopeMonitoringAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	tag?: string;

}