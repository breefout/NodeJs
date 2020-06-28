const fs = require("fs"),
    path = require("path");



let chirps = [
    {
        name: "Cow",
        chirp: "Eat grass"
    },
    {
        name: "Toenail",
        chirp: "Get Clipped"
    },
    {
        name: "Poop",
        chirp: "Get scooped"
    },
    {
        name: "Pizza",
        chirp: "Want a slice?"
    },
    {
        name: "Florida",
        chirp: "Lets go!"
    },
];
fs.writeFile("./chirps.json", JSON.stringify(chirps), () => null);
fs.readFile("./chirps.json", (err, data)=>{
    if (err) throw err;
});