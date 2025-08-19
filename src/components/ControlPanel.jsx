import { useTheme } from '../hooks/useTheme';
import { 
  Clock, 
  Filter, 
  BarChart3, 
  Eye,
  Leaf,
  TrendingUp,
  Activity
} from 'lucide-react';

/**
 * Pannello di controllo per filtri e impostazioni vista
 */
const ControlPanel = ({
  selectedTimeRange,
  onTimeRangeChange,
  selectedCrop,
  onCropChange,
  viewMode,
  onViewModeChange,
  productionData
}) => {
  const { isDarkMode } = useTheme();

  const timeRangeOptions = [
    { value: '1d', label: '1 Giorno', icon: '📅' },
    { value: '3d', label: '3 Giorni', icon: '📅' },
    { value: '7d', label: '1 Settimana', icon: '📊' },
    { value: '15d', label: '15 Giorni', icon: '📈' },
    { value: '30d', label: '1 Mese', icon: '📋' }
  ];

  const viewModeOptions = [
    { 
      value: 'overview', 
      label: 'Panoramica', 
      icon: Eye,
      description: 'Vista generale dell\'azienda'
    },
    { 
      value: 'environmental', 
      label: 'Ambientale', 
      icon: Leaf,
      description: 'Condizioni meteorologiche e ambientali'
    },
    { 
      value: 'production', 
      label: 'Produzione', 
      icon: TrendingUp,
      description: 'Dettagli colture e produttività'
    },
    { 
      value: 'analytics', 
      label: 'Analytics', 
      icon: Activity,
      description: 'KPI e analisi avanzate'
    }
  ];

  const cropOptions = [
    { value: 'all', label: 'Tutte le Colture', icon: '🌾' },
    ...Object.entries(productionData).map(([key, crop]) => ({
      value: key,
      label: crop.name,
      icon: getCropIcon(key)
    }))
  ];

  function getCropIcon(cropType) {
    const icons = {
      wheat: '🌾',
      corn: '🌽',
      tomatoes: '🍅',
      olives: '🫒'
    };
    return icons[cropType] || '🌱';
  }

  return (
    <div className={`border-b transition-all duration-300 backdrop-blur-sm sticky top-[68px] z-40 ${
      isDarkMode 
        ? 'bg-gray-800/90 border-gray-700/50' 
        : 'bg-white/90 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          
          {/* Modalità Vista */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <BarChart3 className="w-5 h-5" />
              <span>Vista Dashboard:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {viewModeOptions.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <button
                    key={mode.value}
                    onClick={() => onViewModeChange(mode.value)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow ${
                      viewMode === mode.value
                        ? isDarkMode
                          ? 'bg-blue-600 text-white border border-blue-500'
                          : 'bg-blue-600 text-white border border-blue-500'
                        : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                    title={mode.description}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtri */}
          <div className="flex flex-wrap items-center gap-6">
            
            {/* Range Temporale */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Periodo:</span>
              </div>
              
              <select
                value={selectedTimeRange}
                onChange={(e) => onTimeRangeChange(e.target.value)}
                className={`px-4 py-2.5 rounded-xl border shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                {timeRangeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro Colture (solo in vista produzione o panoramica) */}
            {(viewMode === 'production' || viewMode === 'overview') && (
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <Filter className="w-4 h-4" />
                  <span>Coltura:</span>
                </div>
                
                <select
                  value={selectedCrop}
                  onChange={(e) => onCropChange(e.target.value)}
                  className={`px-4 py-2.5 rounded-xl border shadow-sm transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  {cropOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Indicatori di stato attivi */}
        {(selectedCrop !== 'all' || viewMode !== 'overview') && (
          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-wrap gap-3">
              {viewMode !== 'overview' && (
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-900/80 to-blue-800/80 text-blue-300 border border-blue-700/50' 
                    : 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  <Eye className="w-3 h-3 mr-1" />
                  Vista: {viewModeOptions.find(m => m.value === viewMode)?.label}
                </div>
              )}
              
              {selectedCrop !== 'all' && (
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-green-900/80 to-green-800/80 text-green-300 border border-green-700/50' 
                    : 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200'
                }`}>
                  <Filter className="w-3 h-3 mr-1" />
                  Coltura: {cropOptions.find(c => c.value === selectedCrop)?.label}
                </div>
              )}
              
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-900/80 to-purple-800/80 text-purple-300 border border-purple-700/50' 
                  : 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border border-purple-200'
              }`}>
                <Clock className="w-3 h-3 mr-1" />
                Periodo: {timeRangeOptions.find(t => t.value === selectedTimeRange)?.label}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
