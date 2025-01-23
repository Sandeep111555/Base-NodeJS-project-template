const {Logger} = require('../config');
//single repository for crud operation
class CrudRepository{
    constructor(model){
        this.model = model;
    }
    //create async function
    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error){
            Logger.error("Exception in Crud Repository: create()");
            throw error;
        }
    }
    //destroy async function takes data as id
    async destroy(data){
        try{
            const response = await this.model.destroy({
                where:{
                    id:data
                }
        });
            return response;
        }
        catch(error){
            Logger.error("Exception in Crud Repository: destroy()");
            throw error;
        }
    }
    //update async function takes data as id
    async update(data){
        try{
            const response = await this.model.update({
                where:{
                    id:data
                }
        });
            return response;
        }
        catch(error){
            Logger.error("Exception in Crud Repository: update()");
            throw error;
        }
    }
    //findAll function
        async findAll(){
            try{
                const response = await this.model.findAll();
                return response;
            }
            catch(error){
                Logger.error("Exception in Crud Repository: findByPk()");
                throw error;
            }
        } 
    //find by pk function takes data as id
    async findByPk(data){
        try{
            const response = await this.model.findByPk({
                where:{
                    id:data
                }
        });
            return response;
        }
        catch(error){
            Logger.error("Exception in Crud Repository: findByPk()");
            throw error;
        }
    }    
}

module.exports = CrudRepository;