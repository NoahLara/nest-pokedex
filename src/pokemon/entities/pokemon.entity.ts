import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

const commonProp = {
    unique: true,
    index:  true 
}

@Schema()
export class Pokemon extends Document{

    @Prop(commonProp)
    name:       string;

    @Prop(commonProp)
    no:         number;

}


export const PokemonSchema =  SchemaFactory.createForClass( Pokemon );
