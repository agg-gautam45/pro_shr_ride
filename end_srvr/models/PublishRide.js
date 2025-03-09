import mongoose from "mongoose"

const rideSchema = new mongoose.Schema({
    source: {
        type:String,
        required:[true,"Source is Required"]
    },
    destination: {
        type:String,
        required:[true,"Destination is required"]
    },
    arrival: {
        type:Date,
        required:[true,"Date is required"]
    },
    time: {
        type:String,
        required: [true,"Time is required"]
    },
    passengers: {
        type:Number,
        required:[true,"Passengers are required"]
    },
    email: {
        type:String,
        required:[true,"User Email is required"]
    }
})

export default mongoose.model('rides',rideSchema);