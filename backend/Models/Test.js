import { model, Schema } from 'mongoose'

let testSchema = new Schema({    
    
    name: { type: String, required: true },
    age: { type: Number, required: true },
}
    , { timestamps: true}
  )
const Test = model("Test", testSchema);
export default Test;