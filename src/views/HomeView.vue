<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'Blackjack',
          icon: '🃏',
          description: 'Impara le strategie di base per minimizzare il vantaggio del banco e massimizzare le tue vincite',
          strategies: ['Basic Strategy', 'Card Counting', 'Bankroll Management']
        },
        {
          id: 2,
          name: 'Poker',
          icon: '🎰',
          description: 'Scopri le tecniche avanzate di gioco, posizionamento e lettura degli avversari',
          strategies: ['Position Play', 'Hand Ranges', 'Pot Odds']
        },
        {
          id: 3,
          name: 'Roulette',
          icon: '🎡',
          description: 'Analizza i sistemi di scommessa e le probabilità per questo gioco classico',
          strategies: ['Martingale System', 'D\'Alembert', 'Probability Analysis']
        },
        {
          id: 4,
          name: 'Slot Machine',
          icon: '🎯',
          description: 'Comprendi il funzionamento delle slot e come giocare responsabilmente',
          strategies: ['RTP Understanding', 'Bankroll Management', 'Volatility Analysis']
        },
        {
          id: 5,
          name: 'Baccarat',
          icon: '🎲',
          description: 'Studiare le probabilità e i pattern nei risultati del Baccarat',
          strategies: ['Betting Systems', 'Trend Analysis', 'Odds Calculation']
        },
        {
          id: 6,
          name: 'Craps',
          icon: '🎪',
          description: 'Padroneggia le complesse regole e le migliori strategie di scommessa',
          strategies: ['Pass/Dont Pass', 'Odds Bets', 'Risk Management']
        }
      ]
    }
  }
})
</script>

<template>
  <main class="home-view">
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-content">
        <h1>Il Gambler's Strategy</h1>
        <p class="subtitle">Padroneggia le strategie vincenti del gioco d'azzardo</p>
        <p class="hero-description">
          Scopri le tecniche, i sistemi e le strategie utilizzabili nei principali giochi d'azzardo.
          Impara a giocare in modo consapevole e strategico per massimizzare le tue opportunità.
        </p>
        <button class="cta-button">Inizia Ora</button>
      </div>
      <div class="hero-visual">
        <div class="floating-icon">🎰</div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="strategie">
      <div class="about-content">
        <h2>Cos'è una Strategia nel Gioco d'Azzardo?</h2>
        <div class="about-grid">
          <div class="about-card">
            <div class="about-icon">📊</div>
            <h3>Basata su Probabilità</h3>
            <p>Le vere strategie si basano sulla matematica e sulle probabilità, non sulla fortuna casuale.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">💡</div>
            <h3>Riduce il Vantaggio</h3>
            <p>Una buona strategia riduce il vantaggio matematico della casa, anche se non lo elimina completamente.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🎯</div>
            <h3>Gestione Consapevole</h3>
            <p>Impara a gestire il tuo bankroll e a prendere decisioni razionali, non emozionali.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🛡️</div>
            <h3>Gioco Responsabile</h3>
            <p>La vera strategia include sapere quando smettere e giocare solo con ciò che puoi permetterti di perdere.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Games Section -->
    <section class="games" id="games">
      <h2>I Nostri Giochi</h2>
      <p class="section-subtitle">Seleziona un gioco per scoprire le strategie più efficaci</p>

      <div class="games-grid">
        <div v-for="game in games" :key="game.id" class="game-card">
          <div class="game-header">
            <span class="game-icon">{{ game.icon }}</span>
            <h3>{{ game.name }}</h3>
          </div>

          <p class="game-description">{{ game.description }}</p>

          <div class="strategies">
            <span class="strategy-label">Strategie:</span>
            <ul>
              <li v-for="strategy in game.strategies" :key="strategy">
                {{ strategy }}
              </li>
            </ul>
          </div>

          <button class="game-button">Scopri Strategie</button>
        </div>
      </div>
    </section>

    <!-- Key Points Section -->
    <section class="key-points">
      <h2>Punti Chiave da Ricordare</h2>
      <div class="points-grid">
        <div class="point">
          <span class="number">1</span>
          <h4>Non Esiste il Metodo Sicuro</h4>
          <p>Nessuna strategia garantisce una vittoria sicura. Il gioco d'azzardo implica sempre rischio.</p>
        </div>
        <div class="point">
          <span class="number">2</span>
          <h4>La Casa Vince Sempre</h4>
          <p>Matematicamente, la casa ha sempre un vantaggio. Le strategie aiutano solo a ridurlo.</p>
        </div>
        <div class="point">
          <span class="number">3</span>
          <h4>Gestisci il Tuo Bankroll</h4>
          <p>Decidi in anticipo quanto puoi perdere e attieniti a quel limite rigorosamente.</p>
        </div>
        <div class="point">
          <span class="number">4</span>
          <h4>Gioca per Divertimento</h4>
          <p>Considera il gioco d'azzardo come intrattenimento, non come fonte di reddito.</p>
        </div>
      </div>
    </section>
  </main>
</template>
