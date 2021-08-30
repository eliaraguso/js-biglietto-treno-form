// 1. Seleziono i bottoni
var btnGenera = document.getElementById("genera");

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
        
        // // 5b. inietto il tipo di offerta
        // document.getElementById("offerta").innerHTML = ;

        // 5c. inietto il prezzo
        document.getElementById("prezzo-biglietto").innerHTML = prezzoFinale;

        // // 5d. inietto il numero della carrozza
        // document.getElementById("carrozza").innerHTML = ;

        // // 5e. inietto il codice prenotazione CP
        // document.getElementById("codice-prenotazione").innerHTML = ;

    }
);