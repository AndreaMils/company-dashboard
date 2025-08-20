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
- **Design System Moderno** con ShadCN UI per componenti consistenti e accessibili
- **Design responsivo** ottimizzato per desktop, tablet e mobile
- **Tema scuro/chiaro** con preferenze utente salvate e transizioni fluide
- **Grafici interattivi** con Recharts per visualizzazioni avanzate
- **Componenti Glassmorphism** con effetti di trasparenza e blur
- **Animazioni e transizioni** per un'esperienza utente fluida
- **Accessibilità completa** con supporto screen reader e navigazione da tastiera
- **UX ottimizzata** per utenti non tecnici del settore agricolo

## 🛠️ Tecnologie Utilizzate

### Frontend Framework
- **React 19.1** - Framework principale con hooks moderni
- **Vite 7.0** - Build tool e dev server ultra-veloce
- **JavaScript ES6+** - Linguaggio di programmazione principale

### Styling e UI
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **ShadCN UI** - Sistema di design con componenti moderni e accessibili
- **Radix UI** - Componenti headless per accessibilità e interazioni avanzate
- **Lucide React** - Libreria di icone moderne e consistenti
- **CSS Custom Properties** - Gestione avanzata dei temi
- **clsx & tailwind-merge** - Utilità per gestione classi CSS condizionali

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

# Installa dipendenze ShadCN UI (già incluse)
yarn add @radix-ui/react-select @radix-ui/react-tooltip
yarn add class-variance-authority clsx tailwind-merge

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

## 🎨 Design System e Componenti UI

### ShadCN UI Integration
Il progetto utilizza **ShadCN UI**, un moderno design system basato su **Radix UI** e **Tailwind CSS**, che fornisce:

#### 🧩 Componenti Principali
- **Button** - Componente pulsante con varianti (default, destructive, outline, secondary, ghost, link)
- **Card** - Sistema di card modulari (Card, CardContent, CardHeader, CardTitle, CardDescription)
- **Badge** - Indicatori di stato e categorie con varianti colore
- **Select** - Menu a discesa avanzati con ricerca e accessibilità
- **Tooltip** - Suggerimenti contestuali accessibili

#### ✨ Caratteristiche Principali
- **Accessibilità Completa** - Supporto ARIA, screen reader e navigazione da tastiera
- **Varianti Dinamiche** - Sistema di varianti con `class-variance-authority` (CVA)
- **Temi Adattivi** - Supporto automatico per tema chiaro/scuro
- **Composizione Modulare** - Componenti combinabili per interfacce complesse
- **Performance Ottimizzate** - Tree-shaking e bundle size ridotti

#### 🎨 Design Tokens
```css
/* CSS Variables per temi */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... altre variabili */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... variabili tema scuro */
}
```

#### 🛠️ Utilità CSS
- **`cn()` function** - Fusione intelligente di classi Tailwind con `clsx` e `tailwind-merge`
- **Conditional Classes** - Gestione dinamica di stili basati su stato
- **No Conflicts** - Risoluzione automatica dei conflitti tra classi CSS

## 🔧 Architettura del Codice

### Struttura Directory
```
src/
├── components/           # Componenti React
│   ├── ui/              # Componenti ShadCN UI
│   │   ├── button.jsx   # Componente Button riutilizzabile
│   │   ├── card.jsx     # Componenti Card (Card, CardContent, CardTitle)
│   │   ├── badge.jsx    # Componente Badge per stati e categorie
│   │   ├── select.jsx   # Componenti Select avanzati
│   │   └── tooltip.jsx  # Componente Tooltip accessibile
│   ├── Dashboard.jsx    # Componente principale
│   ├── DashboardHeader.jsx
│   ├── ControlPanel.jsx
│   ├── KPICards.jsx
│   ├── EnvironmentalPanel.jsx
│   ├── ProductionPanel.jsx
│   ├── ChartsPanel.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorDisplay.jsx
├── lib/                 # Utilities e helpers
│   └── utils.js        # Funzioni utility (cn, classi CSS)
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
- **Design System** con ShadCN UI per componenti consistenti
- **Compound Components** per UI complesse
- **Render Props** per grafici dinamici
- **Context Pattern** per stato globale e temi
- **Service Layer** per logica di business
- **Utility-First CSS** con Tailwind per styling modulare
- **Composition over Inheritance** per componenti riutilizzabili

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
- [x] **Design System Moderno** - Implementazione completa ShadCN UI
- [x] **Ottimizzazione CSS** - Rimozione conflitti e pulizia del codice
- [x] **Componenti Accessibili** - Supporto completo screen reader e keyboard navigation
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

## 📋 Changelog e Miglioramenti Recenti

### ✅ v2.0.0 - Dicembre 2024
- **🎨 Design System Completo** - Integrazione ShadCN UI per componenti moderni
- **🚀 Performance Migliorata** - Ottimizzazione CSS e rimozione conflitti
- **♿ Accessibilità Completa** - Supporto screen reader e navigazione da tastiera
- **📱 Responsive Design** - Migliorato spacing e layout su tutti i dispositivi
- **🎭 Temi Avanzati** - Sistema di temi più robusto con CSS variables
- **🧩 Componenti Modulari** - Libreria di componenti riutilizzabili

### 🔧 Miglioramenti Tecnici Implementati
- ✅ **ShadCN UI Integration** - Sistema di design completo
- ✅ **CSS Optimization** - Pulizia e riorganizzazione degli stili
- ✅ **Component Architecture** - Struttura modulare migliorata
- ✅ **Accessibility Standards** - Conformità WCAG 2.1
- ✅ **Build Optimization** - Configurazione Vite e PostCSS aggiornata

### 🎯 Prossimi Obiettivi
- 🔄 **Progressive Web App** (PWA) 
- 📊 **Advanced Analytics** con Machine Learning
- 🌐 **API Integration** per dati real-time
- 📱 **Mobile App** nativa

## 📄 Licenza

Questo progetto è stato sviluppato per scopi educativi e di ricerca nel settore dell'agricoltura digitale.

---

**Sviluppato con ❤️ per l'innovazione nel settore agricolo**  
*Powered by React, ShadCN UI, e moderne tecnologie web*