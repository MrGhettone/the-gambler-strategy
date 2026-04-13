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
