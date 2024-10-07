// code your solution here

//function declaration
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

saturdayFun('bathe my dog');

//function expression
const mondayWork=function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

//function
function wrapAdjective(Flair="*"){
    return function(Adjective= "Special"){
        return `You are ${Flair}${Adjective}${Flair}!`;
    };
}
const wrapStar=wrapAdjective("*");
console.log(wrapStar("a hard worker"));