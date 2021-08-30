// 1. Seleziono i bottoni
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// 2. al click del bottone genera
btnGenera.addEventListener("click",
    function() {
        // logica di generazione del biglietto
       
        // 3. prendo i valori dei campi input e select
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("chilometri").value);
        var fasciaEta = document.getElementById("eta").value;
        
        // 4. calcolo il prezzo in base alla fascia d'età
        // 4a. genero una variabile con il costo chilometrico del biglietto 
        var prezzoKm = (0.21);

        // 4b. genero tre variabili per calcolare i tre prezzi del biglietto in base alla fascia d'età
        var prezzoStandard = (prezzoKm * km);
        var prezzoMinorenni = (prezzoStandard * 0.8);
        var prezzoOver65 = (prezzoStandard + 0.6);

        // 4c. genero una variabile che andrà a contenere il prezzo finale
        var prezzoFinale ;

        // 4d controllo l'ètà dell'utente e calcolo il prezzo del biglietto
        if (fasciaEta == "minorenne") {
            prezzoFinale = prezzoMinorenni;
        } else if (fasciaEta == "maggiorenne") {
            prezzoFinale = prezzoStandard;
        } else {
            prezzoFinale = prezzoOver65;
        }
        
        // 5. stampo tutti i dati nei div del biglietto
        // 5a. inietto il nome del passeggero
        document.getElementById("nome-passeggero").innerHTML = nome;
        
        // 5b. inietto il tipo di offerta
        if (fasciaEta == "minorenne") {
            document.getElementById("offerta").innerHTML = "Biglietto U18 -20% di sconto";
        } else if (fasciaEta == "maggiorenne") {
            document.getElementById("offerta").innerHTML = "Biglietto standard";
        } else {
            document.getElementById("offerta").innerHTML = "Biglietto Over 65 -40% di sconto";
        }
        

        // 5c. inietto il prezzo
        document.getElementById("prezzo-biglietto").innerHTML = prezzoFinale;

        // 5d. inietto il numero della carrozza
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20) + 1;

        // 5e. inietto il codice prenotazione CP
        document.getElementById("codice-prenotazione").innerHTML = Math.floor(Math.random() * 9999);

        // mostro il biglieto
        document.getElementById("biglietto").classList.add("open");
    }
);

// al click del bottone annulla
btnAnnulla.addEventListener("click",
    function() {
        // nascondo il biglietto
        document.getElementById("biglietto").classList.remove("open");

        // reset di tutti i campi
        document.getElementById("nome").value = "";
        document.getElementById("chilometri").value = "";
        document.getElementById("eta").value = "";

    }
);