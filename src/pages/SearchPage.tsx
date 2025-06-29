import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, SortAsc, SortDesc, Grid, List, X } from 'lucide-react';
import SearchEngine from '../utils/searchEngine';
import SearchResults from '../components/ui/SearchResults';
import SearchSuggestions from '../components/ui/SearchSuggestions';
import type { SearchResult, SearchOptions } from '../utils/searchEngine';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchEngine] = useState(() => new SearchEngine());
  
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [sortBy, setSortBy] = useState<'relevance' | 'title' | 'type'>('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  // Filter states
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [fuzzyThreshold, setFuzzyThreshold] = useState(0.7);
  const [maxResults, setMaxResults] = useState(20);

  // Get suggestions and popular searches
  const suggestions = useMemo(() => {
    return query.length >= 2 ? searchEngine.getSuggestions(query) : [];
  }, [query, searchEngine]);

  const popularSearches = useMemo(() => {
    return searchEngine.getPopularSearches();
  }, [searchEngine]);

  // Perform search
  const performSearch = async (searchQuery: string, options?: Partial<SearchOptions>) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const searchOptions: SearchOptions = {
      fuzzyThreshold,
      maxResults,
      minKeywordLength: 2,
      includePartialMatches: true,
      operator: 'OR',
      ...options
    };

    let searchResults = searchEngine.search(searchQuery, searchOptions);

    // Apply filters
    if (selectedTypes.length > 0) {
      searchResults = searchResults.filter(result => selectedTypes.includes(result.type));
    }

    if (selectedCategories.length > 0) {
      searchResults = searchResults.filter(result => selectedCategories.includes(result.category));
    }

    // Apply sorting
    searchResults.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'type':
          comparison = a.type.localeCompare(b.type);
          break;
        case 'relevance':
        default:
          comparison = b.relevanceScore - a.relevanceScore;
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setResults(searchResults);
    setIsLoading(false);
  };

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setQuery(value);
    setShowSuggestions(value.length >= 2);
  };

  // Handle search submission
  const handleSearchSubmit = (searchQuery: string) => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;

    setQuery(trimmedQuery);
    setSearchParams({ q: trimmedQuery });
    setShowSuggestions(false);
    performSearch(trimmedQuery);
    
    // Save to recent searches (in real app, this would be localStorage)
    // localStorage.setItem('recentSearches', JSON.stringify([...recentSearches, trimmedQuery].slice(-10)));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    handleSearchSubmit(suggestion);
  };

  // Handle filter changes
  const handleTypeFilter = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
  };

  const handleCategoryFilter = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedCategories([]);
    setFuzzyThreshold(0.7);
    setMaxResults(20);
  };

  // Get unique types and categories from results
  const availableTypes = useMemo(() => {
    return Array.from(new Set(results.map(r => r.type)));
  }, [results]);

  const availableCategories = useMemo(() => {
    return Array.from(new Set(results.map(r => r.category)));
  }, [results]);

  // Effect to perform search on mount and query change
  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
      performSearch(queryParam);
    }
  }, [searchParams]);

  // Effect to re-search when filters change
  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [selectedTypes, selectedCategories, fuzzyThreshold, maxResults, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
          
          {/* Enhanced Search Bar */}
          <div className="relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit(query);
              }}
              className="flex items-center"
            >
              <div className="relative flex-1">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => setShowSuggestions(query.length >= 2)}
                  placeholder="Search for accounts, services, support..."
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent shadow-sharp text-lg"
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                
                {query && (
                  <motion.button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setResults([]);
                      setSearchParams({});
                    }}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
              
              <motion.button
                type="submit"
                className="ml-4 px-6 py-3 bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sharp hover:shadow-sharp-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Search
              </motion.button>
            </form>

            {/* Search Suggestions */}
            <SearchSuggestions
              suggestions={suggestions}
              popularSearches={popularSearches}
              isVisible={showSuggestions}
              onSuggestionClick={handleSuggestionClick}
              onClose={() => setShowSuggestions(false)}
            />
          </div>
        </motion.div>

        {/* Search Controls */}
        {(results.length > 0 || query) && (
          <motion.div
            className="mb-6 flex flex-wrap items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-4">
              {/* Filter Toggle */}
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center px-4 py-2 border transition-colors shadow-sharp ${
                  showFilters
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {(selectedTypes.length > 0 || selectedCategories.length > 0) && (
                  <span className="ml-2 px-2 py-1 bg-yellow-400 text-blue-900 text-xs font-bold">
                    {selectedTypes.length + selectedCategories.length}
                  </span>
                )}
              </motion.button>

              {/* Sort Controls */}
              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 bg-white text-gray-700 shadow-sharp focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="title">Sort by Title</option>
                  <option value="type">Sort by Type</option>
                </select>
                
                <motion.button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sharp"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-900 text-white' : 'bg-white text-gray-700'} border border-gray-300 shadow-sharp`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <List className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-900 text-white' : 'bg-white text-gray-700'} border border-gray-300 shadow-sharp`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            className="mb-6 bg-white p-6 shadow-sharp border border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Type Filters */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Content Type</h4>
                <div className="space-y-2">
                  {availableTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeFilter(type)}
                        className="mr-2"
                      />
                      <span className="capitalize text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filters */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {availableCategories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryFilter(category)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Search Options */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Search Options</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Fuzzy Matching: {Math.round(fuzzyThreshold * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="1"
                      step="0.1"
                      value={fuzzyThreshold}
                      onChange={(e) => setFuzzyThreshold(parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Max Results</label>
                    <select
                      value={maxResults}
                      onChange={(e) => setMaxResults(parseInt(e.target.value))}
                      className="w-full px-3 py-1 border border-gray-300 shadow-sharp"
                    >
                      <option value={10}>10 results</option>
                      <option value={20}>20 results</option>
                      <option value={50}>50 results</option>
                      <option value={100}>100 results</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <motion.button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors shadow-sharp"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Clear All Filters
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SearchResults
            results={results}
            query={query}
            isLoading={isLoading}
            onResultClick={(result) => {
              // Track result click for analytics
              console.log('Result clicked:', result);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;