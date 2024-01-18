
const ManagerController = require('../controllers/manager.controller');
 
module.exports = app => {
    app.get('/api/managers', ManagerController.findAllManagers);
    app.get('/api/managers/:id', ManagerController.findOneSingleManager);
    app.patch('/api/managers/:id', ManagerController.updateExistingManager);
    app.post('/api/managers', ManagerController.createNewManager);
    app.delete('/api/managers/:id', ManagerController.deleteAnExistingManager);
}
