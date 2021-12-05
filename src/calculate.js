import React from 'react'
import quarter from './assets/25.svg'
import dime from './assets/10.svg'
import nickel from './assets/5.svg'
import cent from './assets/1.svg'

export default function calculate({dollar}) {
    dollar = dollar.toString();
    let firstNumber = 0;
    let secondNumber = 0;    
    if(dollar.indexOf(".") === -1){
         firstNumber = dollar;
    }
    else {
        firstNumber = dollar.substr(0,dollar.indexOf("."))
    
        
        if(dollar.substr(dollar.indexOf(".") + 1,dollar.indexOf(".") + 2) === 0 ){
            secondNumber = dollar.substr(dollar.indexOf(".") + 1,dollar.length)

        
        }   
        else{
            secondNumber = dollar.substr(dollar.indexOf(".") + 1);
            if(secondNumber.toString().length > 1){
                secondNumber = dollar.substr(dollar.indexOf(".") + 1);

            }
            else {
                secondNumber = dollar.substr(dollar.indexOf(".") + 1) + "0";
                
            }
          

        }
            
    }
    let quarterValue = 0;
    let dimeValue = 0;
    let nickelValue = 0;
    let centValue = 0;

    let quarterDollar = 0;
    let dimeDollar = 0;
    let nickelDollar = 0;
    let centDollar= 0;

    function getCents() {
        let value = 0;
         if(secondNumber >= 1){
            let secondValue = Math.floor(secondNumber / 1);
            let dollarAmount = secondValue * 10;
            value += secondValue;
            secondNumber = secondNumber - dollarAmount;
        }
        centDollar = value * 0.01;
        centValue = value;
       }
    

    function getNickel() {
        let value = 0;
         if(secondNumber >= 5){
            let secondValue = Math.floor(secondNumber / 5);
            let dollarAmount = secondValue * 5;
            value += secondValue;
            secondNumber = secondNumber - dollarAmount;
        }
        nickelDollar = value * 0.05;
        nickelValue = value;
    }
    

    function getDime() {
        let value = 0;
         if(secondNumber >= 10){
            let secondValue = Math.floor(secondNumber / 10);
            let dollarAmount = secondValue * 10;
            value += secondValue;
            secondNumber = secondNumber - dollarAmount;
        }
        dimeDollar = value * 0.10;
        dimeValue = value;  
    }   

    function getQuarter() {
        let value = 0;
        if(firstNumber > 0){
             value += (firstNumber / 0.25);
            
        }
         if(secondNumber >= 25){
            let secondValue = Math.floor(secondNumber / 25);
            let dollarAmount = secondValue * 25;
            value += secondValue;
            secondNumber = secondNumber - dollarAmount;
        }
        quarterDollar = value * 0.25;
        quarterValue = value;
    }
    return (
        <div className='coins'>
        {getQuarter()}
        { getDime()}
        {getNickel()}
        {getCents()}
            <div className="subContainer">
                <img className='image' src={quarter} alt="25 cent"></img>
                <label>{quarterValue}</label>
                <label className='dollar'>{"$" + quarterDollar}</label>
            </div>
            <div className="subContainer">
                <img className='image' src={dime} alt="10 cent"></img>
                <label>{dimeValue}</label>
                <label className='dollar'>{"$" + dimeDollar}</label>

            </div>
            <div className="subContainer">
                <img className='image' src={nickel} alt="5 cent"></img>
                <label>{nickelValue}</label>
                <label className='dollar'>{"$" + nickelDollar}</label>

            </div>
            
            <div className="subContainer">
                <img className='image' src={cent} alt="1 cent"></img>
                <label>{centValue}</label>
                <label className='dollar'>{"$" + centDollar}</label>

            </div>
           


        </div>
    )
}
