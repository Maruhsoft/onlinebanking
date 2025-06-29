import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink, Tag, FileText, Navigation, Package, Briefcase } from 'lucide-react';
import type { SearchResult } from '../../utils/searchEngine';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading?: boolean;
  onResultClick?: (result: SearchResult) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  isLoading = false,
  onResultClick
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="w-4 h-4" />;
      case 'product':
        return <Package className="w-4 h-4" />;
      case 'service':
        return <Briefcase className="w-4 h-4" />;
      case 'navigation':
        return <Navigation className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'bg-blue-100 text-blue-800';
      case 'product':
        return 'bg-green-100 text-green-800';
      case 'service':
        return 'bg-purple-100 text-purple-800';
      case 'navigation':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-sharp animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 w-3/4"></div>
                <div className="h-3 bg-gray-200 w-1/2"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
                <div className="h-3 bg-gray-200 w-2/3"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-16 h-16 bg-gray-100 mx-auto mb-4 flex items-center justify-center shadow-sharp">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
        <p className="text-gray-600 mb-6">
          We couldn't find anything matching "{query}". Try different keywords or check your spelling.
        </p>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Suggestions:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Try broader search terms</li>
            <li>• Check for typos in your search</li>
            <li>• Use different keywords</li>
            <li>• Browse our main categories</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-600">
          Found <span className="font-semibold text-gray-900">{results.length}</span> results for "
          <span className="font-semibold text-blue-900">{query}</span>"
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>Search completed</span>
        </div>
      </motion.div>

      {results.map((result, index) => (
        <motion.div
          key={result.id}
          className="bg-white p-6 shadow-sharp hover:shadow-sharp-lg transition-all duration-200 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-start space-x-4">
            <motion.div
              className={`p-2 ${getTypeColor(result.type)} shadow-sharp`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {getTypeIcon(result.type)}
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <Link
                    to={result.url}
                    onClick={() => handleResultClick(result)}
                    className="block group-hover:text-blue-700 transition-colors"
                  >
                    <h3
                      className="text-lg font-semibold text-blue-900 mb-1 group-hover:underline"
                      dangerouslySetInnerHTML={{ __html: result.highlightedTitle }}
                    />
                  </Link>
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {result.category}
                    </span>
                    <span className="capitalize">{result.type}</span>
                    {result.url.startsWith('http') && (
                      <span className="flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        External
                      </span>
                    )}
                  </div>
                </div>
                
                <motion.div
                  className="text-xs bg-gray-100 px-2 py-1 text-gray-600 shadow-sharp"
                  whileHover={{ scale: 1.05 }}
                >
                  Score: {result.relevanceScore}
                </motion.div>
              </div>
              
              <p
                className="text-gray-700 mb-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: result.highlightedSnippet }}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {result.matchedKeywords.slice(0, 3).map((keyword, keywordIndex) => (
                    <motion.span
                      key={keywordIndex}
                      className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 text-blue-800 shadow-sharp"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.05) + (keywordIndex * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {keyword}
                    </motion.span>
                  ))}
                  {result.matchedKeywords.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{result.matchedKeywords.length - 3} more
                    </span>
                  )}
                </div>
                
                <Link
                  to={result.url}
                  onClick={() => handleResultClick(result)}
                  className="text-sm text-blue-900 hover:text-blue-700 font-medium flex items-center group"
                >
                  View
                  <motion.div
                    className="ml-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SearchResults;