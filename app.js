const {input_approval, list_convertion_left,list_convertion_right} = require('./view')
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

        const {leftApproval} = await input_approval(model)

        if (leftApproval == true)
        {
            const {leftValue,leftUnit,rightUnit} = await list_convertion_left(model)
            const newModel = update(model, leftApproval, leftValue, leftUnit, rightUnit)

            state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
            }
        }
        else
        {
            const {rightValue,rightUnit,leftUnit} = await list_convertion_right(model) 
            const newModel = update(model, leftApproval, rightValue, rightUnit, leftUnit) 
            
            state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
            }
        }
   
    }  
}

module.exports = 
{
    app
}