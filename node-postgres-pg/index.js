const express = require('express');
const Vehicle = require('./Vehicle');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const PORT = 8090;

app.use(bodyParser.json());

app.get('/vehicles', Vehicle.getAllVehicles.getAllVehicles);  //GET all vehicles from db
app.get('/vehicle', Vehicle.searchVehicles.searchVehicle); //SEARCH vehicle
app.post('/vehicleAdd', Vehicle.addVehicle.addVehicle); // ADD vehicle to db
app.put('/vehicleEdit/:idEdited', Vehicle.editVehicle.editVehicle); //EDIT vehicle
app.delete('/vehicleDel/:idToDelete', Vehicle.deleteVehicle.deleteVehicle); //DELETE vehicle

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});