//  stampare in pagina un item per ogni elemento contenuto in un array
//  ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
//  predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure 
//  ciccando su un pulsante, il testo digitato viene aggiunto alla lista


// creo la costante app
const app = new Vue(

    {
    el : '#app',
// apro data
    data :{
        nuovaSerie : '',

        // metto le serie in un array
        serie:  [
           'Lucifer',
           'La casa de papel',
           'Attack on titan',
           'Peaky blinders'

        ]
     },

// inizio metodi
     methods :{
        addSerie(){

            // pusho le serie inserite dall'utente

            this.serie.push(this.nuovaSerie);
            this.nuovaSerie = '';

        },

        // faccio si che se l'utente prema sulla x la serie venga tolta
        togliSerie(indice){
            this.serie.splice(indice,1)
       
          }



     }




    }





);

// chiusura app

