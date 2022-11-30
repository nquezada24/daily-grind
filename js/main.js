//alert("can you see this?")
/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates 
    unique colors and content for each weekday (Sunday to Saturday) into the page.  
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include 
    the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    Image(of specific coffee)
    alt tag (identifes type of coffee)
    description (of this type of coffee)
    weekday
    color(supporting image)

    The unique color could affect the background HTML, or an element on the page for each day of the week.  
    All of the above must occur within one page.


*/

function coffeeTemplate(coffee){

    return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.pic.alt}" id="coffee" />
        <strong>${coffee.day} Coffee Special</strong> ${coffee.day} daily coffee special is ${coffee.name}, ${coffee.desc}
  </p>`; 
}

let myDate=new Date ();
let today=myDate.getDay();
let coffee ="";


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }else{//today's day of week
    myDay = today;
 }
 

//change the  string to an integar
    myDay = parseInt(myDay);


switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Sunday",
            desc: `I like me some Bubble Tea`
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            color:"brown",
            name: "Caramel Latte",
            pic: "Caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Monday",
            desc: `It's cold, so a caramel latte sounds good`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"black",
            name: "Cold Brew",
            pic: "Cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            day: "Tuesday",
            desc: `Cold brew for when we're serious!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"brown",
            name: "Drip Coffee",
            pic: "drip.jpg",
            alt: "A picture of a Drip Coffee",
            day: "Wednesday",
            desc: `This is for slow morning days`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"blue",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Thursday",
            desc: `This is for days to unlock your iner child. Grab a Puppaccino for your fur friend too!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"cream",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of mocha",
            day: "Friday",
            desc: `try our mocha for the perfect mix of espresso and hot coco!`
        };
    break;
    
    case 6:
        today = "Saturday";
        coffee = {
            color:"orange",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Saturday",
            desc: `Unlock your inner fall vibes with our Pumpkin Spice!`
        };
    break;

    default:
        alert("something went wrong!");
}

console.log(coffee);


document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

 //change the background color of the HTML element
 document.querySelector("html").style.backgroundColor = coffee.color;
