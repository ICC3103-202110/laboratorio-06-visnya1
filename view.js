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

    const {inputTemperature} = model
    const message2 = 'Temperature value to convert?'

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
        },
        {
            name: 'inputTemperature',
            type : 'int',
            message: message2,
            default: inputTemperature,
            validate: function(value)
            {
                if(value >= 1)
                {
                    return true
                }
                else
                {
                   return false 
                }
            }    
        }
    ])
}

function list_convertion(model)
{
    const {conv_from} = model
    const message3 = 'From?'
    const {conv_to} = model
    const message4 = 'To?'
    
    return inquirer.prompt([
        {
            name: 'conv_from',
            type : 'list',
            message: message3,
            default: conv_from,
            choices: ['Celsius','Fahrenheit','Kelvin']
        },
        {   name: 'conv_to',
            type : 'list',
            message: message4,
            default: conv_to,
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
    list_convertion,
}