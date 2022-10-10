const express = require ( 'express' )
const BusController = require ( '../controllers/Bus' )
const router = express.Router();
router.post( '/register' , BusController.create);
router.get( '/' , BusController.findAll);
router.get( '/:id' , BusController.findOne);
router.patch( '/:index/:id', BusController.update);
router.delete( '/:id' , BusController.destroy);
module .exports = router