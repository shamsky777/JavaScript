let x = 15;
let y = 20
let cifri = "x"

// if(x > y)
// {
//     console.log("x მეტია y-ზე");
// }
// else
// {
//     console.log("x ნაკლებია y-ზე")
// }

switch(cifri)
{
    case "x":
        const resultX = x > y;
        console.log("x მეტია y-ზე");
        break;
    case "y":
        const resultY = x < y;
        console.log("x ნაკლებია y-ზე");
        break;
    default:
        console.log("Default Case")
        break;
}