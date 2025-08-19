# Dashboard Azienda Agricola "Terra Verde"

Un dashboard interattivo per il monitoraggio e l'analisi delle prestazioni nel settore primario, sviluppato con React e tecnologie moderne.

## 🌾 Descrizione del Progetto

Questo progetto simula un'azienda agricola che coltiva diverse colture (grano, mais, pomodori, olive) e fornisce un sistema completo di monitoraggio delle condizioni ambientali e della produzione agricola.

### Contesto Operativo - Azienda "Terra Verde"

**Ubicazione**: Pianura Padana, Italia  
**Superficie Totale**: 65 ettari  
**Tipologia**: Azienda mista con colture cerealicole, orticole e oliveto  

**Colture Monitorate**:
- 🌾 **Grano** (25 ha) - Coltivazione autunno-vernina, raccolta giugno
- 🌽 **Mais** (20 ha) - Semina primaverile, raccolta settembre  
- 🍅 **Pomodori** (5 ha) - Coltura protetta, ciclo marzo-agosto
- 🫒 **Olive** (15 ha) - Oliveto secolare, raccolta ottobre

### Processo Produttivo

L'azienda segue un approccio integrato che combina:
- **Monitoraggio ambientale continuo** (temperatura, umidità, precipitazioni, vento, UV, umidità suolo)
- **Gestione della crescita** delle colture con tracking percentuale e fasi fenologiche
- **Ottimizzazione delle risorse** basata su dati real-time e previsioni
- **Analisi economica** con calcolo ricavi, efficienza produttiva e ROI per ettaro

## 🚀 Funzionalità Principali

### 📊 Dashboard Interattivo
- **Vista Panoramica**: KPI aggregati e overview generale
- **Pannello Ambientale**: Condizioni meteorologiche e parametri del suolo
- **Pannello Produzione**: Stato delle colture, crescita e previsioni
- **Analytics Avanzate**: Correlazioni ambiente-produzione e trend storici

### 📈 Simulatore di Dati
- **Generazione realistica** di dati ambientali con variazioni stagionali
- **Modellazione della crescita** delle colture basata su condizioni ambientali
- **Calcolo automatico** di KPI e metriche di performance
- **Distribuzione statistica** per riflettere variabilità reale

### ⚡ Aggiornamenti Real-Time
- Dati aggiornati ogni 5 secondi
- Controlli play/pause per la simulazione
- Storico dati configurabile (1 giorno - 1 mese)
- Reset e riavvio simulazione

### 🎨 Interfaccia Utente
- **Design responsivo** ottimizzato per desktop, tablet e mobile
- **Tema scuro/chiaro** con preferenze utente salvate
- **Grafici interattivi** con Recharts per visualizzazioni avanzate
- **UX ottimizzata** per utenti non tecnici del settore agricolo

## 🛠️ Tecnologie Utilizzate

### Frontend Framework
- **React 19.1** - Framework principale con hooks moderni
- **Vite 7.0** - Build tool e dev server ultra-veloce
- **JavaScript ES6+** - Linguaggio di programmazione principale

### Styling e UI
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Lucide React** - Libreria di icone moderne e consistenti
- **CSS Custom Properties** - Gestione avanzata dei temi

### Grafici e Visualizzazioni
- **Recharts 3.1** - Libreria per grafici interattivi React-native
- **D3.js** (tramite Recharts) - Motore di visualizzazione dati

### Gestione Dati e Stato
- **Custom Hooks** - Gestione stato applicazione
- **Context API** - Gestione tema globale
- **Local Storage** - Persistenza preferenze utente

### Simulazione e Algoritmi
- **Date-fns 4.1** - Manipolazione e formattazione date
- **Algoritmi statistici** - Distribuzione normale (Box-Muller) per dati realistici
- **Modelli crescita colture** - Simulazione basata su fattori ambientali

## 📋 Installazione e Avvio

### Prerequisiti
- Node.js (versione 18+)
- Yarn o npm

### Installazione
```bash
# Clona il repository
git clone [repository-url]
cd company-dashboard

# Installa le dipendenze
yarn install

# Avvia il server di sviluppo
yarn dev

# Build per produzione
yarn build
```

### Comandi Disponibili
```bash
yarn dev      # Server di sviluppo (porta 5173)
yarn build    # Build di produzione
yarn preview  # Preview build produzione
yarn lint     # Verifica codice con ESLint
```

## 📊 Dati Generati dal Simulatore

### Dati Ambientali
```javascript
{
  temperature: 22.5,        // °C (variazione stagionale + rumore)
  humidity: 68.2,           // % (correlato inversamente a temperatura)
  rainfall: 3.1,            // mm/h (eventi casuali stagionali)
  windSpeed: 12.4,          // km/h (variazione stagionale)
  uvIndex: 6.8,             // 0-11 (basato su ora e stagione)
  soilMoisture: 72.3,       // % (correlato a precipitazioni)
  atmosphericPressure: 1015.2 // hPa (variazione normale)
}
```

### Dati di Produzione
```javascript
{
  wheat: {
    name: "Grano",
    area: 25,                    // ettari
    growthPercentage: 67.3,      // % crescita (0-100)
    currentProduction: 110.2,    // tonnellate stimate
    estimatedRevenue: 27550,     // euro stimati
    efficiency: 85,              // % efficienza vs potenziale
    status: "Fioritura/Allegagione" // fase fenologica
  }
  // ... altre colture
}
```

### KPI Aggregati
```javascript
{
  totalRevenue: 95340,         // euro totali stimati
  totalProduction: 167.8,      // tonnellate totali
  averageEfficiency: 82,       // % efficienza media
  averageGrowth: 71.2,         // % crescita media
  weatherRisk: 25,             // % rischio meteorologico
  profitPerHectare: 1467,      // euro/ettaro
  productivityIndex: 2.58      // tonnellate/ettaro
}
```

## 🎯 Metriche di Performance

### KPI Principali Monitorati
1. **Ricavi Totali** - Stima ricavi da tutte le colture
2. **Efficienza Media** - Performance vs potenziale produttivo
3. **Crescita Media** - Avanzamento medio delle colture
4. **Rischio Meteorologico** - Indicatore condizioni critiche
5. **Ricavo per Ettaro** - Profittabilità per unità di superficie
6. **Indice di Produttività** - Tonnellate prodotte per ettaro

### Analisi Correlazioni
Il sistema analizza automaticamente le correlazioni tra:
- Condizioni ambientali e crescita delle colture
- Temperature e efficienza produttiva  
- Precipitazioni e sviluppo vegetativo
- Fattori di stress e resa finale

## 🔧 Architettura del Codice

### Struttura Directory
```
src/
├── components/           # Componenti React
│   ├── Dashboard.jsx    # Componente principale
│   ├── DashboardHeader.jsx
│   ├── ControlPanel.jsx
│   ├── KPICards.jsx
│   ├── EnvironmentalPanel.jsx
│   ├── ProductionPanel.jsx
│   ├── ChartsPanel.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorDisplay.jsx
├── services/            # Logica business
│   └── dataSimulator.js # Simulatore dati agricoli
├── hooks/               # Custom React hooks
│   ├── useSimulatedData.js
│   └── useTheme.js
├── contexts/            # React Context
│   └── ThemeContext.js
└── App.jsx             # Entry point
```

### Pattern Utilizzati
- **Custom Hooks** per logica riutilizzabile
- **Compound Components** per UI complesse
- **Render Props** per grafici dinamici
- **Context Pattern** per stato globale
- **Service Layer** per logica di business

## 🌍 Scenario d'Uso

### Utenti Target
- **Imprenditori agricoli** - Monitoraggio operazioni quotidiane
- **Agronomi** - Analisi scientifica e ottimizzazione colture
- **Consulenti** - Supporto decisionale e pianificazione
- **Investitori** - Valutazione performance economiche

### Casi d'Uso Principali
1. **Monitoraggio giornaliero** delle condizioni ambientali
2. **Tracciamento crescita** delle colture durante il ciclo produttivo
3. **Analisi predittiva** per ottimizzare interventi agronomici
4. **Reporting economico** per valutazione ROI e pianificazione
5. **Alert automatici** per condizioni critiche o opportunità

## 🚀 Sviluppi Futuri

### Funzionalità Pianificate
- [ ] **Integrazione IoT** - Sensori reali per dati live
- [ ] **Machine Learning** - Predizioni avanzate basate su storico
- [ ] **Gestione Magazzino** - Tracking scorte e input agricoli
- [ ] **Planning Stagionale** - Pianificazione attività annuali
- [ ] **Benchmark** - Confronto con altre aziende del settore
- [ ] **Export Dati** - Esportazione report in PDF/Excel
- [ ] **Notifiche Push** - Alert in tempo reale su mobile
- [ ] **API Integration** - Dati meteorologici e prezzi di mercato reali

### Miglioramenti Tecnici
- [ ] **Progressive Web App** (PWA) per uso offline
- [ ] **Server-Side Rendering** (SSR) per SEO
- [ ] **Database Integration** per persistenza dati storici
- [ ] **Authentication** e gestione multi-utente
- [ ] **Testing Suite** completa (unit, integration, e2e)

## 👨‍💻 Processo di Sviluppo

### Metodologia
1. **Analisi Requisiti** - Studio del settore agricolo e definizione KPI
2. **Design Sistema** - Architettura dati e interfaccia utente
3. **Implementazione Modulare** - Sviluppo componenti riutilizzabili
4. **Testing Iterativo** - Verifica funzionalità durante sviluppo
5. **Ottimizzazione UX** - Miglioramento basato su feedback utenti

### Principi Seguiti
- **Mobile-First Design** - Interfaccia ottimizzata per dispositivi mobili
- **Accessibilità** - Supporto screen reader e navigazione keyboard
- **Performance** - Lazy loading e ottimizzazione bundle
- **Maintainability** - Codice pulito e ben documentato
- **Scalabilità** - Architettura estendibile per nuove funzionalità

## 📄 Licenza

Questo progetto è stato sviluppato per scopi educativi e di ricerca nel settore dell'agricoltura digitale.

---

**Sviluppato con ❤️ per l'innovazione nel settore agricolo**