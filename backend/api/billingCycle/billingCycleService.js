const BillingCycle = require('./billingCycle')

//get obter todos, e obter por id
//post faz a inclusão de um novo ciclo de pagamento

//put faz a alteração de um ciclo de pagamento que ja exista

//delete remove o ciclo de pagamento que ja existe

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})


module.exports = BillingCycle