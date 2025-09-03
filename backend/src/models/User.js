import { model, Schema } from 'mongoose'

let userSchema = new Schema({

    discordId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true }
},
    { timestamps: true }
)
const User = model("User", userSchema);
export default User;