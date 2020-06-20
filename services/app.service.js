const AppModel = require('../models/app.model');

exports.AppService = class {
    constructor() {}

    async getApps(){
        try{
            return await AppModel.find();
        }catch(e){
            throw new Error(e);
        }
    }

    async createApp(app){
        try{
            let newApp = new AppModel(app);
            return await newApp.save();
        }catch(e){
            throw new Error(e);
        }
    };

    async getAppById(appId) {
        try{
            return await AppModel.findById(appId).exec();
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteAppById(appId){
        try{
            return await AppModel.deleteOne({ _id: appId }).exec();
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteAllApps(){
        try{
            return await AppModel.remove().exec();
        }catch(e){
            throw new Error(e);
        }
    };
};
