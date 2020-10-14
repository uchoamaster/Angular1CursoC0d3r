const express = require('express')

module.exports = function(server) {
   
    //api routes

    const router = express.Router()
    server.use('/api', router)

 //rotas da API
// router.route('/teste').get(function(req, res, next){
//     res.send('funcionou')
// })

 const billingCycleService = require('../api/billingCycle/billingCycleService')
 billingCycleService.register(router,'/billingCycles')
 
}