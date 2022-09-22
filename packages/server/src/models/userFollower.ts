import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userFollowerAttributes {
    id?: number;
    followingId?: string;
    followerId?: string;
    acceptedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "user_follower",
	timestamps: false 
})
export class userFollower extends Model<userFollowerAttributes, userFollowerAttributes> implements userFollowerAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('user_follower_id_seq'::regclass)") 
    })
    @Index({
    	name: "user_follower_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "following_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "user_follower_following_id_index",
    	using: "btree",
    	unique: false 
    })
    	followingId?: string;

    @Column({
    	field: "follower_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "user_follower_follower_id_index",
    	using: "btree",
    	unique: false 
    })
    	followerId?: string;

    @Column({
    	field: "accepted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "user_follower_accepted_at_index",
    	using: "btree",
    	unique: false 
    })
    	acceptedAt?: Date;

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