import React from 'react'
import quarter from './assets/25.svg'
import dime from './assets/10.svg'
import nickel from './assets/5.svg'
import cent from './assets/1.svg'

export default function calculate({dollar}) {
    dollar = dollar.toString();
    let leftAmount = dollar.substr(0,dollar.indexOf("."))
    console.log("dollar is " +  dollar)
    let quarterValue = 0;
    let dimeValue = 0;
    let nickelValue = 0;
    let centValue = 0;

    function getCents() {
        console.log("cent" + leftAmount)
        if(leftAmount >= 0.01){
            let value = Math.floor(leftAmount / 0.01);
            console.log("value" + value)
            let dollarValue = 0.01 * value;

            leftAmount = leftAmount - dollarValue;
            centValue = value;
        }
    }

    function getNickel() {
        console.log("nickel" + leftAmount)

        if(leftAmount >= 0.05){
            let value = Math.floor(leftAmount / 0.05);
            let dollarValue = 0.05 * value;

            leftAmount = leftAmount - dollarValue;
            nickelValue = value;
        }
    }

    function getDime() {
        console.log("dime" + leftAmount)

        if(leftAmount >= 0.10){
            let value = Math.floor(leftAmount / 0.10);
            let dollarValue = 0.10 * value;

            leftAmount = leftAmount - dollarValue;
            dimeValue = value;
        } 
        
    }   

    function getQuarter() {
        console.log("quarter" + leftAmount)

        if(leftAmount >= 0.25){
            let value = Math.floor(leftAmount / 0.25);
            let dollarValue = 0.25 * value;

            leftAmount = leftAmount - dollarValue;
            quarterValue = value;
            
        }
    }
    return (
        <div className='coins'>
        {getQuarter(), getDime(),getNickel(),getCents()}
            <div className="subContainer">
                <img className='image' src={quarter} alt="25 cent"></img>
                <label>{quarterValue}</label>
            </div>
            <div className="subContainer">
                <img className='image' src={dime} alt="25 cent"></img>
                <label>{dimeValue}</label>
            </div>
            <div className="subContainer">
                <img className='image' src={nickel} alt="25 cent"></img>
                <label>{nickelValue}</label>
            </div>
            
            <div className="subContainer">
                <img className='image' src={cent} alt="25 cent"></img>
                <label>{centValue}</label>
            </div>
           


        </div>
    )
}
