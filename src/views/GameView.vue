<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const gamesData = {
  blackjack: {
    name: 'Blackjack',
    icon: '🃏',
    description: 'Impara le strategie di base per minimizzare il vantaggio del banco e massimizzare le tue vincite nel gioco più popolare dei casinò.',
    intro: 'Il Blackjack è uno dei pochi giochi da casinò dove le decisioni del giocatore influenzano concretamente il risultato. Con la strategia corretta, il vantaggio della casa può scendere sotto l\'1%.',
    strategies: [
      {
        name: 'Basic Strategy',
        icon: '📋',
        description: 'La Basic Strategy è una tabella matematicamente ottimale che indica la mossa corretta (pesca, fermati, raddoppia, split) per ogni combinazione possibile tra le tue carte e la carta scoperta del banco. Riduce il house edge all\'0,5% circa.'
      },
      {
        name: 'Card Counting',
        icon: '🔢',
        description: 'Il card counting consiste nel tenere traccia del rapporto tra carte alte e basse rimaste nel mazzo. Quando ci sono molte carte alte rimanenti, il giocatore ha un vantaggio e può aumentare la puntata. Il sistema Hi-Lo è il più diffuso tra i principianti.'
      },
      {
        name: 'Bankroll Management',
        icon: '💰',
        description: 'Gestisci il tuo bankroll suddividendolo in unità di scommessa. Regola generale: ogni sessione non dovrebbe impegnare più del 10% del bankroll totale. Le puntate singole dovrebbero essere tra l\'1% e il 2% del bankroll totale.'
      }
    ]
  },
  poker: {
    name: 'Poker',
    icon: '🎰',
    description: 'Scopri le tecniche avanzate di gioco, posizionamento e lettura degli avversari per dominare il tavolo.',
    intro: 'Nel poker, a differenza degli altri giochi da casinò, giochi contro gli altri giocatori e non contro la casa. Questo lo rende un gioco dove la competenza a lungo termine può fare la differenza.',
    strategies: [
      {
        name: 'Position Play',
        icon: '📍',
        description: 'La posizione al tavolo è uno dei fattori più importanti nel poker. Giocare in posizione (essere l\'ultimo ad agire) ti dà un vantaggio informativo enorme: puoi vedere le azioni degli avversari prima di decidere la tua mossa.'
      },
      {
        name: 'Hand Ranges',
        icon: '🎯',
        description: 'Invece di focalizzarti sulla tua singola mano, pensa in termini di range di mani. Assegna agli avversari un insieme di mani possibili in base alle loro azioni, poi prendi decisioni ottimali contro quel range.'
      },
      {
        name: 'Pot Odds',
        icon: '📊',
        description: 'Le pot odds sono il rapporto tra la dimensione del piatto e il costo della chiamata. Se le pot odds sono superiori alla probabilità di completare la tua mano vincente, chiamare è matematicamente corretto a lungo termine.'
      }
    ]
  },
  roulette: {
    name: 'Roulette',
    icon: '🎡',
    description: 'Analizza i sistemi di scommessa e le probabilità per affrontare questo gioco classico con maggiore consapevolezza.',
    intro: 'La roulette è un gioco interamente basato sul caso: ogni giro è indipendente dai precedenti. Nessuna strategia può eliminare il vantaggio della casa (2,7% sulla roulette europea), ma i sistemi di scommessa aiutano a gestire il bankroll.',
    strategies: [
      {
        name: 'Martingale System',
        icon: '📈',
        description: 'Il sistema Martingale prevede di raddoppiare la puntata ad ogni perdita, per recuperare tutto con una singola vincita. Funziona a breve termine ma richiede un bankroll enorme e si scontra con i limiti massimi del tavolo.'
      },
      {
        name: "D'Alembert",
        icon: '⚖️',
        description: "Il sistema D'Alembert aumenta la puntata di un'unità dopo una perdita e la diminuisce di un'unità dopo una vincita. È meno aggressivo del Martingale e più adatto a sessioni lunghe con un bankroll limitato."
      },
      {
        name: 'Probability Analysis',
        icon: '🔬',
        description: 'Comprendi le probabilità reali: le scommesse esterne (rosso/nero, pari/dispari) hanno una probabilità del 48,6% nella roulette europea. La roulette americana ha una doppia zero che porta il house edge al 5,26%: preferisci sempre quella europea.'
      }
    ]
  },
  'slot-machine': {
    name: 'Slot Machine',
    icon: '🎯',
    description: 'Comprendi il funzionamento delle slot e come gestire il tuo bankroll per giocare in modo responsabile.',
    intro: 'Le slot machine sono i giochi con il maggiore house edge (2%-15%). Non esiste una strategia che modifichi le probabilità, ma capire come funzionano ti aiuta a fare scelte più informate.',
    strategies: [
      {
        name: 'RTP Understanding',
        icon: '📉',
        description: 'L\'RTP (Return to Player) è la percentuale teorica che una slot restituisce nel lungo periodo. Una slot con RTP del 96% restituisce in media 96€ ogni 100€ giocati. Cerca sempre slot con RTP superiore al 95% e verifica questo dato prima di giocare.'
      },
      {
        name: 'Bankroll Management',
        icon: '💰',
        description: 'Stabilisci prima di iniziare un budget fisso e non superarlo mai. Dividi il budget in sessioni brevi. Una volta raggiunto il limite di perdita o il target di vincita, smetti. Le slot sono progettate per essere coinvolgenti: un piano rigido è la tua unica protezione.'
      },
      {
        name: 'Volatility Analysis',
        icon: '📊',
        description: 'La volatilità misura la frequenza e la dimensione delle vincite. Slot a bassa volatilità pagano spesso ma importi piccoli (adatte a sessioni lunghe). Slot ad alta volatilità pagano raramente ma con jackpot elevati (adatte a chi ha un bankroll consistente e accetta lunghe serie di perdite).'
      }
    ]
  },
  baccarat: {
    name: 'Baccarat',
    icon: '🎲',
    description: 'Studia le probabilità e i sistemi di scommessa per affrontare il Baccarat con metodo.',
    intro: 'Il Baccarat è uno dei giochi da casinò con il minor house edge: scommettere sul Banco ha un vantaggio della casa del solo 1,06%, quello sul Giocatore del 1,24%. La scommessa Parità va sempre evitata (house edge 14,4%).',
    strategies: [
      {
        name: 'Betting Systems',
        icon: '🎯',
        description: 'I sistemi di scommessa come Paroli (progressione positiva) o Fibonacci possono strutturare il gioco, ma non modificano le probabilità matematiche. Scommetti sempre sul Banco per il minor house edge. Evita categoricamente la scommessa Parità.'
      },
      {
        name: 'Trend Analysis',
        icon: '📈',
        description: 'Molti giocatori tracciano i risultati su scorecard (Road Maps). Sebbene ogni mano sia staticamente indipendente, seguire i trend è una pratica comune. Usala come guida psicologica, non come sistema matematico garantito.'
      },
      {
        name: 'Odds Calculation',
        icon: '🔢',
        description: 'Banco: house edge 1,06% (commissione 5% sulle vincite). Giocatore: house edge 1,24%. Parità: house edge 14,4%. Con queste probabilità, il Baccarat è matematicamente tra i giochi più favorevoli per il giocatore in tutta la sala da gioco.'
      }
    ]
  },
  craps: {
    name: 'Craps',
    icon: '🎪',
    description: 'Padroneggia le regole e le migliori strategie di scommessa per il gioco dei dadi.',
    intro: 'Il Craps sembra complesso ma le scommesse migliori sono tra le più semplici del gioco. La Pass Line e i Free Odds hanno un house edge combinato tra i più bassi di qualsiasi gioco da casinò.',
    strategies: [
      {
        name: 'Pass / Don\'t Pass',
        icon: '✅',
        description: 'La Pass Line ha un house edge del 1,41%. Il Don\'t Pass del 1,36%. Sono le scommesse fondamentali da cui partire. Evita le scommesse proposizionali al centro del tavolo: hanno house edge che arriva fino al 16,67%.'
      },
      {
        name: 'Odds Bets',
        icon: '🎰',
        description: 'Le Free Odds sono le uniche scommesse in un casinò senza house edge (pagano le probabilità vere). Si fanno come supplemento alle scommesse Pass/Don\'t Pass dopo che viene stabilito il Point. Massimizza sempre le Odds nei limiti consentiti dal tavolo.'
      },
      {
        name: 'Risk Management',
        icon: '🛡️',
        description: 'Struttura il tuo gioco con una scommessa base sulla Pass Line + massimo di Odds. Evita di disperdere il bankroll su scommesse multiple simultanee. Ogni lancio dei dadi è indipendente: non inseguire le perdite aumentando le puntate sulle scommesse ad alto rischio.'
      }
    ]
  }
}

export default defineComponent({
  name: 'GameView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    return { route, router }
  },
  computed: {
    gameSlug() {
      return this.route.params.game
    },
    game() {
      return gamesData[this.gameSlug] || null
    }
  },
  mounted() {
    if (!this.game) {
      this.router.push('/')
    }
  }
})
</script>

<template>
  <main v-if="game" class="game-view">
    <section class="game-hero">
      <div class="hero-content">
        <div class="game-icon-large">{{ game.icon }}</div>
        <h1>{{ game.name }}</h1>
        <p class="hero-subtitle">{{ game.description }}</p>
      </div>
    </section>

    <section class="game-intro">
      <div class="content-wrapper">
        <p class="intro-text">{{ game.intro }}</p>
      </div>
    </section>

    <section class="game-strategies">
      <div class="content-wrapper">
        <h2>Strategie per {{ game.name }}</h2>
        <div class="strategies-grid">
          <div v-for="strategy in game.strategies" :key="strategy.name" class="strategy-card">
            <div class="strategy-icon">{{ strategy.icon }}</div>
            <h3>{{ strategy.name }}</h3>
            <p>{{ strategy.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="game-warning">
      <div class="content-wrapper">
        <p>Il gioco d'azzardo comporta sempre un rischio. Nessuna strategia garantisce profitti. Gioca responsabilmente e solo con cifre che puoi permetterti di perdere.</p>
      </div>
    </section>
  </main>
</template>
