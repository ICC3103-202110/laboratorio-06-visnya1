const {input_approval, list_convertion} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view)
{
    while (true)
    {
        const {model, currentView} = state
        const {title, table} = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const {leftApproval, inputTemperature} = await input_approval(model)
        const {conv_from, conv_to} = await list_convertion(model)   
        const newModel = update(model, leftApproval, inputTemperature, conv_from, conv_to)
        
        state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
        }
    }  
}

module.exports = 
{
    app
}