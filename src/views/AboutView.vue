<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView'
})
</script>

<template>
  <main class="about-view">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-content">
        <h1>Chi Siamo</h1>
        <p class="hero-subtitle">Esperti di strategie nel gioco d'azzardo</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content">
      <div class="content-wrapper">
        <div class="content-section">
          <h2>La Nostra Missione</h2>
          <p>
            La nostra missione è fornire ai giocatori informazioni accurate e strategie verificate per i principali giochi d'azzardo. Crediamo che la conoscenza sia il primo passo verso il gioco consapevole e responsabile.
          </p>
        </div>

        <div class="content-section">
          <h2>Cosa Offriamo</h2>
          <ul class="features-list">
            <li><span class="icon">📚</span> Guide dettagliate su strategie collaudate</li>
            <li><span class="icon">📊</span> Analisi matematiche delle probabilità</li>
            <li><span class="icon">💡</span> Consigli pratici per gestire il bankroll</li>
            <li><span class="icon">🎯</span> Suggerimenti per il gioco responsabile</li>
            <li><span class="icon">🔍</span> Approfondimenti su sistemi di scommessa</li>
            <li><span class="icon">⚠️</span> Consapevolezza sui rischi e i limiti</li>
          </ul>
        </div>

        <div class="content-section">
          <h2>Principi Fondamentali</h2>
          <div class="principles-grid">
            <div class="principle-card">
              <div class="principle-icon">🎲</div>
              <h3>Trasparenza</h3>
              <p>Spieghiamo chiaramente come funzionano i giochi e le probabilità reali</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">🔒</div>
              <h3>Responsabilità</h3>
              <p>Promuoviamo sempre il gioco consapevole e consigliamo i limiti</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">✅</div>
              <h3>Affidabilità</h3>
              <p>Le nostre strategie sono basate su matematica verificata</p>
            </div>
            <div class="principle-card">
              <div class="principle-icon">🛡️</div>
              <h3>Protezione</h3>
              <p>Tuteliamo i giocatori fornendo informazioni ai centri di aiuto</p>
            </div>
          </div>
        </div>

        <div class="content-section important-note">
          <h2>⚠️ Avvertenza Importante</h2>
          <p class="warning-text">
            Il gioco d'azzardo comporta rischi significativi. Anche con le migliori strategie, il gioco d'azzardo non è un metodo affidabile per guadagnare denaro. Gioca solo con denaro che puoi permetterti di perdere. Se ritieni di avere un problema con il gioco d'azzardo, contatta i centri di supporto autorizzati.
          </p>
          <div class="resources">
            <p>Risorse di aiuto:</p>
            <ul>
              <li>Telefono Rosa: 1500</li>
              <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
              <li>Centro Nazionale Gioco d'Azzardo: www.centrogiocoazzardo.it</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
// Variables
$primary-gradient-start: #667eea;
$primary-gradient-end: #764ba2;
$white: #ffffff;
$light-gray: #f8f9fa;
$text-dark: #333333;
$text-gray: #666666;
$radius-md: 15px;
$shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);

.about-view {
  width: 100%;
}

// Hero Section
.about-hero {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, $primary-gradient-start 0%, $primary-gradient-end 100%);
  color: $white;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.3rem;
    opacity: 0.95;
  }
}

// Content Section
.about-content {
  padding: 4rem 2rem;
  background: $white;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: $text-dark;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid $primary-gradient-start;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: $text-gray;
  }
}

// Features List
.features-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 1rem 0;
    font-size: 1.05rem;
    color: $text-gray;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:last-child {
      border-bottom: none;
    }

    .icon {
      font-size: 1.5rem;
      min-width: 30px;
    }
  }
}

// Principles Grid
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.principle-card {
  background: $light-gray;
  padding: 2rem;
  border-radius: $radius-md;
  text-align: center;
  box-shadow: $shadow-md;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .principle-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: 1.3rem;
    color: $primary-gradient-start;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    margin: 0;
  }
}

// Important Note
.important-note {
  background: linear-gradient(135deg, #fff5f5 0%, #fff0f5 100%);
  padding: 2rem;
  border-radius: $radius-md;
  border-left: 5px solid #ff6b6b;

  h2 {
    color: #d32f2f;
    border-bottom-color: #ff6b6b;
  }

  .warning-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #c00;
    font-weight: 500;
  }

  .resources {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid #ffb3b3;

    p {
      font-weight: 600;
      color: $text-dark;
      margin-bottom: 0.8rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        color: $text-gray;

        &:before {
          content: '📞';
          position: absolute;
          left: 0;
        }
      }
    }
  }
}

// Responsive
@media (max-width: 768px) {
  .about-hero {
    padding: 3rem 1rem;

    h1 {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }
  }

  .about-content {
    padding: 2rem 1rem;
  }

  .content-section {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  .principles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
