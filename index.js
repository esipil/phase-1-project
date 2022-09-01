document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.getElementById("animal-title").textContent=data.name
    document.getElementById("animal-image").src=data.image_link
    document.getElementById("the-details").textContent=`${data.name} latin\'s name is ${data.latin_name}. It is a ${data.animal_type} whose active time is ${data.active_time}. It measures between ${data.length_min} and ${data.length_max}metres in length. It weight between ${data.weight_min} and ${data.weight_max}. It has a lifespan of ${data.lifespan} years and spends most of its life on ${data.habitat}. They can be found in ${data.geo_range}`;
 })
})