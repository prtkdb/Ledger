const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  title: {
    type: String,
    
  },
  amount: {
    type: Number,
    
  },
  category: {
    type: String,
    
  },
  isexpense: {
    type: Boolean,
    
  },
  postranbal:{
    type: Number,
    
  },
  tstamp: {
    type: Date,
    default: Date.now(),    
  },
  description: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const assetSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  title: {
    type: String,
    
  },
  amount: {
    type: Number,
  },
  units: {
    type: Number,
  },
  unitprice: {
    type: Number,
  },
  category: {
    type: String,
    
  },
  tstamp: {
    type: Date,
    default: Date.now(),    
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const accountSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  name: {
    type: String,
    
  },
  expense:{
    type: Number,
    default:0
  },
  income:{
    type: Number,
  },
  transum:{
    type: Number,
    
  },
  currency:{
    type:String,
  },
  currbal: {
    type: Number,
    
  },
  onhold: {
    type: Number,
    default:0
    
  },
  isActive:{
    type: Boolean,
    default: true

  },
  /*passWord:{
    type:String
  },*/
  activity: {
    type: [activitySchema]
  },
  asset: {
    type: [assetSchema]
  }
})

module.exports = mongoose.model('Account', accountSchema)