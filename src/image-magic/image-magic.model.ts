import {Column, DataType, Model, Table} from "sequelize-typescript";


interface ImageOptimisationAttrs {
    isOptimized: boolean;
    nameImage: string;
}

@Table({tableName: 'image-optimization'})
export class ImageOptimisation extends Model<ImageOptimisation, ImageOptimisationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isOptimized: boolean;

    @Column({type: DataType.STRING})
    nameImage: string;

}