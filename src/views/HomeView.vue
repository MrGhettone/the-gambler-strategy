<script setup>
import { ref } from 'vue'

const games = ref([
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
])
</script>

<template>
  <main class="home-view">
    <!-- Hero Section -->
    <section class="hero">
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
    <section class="about">
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
    <section class="games">
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

<style scoped>
.home-view {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero .subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
}

.floating-icon {
  font-size: 15rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* About Section */
.about {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.about-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
}

.about-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.about-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.about-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Games Section */
.games {
  padding: 6rem 2rem;
  background: white;
}

.games h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.game-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
  transform: translateY(-5px);
}

.game-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.game-icon {
  font-size: 2.5rem;
}

.game-card h3 {
  font-size: 1.5rem;
  color: #667eea;
  margin: 0;
}

.game-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.strategies {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.strategy-label {
  font-weight: 700;
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
}

.strategies ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.strategies li {
  color: #666;
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.strategies li:before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.game-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.game-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

/* Key Points Section */
.key-points {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
}

.key-points h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.point {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.point .number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 auto 1rem;
}

.point h4 {
  color: #333;
  margin-bottom: 0.8rem;
}

.point p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero .subtitle {
    font-size: 1.2rem;
  }

  .hero-visual {
    height: 250px;
  }

  .floating-icon {
    font-size: 8rem;
  }

  .about-content h2,
  .games h2,
  .key-points h2 {
    font-size: 1.8rem;
  }

  .about,
  .games,
  .key-points {
    padding: 3rem 1rem;
  }

  .games-grid {
    grid-template-columns: 1fr;
  }
}
</style>
