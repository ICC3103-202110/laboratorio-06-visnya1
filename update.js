function temperature_convertor(temperature, conv_from, conv_to)
{
    if (conv_from == 'Celsius')
    {
        if (conv_to == 'Kelvin')
        {
            return parseFloat(temperature)  + 273.15
        }
        else if (conv_to =="Fahrenheit")
        {
            return (parseFloat(temperature)* 9/5 ) + 32  
        }
        else
        {
            return 'Try again'
        }
    }
    else if (conv_from == 'Kelvin')
    {
        if (conv_to == 'Celsius')
        {
            return parseFloat(temperature) - 273.15
        }
        else if (conv_to =="Fahrenheit")
        {
            return ((parseFloat(temperature) - 273.15)*  9/5) + 32
        }
        else
        {
            return 'Try again'
        }
    }
    else if (conv_from == 'Fahrenheit')
    {
        if (conv_to == 'Celsius')
        {
            return (parseFloat(temperature  - 32) * 5/9) 
        }
        else if (conv_to == 'Kelvin')
        {
            return ((parseFloat(temperature) - 32)* 5/9) + 273.15  
        }
        else
        {
            return 'Try again'
        }
    }    
}
                                //(model,temperatura,conv_from,conv_to)

function update(model, leftApproval, initialTemperature, conv_from, conv_to)
{ 
    const finalTemperature = temperature_convertor(initialTemperature, conv_from, conv_to) 
    
    if (leftApproval == true) 
    {
        return{
        ...model,
        leftApproval: leftApproval,
        leftValue: initialTemperature,
        leftUnit: conv_from,
        rightValue: finalTemperature,
        rightUnit: conv_to, 
        }
    }
    else
    {
        return{
        ...model,
        leftApproval: leftApproval,
        leftValue: finalTemperature,
        leftUnit: conv_to,
        rightValue: initialTemperature,
        rightUnit: conv_from, 
        }
    }
}

module.exports = 
{
    update
}
