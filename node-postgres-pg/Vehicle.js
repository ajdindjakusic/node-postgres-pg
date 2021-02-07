const database = require('./database');

const getAllVehicles = {
  async getAllVehicles(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM vehicles';
      const  result  = await database.query(readAllQuery);
      return res.send(result.rows);
    } catch (error) {
      return res.send(error);
    }
  }
};

const searchVehicles = {
    async searchVehicle(req, res) {
      
      const searchTerm = req.query.searchTerm;
  
      try {
        const searchQuery = `select * from vehicles where is_deleted = false 
        AND (lower(brand) LIKE '%${searchTerm}%' or lower(model) LIKE '%${searchTerm}%' 
        OR lower(plate) LIKE '%${searchTerm}%');`;
  
        const  result  = await database.query(searchQuery);
  
        return res.send(result.rows);
      } catch (error) {
        return res.send(error);
      }
    }
  };

const addVehicle = {
    async addVehicle(req, res) {

        const vehicle = req.body
        console.log(vehicle);
 
    try {
        const vehicleAddQuery = 
        `insert into vehicles (id_company, brand, model, plate, category, registration_date, registration_end_date)
        values (null, '${vehicle.brand}', '${vehicle.model}', '${vehicle.plate}', '${vehicle.category}',
        '${vehicle.registration_date}', '${vehicle.registration_end_date}')`;

        const  result  = await database.query(vehicleAddQuery);

        res.send(result);
        } 
    catch (error) {
        return res.send(error);
      }
    }
  };

  const editVehicle = {
    async editVehicle(req, res) {

        const vehicleEdited = req.body
        console.log(vehicleEdited);
 
    try {
        const vehicleEditQuery = 
        `update vehicles
         set brand = '${vehicleEdited.brand}',
             model = '${vehicleEdited.model}',
             plate = '${vehicleEdited.plate}',
             category = '${vehicleEdited.category}',
             registration_date = '${vehicleEdited.registration_date}',
             registration_end_date = '${vehicleEdited.registration_end_date}'
         where id = '${vehicleEdited.id}';`;

        const  result  = await database.query(vehicleEditQuery);

        res.send(result);
        } 
    catch (error) {
        return res.send(error);
      }
    }
  };

  const deleteVehicle = {
    async deleteVehicle(req, res) {

        const idToDel = req.params.idToDelete;
        console.log(idToDel);
 
    try {
        const vehicleDeleteQuery = 
        `update vehicles
            set is_deleted = true
            where id = '${idToDel}';`;

        const  result  = await database.query(vehicleDeleteQuery);

        res.send(result);
        } 
    catch (error) {
        return res.send(error);
      }
    }
  };

module.exports = {
    getAllVehicles,
    searchVehicles,
    addVehicle,
    editVehicle,
    deleteVehicle
};
