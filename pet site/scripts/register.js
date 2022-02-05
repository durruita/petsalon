let salon={
    name:"Pet Stop",
    address:{
        street:"777 Main St.",
        ZIPcode:"92055",
        number:"Suite Z"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Bolt",
            age:32,
            gender:"Male",
            breed:"mutt",
            service:"Haircut",
            owner:"mike",
            phone:"556-555-1234"
        },
        {
            name:"james",
            age:1,
            gender:"Male",
            breed:"pitbull",
            service:"daycare",
            owner:"Jennifer",
            phone:"556-555-1234"
        },
        {
            name:"Leo",
            age:12,
            gender:"Male",
            breed:"german shepard",
            service:"Haircut",
            owner:"Jimmy",
            phone:"556-555-1234"
        },
        {
            name:"Buddy",
            age:44,
            gender:"Male",
            breed:"bulldog",
            service:"wash",
            owner:"Bob",
            phone:"556-555-1234"
        },
    ]
}

function displayPetNames(){
    console.log(salon.pets.name);
}
displayPetNames();