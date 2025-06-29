import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, Clock } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  popularSearches: string[];
  recentSearches?: string[];
  isVisible: boolean;
  onSuggestionClick: (suggestion: string) => void;
  onClose: () => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  popularSearches,
  recentSearches = [],
  isVisible,
  onSuggestionClick,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Suggestions Panel */}
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-white shadow-sharp-lg border border-gray-100 z-50 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Suggestions
                </h4>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      onClick={() => onSuggestionClick(suggestion)}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sharp hover:shadow-sharp-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center">
                        <Search className="w-4 h-4 mr-3 text-gray-400" />
                        <span className="capitalize">{suggestion}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h4>
                <div className="space-y-1">
                  {recentSearches.slice(0, 5).map((search, index) => (
                    <motion.button
                      key={search}
                      onClick={() => onSuggestionClick(search)}
                      className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sharp hover:shadow-sharp-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-gray-400" />
                        <span>{search}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Popular Searches
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {popularSearches.map((search, index) => (
                  <motion.button
                    key={search}
                    onClick={() => onSuggestionClick(search)}
                    className="text-left px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sharp hover:shadow-sharp-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <TrendingUp className="w-3 h-3 mr-2 text-gray-400" />
                      <span className="capitalize">{search}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* No suggestions message */}
            {suggestions.length === 0 && recentSearches.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">Start typing to see suggestions</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchSuggestions;