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


function update(model, leftApproval, inputTemperature, conv_from, conv_to)
{ 
    const newTemperature = temperature_convertor(inputTemperature, conv_from, conv_to) 
    
    if (leftApproval == true)
    {
        return{
        ...model,
        inputTemperature: inputTemperature,
        leftApproval: leftApproval,
        conv_from: conv_from,
        conv_to: conv_to,
        leftValue: inputTemperature,
        leftUnit: conv_from,
        rightValue: newTemperature,
        rightUnit:conv_to 
        }
    }
    else
    {
        return{
        ...model,
        
        inputTemperature: inputTemperature,
        leftApproval: leftApproval,
        conv_from: conv_from,
        conv_to: conv_to,
        
        rightValue: inputTemperature,
        rightUnit: conv_from,
        leftValue: newTemperature,
        leftUnit: conv_to
        }
    }

}

 module.exports = 
{
    update
}
