var body = document.body


var consumption = document.getElementById("consumption")
console.log(consumption);
var climate = document.getElementById("climate")
console.log(climate);
var resources = document.getElementById("resources")
console.log(resources);
var people = document.getElementById("people")
console.log(people);

var savetext = document.getElementById("save")
var frame = document.getElementById("frame")

consumption.onclick=()=>{
    body.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    body.style.backgroundSize="100%"
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers"
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    consumption.style.background="green"
    climate.style.backgroundColor="transparent"
    people.style.backgroundColor="transparent"
    resources.style.backgroundColor="transparent"


}
// consumption.style.background="green"

climate.onclick=()=>{
    body.style.background ="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    body.style.backgroundSize="100%"
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    climate.style.backgroundColor="skyblue"
    consumption.style.background="transparent"
    people.style.backgroundColor="transparent"
    resources.style.backgroundColor="transparent"


    
}
// climate.style.backgroundColor="skyblue"

resources.onclick=()=>{
    body.style.background ="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    body.style.backgroundSize="100%"
    savetext.innerHTML=" Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    resources.style.backgroundColor="orange"
    consumption.style.background="transparent"
    climate.style.backgroundColor="transparent"
    people.style.backgroundColor="transparent"

    
}
// resources.style.backgroundColor="orange"
people.onclick=()=>{
    body.style.background ="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
    body.style.backgroundSize="100%"
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    people.style.backgroundColor="red"
    consumption.style.background="transparent"
    climate.style.backgroundColor="transparent"
    resources.style.backgroundColor="transparent"

}
// people.style.backgroundColor="red"
