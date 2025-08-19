import { useTheme } from '../hooks/useTheme';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  AlertTriangle,
  Target,
  BarChart3,
  MapPin
} from 'lucide-react';

/**
 * Cards con i principali KPI dell'azienda agricola
 */
const KPICards = ({ kpis, trends, expanded = false }) => {
  const { isDarkMode } = useTheme();

  const calculateTrend = (data, metric) => {
    if (!data || data.length < 2) return { trend: 0, direction: 'stable' };
    
    const recent = data.slice(-3);
    const values = recent.map(d => d[metric]).filter(v => v !== undefined);
    
    if (values.length < 2) return { trend: 0, direction: 'stable' };
    
    const firstValue = values[0];
    const lastValue = values[values.length - 1];
    const change = ((lastValue - firstValue) / firstValue) * 100;
    
    return {
      trend: Math.abs(change),
      direction: change > 1 ? 'up' : change < -1 ? 'down' : 'stable'
    };
  };

  const mainKPIs = [
    {
      id: 'revenue',
      title: 'Ricavi Totali',
      value: kpis.totalRevenue,
      format: (v) => `€${v.toLocaleString('it-IT')}`,
      icon: DollarSign,
      color: 'green',
      metric: 'totalRevenue',
      description: 'Ricavi stimati da tutte le colture'
    },
    {
      id: 'efficiency',
      title: 'Efficienza Media',
      value: kpis.averageEfficiency,
      format: (v) => `${v}%`,
      icon: Target,
      color: 'blue',
      metric: 'averageEfficiency',
      description: 'Efficienza produttiva media delle colture'
    },
    {
      id: 'growth',
      title: 'Crescita Media',
      value: kpis.averageGrowth,
      format: (v) => `${v}%`,
      icon: Activity,
      color: 'emerald',
      metric: 'averageGrowth',
      description: 'Percentuale di crescita media delle colture'
    },
    {
      id: 'weather_risk',
      title: 'Rischio Meteo',
      value: kpis.weatherRisk,
      format: (v) => `${v}%`,
      icon: AlertTriangle,
      color: kpis.weatherRisk > 60 ? 'red' : kpis.weatherRisk > 30 ? 'yellow' : 'green',
      metric: 'weatherRisk',
      description: 'Livello di rischio legato alle condizioni meteorologiche'
    }
  ];

  const additionalKPIs = [
    {
      id: 'area',
      title: 'Area Totale',
      value: kpis.totalArea,
      format: (v) => `${v} ha`,
      icon: MapPin,
      color: 'gray',
      description: 'Superficie totale coltivata'
    },
    {
      id: 'production',
      title: 'Produzione Totale',
      value: kpis.totalProduction,
      format: (v) => `${v.toFixed(1)} t`,
      icon: BarChart3,
      color: 'indigo',
      description: 'Produzione totale stimata'
    },
    {
      id: 'profit_per_ha',
      title: 'Ricavo per Ettaro',
      value: kpis.profitPerHectare,
      format: (v) => `€${v.toLocaleString('it-IT')}/ha`,
      icon: TrendingUp,
      color: 'purple',
      description: 'Ricavo medio per ettaro coltivato'
    },
    {
      id: 'productivity',
      title: 'Indice Produttività',
      value: kpis.productivityIndex,
      format: (v) => `${v} t/ha`,
      icon: Activity,
      color: 'orange',
      description: 'Produttività media per ettaro'
    }
  ];

  const displayKPIs = expanded ? [...mainKPIs, ...additionalKPIs] : mainKPIs;

  const getColorClasses = (color, variant = 'default') => {
    const colors = {
      green: {
        default: isDarkMode ? 'text-green-400' : 'text-green-600',
        bg: isDarkMode ? 'bg-green-900' : 'bg-green-50',
        border: isDarkMode ? 'border-green-700' : 'border-green-200'
      },
      blue: {
        default: isDarkMode ? 'text-blue-400' : 'text-blue-600',
        bg: isDarkMode ? 'bg-blue-900' : 'bg-blue-50',
        border: isDarkMode ? 'border-blue-700' : 'border-blue-200'
      },
      emerald: {
        default: isDarkMode ? 'text-emerald-400' : 'text-emerald-600',
        bg: isDarkMode ? 'bg-emerald-900' : 'bg-emerald-50',
        border: isDarkMode ? 'border-emerald-700' : 'border-emerald-200'
      },
      red: {
        default: isDarkMode ? 'text-red-400' : 'text-red-600',
        bg: isDarkMode ? 'bg-red-900' : 'bg-red-50',
        border: isDarkMode ? 'border-red-700' : 'border-red-200'
      },
      yellow: {
        default: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
        bg: isDarkMode ? 'bg-yellow-900' : 'bg-yellow-50',
        border: isDarkMode ? 'border-yellow-700' : 'border-yellow-200'
      },
      gray: {
        default: isDarkMode ? 'text-gray-400' : 'text-gray-600',
        bg: isDarkMode ? 'bg-gray-700' : 'bg-gray-50',
        border: isDarkMode ? 'border-gray-600' : 'border-gray-200'
      },
      indigo: {
        default: isDarkMode ? 'text-indigo-400' : 'text-indigo-600',
        bg: isDarkMode ? 'bg-indigo-900' : 'bg-indigo-50',
        border: isDarkMode ? 'border-indigo-700' : 'border-indigo-200'
      },
      purple: {
        default: isDarkMode ? 'text-purple-400' : 'text-purple-600',
        bg: isDarkMode ? 'bg-purple-900' : 'bg-purple-50',
        border: isDarkMode ? 'border-purple-700' : 'border-purple-200'
      },
      orange: {
        default: isDarkMode ? 'text-orange-400' : 'text-orange-600',
        bg: isDarkMode ? 'bg-orange-900' : 'bg-orange-50',
        border: isDarkMode ? 'border-orange-700' : 'border-orange-200'
      }
    };
    
    return colors[color] ? colors[color][variant] : colors.gray[variant];
  };

  const TrendIcon = ({ direction }) => {
    if (direction === 'up') {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (direction === 'down') {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
    return <Activity className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="space-y-6">
      {expanded && (
        <div className="flex items-center space-x-2 mb-6">
          <BarChart3 className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className="text-xl font-bold">Indicatori di Performance (KPI)</h2>
        </div>
      )}
      
      <div className={`grid grid-cols-1 ${
        expanded ? 'md:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-4'
      } gap-8 mt-4`}>
        {displayKPIs.map((kpi, index) => {
          const IconComponent = kpi.icon;
          const trendData = kpi.metric ? calculateTrend(trends, kpi.metric) : { trend: 0, direction: 'stable' };
          
          return (
            <div
              key={kpi.id}
              className={`rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 transform animate-slide-in-up glass-effect ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-gray-600/50 shadow-lg' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 hover:border-gray-300/50 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 relative overflow-hidden">
                {/* Background pattern subtle */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 ${getColorClasses(kpi.color)}`}>
                  <IconComponent className="w-full h-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 animate-float ${getColorClasses(kpi.color, 'bg')}`}>
                      <IconComponent className={`w-6 h-6 ${getColorClasses(kpi.color)}`} />
                    </div>
                    
                    {kpi.metric && (
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                        trendData.direction === 'up' ? 'bg-green-100 dark:bg-green-900/30' :
                        trendData.direction === 'down' ? 'bg-red-100 dark:bg-red-900/30' :
                        'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        <TrendIcon direction={trendData.direction} trend={trendData.trend} />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {trendData.trend.toFixed(1)}%
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">{kpi.title}</p>
                    <p className={`text-3xl font-bold leading-tight ${getColorClasses(kpi.color)}`}>
                      {kpi.format(kpi.value)}
                    </p>
                    
                    {expanded && kpi.description && (
                      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                        {kpi.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {!expanded && additionalKPIs.length > 0 && (
        <div className={`text-center text-sm text-gray-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        } border-t pt-4`}>
          {additionalKPIs.length} KPI aggiuntivi disponibili nella vista Analytics
        </div>
      )}
    </div>
  );
};

export default KPICards;
