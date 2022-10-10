const BusModel = require('../models/buses')
const mongoose = require('mongoose');
const Bus = mongoose.model("bus");
const bcrypt = require('bcrypt')





exports.create = async (req, res) => {
    const {
        busNumber,
        companyName,
        busType,
        startCity,
        destination,
        departTime,
        departDate,
        pricePerSeat,
        totalSeats,
        driverName,
        driverNumber
    } = req.body;
    // if (!busNumber || !companyName || !busType || !startCity || !destination || !departTime || !pricePerSeat || !driverName || !driverNUmber) {
    //     return res.status(422).json({
    //         error: "please add all the fields"
    //     })
    // }
    var ForEverySeat = new Array(totalSeats).fill(0);

    const bus = new BusModel({
        busNumber,
        companyName,
        busType,
        startCity,
        destination,
        departTime,
        departDate,
        pricePerSeat,
        totalSeats,
        availableSeats : totalSeats, 
        ForEverySeat,

        "driver.name": driverName,
        "driver.phoneNumber": driverNumber,

    })
    await Bus.findOne({busNumber:busNumber,departDate:departDate,departTime:departTime})
    .then((savedBus)=>{
        if(savedBus){
          return res.status(422).json({error:"Bus already exists with that route"})
        }
        bus.save().then(data => {
            res.send({
                message: "Bus schedule created successfully!!",
                bus: data
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating bus schedule"
            });
        });
       
    })
    .catch(err=>{
      console.log(err)
    })
    // await bus.save().then(data => {
    //     res.send({
    //         message: "Bus schedule created successfully!!",
    //         bus: data
    //     });
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating bus schedule"
    //     });
    // });


};

exports.update = async (req, res) => {
    if (!req.body) {
        re.status(400).send({
            message: "Data cannot be empty"
        })
    }
    const id = req.params.id;
    var i = req.params.index;
    await BusModel.findByIdAndUpdate(id, {$set:{
        [`ForEverySeat.${i}`]: req.body.toggle,
     }}).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Bus not found.`
            })
        } else {
            res.send({
                message: "Bus updated successfully."
            })

        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });

    })
}

exports.destroy = async (req, res) => {
    await BusModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Bus not found.`
            });
        } else {
            res.send({
                message: "Bus deleted successfully!"
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });


}

exports.findOne = async (req, res) => {
    try {
        const bus = await
        BusModel.findById(req.params.id);
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const bus = await BusModel.find();
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

