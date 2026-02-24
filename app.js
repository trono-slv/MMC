"use strict";

/* =========================================================
   PANIERE DOMANDE (INCOLLA QUI IL TUO)
   Schema richiesto:
   {"id":1,"category":"teoria","q":"...","a":{"A":"...","B":"...","C":"...","D":"..."},"correct":"B","exp":"..."}
   ========================================================= */
const QUESTION_BANK = [
  // ESEMPIO (rimuovi e incolla il tuo):
  // {"id":1,"category":"teoria","q":"Qual è il limite RWL NIOSH in condizioni ideali?","a":{"A":"25kg","B":"23kg","C":"20kg","D":"30kg"},"correct":"B","exp":"Equazione NIOSH rivista 1991/2023."},
    // === BLOCCO 1: TEORIA NIOSH/OCRA (1-40) ===
    {"id":1,"category":"teoria","q":"Qual è il limite RWL NIOSH in condizioni ideali?","a":{"A":"25kg","B":"23kg","C":"20kg","D":"30kg"},"correct":"B","exp":"Equazione NIOSH rivista 1991/2023."},
    {"id":2,"category":"teoria","q":"Cosa misura principalmente il metodo OCRA?","a":{"A":"Sollevamenti","B":"Arti superiori","C":"Tronco","D":"Gambe"},"correct":"B","exp":"Metodo INAIL per la ripetitività."},
    {"id":3,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una distanza mani di 25cm?","a":{"A":"0.95","B":"1.0","C":"0.81","D":"1.2"},"correct":"B","exp":"Distanza ottimale."},
    {"id":4,"category":"teoria","q":"A cosa si riferisce la norma ISO 11228-1?","a":{"A":"Spinta","B":"Sollevamento","C":"Ripetitività","D":"Postura"},"correct":"B","exp":"Sollevamento manuale."},
    {"id":5,"category":"teoria","q":"Cosa indica un punteggio OCRA tra 25-52.5%?","a":{"A":"Accettabile","B":"Rischio moderato","C":"Alto rischio","D":"Critico"},"correct":"B","exp":"Interventi richiesti."},
    {"id":6,"category":"teoria","q":"Qual è l'altezza di origine ottimale secondo NIOSH?","a":{"A":"0-75cm","B":"75-110cm","C":"110-145cm","D":">145cm"},"correct":"B","exp":"Zona delle spalle."},
    {"id":7,"category":"teoria","q":"Qual è la spinta raccomandata per operatori allenati secondo ISO?","a":{"A":"150N","B":"200N","C":"250N","D":"300N"},"correct":"C","exp":"250N raccomandato."},
    {"id":8,"category":"teoria","q":"Cosa valuta il metodo REBA?","a":{"A":"Ripetitività","B":"Posture del corpo","C":"Vibrazioni","D":"Rumore"},"correct":"B","exp":"Rapid Entire Body Assessment."},
    {"id":9,"category":"teoria","q":"Cosa indica un Lifting Index maggiore di 1?","a":{"A":"Sicuro","B":"Rischio","C":"Ottimale","D":"Neutro"},"correct":"B","exp":"LI = Carico/RWL."},
    {"id":10,"category":"teoria","q":"Qual è la principale causa di lombalgia nella movimentazione manuale dei carichi?","a":{"A":"Peso elevato","B":"Frequenza","C":"Torsione","D":"Combinazione di fattori"},"correct":"D","exp":"Fattori multifattoriali."},

    {"id":11,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un'asimmetria di 0°?","a":{"A":"0.95","B":"1.0","C":"1.2","D":"0.8"},"correct":"B","exp":"Simmetria perfetta."},
    {"id":12,"category":"teoria","q":"Qual è la soglia di intervento per la checklist OCRA?","a":{"A":"5","B":"7.5","C":"10","D":"15"},"correct":"B","exp":"Soglia di intervento."},
    {"id":13,"category":"teoria","q":"Qual è la trazione massima secondo ISO 11228-2?","a":{"A":"150N","B":"200N","C":"250N","D":"300N"},"correct":"B","exp":"Trazione massima."},
    {"id":14,"category":"teoria","q":"Cosa indica un punteggio RULA tra 1-2?","a":{"A":"Accettabile","B":"Indagine necessaria","C":"Cambiare subito","D":"Urgente"},"correct":"A","exp":"Postura accettabile."},
    {"id":15,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una durata di 8 ore?","a":{"A":"0.85","B":"1.0","C":"0.95","D":"1.1"},"correct":"A","exp":"Affaticamento cumulativo."},
    {"id":16,"category":"teoria","q":"Cosa indica ISO per una postura del tronco flesso?","a":{"A":"Accettabile","B":"Sconsigliato","C":"Vietato","D":"Obbligatorio"},"correct":"B","exp":"Riduce la capacità."},
    {"id":17,"category":"teoria","q":"Qual è il valore TLV HAL secondo ACGIH?","a":{"A":"6kg","B":"10kg","C":"15kg","D":"23kg"},"correct":"A","exp":"Threshold Limit Value."},
    {"id":18,"category":"teoria","q":"Qual è la presa ottimale secondo NIOSH?","a":{"A":"Power grip","B":"Pinch grip","C":"Hook grip","D":"Tutte"},"correct":"A","exp":"Impugnatura ottimale."},
    {"id":19,"category":"teoria","q":"Cosa indica un punteggio OCRA maggiore del 52.5%?","a":{"A":"Accettabile","B":"Inaccettabile","C":"Moderato","D":"Basso"},"correct":"B","exp":"Rischio critico."},
    {"id":20,"category":"teoria","q":"Qual è il limite biomeccanico della forza compressiva L5/S1?","a":{"A":"2000N","B":"3400N","C":"5000N","D":"1000N"},"correct":"B","exp":"Limite tollerabile."},

    {"id":21,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una frequenza di 1 sollevamento all'ora?","a":{"A":"0.85","B":"1.0","C":"0.95","D":"1.1"},"correct":"B","exp":"Bassa frequenza."},
    {"id":22,"category":"teoria","q":"Qual è il numero massimo di ripetizioni al giorno secondo ISO 11228-3?","a":{"A":"500","B":"2000","C":"5000","D":"10000"},"correct":"B","exp":"Limite raccomandato."},
    {"id":23,"category":"teoria","q":"Cosa valuta il metodo RME?","a":{"A":"Ripetitività","B":"Microambito","C":"Macroarea","D":"Ergonomia"},"correct":"B","exp":"Rapid Micro Ergonomic Assessment."},
    {"id":24,"category":"teoria","q":"Come influisce la stabilità del carico secondo NIOSH?","a":{"A":"Non influisce","B":"Moltiplicatore","C":"Parametro secondario","D":"Obbligatorio"},"correct":"B","exp":"Un carico instabile riduce il RWL."},
    {"id":25,"category":"teoria","q":"Cosa significa TEA secondo ISO?","a":{"A":"Attrezzatura tecnica","B":"Tempo di esposizione all'attività","C":"Tempo elevato di affaticamento","D":"Tecnica ergonomica"},"correct":"B","exp":"Tempo di esposizione."},
    {"id":26,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un angolo di torsione di 90°?","a":{"A":"1.0","B":"0.9","C":"0.75","D":"0.5"},"correct":"C","exp":"Asimmetria estrema."},
    {"id":27,"category":"teoria","q":"Qual è il peso massimo raccomandato per le donne secondo ISO 11228-1?","a":{"A":"15kg","B":"20kg","C":"25kg","D":"30kg"},"correct":"A","exp":"Differenza di genere."},
    {"id":28,"category":"teoria","q":"Cosa valuta il metodo OWAS?","a":{"A":"Osservazione del corpo intero","B":"Posture","C":"Movimenti","D":"Sollevamenti"},"correct":"A","exp":"Metodo finlandese."},
    {"id":29,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un buon coupling?","a":{"A":"0.95","B":"1.0","C":"1.1","D":"0.9"},"correct":"B","exp":"Impugnatura ottimale."},
    {"id":30,"category":"teoria","q":"Come influisce un pavimento scivoloso sulla spinta secondo ISO?","a":{"A":"Ridotto del 50%","B":"Normale","C":"Aumentato","D":"Vietato"},"correct":"A","exp":"Attrito ridotto."},

    {"id":31,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un'altezza di destinazione superiore a 145cm?","a":{"A":"1.0","B":"0.84","C":"0.95","D":"1.1"},"correct":"B","exp":"Difficile sopra la testa."},
    {"id":32,"category":"teoria","q":"Qual è il fattore OCRA per la stereotipia?","a":{"A":"1","B":"1.3","C":"1.5","D":"2"},"correct":"B","exp":"Movimenti ripetitivi."},
    {"id":33,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una durata di 1-2 ore?","a":{"A":"1.0","B":"0.95","C":"0.85","D":"0.9"},"correct":"A","exp":"Durata ottimale."},
    {"id":34,"category":"teoria","q":"Come influisce l'inesperienza degli operatori secondo ISO 11228-2?","a":{"A":"Ridotto del 25%","B":"Normale","C":"Aumentato","D":"Vietato"},"correct":"A","exp":"Meno forza."},
    {"id":35,"category":"teoria","q":"Cosa indica un Lifting Index di 0.8?","a":{"A":"Rischio alto","B":"Sicuro","C":"Limite","D":"Critico"},"correct":"B","exp":"<1 sicuro."},
    {"id":36,"category":"teoria","q":"Cosa indica un punteggio RULA tra 5-6?","a":{"A":"Accettabile","B":"Indagine necessaria","C":"Cambiare presto","D":"Urgente"},"correct":"C","exp":"Intervento presto."},
    {"id":37,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una distanza di 40cm?","a":{"A":"1.0","B":"0.81","C":"0.95","D":"0.9"},"correct":"B","exp":"Leva maggiore."},
    {"id":38,"category":"teoria","q":"Cosa indica ISO per ripetizioni superiori a 30 al minuto?","a":{"A":"Accettabile","B":"Limite","C":"Vietato","D":"Raccomandato"},"correct":"B","exp":"Frequenza alta."},
    {"id":39,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un coupling discreto?","a":{"A":"1.0","B":"0.95","C":"0.9","D":"1.1"},"correct":"B","exp":"Impugnatura discreta."},
    {"id":40,"category":"teoria","q":"Cosa indica OCRA per l'intensità della forza?","a":{"A":"Non influisce","B":"Fattore di peso","C":"Parametro di tempo","D":"Postura"},"correct":"B","exp":"Recovery + forza."},

    // === BLOCCO 2: TEORIA AVANZATA + PRATICA INIZIO (41-80) ===
    {"id":41,"category":"teoria","q":"Qual è la popolazione più a rischio di lombalgie nella movimentazione manuale dei carichi?","a":{"A":"Donne sopra i 50 anni","B":"Uomini tra 30-40 anni","C":"Giovani","D":"Tutti uguali"},"correct":"A","exp":"Dati epidemiologici INAIL."},
    {"id":42,"category":"teoria","q":"Qual è la dimensione massima raccomandata per un carico ingombrante secondo NIOSH?","a":{"A":"<30cm","B":">75cm","C":"<25kg","D":">1m³"},"correct":"B","exp":"Riduce l'asimmetria."},
    {"id":43,"category":"teoria","q":"Come influisce un pavimento scivoloso sul RWL secondo NIOSH?","a":{"A":"Non cambia","B":"Riduce il RWL","C":"Aumenta","D":"Vietato"},"correct":"B","exp":"Attrito critico."},
    {"id":44,"category":"teoria","q":"Cosa indica ISO 11228-3 per le posture scorrette?","a":{"A":"Accettabili","B":"Da evitare","C":"Obbligatorie","D":"Neutre"},"correct":"B","exp":"Riduce la capacità."},
    {"id":45,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una frequenza di 12 sollevamenti all'ora?","a":{"A":"1.0","B":"0.95","C":"0.84","D":"0.75"},"correct":"C","exp":"Alta frequenza."},
    {"id":46,"category":"teoria","q":"Come influiscono le posture statiche secondo OCRA?","a":{"A":"Non penalizza","B":"Fattore penalizzante","C":"Vantaggioso","D":"Neutro"},"correct":"B","exp":"Static load."},
    {"id":47,"category":"teoria","q":"Cosa indica un punteggio RULA di 7 o più?","a":{"A":"Accettabile","B":"Indagine necessaria","C":"Immediato intervento","D":"Ritardo"},"correct":"C","exp":"Intervento urgente."},
    {"id":48,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una torsione di 45°?","a":{"A":"1.0","B":"0.95","C":"0.9","D":"0.85"},"correct":"B","exp":"Asimmetria moderata."},
    {"id":49,"category":"teoria","q":"Come influisce il freddo sulla spinta secondo ISO?","a":{"A":"Normale","B":"Ridotta","C":"Aumentata","D":"Vietata"},"correct":"B","exp":"Capacità ridotta."},
    {"id":50,"category":"teoria","q":"Come si calcola il Lifting Index secondo NIOSH?","a":{"A":"RWL/Load","B":"Load/RWL","C":"Peso x Frequenza","D":"Tempo x Peso"},"correct":"B","exp":"Indice di rischio."},

    {"id":51,"category":"teoria","q":"Come influisce la gravidanza sul sollevamento secondo ISO 11228-1?","a":{"A":"Normale","B":"Ridotto del 66%","C":"Vietato","D":"Doppiato"},"correct":"B","exp":"Tutela specifica."},
    {"id":52,"category":"teoria","q":"Come influisce la stereotipia secondo OCRA?","a":{"A":"Vantaggio","B":"Penalità","C":"Neutro","D":"Obbligatorio"},"correct":"B","exp":"Movimenti identici."},
    {"id":53,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un coupling scarso?","a":{"A":"1.0","B":"0.9","C":"0.8","D":"0.95"},"correct":"C","exp":"Impugnatura scarsa."},
    {"id":54,"category":"teoria","q":"Cosa indica un punteggio REBA di 11 o più?","a":{"A":"Basso rischio","B":"Alto rischio","C":"Medio","D":"Accettabile"},"correct":"B","exp":"Intervento immediato."},
    {"id":55,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per una distanza di 30cm?","a":{"A":"1.0","B":"0.95","C":"0.9","D":"0.85"},"correct":"B","exp":"Vicino ottimale."},
    {"id":56,"category":"teoria","q":"Qual è la trazione raccomandata per operatori inesperti secondo ISO?","a":{"A":"250N","B":"200N","C":"150N","D":"300N"},"correct":"B","exp":"Ridotto per esperienza."},
    {"id":57,"category":"teoria","q":"Come influisce un recovery inferiore al 50% secondo OCRA?","a":{"A":"Vantaggio","B":"Penalità alta","C":"Neutro","D":"Ottimale"},"correct":"B","exp":"Pausa insufficiente."},
    {"id":58,"category":"teoria","q":"Qual è il moltiplicatore NIOSH per un'altezza di origine di 30cm?","a":{"A":"1.0","B":"0.78","C":"0.95","D":"1.1"},"correct":"B","exp":"Molto basso."},
    {"id":59,"category":"teoria","q":"Come influisce il freddo sulla trazione secondo ISO 11228-2?","a":{"A":"Normale","B":"Ridotto del 20%","C":"Aumentato","D":"Vietato"},"correct":"B","exp":"Clima influisce."},
    {"id":60,"category":"teoria","q":"Qual è la formula principale per il calcolo del RWL?","a":{"A":"23 x 6 multipliers","B":"25 x 5 multipliers","C":"20 x 7 multipliers","D":"30 x 4 multipliers"},"correct":"A","exp":"Equazione NIOSH."},

    // === BLOCCO 3: PRATICA PROCEDURE (61-120) ===
    {"id":61,"category":"pratica","q":"Cosa succede se si solleva un carico dal pavimento ruotando il busto?","a":{"A":"Sicuro","B":"Rischio di lesione lombare","C":"Migliore postura","D":"Sforzo ridotto"},"correct":"B","exp":"Torsione pericolosa."},
    {"id":62,"category":"pratica","q":"Qual è la sequenza corretta per sollevare un carico dal pavimento?","a":{"A":"Busto flesso","B":"Ginocchia flesse","C":"Braccia distese","D":"Rotazione"},"correct":"B","exp":"Carico sulle gambe."},
    {"id":63,"category":"pratica","q":"Cosa fare in caso di incendio di un pallet di legno?","a":{"A":"Continuare a lavorare","B":"Allarme ed evacuazione","C":"Usare acqua","D":"Coprire"},"correct":"B","exp":"Protocollo incendi."},
    {"id":64,"category":"pratica","q":"Qual è la posizione ottimale delle mani durante il sollevamento?","a":{"A":"Distese","B":"Vicino al corpo","C":"Sopra le spalle","D":"Casuale"},"correct":"B","exp":"Riduce la leva."},
    {"id":65,"category":"pratica","q":"Come si deve usare un transpallet su una rampa del 5%?","a":{"A":"Spinta diretta","B":"Freno e controllo della velocità","C":"Accelerare","D":"Libero"},"correct":"B","exp":"Velocità controllata."},
    {"id":66,"category":"pratica","q":"Cosa fare con un carico instabile su un pallet?","a":{"A":"Sollevare normalmente","B":"Rifare il carico","C":"Fissare il carico","D":"Trasportare piano"},"correct":"C","exp":"Stabilità prima."},
    {"id":67,"category":"pratica","q":"Qual è la distanza minima raccomandata tra pedoni e muletti?","a":{"A":"1m","B":"3m","C":"5m","D":"Nessuna"},"correct":"B","exp":"Vie separate."},
    {"id":68,"category":"pratica","q":"Come si deve spingere su un pavimento bagnato?","a":{"A":"Con forza normale","B":"Ridotta e rallentata","C":"Vietato","D":"Correre"},"correct":"B","exp":"Attrito basso."},
    {"id":69,"category":"pratica","q":"Cosa fare con un neolaureato il primo giorno di lavoro?","a":{"A":"Lavorare in autonomia","B":"Supervisione","C":"Solo teoria","D":"Video"},"correct":"B","exp":"Osservazione pratica."},
    {"id":70,"category":"pratica","q":"Cosa fare con un'operatrice incinta che fa picking intensivo?","a":{"A":"Normale","B":"Riassegnare o fare pause","C":"Vietato","D":"Aumentare"},"correct":"B","exp":"Tutela della maternità."},

    {"id":71,"category":"pratica","q":"Cosa fare alla chiusura del turno?","a":{"A":"Uscita rapida","B":"Controllare serrature e luci","C":"Mattina","D":"Parziale"},"correct":"B","exp":"Sicurezza notturna."},
    {"id":72,"category":"pratica","q":"Qual è la percentuale di infortuni causati dal ribaltamento di carrelli?","a":{"A":"80%","B":"20%","C":"5%","D":"Nessuno"},"correct":"A","exp":"Causa principale."},
    {"id":73,"category":"pratica","q":"Quali DPI sono obbligatori per la movimentazione manuale dei carichi?","a":{"A":"Solo casco","B":"Scarpe antinfortunistiche","C":"Guanti e tutto","D":"Occhiali"},"correct":"B","exp":"Minimo richiesto."},
    {"id":74,"category":"pratica","q":"Cosa fare se un carico eccede le capacità di sollevamento manuale?","a":{"A":"Forzare","B":"Suddividere il carico","C":"Lasciare","D":"Chiedere aiuto"},"correct":"B","exp":"Mai superare i limiti."},
    {"id":75,"category":"pratica","q":"Come devono essere le vie di passaggio per pedoni e carrelli?","a":{"A":"Unica","B":"Separate","C":"Alternate","D":"Condivisa"},"correct":"B","exp":"Segnaletica obbligatoria."},
    {"id":76,"category":"pratica","q":"Cosa fare se un carico cade durante il trasporto?","a":{"A":"Fermarsi e raccogliere","B":"Continuare","C":"Ignorare","D":"Coprire"},"correct":"A","exp":"Sicurezza prima."},
    {"id":77,"category":"pratica","q":"Cosa fare in caso di freddo operativo?","a":{"A":"Normale","B":"Pause calde","C":"Abbigliamento termico","D":"Entrambi B+C"},"correct":"D","exp":"Protezione termica."},
    {"id":78,"category":"pratica","q":"Cosa fare con un pallet danneggiato?","a":{"A":"Usare comunque","B":"Sostituire","C":"Rinforzare","D":"Ridurre il carico"},"correct":"B","exp":"Integrità strutturale."},
    {"id":79,"category":"pratica","q":"Cosa fare con un operatore che ha dolore?","a":{"A":"Continuare a lavorare","B":"Medico e pausa","C":"Cambiare mansione","D":"A+B"},"correct":"D","exp":"Salute prioritaria."},
    {"id":80,"category":"pratica","q":"Qual è l'illuminazione minima raccomandata per un magazzino?","a":{"A":"100lux","B":"200lux","C":"500lux","D":"1000lux"},"correct":"B","exp":"UNI EN 12464-1."},

    {"id":81,"category":"pratica","q":"Qual è la postura ottimale delle braccia durante il trasporto?","a":{"A":"Distese","B":"Flesse a 90°","C":"Sopra le spalle","D":"Basse"},"correct":"B","exp":"Posizione naturale."},
    {"id":82,"category":"pratica","q":"Cosa fare con un carrello elettrico con batteria scarica?","a":{"A":"Continuare a usarlo","B":"Sostituire o ricaricare la batteria","C":"Pedalare","D":"Lasciare"},"correct":"B","exp":"Non rischiare."},
    {"id":83,"category":"pratica","q":"Come devono essere le vie di scarico merci?","a":{"A":"Pedonale","B":"Dedicate ai veicoli","C":"Miste","D":"Casuali"},"correct":"B","exp":"Separazione del traffico."},
    {"id":84,"category":"pratica","q":"Cosa fare con un sollevamento sopra la testa?","a":{"A":"Raccomandato","B":"Da evitare","C":"Obbligatorio","D":"Neutro"},"correct":"B","exp":"Rischio alto."},
    {"id":85,"category":"pratica","q":"Con quale frequenza fare pause durante la movimentazione manuale dei carichi?","a":{"A":"Ogni 2 ore","B":"Ogni 1 ora","C":"Ogni 30 minuti","D":"Ogni 4 ore"},"correct":"B","exp":"Recovery necessario."},
    {"id":86,"category":"pratica","q":"Cosa fare con un carico caldo (>60°C)?","a":{"A":"Normale","B":"Guanti speciali","C":"Aspettare il raffreddamento","D":"B+C"},"correct":"D","exp":"Protezione termica."},
    {"id":87,"category":"pratica","q":"Come devono essere le forche dei muletti quando non sono in uso?","a":{"A":"Sempre alzate","B":"Solo quando carico","C":"Basse","D":"Mai"},"correct":"C","exp":"Stabilità del centro di gravità."},
    {"id":88,"category":"pratica","q":"Qual è lo spazio minimo di manovra per un transpallet?","a":{"A":"1m","B":"1.5m","C":"2m","D":"3m"},"correct":"C","exp":"Giro sicuro."},
    {"id":89,"category":"pratica","q":"Cosa fare con un operatore straniero che non parla italiano?","a":{"A":"Normale","B":"Formazione in lingua","C":"Vietato lavorare","D":"Traduttore sempre"},"correct":"B","exp":"Comunicazione chiara."},
    {"id":90,"category":"pratica","q":"Cosa fare prima di usare un transpallet?","a":{"A":"Opzionale","B":"Controllo visivo obbligatorio","C":"Settimanale","D":"Mensile"},"correct":"B","exp":"Quotidiano sicurezza."},

    {"id":91,"category":"pratica","q":"Qual è l'estintore adatto per un incendio di classe A (legno)?","a":{"A":"Acqua","B":"Schiuma","C":"Polvere","D":"Tutte"},"correct":"D","exp":"Fuoco di solidi."},
    {"id":92,"category":"pratica","q":"Cosa fare se un collega fa cadere un carico?","a":{"A":"Continuare a lavorare","B":"Interrompere e aiutare","C":"Chiamare il capo","D":"Fotografare"},"correct":"B","exp":"Solidarietà e sicurezza."},
    {"id":93,"category":"pratica","q":"Cosa fare con il divieto di fumo in magazzino?","a":{"A":"Consigliato","B":"Obbligatorio","C":"Opzionale","D":"Vietato solo negli uffici"},"correct":"B","exp":"Rischio incendio."},
    {"id":94,"category":"pratica","q":"Cosa fare con i carrelli in retromarcia?","a":{"A":"Normale","B":"Clacson e segnaletica","C":"Vietato","D":"Lento"},"correct":"B","exp":"Visibilità ridotta."},
    {"id":95,"category":"pratica","q":"Come deve essere un sollevamento a due persone?","a":{"A":"Casuale","B":"Coordinato","C":"Uno solleva","D":"Ruotare"},"correct":"B","exp":"Sincronia dei movimenti."},
    {"id":96,"category":"pratica","q":"Cosa fare con un pavimento irregolare?","a":{"A":"Normale","B":"Segnalare e riparare","C":"Evitare","D":"B+C"},"correct":"D","exp":"Prevenzione cadute."},
    {"id":97,"category":"pratica","q":"Qual è la capacità standard di un transpallet?","a":{"A":"500kg","B":"1000kg","C":"1500kg","D":"2000kg"},"correct":"C","exp":"Capacità nominale."},
    {"id":98,"category":"pratica","q":"Cosa fare con un operatore sopra i 55 anni?","a":{"A":"Normale","B":"Valutazione specifica","C":"Vietato MMC","D":"Ridurre del 50%"},"correct":"B","exp":"Documento di Valutazione dei Rischi specifico."},
    {"id":99,"category":"pratica","q":"Cosa fare con un carico oleoso sulle mani?","a":{"A":"Normale","B":"Guanti antiscivolo","C":"Asciugare","D":"B+C"},"correct":"D","exp":"Grip sicuro."},
    {"id":100,"category":"pratica","q":"Cosa fare in caso di allarme antincendio?","a":{"A":"Verificare l'origine","B":"Evacuazione immediata","C":"Spegnere","D":"Aspettare"},"correct":"B","exp":"Protocollo di sicurezza."},

    {"id":101,"category":"pratica","q":"Cosa fare con un posto di lavoro per la movimentazione manuale dei carichi?","a":{"A":"Opzionale","B":"Raccomandato","C":"Obbligatorio","D":"Vietato"},"correct":"B","exp":"Ergonomia adattabile."},
    {"id":102,"category":"pratica","q":"Cosa fare con i muletti quando cambiano direzione?","a":{"A":"Brusco","B":"Segnale e rallentare","C":"Accelerare","D":"Inverso"},"correct":"B","exp":"Prevenzione urti."},
    {"id":103,"category":"pratica","q":"Cosa fare con un carico sopra i 1.8m?","a":{"A":"Sollevamento manuale","B":"Usare mezzi meccanici","C":"Usare una scaletta","D":"Vietato"},"correct":"B","exp":"Priorità meccanica."},
    {"id":104,"category":"pratica","q":"Qual è la temperatura ideale per un magazzino?","a":{"A":"15-18°C","B":"18-24°C","C":"24-30°C","D":">30°C"},"correct":"B","exp":"UNI comfort."},
    {"id":105,"category":"pratica","q":"Per cosa è adatto un estintore a CO2?","a":{"A":"Legno","B":"Elettrico","C":"Liquidi","D":"Metalli"},"correct":"B","exp":"Classe E."},
    {"id":106,"category":"pratica","q":"Cosa succede con guanti spessi durante il sollevamento?","a":{"A":"Vantaggio","B":"Svantaggio per la presa","C":"Neutro","D":"Obbligatorio"},"correct":"B","exp":"Sensibilità ridotta."},
    {"id":107,"category":"pratica","q":"Qual è la larghezza minima delle vie di evacuazione?","a":{"A":"80cm","B":"120cm","C":"160cm","D":"200cm"},"correct":"B","exp":"DPR 1510/2011."},
    {"id":108,"category":"pratica","q":"Cosa fare con forche di muletti danneggiate?","a":{"A":"Usare comunque","B":"Riparare","C":"Sovraccaricare","D":"Ignorare"},"correct":"B","exp":"Manutenzione critica."},
    {"id":109,"category":"pratica","q":"Con quale periodicità fare la formazione per la movimentazione manuale dei carichi?","a":{"A":"Annuale","B":"Quadriennale","C":"Mai","D":"Solo in caso di incidente"},"correct":"B","exp":"Accordo 22/02/2012."},
    {"id":110,"category":"pratica","q":"Cosa usare per sollevare carichi di vetrate?","a":{"A":"Impugnatura normale","B":"Ventose o succhiatori","C":"Guanti normali","D":"A+C"},"correct":"B","exp":"Attrezzatura specifica."},

    {"id":111,"category":"pratica","q":"Cosa fare con un rumore in magazzino superiore a 85dB?","a":{"A":"Normale","B":"Usare DPI acustici","C":"Ridurre il rumore","D":"B+C"},"correct":"D","exp":"D.Lgs 81/08."},
    {"id":112,"category":"pratica","q":"Cosa fare dopo una pausa pranzo prima di sollevare carichi?","a":{"A":"Immediato","B":"Riscaldamento muscolare","C":"Aspettare","D":"Ridotto"},"correct":"B","exp":"Warm-up muscolare."},
    {"id":113,"category":"pratica","q":"Quali sono le dimensioni standard di un pallet EUR?","a":{"A":"800x1200mm","B":"1000x1200mm","C":"1200x1000mm","D":"800x1000mm"},"correct":"A","exp":"Dimensioni standard."},
    {"id":114,"category":"pratica","q":"Cosa fare con un operatore stanco nel pomeriggio?","a":{"A":"Normale","B":"Pausa extra","C":"Ridurre i carichi","D":"B+C"},"correct":"D","exp":"Affaticamento cumulativo."},
    {"id":115,"category":"pratica","q":"Cosa fare con gomme di muletti usurate?","a":{"A":"Normale","B":"Sostituire","C":"Ridurre la velocità","D":"A+C"},"correct":"B","exp":"Aderenza critica."},
    {"id":116,"category":"pratica","q":"Qual è l'illuminazione raccomandata per le vie dei carrelli?","a":{"A":"100lux","B":"200lux","C":"300lux","D":"500lux"},"correct":"C","exp":"Visibilità delle manovre."},
    {"id":117,"category":"pratica","q":"Cosa fare con un sollevamento con il busto ruotato?","a":{"A":"Consigliato","B":"Vietato","C":"Opzionale","D":"Solo leggero"},"correct":"B","exp":"Torsione pericolosa."},
    {"id":118,"category":"pratica","q":"Cosa fare in caso di terremoto in magazzino?","a":{"A":"Correre fuori","B":"Coprirsi e cercare riparo","C":"Sollevare carichi","D":"Spegnere le luci"},"correct":"B","exp":"Drop, cover, hold."},
    {"id":119,"category":"pratica","q":"Qual è la capacità visiva standard di un transpallet?","a":{"A":"Normale","B":"1500kg","C":"2000kg","D":"2500kg"},"correct":"B","exp":"Standard comune."},
    {"id":120,"category":"pratica","q":"Cosa fare con la segnaletica del divieto di movimentazione manuale dei carichi?","a":{"A":"Consigliata","B":"Obbligatoria nelle aree a rischio","C":"Opzionale","D":"Vietata"},"correct":"B","exp":"D.Lgs 81/08."},

    // === BLOCCO 4: CASI STUDIO COMPLESSI (121-160) ===
    {"id":121,"category":"pratica","q":"Cosa fare con una donna incinta al 7° mese che fa picking?","a":{"A":"Mantenere il lavoro","B":"Riassegnare mansioni","C":"Vietato lavorare","D":"Ridurre del 50%"},"correct":"B","exp":"Tutela specifica."},
    {"id":122,"category":"pratica","q":"Cosa controllare alla chiusura del magazzino?","a":{"A":"Uscita rapida","B":"Gas, luci e serrature","C":"Posticipare i controlli","D":"Controlli parziali"},"correct":"B","exp":"Prevenzione dei rischi."},
    {"id":123,"category":"pratica","q":"Qual è la causa principale del ribaltamento dei muletti?","a":{"A":"Sovraccarico","B":"Curva stretta a velocità elevata","C":"Frenata brusca","D":"B+C"},"correct":"D","exp":"Manovre errate."},
    {"id":124,"category":"pratica","q":"Cosa fare con un carico di 28kg in una confezione?","a":{"A":"Sollevamento manuale","B":"Usare mezzi meccanici","C":"Dividere il carico","D":"B+C"},"correct":"D","exp":"Priorità meccanica."},
    {"id":125,"category":"pratica","q":"Per cosa è adatto un estintore a polvere ABC?","a":{"A":"Solo legno","B":"Multi-classe","C":"Solo elettrico","D":"Solo liquidi"},"correct":"B","exp":"Universale."},
    {"id":126,"category":"pratica","q":"Cosa fare con un operatore di 60 anni con lombalgia cronica?","a":{"A":"MMC normale","B":"Valutazione di idoneità specifica","C":"Vietato MMC","D":"Carichi leggeri"},"correct":"B","exp":"Sorveglianza sanitaria."},
    {"id":127,"category":"pratica","q":"Cosa fare con forche di transpallet piegate?","a":{"A":"Usare comunque","B":"Riparare","C":"Sovraccaricare","D":"Ridurre il carico"},"correct":"B","exp":"Integrità essenziale."},
    {"id":128,"category":"pratica","q":"Dove cambiare la batteria dei carrelli?","a":{"A":"Durante l'uso","B":"In un'area dedicata","C":"Di notte","D":"Dal cliente"},"correct":"B","exp":"Sicurezza delle procedure."},
    {"id":129,"category":"pratica","q":"Come deve essere un sollevamento a due persone?","a":{"A":"Casuale","B":"Segnale verbale","C":"Uno comanda","D":"B+C"},"correct":"D","exp":"Sincronia obbligatoria."},
    {"id":130,"category":"pratica","q":"Cosa fare con un pavimento oleoso?","a":{"A":"Normale","B":"Assorbente e segnalare","C":"Evitare","D":"B+C"},"correct":"D","exp":"Prevenzione scivolamento."},

    {"id":131,"category":"pratica","q":"Quante ore di formazione sono necessarie per i muletti?","a":{"A":"4 ore","B":"8 ore teoria + 12 ore pratica","C":"16 ore totali","D":"24 ore"},"correct":"B","exp":"Accordo Stato-Regioni."},
    {"id":132,"category":"pratica","q":"Cosa usare per sollevare un carico fragile (vetro)?","a":{"A":"Impugnatura normale","B":"Attrezzatura specifica","C":"Velocità alta","D":"Sovraccarico"},"correct":"B","exp":"Ventose o succhiatori."},
    {"id":133,"category":"pratica","q":"Cosa fare con un'umidità superiore all'80% in magazzino?","a":{"A":"Normale","B":"Ventilazione e deumidificazione","C":"Chiudere","D":"Ignorare"},"correct":"B","exp":"Prevenzione della muffa."},
    {"id":134,"category":"pratica","q":"Cosa fare con un operatore assenteista per la MMC?","a":{"A":"Normale","B":"Controllo medico","C":"Sanzioni","D":"A+B"},"correct":"D","exp":"Possibile patologia."},
    {"id":135,"category":"pratica","q":"Dove sono preferite le gomme pneumatiche dei muletti?","a":{"A":"Asfalto","B":"Pavimenti delicati","C":"Rampe","D":"Tutte"},"correct":"B","exp":"Protezione del pavimento."},
    {"id":136,"category":"pratica","q":"Cosa fare con l'illuminazione per il picking ad altezza?","a":{"A":"Normale","B":"Illuminazione locale","C":"Fari personali","D":"B+C"},"correct":"D","exp":"Precisione delle operazioni."},
    {"id":137,"category":"pratica","q":"Cosa fare con il divieto di correre in magazzino?","a":{"A":"Consigliato","B":"Obbligatorio","C":"Opzionale","D":"Solo per i muletti"},"correct":"B","exp":"Prevenzione cadute."},
    {"id":138,"category":"pratica","q":"Cosa fare in caso di blackout improvviso?","a":{"A":"Continuare al buio","B":"Usare torce e illuminazione di emergenza","C":"Aspettare","D":"Uscire"},"correct":"B","exp":"Illuminazione di sicurezza."},
    {"id":139,"category":"pratica","q":"Qual è la capacità standard dei muletti frontali?","a":{"A":"1000kg","B":"1500-3000kg","C":"5000kg","D":"8000kg"},"correct":"B","exp":"Standard comune."},
    {"id":140,"category":"pratica","q":"Cosa fare con la segnaletica delle ostruzioni nelle vie di passaggio?","a":{"A":"Opzionale","B":"Obbligatoria","C":"Solo in caso di pericolo","D":"Vietata"},"correct":"B","exp":"Visibilità dei percorsi."},

    {"id":141,"category":"pratica","q":"Cosa fare con un turno di notte per la MMC?","a":{"A":"Normale","B":"Ridurre i carichi","C":"Pausa extra","D":"B+C"},"correct":"D","exp":"Affaticamento circadiano."},
    {"id":142,"category":"pratica","q":"Per cosa è adatta la schiuma degli estintori?","a":{"A":"Elettrico","B":"Liquidi","C":"Legno","D":"B+C"},"correct":"D","exp":"Classe B/A."},
    {"id":143,"category":"pratica","q":"Cosa fare con un operatore miope non corretto?","a":{"A":"Normale","B":"Usare occhiali","C":"Vietato lavorare","D":"Lontano"},"correct":"B","exp":"Visione adeguata."},
    {"id":144,"category":"pratica","q":"Qual è l'autonomia di un transpallet elettrico?","a":{"A":"4 ore","B":"8 ore","C":"12 ore","D":"24 ore"},"correct":"B","exp":"Turno standard."},
    {"id":145,"category":"pratica","q":"Cosa usare per sollevare un carico polveroso (cemento)?","a":{"A":"Maschera","B":"Occhiali","C":"Guanti","D":"Tutte"},"correct":"D","exp":"Protezione delle vie respiratorie."},
    {"id":146,"category":"pratica","q":"Qual è la pendenza massima raccomandata per un transpallet?","a":{"A":"5%","B":"10%","C":"15%","D":"20%"},"correct":"A","exp":"Controllabilità."},
    {"id":147,"category":"pratica","q":"Con quale periodicità fare la manutenzione dei muletti?","a":{"A":"Mensile","B":"Annuale","C":"Quotidiana","D":"Settimanale"},"correct":"A","exp":"D.Lgs 81/08."},
    {"id":148,"category":"pratica","q":"Qual è l'intervallo di temperatura raccomandato per gli estintori?","a":{"A":"-10/+60°C","B":"0/+40°C","C":"10/+50°C","D":"+20/+30°C"},"correct":"A","exp":"UNI EN 3."},
    {"id":149,"category":"pratica","q":"Cosa fare con un sollevamento dopo una distorsione recente?","a":{"A":"Normale","B":"Certificato medico","C":"Vietato","D":"Leggero"},"correct":"B","exp":"Idoneità verificata."},
    {"id":150,"category":"pratica","q":"Qual è la larghezza minima delle vie per i carrelli?","a":{"A":"2.5m","B":"3m","C":"3.5m","D":"4m"},"correct":"C","exp":"Manovrabilità dei muletti."},

    {"id":151,"category":"pratica","q":"Cosa usare per sollevare un carico magnetico?","a":{"A":"Impugnatura manuale","B":"Gruppo elettromagnetico","C":"Pinze","D":"A+C"},"correct":"B","exp":"Attrezzatura specifica."},
    {"id":152,"category":"pratica","q":"Quanti ricambi d'aria all'ora sono necessari in un magazzino?","a":{"A":"Opzionale","B":"6-10 ricambi/ora","C":"2 ricambi","D":"Esterna"},"correct":"B","exp":"Qualità dell'aria."},
    {"id":153,"category":"pratica","q":"Cosa fare con un operatore iperteso?","a":{"A":"Normale","B":"Valutazione medica","C":"Vietato MMC","D":"Carichi leggeri"},"correct":"B","exp":"Controindicazioni possibili."},
    {"id":154,"category":"pratica","q":"Qual è l'altezza massima dei carrelli commissionatori?","a":{"A":"Fino a 3m","B":"Fino a 12m","C":"Fino a 6m","D":"Fino a 20m"},"correct":"B","exp":"Picking ad altezza."},
    {"id":155,"category":"pratica","q":"Cosa fare con la polvere residua di un estintore?","a":{"A":"Pulire subito","B":"Lasciare","C":"Usare acqua","D":"Aspirapolvere"},"correct":"A","exp":"Prevenzione della corrosione."},
    {"id":156,"category":"pratica","q":"Qual è l'angolo di visibilità raccomandato per un transpallet?","a":{"A":"90°","B":"180°","C":"360°","D":"45°"},"correct":"B","exp":"Manovre sicure."},
    {"id":157,"category":"pratica","q":"Con quale periodicità aggiornare la formazione per la MMC?","a":{"A":"Ogni 2 anni","B":"Ogni 4 anni","C":"Ogni 1 anno","D":"Mai"},"correct":"B","exp":"Rinnovo obbligatorio."},
    {"id":158,"category":"pratica","q":"Cosa usare per sollevare un carico cilindrico?","a":{"A":"Impugnatura normale","B":"Cinghie o corda","C":"Pinze","D":"B+C"},"correct":"D","exp":"Blocco della rotazione."},
    {"id":159,"category":"pratica","q":"Cosa fare con un transpallet surriscaldato?","a":{"A":"Normale","B":"Fermare e raffreddare","C":"Continuare piano","D":"Aggiungere olio"},"correct":"B","exp":"Prevenzione guasti."},
    {"id":160,"category":"pratica","q":"Cosa fare con il piano di evacuazione in caso di incendio?","a":{"A":"Opzionale","B":"Obbligatorio e visibile","C":"Solo negli uffici","D":"Verbale"},"correct":"B","exp":"DPR 1510/2011 visibile."}
  ]
}


  
];



/* =========================================================
   Config quiz (come richiesto)
   ========================================================= */
const QUIZ_SIZE = 15;
const QUIZ_DURATION_SEC = 20 * 60;
const ALERT_THRESHOLD_SEC = 5 * 60;

/* localStorage "ready" (non invasivo) */
const LS_KEYS = {
  // pronti per future estensioni
  state: "mmc_quiz_state_v1",
};

const $ = (id) => document.getElementById(id);

const screens = {
  welcome: $("screenWelcome"),
  quiz: $("screenQuiz"),
  results: $("screenResults"),
};

const ui = {
  year: $("year"),
  btnStart: $("btnStart"),
  btnHome: $("btnHome"),
  btnHome2: $("btnHome2"),
  btnRestart: $("btnRestart"),

  timerText: $("timerText"),
  toast: $("toast"),
  ariaLive: $("ariaLive"),

  qIndex: $("qIndex"),
  qTotal: $("qTotal"),
  qCategory: $("qCategory"),
  progressPct: $("progressPct"),
  progressBar: $("progressBar"),

  questionText: $("questionText"),
  optionsWrap: $("optionsWrap"),

  scorePct: $("scorePct"),
  scoreRaw: $("scoreRaw"),
  gradeBadge: $("gradeBadge"),
  gradeText: $("gradeText"),
  timeUsed: $("timeUsed"),
  reviewList: $("reviewList"),

  // Popup
  overlay: $("legalOverlay"),
  btnCancel: $("btnCancel"),
  btnAccept: $("btnAccept"),
};

const state = {
  quiz: [],
  answers: [], // { id, chosenLetter, correctLetter, isCorrect, exp, q, category, optionsOriginal }
  idx: 0,
  remaining: QUIZ_DURATION_SEC,
  startedAt: null,
  timerId: null,
  warned: false,
  locked: false,
  activeOptionButtons: [],
  overlayReturnFocusEl: null,
};

function setScreen(name){
  for (const k of Object.keys(screens)) screens[k].classList.add("hidden");
  screens[name].classList.remove("hidden");
}

function pad2(n){ return String(n).padStart(2, "0"); }
function fmtTime(sec){
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${pad2(m)}:${pad2(s)}`;
}

function toastWarn(msg){
  ui.toast.textContent = msg;
  ui.toast.classList.remove("hidden");
  ui.toast.classList.add("warn");
  ui.ariaLive.textContent = msg;

  window.setTimeout(() => {
    ui.toast.classList.add("hidden");
  }, 3800);
}

/* =========================
   Popup obbligatorio
   ========================= */
function openLegalPopup(returnFocusEl){
  state.overlayReturnFocusEl = returnFocusEl || null;
  ui.overlay.classList.remove("hidden");
  ui.overlay.setAttribute("aria-hidden", "false");

  // Focus management: porta focus sul bottone "ACCETTO"
  window.setTimeout(() => ui.btnAccept.focus(), 0);
}

function closeLegalPopup(){
  ui.overlay.classList.add("hidden");
  ui.overlay.setAttribute("aria-hidden", "true");

  if (state.overlayReturnFocusEl && typeof state.overlayReturnFocusEl.focus === "function"){
    state.overlayReturnFocusEl.focus();
  }
  state.overlayReturnFocusEl = null;
}

// Disabilita chiusura con ESC e click esterno (obbligo scelta)
function wirePopupGuards(){
  ui.overlay.addEventListener("click", (e) => {
    // click fuori dal modale: nessun effetto
    // impedisco qualunque "close" accidentale
    const modal = ui.overlay.querySelector(".modal");
    if (modal && !modal.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!ui.overlay.classList.contains("hidden")) {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
      // Focus trap essenziale (Tab)
      if (e.key === "Tab") {
        const focusables = [ui.btnCancel, ui.btnAccept].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }, true);
}

/* =========================
   Quiz engine
   ========================= */
function validateBank(){
  if (!Array.isArray(QUESTION_BANK) || QUESTION_BANK.length === 0) {
    return { ok: false, msg: "Paniere domande vuoto. Incolla le domande in app.js (QUESTION_BANK)." };
  }
  if (QUESTION_BANK.length < QUIZ_SIZE) {
    return { ok: false, msg: `Paniere insufficiente: servono almeno ${QUIZ_SIZE} domande.` };
  }

  // Validazione schema minima (non invasiva)
  for (const q of QUESTION_BANK) {
    if (typeof q?.id === "undefined" || typeof q?.q !== "string" || typeof q?.category !== "string") {
      return { ok: false, msg: "Schema non valido: controlla che ogni domanda abbia id, category, q." };
    }
    const a = q?.a;
    if (!a || typeof a !== "object" || !a.A || !a.B || !a.C || !a.D) {
      return { ok: false, msg: "Schema non valido: ogni domanda deve avere a {A,B,C,D}." };
    }
    if (!["A","B","C","D"].includes(q?.correct)) {
      return { ok: false, msg: "Schema non valido: 'correct' deve essere una lettera tra A, B, C, D." };
    }
    if (typeof q?.exp !== "string") {
      return { ok: false, msg: "Schema non valido: 'exp' (suggerimento normativo) deve essere una stringa." };
    }
  }

  return { ok: true, msg: "OK" };
}

function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuiz(){
  const indices = shuffle([...Array(QUESTION_BANK.length)].map((_, i) => i));
  const selected = indices.slice(0, QUIZ_SIZE).map(i => QUESTION_BANK[i]);
  return selected;
}

function startQuiz(){
  // reset state
  state.quiz = pickQuiz();
  state.answers = [];
  state.idx = 0;
  state.remaining = QUIZ_DURATION_SEC;
  state.startedAt = Date.now();
  state.warned = false;
  state.locked = false;

  // UI init
  ui.qTotal.textContent = String(QUIZ_SIZE);
  ui.timerText.textContent = fmtTime(state.remaining);
  ui.toast.classList.add("hidden");

  setScreen("quiz");
  renderQuestion();
  startTimer();
}

function startTimer(){
  stopTimer();
  state.timerId = window.setInterval(() => {
    state.remaining = Math.max(0, state.remaining - 1);
    ui.timerText.textContent = fmtTime(state.remaining);

    if (!state.warned && state.remaining > 0 && state.remaining < ALERT_THRESHOLD_SEC) {
      state.warned = true;
      toastWarn("⏰ Attenzione! Rimangono meno di 5 minuti!");
    }

    if (state.remaining === 0) {
      // Tempo scaduto: termina e vai a risultati
      stopTimer();
      finishQuiz();
    }
  }, 1000);
}

function stopTimer(){
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function calcProgress(){
  // idx is 0-based
  const done = state.idx;
  const pct = Math.round((done / QUIZ_SIZE) * 100);
  return Math.min(100, Math.max(0, pct));
}

function renderQuestion(){
  state.locked = false;
  ui.optionsWrap.innerHTML = "";
  ui.ariaLive.textContent = "";

  const q = state.quiz[state.idx];
  if (!q) {
    finishQuiz();
    return;
  }

  ui.qIndex.textContent = String(state.idx + 1);
  ui.qCategory.textContent = q.category;
  ui.questionText.textContent = q.q;

  // Progress based on completed questions
  const pct = calcProgress();
  ui.progressPct.textContent = `${pct}%`;
  ui.progressBar.style.width = `${pct}%`;

  // Randomizza posizione opzioni (A/B/C/D)
  const entries = Object.entries(q.a).map(([letter, text]) => ({ letter, text }));
  const shuffled = shuffle(entries);

  // Render radiogroup "buttons"
  const buttons = [];
  shuffled.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");
    btn.setAttribute("aria-disabled", "false");
    btn.dataset.letter = opt.letter;

    btn.innerHTML = `
      <span class="opt-pill" aria-hidden="true">${opt.letter}</span>
      <span class="text-sm md:text-base text-slate-100/95 leading-snug">${escapeHtml(opt.text)}</span>
    `;

    btn.addEventListener("click", () => chooseAnswer(opt.letter, q));
    btn.addEventListener("keydown", (e) => {
      // miglioramento accessibilità: frecce per muoversi
      if (["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        const dir = (e.key === "ArrowDown" || e.key === "ArrowRight") ? 1 : -1;
        const next = (i + dir + shuffled.length) % shuffled.length;
        buttons[next].focus();
      }
    });

    ui.optionsWrap.appendChild(btn);
    buttons.push(btn);
  });

  state.activeOptionButtons = buttons;
  if (buttons[0]) buttons[0].focus();
}

function chooseAnswer(letter, q){
  if (state.locked) return;
  state.locked = true;

  // UI: set checked + disable others
  for (const btn of state.activeOptionButtons) {
    const isChosen = btn.dataset.letter === letter;
    btn.setAttribute("aria-checked", isChosen ? "true" : "false");
    btn.setAttribute("aria-disabled", "true");
  }

  const isCorrect = letter === q.correct;
  state.answers.push({
    id: q.id,
    category: q.category,
    q: q.q,
    chosenLetter: letter,
    correctLetter: q.correct,
    isCorrect,
    exp: q.exp,
    optionsOriginal: q.a,
  });

  // Avanzamento automatico SOLO dopo la selezione (come richiesto)
  window.setTimeout(() => {
    state.idx += 1;
    if (state.idx >= QUIZ_SIZE) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }, 350);
}

function finishQuiz(){
  stopTimer();

  const correctCount = state.answers.filter(x => x.isCorrect).length;
  const pct = Math.round((correctCount / QUIZ_SIZE) * 100);

  // Time used
  const usedSec = Math.min(QUIZ_DURATION_SEC, QUIZ_DURATION_SEC - state.remaining);
  ui.timeUsed.textContent = fmtTime(usedSec);

  // Score
  ui.scorePct.textContent = `${pct}%`;
  ui.scoreRaw.textContent = `${correctCount}/${QUIZ_SIZE}`;

  // Grade
  const grade = getGrade(pct);
  ui.gradeBadge.className = `grade-badge ${grade.cls}`;
  ui.gradeBadge.textContent = `${grade.emoji} ${grade.label}`;
  ui.gradeText.textContent = grade.desc;

  // Final progress bar 100%
  ui.progressPct.textContent = `100%`;
  ui.progressBar.style.width = `100%`;

  // Review
  renderReview();

  setScreen("results");
}

function getGrade(pct){
  if (pct >= 80) {
    return { label: "Eccellente", emoji: "🏆", cls: "grade-exc", desc: "Ottima preparazione: continuità e accuratezza nelle risposte." };
  }
  if (pct >= 60) {
    return { label: "Sufficiente", emoji: "👍", cls: "grade-suf", desc: "Preparazione adeguata: consolida i punti critici emersi nel riepilogo." };
  }
  return { label: "Insufficiente", emoji: "📚", cls: "grade-ins", desc: "Preparazione non sufficiente: rivedi teoria e suggerimenti normativi prima di riprovare." };
}

function renderReview(){
  ui.reviewList.innerHTML = "";
  for (let i = 0; i < state.answers.length; i++){
    const a = state.answers[i];
    const wrap = document.createElement("article");
    wrap.className = "review";

    const ok = a.isCorrect;
    const tag = ok
      ? `<span class="tag tag-ok">✅ Corretta</span>`
      : `<span class="tag tag-bad">❌ Errata</span>`;

    const userLine = `Risposta utente: ${a.chosenLetter} — ${escapeHtml(a.optionsOriginal[a.chosenLetter] || "")}`;
    const correctLine = `Risposta corretta: ${a.correctLetter} — ${escapeHtml(a.optionsOriginal[a.correctLetter] || "")}`;

    wrap.innerHTML = `
      <div class="meta">
        Domanda ${i + 1} • <span class="font-semibold">${escapeHtml(a.category)}</span> • ${tag}
      </div>
      <div class="q">${escapeHtml(a.q)}</div>

      <div class="row"><span class="font-semibold">Evidenza:</span> ${ok ? userLine : userLine}</div>
      ${ok ? "" : `<div class="row"><span class="font-semibold">Correzione:</span> ${correctLine}</div>`}

      <div class="row">
        <span class="font-semibold">Suggerimento normativo:</span>
        ${escapeHtml(a.exp)}
      </div>
    `;

    ui.reviewList.appendChild(wrap);
  }
}

/* =========================
   Navigazione + eventi
   ========================= */
function goHome(){
  stopTimer();
  // reset UI quiz (non distruttivo, ma pulito)
  ui.toast.classList.add("hidden");
  ui.optionsWrap.innerHTML = "";
  ui.questionText.textContent = "";
  ui.progressBar.style.width = "0%";
  ui.progressPct.textContent = "0%";
  ui.timerText.textContent = fmtTime(QUIZ_DURATION_SEC);

  setScreen("welcome");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function init(){
  ui.year.textContent = String(new Date().getFullYear());
  setScreen("welcome");
  wirePopupGuards();

  ui.btnStart.addEventListener("click", () => {
    const v = validateBank();
    if (!v.ok){
      // messaggio essenziale, senza aggiungere contenuti non richiesti
      alert(v.msg);
      return;
    }
    openLegalPopup(ui.btnStart);
  });

  ui.btnCancel.addEventListener("click", () => {
    closeLegalPopup();
    // resta su welcome screen (come richiesto)
  });

  ui.btnAccept.addEventListener("click", () => {
    closeLegalPopup();
    startQuiz();
  });

  ui.btnHome.addEventListener("click", () => goHome());
  ui.btnHome2.addEventListener("click", () => goHome());
  ui.btnRestart.addEventListener("click", () => {
    // riparte passando dal popup obbligatorio (coerente con requisito)
    setScreen("welcome");
    openLegalPopup(ui.btnStart);
  });
}

init();
