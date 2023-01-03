import mongoose from 'mongoose'

const mongoUrl = 'mongodb://admin:root@localhost:27017/restapi?authSource=admin'

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
})
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

export default mongoose;

