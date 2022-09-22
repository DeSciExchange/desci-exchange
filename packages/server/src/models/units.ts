import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface unitsAttributes {
    id?: number;
    name?: string;
    abbreviatedName?: string;
    unitCategoryId?: number;
    minimumValue?: number;
    maximumValue?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    fillingType?: string;
    numberOfOutcomePopulationStudies?: number;
    numberOfCommonTagsWhereTagVariableUnit?: number;
    numberOfCommonTagsWhereTaggedVariableUnit?: number;
    numberOfOutcomeCaseStudies?: number;
    numberOfMeasurements?: number;
    numberOfUserVariablesWhereDefaultUnit?: number;
    numberOfVariableCategoriesWhereDefaultUnit?: number;
    numberOfVariablesWhereDefaultUnit?: number;
    advanced?: boolean;
    manualTracking?: boolean;
    fillingValue?: number;
    scale?: string;
    conversionSteps?: string;
    maximumDailyValue?: number;
    sortOrder?: number;
    slug?: string;
}

@Table({
	tableName: "units",
	timestamps: false 
})
export class units extends Model<unitsAttributes, unitsAttributes> implements unitsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('units_id_seq'::regclass)") 
    })
    @Index({
    	name: "units_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64),
    	comment: "Unit name" 
    })
    @Index({
    	name: "units_name_UNIQUE",
    	using: "btree",
    	unique: true 
    })
    	name?: string;

    @Column({
    	field: "abbreviated_name",
    	allowNull: true,
    	type: DataType.STRING(16),
    	comment: "Unit abbreviation" 
    })
    @Index({
    	name: "abbr_name_UNIQUE",
    	using: "btree",
    	unique: true 
    })
    	abbreviatedName?: string;

    @Column({
    	field: "unit_category_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Unit category ID" 
    })
    @Index({
    	name: "fk_unitCategory",
    	using: "btree",
    	unique: false 
    })
    	unitCategoryId?: number;

    @Column({
    	field: "minimum_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The minimum value for a single measurement. " 
    })
    	minimumValue?: number;

    @Column({
    	field: "maximum_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The maximum value for a single measurement" 
    })
    	maximumValue?: number;

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

    @Column({
    	field: "filling_type",
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "The filling type specifies how periods of missing data should be treated. " 
    })
    	fillingType?: string;

    @Column({
    	field: "number_of_outcome_population_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Global Population Studies for this Cause Unit.\n                [Formula: \n                    update units\n                        left join (\n                            select count(id) as total, cause_unit_id\n                            from aggregate_correlations\n                            group by cause_unit_id\n                        )\n                        as grouped on units.id = grouped.cause_unit_id\n                    set units.number_of_outcome_population_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomePopulationStudies?: number;

    @Column({
    	field: "number_of_common_tags_where_tag_variable_unit",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Common Tags for this Tag Variable Unit.\n                [Formula: \n                    update units\n                        left join (\n                            select count(id) as total, tag_variable_unit_id\n                            from common_tags\n                            group by tag_variable_unit_id\n                        )\n                        as grouped on units.id = grouped.tag_variable_unit_id\n                    set units.number_of_common_tags_where_tag_variable_unit = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCommonTagsWhereTagVariableUnit?: number;

    @Column({
    	field: "number_of_common_tags_where_tagged_variable_unit",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Common Tags for this Tagged Variable Unit.\n                [Formula: \n                    update units\n                        left join (\n                            select count(id) as total, tagged_variable_unit_id\n                            from common_tags\n                            group by tagged_variable_unit_id\n                        )\n                        as grouped on units.id = grouped.tagged_variable_unit_id\n                    set units.number_of_common_tags_where_tagged_variable_unit = count(grouped.total)\n                ]\n                " 
    })
    	numberOfCommonTagsWhereTaggedVariableUnit?: number;

    @Column({
    	field: "number_of_outcome_case_studies",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Individual Case Studies for this Cause Unit.\n                [Formula: \n                    update units\n                        left join (\n                            select count(id) as total, cause_unit_id\n                            from correlations\n                            group by cause_unit_id\n                        )\n                        as grouped on units.id = grouped.cause_unit_id\n                    set units.number_of_outcome_case_studies = count(grouped.total)\n                ]\n                " 
    })
    	numberOfOutcomeCaseStudies?: number;

    @Column({
    	field: "number_of_measurements",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Measurements for this Unit.\n                    [Formula: update units\n                        left join (\n                            select count(id) as total, unit_id\n                            from measurements\n                            group by unit_id\n                        )\n                        as grouped on units.id = grouped.unit_id\n                    set units.number_of_measurements = count(grouped.total)]" 
    })
    	numberOfMeasurements?: number;

    @Column({
    	field: "number_of_user_variables_where_default_unit",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of User Variables for this Default Unit.\n                    [Formula: update units\n                        left join (\n                            select count(id) as total, default_unit_id\n                            from user_variables\n                            group by default_unit_id\n                        )\n                        as grouped on units.id = grouped.default_unit_id\n                    set units.number_of_user_variables_where_default_unit = count(grouped.total)]" 
    })
    	numberOfUserVariablesWhereDefaultUnit?: number;

    @Column({
    	field: "number_of_variable_categories_where_default_unit",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variable Categories for this Default Unit.\n                    [Formula: update units\n                        left join (\n                            select count(id) as total, default_unit_id\n                            from variable_categories\n                            group by default_unit_id\n                        )\n                        as grouped on units.id = grouped.default_unit_id\n                    set units.number_of_variable_categories_where_default_unit = count(grouped.total)]" 
    })
    	numberOfVariableCategoriesWhereDefaultUnit?: number;

    @Column({
    	field: "number_of_variables_where_default_unit",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "Number of Variables for this Default Unit.\n                    [Formula: update units\n                        left join (\n                            select count(id) as total, default_unit_id\n                            from variables\n                            group by default_unit_id\n                        )\n                        as grouped on units.id = grouped.default_unit_id\n                    set units.number_of_variables_where_default_unit = count(grouped.total)]" 
    })
    	numberOfVariablesWhereDefaultUnit?: number;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Advanced units are rarely used and should generally be hidden or at the bottom of selector lists" 
    })
    	advanced?: boolean;

    @Column({
    	field: "manual_tracking",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	comment: "Include manual tracking units in selector when manually recording a measurement. " 
    })
    	manualTracking?: boolean;

    @Column({
    	field: "filling_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The filling value is substituted used when data is missing if the filling type is set to value." 
    })
    	fillingValue?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "\nOrdinal is used to simply depict the order of variables and not the difference between each of the variables. Ordinal scales are generally used to depict non-mathematical ideas such as frequency, satisfaction, happiness, a degree of pain etc.\n\nRatio Scale not only produces the order of variables but also makes the difference between variables known along with information on the value of true zero.\n\nInterval scale contains all the properties of ordinal scale, in addition to which, it offers a calculation of the difference between variables. The main characteristic of this scale is the equidistant difference between objects. Interval has no pre-decided starting point or a true zero value.\n\nNominal, also called the categorical variable scale, is defined as a scale used for labeling variables into distinct classifications and doesn’t involve a quantitative value or order.\n" 
    })
    	scale?: string;

    @Column({
    	field: "conversion_steps",
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "An array of mathematical operations, each containing a operation and value field to apply to the value in the current unit to convert it to the default unit for the unit category. " 
    })
    	conversionSteps?: string;

    @Column({
    	field: "maximum_daily_value",
    	allowNull: true,
    	type: DataType.DOUBLE,
    	comment: "The maximum aggregated measurement value over a single day." 
    })
    	maximumDailyValue?: number;

    @Column({
    	field: "sort_order",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sortOrder?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(200),
    	comment: "The slug is the part of a URL that identifies a page in human-readable keywords." 
    })
    @Index({
    	name: "units_slug_uindex",
    	using: "btree",
    	unique: true 
    })
    	slug?: string;

}