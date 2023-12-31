"use scrict" 

// Seguendo il brief allegato, creare un mini clone di Whatsapp.

// Milestone 1
// // ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// // dall’interlocutore (bianco) assegnando due classi CSS diverse
// // ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// // nome e immagine di ogni contatto

// Milestone 2
// // ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// // messaggi relativi al contatto attivo all’interno del pannello della conversazione
// // ● Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// // ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// // “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// // ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// // un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)

// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// Consigli utili:
// ● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
// lista dei contatti
// ● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
// ● Per gestire le date, può essere utile la libreria Luxon

const { createApp } = Vue;

createApp({
    data() {
        return {
            currentChat: 0,
            newmessage: '',
            filterContact: '',
            // Array di oggetti: contatti e messaggi
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '202/01/10 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20-03-2020T16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Michele",
                    avatar: "_5",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Sara",
                    avatar: "_6",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Certo! Vedrai che ci divertiremo.",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_7",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "_8",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ]
        }
    },
    methods: {
        // Print array contact with v-for
        getAvatar(contact) {
            return `img/avatar${contact.avatar}.jpg`;
        },
        //Set current contact chat
        setCurrentContact(index) {
            this.currentChat = index;
        },
        //send message
        sendMessage() {
            let newdate = new Intl.DateTimeFormat('en-GB', {dateStyle: 'short', timeStyle: 'medium'}).format(new Date)
            const newmSentMessage = {
                date: newdate,
                message: this.newmessage,
                status: 'sent'

            }
            this.contacts[this.currentChat].messages.push(newmSentMessage);
            //automatic answer
            setTimeout(() => {
                let newdate = new Intl.DateTimeFormat('en-GB', {dateStyle: 'short', timeStyle: 'medium'}).format(new Date)
                const newmSentMessage = {
                    date: newdate,
                    message: 'ok',
                    status: 'received',
                }
                this.contacts[this.currentChat].messages.push(newmSentMessage);
            }, 1000);
        },
        //filter
        findContact() {
            this.contacts = this.contacts.filter((contactObj) => {
                let nameContact = contactObj.name.toLowerCase();
                return contactObj.name.includes(this.filterContact.toLowerCase())
            })
        },
    },
    computed: {
        filteredContact() {
            return this.contacts.filter((contactObj) => {
                let nameContact = contactObj.name.toLowerCase();
                return contactObj.name.includes(this.filterContact.toLowerCase())
            })
        }
    },
}).mount('#app');


