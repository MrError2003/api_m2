import mongoose, {Schema, Document} from "mongoose";

interface IPlane extends Document {
    namePlane: string;
    modelPlane: string;
    yearPlane: number;
    typePlane: string;
    countryPlane: string; 
    descriptionPlane: string;
}

const planeSchema = new Schema<IPlane>({
    namePlane: {type: String, required: true},
    modelPlane: {type: String, required: true},
    yearPlane: {type: Number, required: false},
    typePlane: {type: String, required: true},
    countryPlane: {type: String, required: false},
    descriptionPlane: {type: String, required: true}
});

export default mongoose.model<IPlane>("Plane", planeSchema);