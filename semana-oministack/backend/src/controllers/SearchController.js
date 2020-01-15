const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = { 
    async index(request, response){
        // busca todos os devs num raio de 10km 
        // e filtrar por tecnologias
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: "Point",
                        coordinates: [ longitude, latitude ] 
                    },
                    $maxDistance: 10000
                }, 
            },
        });
        return response.json({ devs });
    }
}