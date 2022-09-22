import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface healthChecksAttributes {
    id?: number;
    resourceName?: string;
    resourceSlug?: string;
    targetName?: string;
    targetSlug?: string;
    targetDisplay?: string;
    healthy?: boolean;
    errorMessage?: string;
    runtime?: number;
    value?: string;
    valueHuman?: string;
    createdAt?: Date;
}

@Table({
	tableName: "health_checks",
	timestamps: false 
})
export class healthChecks extends Model<healthChecksAttributes, healthChecksAttributes> implements healthChecksAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('health_checks_id_seq'::regclass)") 
    })
    @Index({
    	name: "health_checks_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "resource_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	resourceName?: string;

    @Column({
    	field: "resource_slug",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "health_checks_resource_slug_index",
    	using: "btree",
    	unique: false 
    })
    	resourceSlug?: string;

    @Column({
    	field: "target_name",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	targetName?: string;

    @Column({
    	field: "target_slug",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "health_checks_target_slug_index",
    	using: "btree",
    	unique: false 
    })
    	targetSlug?: string;

    @Column({
    	field: "target_display",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	targetDisplay?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN 
    })
    	healthy?: boolean;

    @Column({
    	field: "error_message",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	errorMessage?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	runtime?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	value?: string;

    @Column({
    	field: "value_human",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	valueHuman?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "health_checks_created_at_index",
    	using: "btree",
    	unique: false 
    })
    	createdAt?: Date;

}