import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    //  For password reset
    resetToken: {
        type: String
    },
    tokenExpire: {
        type: Date
    }
    // 
},
    { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel