const AppService = new(require('../services/app.service')).AppService;
const _ = require("lodash");

exports.AppController = class {
    constructor(){}


    async getReleaseNoteByAppIdAndVersion(request){
        try{
            let version_num = request.query.version_num;
            let page = request.query.page || 1;
            let per_page = request.query.limit || 5;
            let offset = (page - 1) * per_page;

            let appId = request.params.id;
            let appById = await AppService.getAppById(appId);
            let version = _.filter(appById.version, {'version_num':  version_num});
            let versionReleaseDate = version[0].release_date;
            let filteredReleaseNotes =  _.filter(version[0].release_notes, {public_flag: true}).slice(offset).slice(0, per_page);

            return filteredReleaseNotes.map(releaseNote =>{
                let temp = releaseNote.toObject();
                temp.release_date = versionReleaseDate;
                temp.version_num = version_num;
                return temp;
            });

        }catch(e){
            throw new Error(e);
        }
    }

    async getApps(){
        try {
            return await AppService.getApps();
        } catch (e) {
            throw new Error(e);
        }
    }

    async createApp(request){
        try{
            return await AppService.createApp(request.body);
        }catch(e){
            throw new Error(e);
        }
    }

    async getAppById(request){
        try{
            return await AppService.getAppById(request.params.id);
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteAppById(request){
        try{
            return await AppService.deleteAppById(request.params.id);
        }catch(e){
            throw new Error(e);
        }
    }

    async deleteAllAps(){
        try{
            await AppService.deleteAllApps();
        }catch(e){
            throw new Error(e);
        }
    }
};
