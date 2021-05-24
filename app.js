const {input_approval} = require('./view')
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
        //const newModel = update(billAmount, percentage, model)
    
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

