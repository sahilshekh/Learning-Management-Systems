const mongoose = require ("mongoose")
const bcrypt = require ("bcryptjs")
const userSchema= new mongoose.Schema(
    {
        name: {type :String ,required :true},
        email : {type :String ,required :true,unique:true},
        password : {type:String,required:true},
        mobile_number : {type :Number ,required :true},
    },
    {
        versionKey :false,
        timestamps :true,
    }
)


userSchema.pre("save",function (next){
    if (!this.isModified("password")) return (next)

    var hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    return next();
})

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password,this.password);
}


module.exports = mongoose.model("user",userSchema)