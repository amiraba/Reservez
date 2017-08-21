'use strict';


module.exports = function(Offrereserv) {

    var app = require('../../server/server'); 
    /** 
    * @param {string} category
    * @param {Function(Error, array)} callback
    */  

    //var Prestataire=app.models.Prestataire;

    Offrereserv.offreResPerPrestataireCategory = function(category, callback) {
        
            var filter={where: {'prestataire_categorie': category} };
           
            Offrereserv.find(filter, function(err, items) { 
                if (err !==null){
                    return callback(err);
                }
                console.log("Results: "+ items);
                callback(null, items);
             });                                         
        
        };

};
