const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle()
{
    return chalk.magenta(
        figlet.textSync
        (
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}


function getTable(model)
{
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model

    return [{
            'Left Value': leftValue,
            'Left Unit': leftUnit,
            'Right Value': rightValue,
            'Right Unit': rightUnit
        },
        
    ]
}


function input_approval(model)
{
    const {leftApproval} = model
    const message1 = 'Left temperature is source? '

    return inquirer.prompt([
        {
            name: 'leftApproval',
            type : 'confirm',
            message: message1,
            default: leftApproval,
            validate: function(value)
           {
                if(value === "Yes" |  value === "No")
                {
                    return true
                }
                else
                {
                   return 'it has to be a real answer'
                }
            }
        }
    ])
}


function list_convertion_right(model)
{
    const {rightValue} = model
    const message2 = 'Temperature value to convert?'

    const {rightUnit} = model
    const message3 = 'From?'

    const {leftUnit} = model
    const message4 = 'To?'
    
    return inquirer.prompt([{
            name: 'rightValue',
            type : 'int',
            message: message2,
            default: rightValue,
        },   
        {
            name: 'rightUnit',
            type : 'list',
            message: message3,
            default: rightUnit,
            choices: ['Celsius','Fahrenheit','Kelvin']
        },
        {   name: 'leftUnit',
            type : 'list',
            message: message4,
            default: leftUnit,
            choices: ['Celsius','Fahrenheit','Kelvin']
        }         
    ])
}

function list_convertion_left(model)
{
    const {leftValue} = model
    const message2 = 'Temperature value to convert?'

    const {leftUnit} = model
    const message3 = 'From?'

    const {rightUnit} = model
    const message4 = 'To?'
    
    return inquirer.prompt([{
            name: 'leftValue',
            type : 'int',
            message: message2,
            default: leftValue,
        },   
        {
            name: 'leftUnit',
            type : 'list',
            message: message3,
            default: leftUnit,
            choices: ['Celsius','Fahrenheit','Kelvin']
        },
        {   name: 'rightUnit',
            type : 'list',
            message: message4,
            default: rightUnit,
            choices: ['Celsius','Fahrenheit','Kelvin']
        }         
    ])
}



function view(model)
{
    return{
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = 
{
    view,
    input_approval,
    list_convertion_right,
    list_convertion_left
}