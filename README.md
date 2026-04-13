# The Gambler's Strategy

Sito web informativo in italiano sulle strategie di gioco d'azzardo. Single Page Application costruita con Vue 3 e deployata su Vercel.

## Cosa fa il sito

Il sito fornisce guide e strategie per i principali giochi d'azzardo, con l'obiettivo di promuovere un approccio consapevole e matematicamente informato al gioco. Non incoraggia il gioco d'azzardo come fonte di guadagno: ogni sezione include avvertenze sui rischi e rimanda a risorse di supporto per il gioco problematico.

### Pagine

**Home (`/`)**

La pagina principale è divisa in quattro sezioni:

1. **Hero** — Presentazione del sito con titolo "Il Gambler's Strategy" e call-to-action.

2. **Strategie** — Spiega cosa si intende per strategia nel gioco d'azzardo: approccio basato su probabilità e matematica, riduzione del vantaggio della casa, gestione del bankroll e gioco responsabile.

3. **Giochi** — Griglia di sei giochi, ognuno con descrizione e lista di strategie:
   | Gioco | Strategie |
   |---|---|
   | Blackjack | Basic Strategy, Card Counting, Bankroll Management |
   | Poker | Position Play, Hand Ranges, Pot Odds |
   | Roulette | Martingale System, D'Alembert, Probability Analysis |
   | Slot Machine | RTP Understanding, Bankroll Management, Volatility Analysis |
   | Baccarat | Betting Systems, Trend Analysis, Odds Calculation |
   | Craps | Pass/Don't Pass, Odds Bets, Risk Management |

4. **Punti Chiave** — Quattro avvertenze fondamentali: nessun metodo garantisce la vittoria, la casa vince sempre matematicamente, gestire il bankroll con limiti fissi, giocare solo per divertimento.

**Chi Siamo (`/about`)**

Pagina istituzionale con:
- Missione del sito: fornire informazioni accurate e strategie verificate per il gioco consapevole.
- Cosa offre: guide dettagliate, analisi matematiche delle probabilità, consigli sul bankroll, approfondimenti sui sistemi di scommessa, consapevolezza sui rischi.
- Principi: Trasparenza, Responsabilità, Affidabilità, Protezione.
- Avvertenza importante con risorse di aiuto (Telefono Rosa 1500, Gamblers Anonymous, Centro Nazionale Gioco d'Azzardo).

### Navigazione

Navbar sticky con menu hamburger su mobile. Voci: Home, Giochi, Strategie, Chi Siamo, Contatti.

## Stack tecnico

| Tecnologia | Versione | Ruolo |
|---|---|---|
| Vue 3 | ^3.5 | Framework UI (Options API con `defineComponent`) |
| Vue Router | ^5.0 | Routing client-side con lazy loading |
| Vite | ^7.3 | Build tool e dev server |
| SCSS | ^1.98 | Stili modulari (architettura a partial) |
| Bootstrap | ^5.3 | Base CSS |
| Vercel Analytics | ^2.0 | Analytics di produzione |
| Vercel Edge Config | ^1.4 | Configurazione edge |

## Struttura del progetto

```
src/
├── api/
│   └── config.js              # Configurazione API
├── assets/
│   └── scss/
│       ├── main.scss          # Entry point SCSS
│       ├── _variables.scss    # Variabili colori e spaziature
│       ├── _animations.scss   # Animazioni
│       ├── _buttons.scss      # Stili bottoni
│       ├── _cards.scss        # Stili card
│       ├── _games.scss        # Sezione giochi
│       ├── _hero.scss         # Sezione hero
│       ├── _keypoints.scss    # Sezione punti chiave
│       ├── _about.scss        # Pagina Chi Siamo
│       └── _responsive.scss   # Media queries
├── components/
│   └── NavigationMenu.vue     # Navbar con hamburger mobile
├── router/
│   └── index.js               # Definizione route
└── views/
    ├── HomeView.vue            # Pagina principale
    └── AboutView.vue          # Pagina Chi Siamo
```

## Avvio in sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output nella cartella `dist/`, pronto per il deploy su Vercel.
