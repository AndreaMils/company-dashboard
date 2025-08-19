# Tabelle di Dati Random Generati

## Dati Ambientali - Esempio 24 ore

| Timestamp | Temperatura (°C) | Umidità (%) | Precipitazioni (mm) | Vento (km/h) | Indice UV | Umidità Suolo (%) |
|-----------|------------------|-------------|---------------------|---------------|-----------|-------------------|
| 00:00     | 15.2            | 78.4        | 0.0                 | 8.3           | 0.0       | 68.2              |
| 02:00     | 13.8            | 82.1        | 0.0                 | 6.7           | 0.0       | 69.5              |
| 04:00     | 12.4            | 85.3        | 1.2                 | 5.2           | 0.0       | 71.8              |
| 06:00     | 14.1            | 81.7        | 0.0                 | 7.4           | 1.2       | 70.3              |
| 08:00     | 18.3            | 72.6        | 0.0                 | 9.8           | 3.4       | 67.8              |
| 10:00     | 22.7            | 65.2        | 0.0                 | 12.1          | 5.8       | 65.1              |
| 12:00     | 26.4            | 58.9        | 0.0                 | 14.3          | 7.2       | 62.4              |
| 14:00     | 28.1            | 55.1        | 0.0                 | 15.7          | 8.1       | 60.8              |
| 16:00     | 27.3            | 57.8        | 0.0                 | 13.9          | 6.5       | 61.5              |
| 18:00     | 24.6            | 63.4        | 0.0                 | 11.2          | 3.7       | 63.9              |
| 20:00     | 21.2            | 69.7        | 0.0                 | 8.6           | 1.1       | 66.2              |
| 22:00     | 18.5            | 74.2        | 0.0                 | 7.1           | 0.0       | 67.8              |

## Dati di Produzione - Stato Attuale Colture

| Coltura  | Area (ha) | Crescita (%) | Produzione (t) | Efficienza (%) | Ricavi (€) | Stato Fenologico |
|----------|-----------|--------------|----------------|----------------|------------|------------------|
| Grano    | 25        | 67.3         | 110.2          | 85             | 27,550     | Fioritura        |
| Mais     | 20        | 43.8         | 52.1           | 78             | 11,462     | Crescita         |
| Pomodori | 5         | 82.1         | 164.7          | 92             | 65,880     | Maturazione      |
| Olive    | 15        | 28.5         | 12.4           | 71             | 9,920      | Crescita         |

## KPI Aggregati - Trend Settimanale

| Data       | Ricavi Totali (€) | Efficienza (%) | Crescita (%) | Rischio Meteo (%) | Produttività (t/ha) |
|------------|-------------------|----------------|--------------|-------------------|---------------------|
| 15/01/2024 | 89,340           | 79             | 52.1         | 18                | 2.34                |
| 16/01/2024 | 92,450           | 81             | 55.7         | 22                | 2.41                |
| 17/01/2024 | 95,120           | 83             | 58.9         | 15                | 2.48                |
| 18/01/2024 | 97,890           | 85             | 62.3         | 28                | 2.55                |
| 19/01/2024 | 101,230          | 87             | 65.8         | 31                | 2.62                |
| 20/01/2024 | 108,750          | 89             | 69.2         | 12                | 2.71                |
| 21/01/2024 | 114,812          | 91             | 72.6         | 9                 | 2.78                |

## Correlazione Ambiente-Produzione

| Temperatura (°C) | Umidità (%) | Efficienza Grano (%) | Efficienza Mais (%) | Efficienza Pomodori (%) |
|------------------|-------------|----------------------|---------------------|-------------------------|
| 15.2             | 78.4        | 82                   | 75                  | 88                      |
| 18.7             | 71.3        | 87                   | 81                  | 91                      |
| 22.1             | 65.8        | 91                   | 85                  | 94                      |
| 25.4             | 60.2        | 88                   | 89                  | 96                      |
| 28.9             | 55.1        | 84                   | 92                  | 89                      |
| 31.2             | 52.8        | 78                   | 88                  | 82                      |
| 33.5             | 49.3        | 71                   | 81                  | 75                      |

## Distribuzione Ricavi per Coltura

| Coltura  | Ricavi (€) | Percentuale | Ricavi/ha (€/ha) |
|----------|------------|-------------|------------------|
| Pomodori | 65,880     | 57.4%       | 13,176           |
| Grano    | 27,550     | 24.0%       | 1,102            |
| Mais     | 11,462     | 10.0%       | 573              |
| Olive    | 9,920      | 8.6%        | 661              |
| **Totale** | **114,812** | **100%**    | **1,766**        |

## Analisi Rischio Meteorologico

| Parametro           | Valore Ottimale | Valore Attuale | Rischio (%) | Impatto su Colture |
|---------------------|-----------------|----------------|-------------|--------------------|
| Temperatura         | 15-25°C         | 28.1°C         | 35          | Stress termico     |
| Umidità             | 60-80%          | 55.1%          | 25          | Deficit idrico     |
| Precipitazioni      | 2-10 mm/giorno  | 0.0 mm         | 40          | Carenza acqua      |
| Vento               | 5-15 km/h       | 15.7 km/h      | 15          | Lieve stress       |
| **Rischio Complessivo** |             |                | **29**      | **Moderato**       |

## Previsioni Produzione Stagionale

| Coltura  | Produzione Attuale (t) | Produzione Stimata (t) | Crescita Rimanente | Raccolta Prevista |
|----------|------------------------|------------------------|--------------------|--------------------|
| Grano    | 110.2                  | 137.5                  | 32.7%              | Giugno 2024        |
| Mais     | 52.1                   | 170.0                  | 56.2%              | Settembre 2024     |
| Pomodori | 164.7                  | 225.0                  | 17.9%              | Agosto 2024        |
| Olive    | 12.4                   | 52.5                   | 71.5%              | Ottobre 2024       |

## Efficienza Storica per Mese

| Mese      | Grano (%) | Mais (%) | Pomodori (%) | Olive (%) | Media (%) |
|-----------|-----------|----------|--------------|-----------|-----------|
| Gennaio   | 85        | N/A      | N/A          | 68        | 77        |
| Febbraio  | 87        | N/A      | N/A          | 71        | 79        |
| Marzo     | 89        | 75       | 88           | 74        | 82        |
| Aprile    | 91        | 78       | 91           | 77        | 84        |
| Maggio    | 88        | 82       | 94           | 80        | 86        |
| Giugno    | 92        | 85       | 96           | 83        | 89        |
| Luglio    | N/A       | 89       | 94           | 86        | 90        |
| Agosto    | N/A       | 92       | 91           | 89        | 91        |
| Settembre | N/A       | 88       | N/A          | 92        | 90        |
| Ottobre   | 82        | N/A      | N/A          | 95        | 89        |

## Note sui Dati

### Metodologia di Generazione
- **Distribuzione Normale**: Utilizzo dell'algoritmo Box-Muller per variazioni realistiche
- **Correlazioni**: Temperatura/umidità inversamente correlate, precipitazioni/umidità suolo correlate
- **Stagionalità**: Variazioni stagionali per tutti i parametri ambientali
- **Stress Factors**: Calcolo impatto condizioni sub-ottimali sulla crescita

### Limitazioni
- Dati simulati non rappresentano situazioni reali specifiche
- Modelli semplificati per scopi didattici
- Variabilità meteorologica ridotta rispetto alla realtà
- Prezzi di mercato fissi (non considerano fluttuazioni reali)

### Utilizzo
Questi dati sono utilizzati per:
1. **Demo del sistema** di monitoraggio
2. **Testing delle funzionalità** di visualizzazione
3. **Validazione degli algoritmi** di calcolo KPI
4. **Training utenti** sull'interpretazione dei dati
