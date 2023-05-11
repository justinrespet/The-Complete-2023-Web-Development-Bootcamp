    
module.exports = {
    getDate: getDate,
    //yesTest: yesTest
};

function getDate(){

    
    let today = new Date();

    let options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options)

    return day;
}

// function yesTest() {
//     return "yes";
// }