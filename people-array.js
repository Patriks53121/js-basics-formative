people = [
    {
        name: "Andris",
        age: "19",
        isStudent: true,
    },
    {
        name: "Jānis",
        age: "45",
        isStudent: false,
    }
]

for (i = 0; i < people.length; i++) {
    console.log("Vārds: " + people[i].name);
    //console.log("Vārds: " + people[i]['name']);
}