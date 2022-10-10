var mongoose = require ( 'mongoose' );
const BusSchema = new mongoose.Schema({
    busNumber: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    busType: {
        type: String,
        default : 'sleeper',
        required: true
    },
    
    startCity: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departDate: {
        type: String,
        required: true
    },
    departTime: {
        type: Number,
        required: true
    },
    totalSeats: {
        type: Number,
        default : 30
    },
    availableSeats: {
        type: Number,
        default : 0
    },
    pricePerSeat: {
        type: Number,
        required : true
        
    },
    driver : {
           name  : String,
           phoneNumber : Number
    },
    ForEverySeat : {
        type : Array
    }

},
{ timestamps: true })

const Bus = mongoose.model("bus", BusSchema);

module.exports = Bus;
