import {Column, DataType, Model, Table} from "sequelize-typescript";


interface ImageOptimisationAttrs {
    is_optimized: boolean;
    name_image: string;
    weight: number;
    type: string;
    originalWidth: string;
    originalHeight: string;
}

@Table({tableName: 'image-optimization'})
export class ImageOptimisation extends Model<ImageOptimisation, ImageOptimisationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    is_optimized: boolean;

    @Column({type: DataType.STRING})
    name_image: string;

    @Column({type: DataType.STRING})
    type: string;

    @Column({type: DataType.STRING})
    original_width: string;

    @Column({type: DataType.STRING})
    original_height: string;

    @Column({type: DataType.NUMBER})
    weight: number;

}