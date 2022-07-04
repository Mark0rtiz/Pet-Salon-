let groomingService= {
    name: "Mark's Grooming Service",
    address: "432 Doggo ln",
    hours:{
        open: "9:00am",
        close: "7:00pm"
    },
    services: ["haircuts", "baths", "nail trimming",],
    pets:[
        {
            name:"Pepe",
            age: 7,
            breed:"Doberman",
            service:"bath",
            ownerName:"Mark",
            contactPhone:"123-45-6789"
        },
        {
            name:"Courage",
            age: 12,
            breed:"Mix",
            service:"full service",
            ownerName:"Eustace",
            contactPhone:"666-666-6666"
        },
        {
            name:"Pluto",
            age: 13,
            breed:"Bloodhound",
            service:"Nail trim",
            ownerName:"Mickey",
            contactPhone:"999-999-9999"
        }
    ]
}

for (let i = 0; i < groomingService.pets.length; i++) {
    console.log(groomingService.pets[i].name);
}


function displayInfo(){
    document.getElementById("groomingInfo").innerHTML=`Welcome to ${groomingService.name}! We're open from ${groomingService.hours.open} to ${groomingService.hours.close}. We're located at ${groomingService.address}`;
}
displayInfo();

//create alert to show how many pets are in the salon

function petsInHouse(){
    for (let i = 0; i < groomingService.pets.length; i++) {
    alert(`Current pets in queue: ${groomingService.pets[i].name}`)
}
}
petsInHouse();