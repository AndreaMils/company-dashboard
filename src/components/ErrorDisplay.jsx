import { useTheme } from '../hooks/useTheme';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

/**
 * Componente per la visualizzazione degli errori
 */
const ErrorDisplay = ({ 
  error, 
  onRetry, 
  onHome,
  title = 'Errore nel Sistema',
  showRetry = true,
  showHome = false
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-md w-full text-center space-y-6 p-8 rounded-lg border ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        {/* Icona di errore */}
        <div className="flex justify-center">
          <div className={`p-4 rounded-full ${
            isDarkMode ? 'bg-red-900' : 'bg-red-100'
          }`}>
            <AlertTriangle className={`w-12 h-12 ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
          </div>
        </div>

        {/* Titolo errore */}
        <div className="space-y-2">
          <h2 className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          
          {/* Messaggio errore */}
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {error || 'Si è verificato un errore imprevisto durante il caricamento dei dati.'}
          </p>
        </div>

        {/* Dettagli tecnici se disponibili */}
        {typeof error === 'object' && error.stack && (
          <details className={`text-left text-xs ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <summary className="cursor-pointer mb-2">Dettagli tecnici</summary>
            <pre className={`p-2 rounded border overflow-auto ${
              isDarkMode ? 'bg-gray-900 border-gray-600' : 'bg-gray-100 border-gray-300'
            }`}>
              {error.stack}
            </pre>
          </details>
        )}

        {/* Suggerimenti */}
        <div className={`text-sm space-y-2 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <p className="font-medium">Possibili soluzioni:</p>
          <ul className="text-left space-y-1 list-disc list-inside">
            <li>Verificare la connessione di rete</li>
            <li>Aggiornare la pagina</li>
            <li>Attendere qualche minuto e riprovare</li>
            <li>Contattare il supporto se il problema persiste</li>
          </ul>
        </div>

        {/* Pulsanti di azione */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Riprova</span>
            </button>
          )}
          
          {showHome && onHome && (
            <button
              onClick={onHome}
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'bg-gray-600 hover:bg-gray-700 text-white'
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
          )}
        </div>

        {/* Timestamp dell'errore */}
        <div className={`text-xs ${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Errore rilevato alle {new Date().toLocaleTimeString('it-IT')}
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
