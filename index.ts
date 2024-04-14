#! /usr/bin/env node
import inquirer from "inquirer";

const currency  : any = {
    USD : 1 ,       // BASE CURRENCY
   EUR :  0.91,
   GBP : 0.76,
   INR :  74.75,
   PKR :  280

} ;

let usr_answer = await inquirer.prompt(
    [
    {
        name : "from",
        message :"Enter from currency",
        type : "list",
        choices : ["USD" , "PKR" ,"EUR" , "INR" ,"GBP"]
    },
    {
        name : "to",
        message : "Enter to currency",
        type : "list",
        choices : ["USD" , "PKR" ,"EUR" , "INR" ,"GBP"]
    },
    {
        name: "amount",
        message : " Enter your amount",
        type : "number"
    }
]
)
console.log(usr_answer);
let formAmount = currency[usr_answer.from]
let toAmount = currency[usr_answer.to]
let amount = usr_answer.amount

let amount_base = amount / formAmount
let converted_amount = amount_base * toAmount
console.log(converted_amount )

