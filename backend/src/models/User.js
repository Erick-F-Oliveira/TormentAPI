import { model, Schema } from 'mongoose'

let userSchema = new Schema({

    discordId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String}
},
    { timestamps: true }
)
const User = model("User", userSchema);
export default User;