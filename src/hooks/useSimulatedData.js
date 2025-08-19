import { useState, useEffect, useCallback, useRef } from 'react';
import { DataSimulator } from '../services/dataSimulator';

/**
 * Hook personalizzato per gestire i dati simulati dell'azienda agricola
 * Fornisce dati in tempo reale e storico per il dashboard
 */
export const useSimulatedData = (updateInterval = 5000) => {
  const [currentData, setCurrentData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRealTimeActive, setIsRealTimeActive] = useState(true);
  
  const simulatorRef = useRef(new DataSimulator());
  const intervalRef = useRef(null);
  const growthDataRef = useRef({});

  // Funzione per generare nuovi dati
  const generateNewData = useCallback(() => {
    try {
      const simulator = simulatorRef.current;
      
      // Genera dati ambientali
      const environmentalData = simulator.generateEnvironmentalData();
      
      // Genera dati di produzione basati sulla crescita precedente
      const productionData = simulator.generateProductionData(
        environmentalData, 
        growthDataRef.current
      );
      
      // Aggiorna la crescita di riferimento
      Object.keys(productionData).forEach(crop => {
        growthDataRef.current[crop] = productionData[crop].growthPercentage;
      });
      
      // Calcola KPI aggregati
      const kpis = calculateKPIs(productionData, environmentalData);
      
      const newDataPoint = {
        id: Date.now(),
        timestamp: new Date(),
        environmental: environmentalData,
        production: productionData,
        kpis
      };
      
      setCurrentData(newDataPoint);
      
      // Aggiorna i dati storici (mantieni solo gli ultimi 100 punti)
      setHistoricalData(prev => {
        const updated = [...prev, newDataPoint];
        return updated.length > 100 ? updated.slice(-100) : updated;
      });
      
      setError(null);
    } catch (err) {
      setError(`Errore nella generazione dati: ${err.message}`);
      console.error('Errore simulazione dati:', err);
    }
  }, []);

  // Calcola KPI aggregati
  const calculateKPIs = (productionData, environmentalData) => {
    const crops = Object.values(productionData);
    
    const totalArea = crops.reduce((sum, crop) => sum + crop.area, 0);
    const totalRevenue = crops.reduce((sum, crop) => sum + crop.estimatedRevenue, 0);
    const totalProduction = crops.reduce((sum, crop) => sum + crop.currentProduction, 0);
    const avgEfficiency = crops.reduce((sum, crop) => sum + crop.efficiency, 0) / crops.length;
    const avgGrowth = crops.reduce((sum, crop) => sum + crop.growthPercentage, 0) / crops.length;
    
    // Indicatori di rischio ambientale
    const temperatureRisk = calculateTemperatureRisk(environmentalData.temperature);
    const waterStress = calculateWaterStress(environmentalData.rainfall, environmentalData.soilMoisture);
    const weatherRisk = (temperatureRisk + waterStress) / 2;
    
    return {
      totalArea,
      totalRevenue,
      totalProduction,
      averageEfficiency: Math.round(avgEfficiency),
      averageGrowth: Math.round(avgGrowth * 10) / 10,
      weatherRisk: Math.round(weatherRisk),
      profitPerHectare: Math.round(totalRevenue / totalArea),
      productivityIndex: Math.round((totalProduction / totalArea) * 100) / 100
    };
  };

  const calculateTemperatureRisk = (temperature) => {
    // Rischio basato su temperature estreme
    if (temperature < 5 || temperature > 35) return 80;
    if (temperature < 10 || temperature > 30) return 50;
    if (temperature < 15 || temperature > 25) return 20;
    return 0;
  };

  const calculateWaterStress = (rainfall, soilMoisture) => {
    // Combina precipitazioni e umidità del suolo
    const waterIndex = (rainfall * 2 + soilMoisture) / 3;
    if (waterIndex < 20) return 90;
    if (waterIndex < 40) return 60;
    if (waterIndex < 60) return 30;
    return 0;
  };

  // Inizializzazione con dati storici
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      try {
        const simulator = simulatorRef.current;
        const historical = simulator.generateHistoricalData(30);
        
        // Converte i dati storici nel formato corretto
        const formattedHistorical = historical.map((day, index) => ({
          id: index,
          timestamp: new Date(day.date),
          environmental: day.environmental,
          production: day.production,
          kpis: calculateKPIs(day.production, day.environmental)
        }));
        
        setHistoricalData(formattedHistorical);
        
        // Imposta l'ultimo dato come corrente
        if (formattedHistorical.length > 0) {
          const lastData = formattedHistorical[formattedHistorical.length - 1];
          setCurrentData(lastData);
          
          // Inizializza i dati di crescita
          Object.keys(lastData.production).forEach(crop => {
            growthDataRef.current[crop] = lastData.production[crop].growthPercentage;
          });
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(`Errore nell'inizializzazione: ${err.message}`);
        setIsLoading(false);
      }
    };
    
    initializeData();
  }, []);

  // Gestione aggiornamenti in tempo reale
  useEffect(() => {
    if (isRealTimeActive && !isLoading) {
      intervalRef.current = setInterval(generateNewData, updateInterval);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isRealTimeActive, isLoading, generateNewData, updateInterval]);

  // Funzioni di controllo
  const toggleRealTime = useCallback(() => {
    setIsRealTimeActive(prev => !prev);
  }, []);

  const refreshData = useCallback(() => {
    generateNewData();
  }, [generateNewData]);

  const resetSimulation = useCallback(() => {
    growthDataRef.current = {};
    setHistoricalData([]);
    setCurrentData(null);
    setIsLoading(true);
    
    // Reinizializza
    setTimeout(() => {
      const simulator = new DataSimulator();
      simulatorRef.current = simulator;
      
      const historical = simulator.generateHistoricalData(30);
      const formattedHistorical = historical.map((day, index) => ({
        id: index,
        timestamp: new Date(day.date),
        environmental: day.environmental,
        production: day.production,
        kpis: calculateKPIs(day.production, day.environmental)
      }));
      
      setHistoricalData(formattedHistorical);
      if (formattedHistorical.length > 0) {
        setCurrentData(formattedHistorical[formattedHistorical.length - 1]);
      }
      setIsLoading(false);
    }, 500);
  }, []);

  // Funzioni per ottenere dati specifici
  const getEnvironmentalTrends = useCallback((days = 7) => {
    return historicalData
      .slice(-days)
      .map(data => ({
        date: data.timestamp,
        ...data.environmental
      }));
  }, [historicalData]);

  const getProductionTrends = useCallback((cropType = null, days = 7) => {
    return historicalData
      .slice(-days)
      .map(data => {
        if (cropType) {
          return {
            date: data.timestamp,
            ...data.production[cropType]
          };
        }
        return {
          date: data.timestamp,
          production: data.production
        };
      });
  }, [historicalData]);

  const getKPITrends = useCallback((days = 7) => {
    return historicalData
      .slice(-days)
      .map(data => ({
        date: data.timestamp,
        ...data.kpis
      }));
  }, [historicalData]);

  return {
    // Dati attuali
    currentData,
    historicalData,
    
    // Stato del sistema
    isLoading,
    error,
    isRealTimeActive,
    
    // Funzioni di controllo
    toggleRealTime,
    refreshData,
    resetSimulation,
    
    // Funzioni per trend specifici
    getEnvironmentalTrends,
    getProductionTrends,
    getKPITrends,
    
    // Metadati
    updateInterval,
    dataPointsCount: historicalData.length
  };
};
