import mongoose from 'mongoose'
import { myLog } from './myLib.js'

const { Schema } = mongoose

const userSchema = new Schema({
  userName: String,
  age: Number,
  companyId: String,
})

const companySchema = new Schema({
  companyName: String,
  description: String,
})

export const userModel = mongoose.model('user', userSchema)

export const companyModel = mongoose.model('company', companySchema)
