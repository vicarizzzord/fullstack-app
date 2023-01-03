import mongoose from '../db';
import bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 664

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

/*UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    this.password = hash;

    next();
}) */

const User = mongoose.model('User', UserSchema);

export default User;