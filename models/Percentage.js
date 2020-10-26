const mongoose = require('mongoose')
const PercentageSchema = new mongoose.Schema({
fullName: {
  type:String
},
percentage: {
  type:Number
},
total: {
  type:Number
},
school_id: {
  type:String
},
clas: {
  type:String
},
student_id: {
  type:String
},
term:{
  type: String
},
exam: {
  type:String
},
test:{
  type: String
},
index:{
  type: Number
}
})
var Percentage = mongoose.model('Percentage', PercentageSchema)
module.export = Percentage
