import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({

  source:{type:String, required:true},
  destination:{type:String, required:true},
  customer: {type:mongoose.Schema.Types.ObjectId, required:true,ref:'user'},
  driver:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'},
  arrival: {type:Date, required:true},
  departure: {type:Date, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  price: Number,
});

const BookingModel = model('Booking', bookingSchema);

export default BookingModel;