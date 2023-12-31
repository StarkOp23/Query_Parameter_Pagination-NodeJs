const mongoose = require('mongoose');



//! Creation of Structure or schema for student collection 
let studentSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: [true,"Name is Mandatory"],
            minLength:[4,"Name Should Contain Atleast 4 Characters"],
            maxLength:[10,"Name Should Contain Only 10 Characters"],

        },
        age:
        {
            type: Number,
            required: true,
            min:[10,"Minimum age should be 18 and you entred {VALUE}"],
            max:[60,"Maximum age should be 30 and you entred {VALUE}"]    
        },
        gender:
        {
            type: String,
            required: true,
            enum:{
                values:["male","female","others"],
                message:"Only male,female,other allowed and you entered {VALUE}"
            },
            
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        fees:{
            type:Number,
            required:true
        },
        marks:{
            type:Number,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
    },
)


//! creating collection

module.exports=new mongoose.model("queryPagination",studentSchema)