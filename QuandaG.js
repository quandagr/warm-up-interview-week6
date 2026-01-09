let_url =  "https://dlpxywfaqldcuvvunhva.supabase.co"
let apikey = "sb_publishable_OV967A-huYPSKeAqeR6Deg_Sft_04fX"

async function getPets() {""

let response = await fetch(let_url, {
    method: 'GET',
    headers: {
        "apikey": apikey
    }
}); 

let data = await response.json();

let petsList = document.getElementById("petsList");
petsList.innerHTML = "";

data.forEach(pet => {
    let listItem = document.createElement("li");
    listItem.textContent = `${pet.name} - ${pet.age} years old -${pet.type}`;
    petsList.appendChild(listItem);
});
}

async function addPet(event) {
    event.preventDefault();
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let type = document.getElementById("petType").value;
    let newPet = { name: name, age: parseInt(age), type: type };

    let response = await fetch(let_url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apikey
        },
        body: JSON.stringify(newPet)
    });
    if (response.ok) {
        getPets();
        document.getElementById("addPetForm").reset();

    }
}   
