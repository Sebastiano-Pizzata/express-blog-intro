/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, 
contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

Testare su postman
*/

const express = require('express');
const app = express();
const port = 2000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.get("/api/bacheca", (req, res) => {
    const bacheca = [
        {
            titolo: "Ciambellone",
            contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "images/ciambellone.jpeg",
            tags: ["Antipasti", "Ricette vegane", "Ricette al forno"]
        },
        {
            titolo: "Cracker di Barbabietola",
            contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "images/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegane", "Ricette al forno"]
        },
        {
            titolo: "Pane Fritto Dolce",
            contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "images/pane_fritto_dolce.jpeg",
            tags: ["Antipasti", "Ricette vegane", "Ricette al forno"]
        },
        {
            titolo: "Pasta di Barbabietola",
            contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "images/pasta_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegane", "Ricette al forno"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "images/torta_paesana.jpeg",
            tags: ["Antipasti", "Ricette vegane", "Ricette al forno"]
        },
    ]

    res.json(bacheca)
})

app.listen(port, () => {
    console.log(`server ${port}`)
})