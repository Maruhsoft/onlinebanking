interface SearchableContent {
  id: string;
  title: string;
  content: string;
  url: string;
  type: 'page' | 'section' | 'navigation' | 'product' | 'service';
  category: string;
  keywords: string[];
  meta?: {
    description?: string;
    lastUpdated?: string;
  };
}

interface SearchResult {
  id: string;
  title: string;
  url: string;
  type: string;
  category: string;
  snippet: string;
  relevanceScore: number;
  highlightedTitle: string;
  highlightedSnippet: string;
  matchedKeywords: string[];
}

interface SearchOptions {
  fuzzyThreshold?: number;
  maxResults?: number;
  minKeywordLength?: number;
  includePartialMatches?: boolean;
  operator?: 'AND' | 'OR';
}

class SearchEngine {
  private searchIndex: SearchableContent[] = [];
  private stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'
  ]);

  constructor() {
    this.buildSearchIndex();
  }

  private buildSearchIndex(): void {
    // Banking products and services
    this.searchIndex = [
      // Personal Banking
      {
        id: 'personal-banking',
        title: 'Personal Banking',
        content: 'Personal banking services including savings accounts, current accounts, student accounts, debit cards, credit cards, personal loans, home loans, auto loans, mobile banking, internet banking',
        url: '/personal-banking',
        type: 'page',
        category: 'Banking Services',
        keywords: ['personal', 'banking', 'accounts', 'savings', 'current', 'student', 'cards', 'loans', 'mobile', 'internet'],
        meta: {
          description: 'Comprehensive personal banking solutions for all your financial needs',
          lastUpdated: '2024-01-15'
        }
      },
      {
        id: 'savings-account',
        title: 'FirstSave Account',
        content: 'Savings account with competitive interest rates, no minimum balance, mobile banking access, ATM access, online banking, SMS alerts. Earn 3.5% interest rate with no monthly fees.',
        url: '/personal-banking/accounts',
        type: 'product',
        category: 'Accounts',
        keywords: ['savings', 'account', 'interest', 'mobile', 'banking', 'ATM', 'online', 'SMS', 'alerts', 'firstsave'],
        meta: {
          description: 'High-yield savings account with competitive rates and no fees'
        }
      },
      {
        id: 'current-account',
        title: 'FirstCurrent Account',
        content: 'Current account with checkbook, overdraft facility, business banking tools, priority support. 0.5% interest rate with comprehensive business features.',
        url: '/personal-banking/accounts',
        type: 'product',
        category: 'Accounts',
        keywords: ['current', 'account', 'checkbook', 'overdraft', 'business', 'tools', 'priority', 'support', 'firstcurrent'],
        meta: {
          description: 'Feature-rich current account for everyday banking needs'
        }
      },
      {
        id: 'student-account',
        title: 'FirstStudent Account',
        content: 'Student account with no monthly fees, student discounts, educational resources. 2.0% interest rate designed specifically for students.',
        url: '/personal-banking/accounts',
        type: 'product',
        category: 'Accounts',
        keywords: ['student', 'account', 'no', 'fees', 'discounts', 'educational', 'resources', 'firststudent'],
        meta: {
          description: 'Special banking account designed for students with exclusive benefits'
        }
      },
      {
        id: 'credit-cards',
        title: 'Credit Cards',
        content: 'FirstCredit Classic and Premium credit cards with 0% intro APR, rewards program, fraud protection, travel insurance, airport lounge access, concierge service',
        url: '/personal-banking/cards',
        type: 'product',
        category: 'Cards',
        keywords: ['credit', 'cards', 'rewards', 'travel', 'insurance', 'lounge', 'access', 'concierge', 'fraud', 'protection', 'firstcredit'],
        meta: {
          description: 'Premium credit cards with exclusive benefits and rewards'
        }
      },
      {
        id: 'debit-cards',
        title: 'Debit Cards',
        content: 'FirstCard Classic and Gold debit cards with contactless payment, global acceptance, online shopping, higher limits, travel insurance, purchase protection',
        url: '/personal-banking/cards',
        type: 'product',
        category: 'Cards',
        keywords: ['debit', 'cards', 'contactless', 'global', 'acceptance', 'online', 'shopping', 'travel', 'insurance', 'firstcard'],
        meta: {
          description: 'Secure debit cards for convenient everyday transactions'
        }
      },
      {
        id: 'personal-loans',
        title: 'Personal Loans',
        content: 'Personal loans with quick approval, flexible repayment, no collateral required. Starting from 12.5% interest rate up to $50,000 for up to 5 years.',
        url: '/personal-banking/loans',
        type: 'product',
        category: 'Loans',
        keywords: ['personal', 'loans', 'quick', 'approval', 'flexible', 'repayment', 'no', 'collateral', 'interest', 'rate'],
        meta: {
          description: 'Flexible personal loans with competitive rates and quick approval'
        }
      },
      {
        id: 'home-loans',
        title: 'Home Loans',
        content: 'Home loans with competitive rates, property insurance, tax benefits. Starting from 8.5% interest rate up to $500,000 for up to 30 years.',
        url: '/personal-banking/loans',
        type: 'product',
        category: 'Loans',
        keywords: ['home', 'loans', 'mortgage', 'property', 'insurance', 'tax', 'benefits', 'competitive', 'rates'],
        meta: {
          description: 'Affordable home loans to help you buy your dream home'
        }
      },
      {
        id: 'auto-loans',
        title: 'Auto Loans',
        content: 'Auto loans with quick processing, flexible tenure, attractive interest rates. Starting from 10.5% for new and used cars up to $100,000 for up to 7 years.',
        url: '/personal-banking/loans',
        type: 'product',
        category: 'Loans',
        keywords: ['auto', 'loans', 'car', 'vehicle', 'quick', 'processing', 'flexible', 'tenure', 'new', 'used'],
        meta: {
          description: 'Convenient auto loans for new and used vehicles'
        }
      },

      // Business Banking
      {
        id: 'business-banking',
        title: 'Business Banking',
        content: 'Business banking solutions for SME and corporate clients including business accounts, trade finance, business loans, cash management, POS terminals',
        url: '/business-banking',
        type: 'page',
        category: 'Business Services',
        keywords: ['business', 'banking', 'SME', 'corporate', 'trade', 'finance', 'loans', 'cash', 'management', 'POS'],
        meta: {
          description: 'Comprehensive business banking solutions for companies of all sizes'
        }
      },
      {
        id: 'sme-banking',
        title: 'SME Banking',
        content: 'Small and Medium Enterprise banking with business advisory, POS terminals, trade finance, dedicated relationship manager',
        url: '/business-banking/sme',
        type: 'service',
        category: 'Business Services',
        keywords: ['SME', 'small', 'medium', 'enterprise', 'advisory', 'POS', 'terminals', 'trade', 'finance', 'relationship'],
        meta: {
          description: 'Specialized banking services for small and medium enterprises'
        }
      },
      {
        id: 'corporate-banking',
        title: 'Corporate Banking',
        content: 'Corporate banking with dedicated relationship manager, treasury services, international banking, cash management solutions',
        url: '/business-banking/corporate',
        type: 'service',
        category: 'Business Services',
        keywords: ['corporate', 'banking', 'treasury', 'services', 'international', 'cash', 'management', 'dedicated', 'relationship'],
        meta: {
          description: 'Premium corporate banking services for large enterprises'
        }
      },

      // Digital Banking
      {
        id: 'digital-banking',
        title: 'Digital Banking',
        content: 'Digital banking services including mobile banking app, internet banking, API banking, digital payments, online transactions',
        url: '/digital-banking',
        type: 'page',
        category: 'Digital Services',
        keywords: ['digital', 'banking', 'mobile', 'app', 'internet', 'API', 'payments', 'online', 'transactions'],
        meta: {
          description: 'Modern digital banking solutions for the connected world'
        }
      },
      {
        id: 'mobile-banking',
        title: 'Mobile Banking App',
        content: 'Mobile banking app with biometric login, mobile check deposit, real-time alerts, card controls, location-based services',
        url: '/digital-banking/mobile',
        type: 'service',
        category: 'Digital Services',
        keywords: ['mobile', 'banking', 'app', 'biometric', 'login', 'check', 'deposit', 'alerts', 'card', 'controls'],
        meta: {
          description: 'Full-featured mobile banking app for banking on the go'
        }
      },
      {
        id: 'internet-banking',
        title: 'Internet Banking',
        content: 'Secure online banking platform with account management, transfers, bill payments, loan applications, investment tracking',
        url: '/digital-banking/internet',
        type: 'service',
        category: 'Digital Services',
        keywords: ['internet', 'banking', 'online', 'secure', 'transfers', 'bill', 'payments', 'loan', 'applications'],
        meta: {
          description: 'Comprehensive online banking platform with advanced features'
        }
      },

      // Investment & Wealth
      {
        id: 'investment-wealth',
        title: 'Investment & Wealth Management',
        content: 'Investment and wealth management services including fixed deposits, treasury bills, investment planning, wealth advisory, portfolio management',
        url: '/investment-wealth',
        type: 'page',
        category: 'Investment Services',
        keywords: ['investment', 'wealth', 'management', 'fixed', 'deposits', 'treasury', 'bills', 'planning', 'advisory', 'portfolio'],
        meta: {
          description: 'Professional investment and wealth management services'
        }
      },
      {
        id: 'fixed-deposits',
        title: 'Fixed Deposits',
        content: 'Fixed deposits with competitive interest rates, flexible terms from 30 days to 180 days, secure returns, government backing',
        url: '/investment-wealth/fixed-deposits',
        type: 'product',
        category: 'Investment Products',
        keywords: ['fixed', 'deposits', 'competitive', 'interest', 'rates', 'flexible', 'terms', 'secure', 'returns'],
        meta: {
          description: 'Secure fixed deposit investments with attractive returns'
        }
      },
      {
        id: 'treasury-bills',
        title: 'Treasury Bills',
        content: 'Government treasury bills with competitive yields, 91-day, 182-day, and 364-day terms, government-backed securities',
        url: '/investment-wealth/treasury-bills',
        type: 'product',
        category: 'Investment Products',
        keywords: ['treasury', 'bills', 'government', 'securities', 'yields', 'competitive', 'backed', 'safe'],
        meta: {
          description: 'Government-backed treasury bills for secure investments'
        }
      },

      // Support & Help
      {
        id: 'customer-support',
        title: 'Customer Support',
        content: '24/7 customer support with phone support, live chat, email support, branch network, security center, FAQs',
        url: '/support',
        type: 'page',
        category: 'Support Services',
        keywords: ['customer', 'support', '24/7', 'phone', 'live', 'chat', 'email', 'branch', 'network', 'security', 'FAQs'],
        meta: {
          description: 'Comprehensive customer support available 24/7'
        }
      },
      {
        id: 'faqs',
        title: 'Frequently Asked Questions',
        content: 'Common questions about account opening, password reset, banking hours, fees, interest rates, loan applications, card services',
        url: '/support/faqs',
        type: 'page',
        category: 'Help & Information',
        keywords: ['FAQ', 'questions', 'answers', 'account', 'opening', 'password', 'reset', 'banking', 'hours', 'fees'],
        meta: {
          description: 'Find quick answers to frequently asked questions'
        }
      },
      {
        id: 'security-center',
        title: 'Security Center',
        content: 'Banking security information, fraud protection, two-factor authentication, secure login, account protection, security tips',
        url: '/support/security',
        type: 'page',
        category: 'Security & Safety',
        keywords: ['security', 'center', 'fraud', 'protection', 'two-factor', 'authentication', 'secure', 'login', 'account'],
        meta: {
          description: 'Comprehensive security information and protection measures'
        }
      },

      // About & Company
      {
        id: 'about-firstbank',
        title: 'About FirstBank',
        content: 'FirstBank International Limited established in 1894, leading banking services, 130 years of excellence, London headquarters, global presence',
        url: '/about',
        type: 'page',
        category: 'Company Information',
        keywords: ['about', 'firstbank', 'international', 'limited', 'established', '1894', 'leading', 'banking', 'excellence', 'London'],
        meta: {
          description: 'Learn about FirstBank\'s history and commitment to excellence'
        }
      },
      {
        id: 'contact-us',
        title: 'Contact Us',
        content: 'Contact FirstBank through phone, email, live chat, branch locations, customer service, support team, business hours',
        url: '/contact',
        type: 'page',
        category: 'Contact Information',
        keywords: ['contact', 'phone', 'email', 'live', 'chat', 'branch', 'locations', 'customer', 'service', 'support'],
        meta: {
          description: 'Get in touch with FirstBank through multiple contact channels'
        }
      },

      // Navigation and Features
      {
        id: 'online-banking-login',
        title: 'Online Banking Login',
        content: 'Secure online banking login with two-factor authentication, account access, transaction history, bill payments',
        url: 'https://ebanking.example.com',
        type: 'navigation',
        category: 'Digital Access',
        keywords: ['online', 'banking', 'login', 'secure', 'two-factor', 'authentication', 'account', 'access'],
        meta: {
          description: 'Secure access to your online banking account'
        }
      },
      {
        id: 'open-account',
        title: 'Open New Account',
        content: 'Open new bank account online, account application, personal information, account types, savings, current, student accounts',
        url: 'https://ebanking.example.com/open-account',
        type: 'navigation',
        category: 'Account Services',
        keywords: ['open', 'account', 'new', 'application', 'personal', 'information', 'savings', 'current', 'student'],
        meta: {
          description: 'Start your banking journey by opening a new account'
        }
      }
    ];
  }

  // Levenshtein distance for fuzzy matching
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }

    return matrix[str2.length][str1.length];
  }

  // Fuzzy string matching
  private fuzzyMatch(query: string, target: string, threshold: number = 0.7): boolean {
    if (query.length === 0 || target.length === 0) return false;
    
    const distance = this.levenshteinDistance(query.toLowerCase(), target.toLowerCase());
    const maxLength = Math.max(query.length, target.length);
    const similarity = 1 - (distance / maxLength);
    
    return similarity >= threshold;
  }

  // Normalize and tokenize search query
  private tokenizeQuery(query: string): string[] {
    return query
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0 && !this.stopWords.has(token));
  }

  // Calculate relevance score
  private calculateRelevanceScore(
    content: SearchableContent,
    queryTokens: string[],
    options: SearchOptions
  ): number {
    let score = 0;
    const titleTokens = this.tokenizeQuery(content.title);
    const contentTokens = this.tokenizeQuery(content.content);
    const keywordTokens = content.keywords.map(k => k.toLowerCase());

    queryTokens.forEach(queryToken => {
      // Exact matches in title (highest weight)
      if (titleTokens.some(token => token === queryToken)) {
        score += 10;
      }
      
      // Exact matches in keywords (high weight)
      if (keywordTokens.some(keyword => keyword === queryToken)) {
        score += 8;
      }
      
      // Exact matches in content (medium weight)
      if (contentTokens.some(token => token === queryToken)) {
        score += 5;
      }
      
      // Partial matches in title (medium weight)
      if (titleTokens.some(token => token.includes(queryToken) || queryToken.includes(token))) {
        score += 6;
      }
      
      // Partial matches in keywords (medium weight)
      if (keywordTokens.some(keyword => keyword.includes(queryToken) || queryToken.includes(keyword))) {
        score += 4;
      }
      
      // Partial matches in content (low weight)
      if (contentTokens.some(token => token.includes(queryToken) || queryToken.includes(token))) {
        score += 2;
      }
      
      // Fuzzy matches (lowest weight)
      if (options.fuzzyThreshold && options.fuzzyThreshold > 0) {
        if (titleTokens.some(token => this.fuzzyMatch(queryToken, token, options.fuzzyThreshold))) {
          score += 3;
        }
        if (keywordTokens.some(keyword => this.fuzzyMatch(queryToken, keyword, options.fuzzyThreshold))) {
          score += 2;
        }
        if (contentTokens.some(token => this.fuzzyMatch(queryToken, token, options.fuzzyThreshold))) {
          score += 1;
        }
      }
    });

    // Boost score based on content type
    switch (content.type) {
      case 'page':
        score *= 1.5;
        break;
      case 'product':
        score *= 1.3;
        break;
      case 'service':
        score *= 1.2;
        break;
      case 'navigation':
        score *= 1.1;
        break;
    }

    return score;
  }

  // Highlight matched keywords in text
  private highlightMatches(text: string, queryTokens: string[]): string {
    let highlightedText = text;
    
    queryTokens.forEach(token => {
      const regex = new RegExp(`(${token})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
    });
    
    return highlightedText;
  }

  // Generate content snippet with context
  private generateSnippet(content: string, queryTokens: string[], maxLength: number = 150): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    // Find sentence with most query matches
    let bestSentence = sentences[0] || '';
    let maxMatches = 0;
    
    sentences.forEach(sentence => {
      const matches = queryTokens.reduce((count, token) => {
        return count + (sentence.toLowerCase().includes(token.toLowerCase()) ? 1 : 0);
      }, 0);
      
      if (matches > maxMatches) {
        maxMatches = matches;
        bestSentence = sentence;
      }
    });
    
    // Truncate if too long
    if (bestSentence.length > maxLength) {
      const words = bestSentence.split(' ');
      let snippet = '';
      
      for (const word of words) {
        if ((snippet + word).length > maxLength - 3) break;
        snippet += (snippet ? ' ' : '') + word;
      }
      
      return snippet + '...';
    }
    
    return bestSentence.trim();
  }

  // Main search function
  public search(query: string, options: SearchOptions = {}): SearchResult[] {
    const defaultOptions: SearchOptions = {
      fuzzyThreshold: 0.7,
      maxResults: 20,
      minKeywordLength: 2,
      includePartialMatches: true,
      operator: 'OR'
    };
    
    const searchOptions = { ...defaultOptions, ...options };
    
    // Handle empty or invalid queries
    if (!query || query.trim().length === 0) {
      return [];
    }
    
    const queryTokens = this.tokenizeQuery(query).filter(
      token => token.length >= searchOptions.minKeywordLength!
    );
    
    if (queryTokens.length === 0) {
      return [];
    }
    
    const results: SearchResult[] = [];
    
    this.searchIndex.forEach(content => {
      const relevanceScore = this.calculateRelevanceScore(content, queryTokens, searchOptions);
      
      if (relevanceScore > 0) {
        const snippet = this.generateSnippet(content.content, queryTokens);
        const matchedKeywords = queryTokens.filter(token =>
          content.keywords.some(keyword => 
            keyword.toLowerCase().includes(token.toLowerCase()) ||
            token.toLowerCase().includes(keyword.toLowerCase())
          )
        );
        
        results.push({
          id: content.id,
          title: content.title,
          url: content.url,
          type: content.type,
          category: content.category,
          snippet,
          relevanceScore,
          highlightedTitle: this.highlightMatches(content.title, queryTokens),
          highlightedSnippet: this.highlightMatches(snippet, queryTokens),
          matchedKeywords
        });
      }
    });
    
    // Sort by relevance score (descending)
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    // Apply result limit
    return results.slice(0, searchOptions.maxResults);
  }

  // Get search suggestions
  public getSuggestions(query: string, limit: number = 5): string[] {
    if (!query || query.trim().length < 2) return [];
    
    const suggestions = new Set<string>();
    const queryLower = query.toLowerCase();
    
    this.searchIndex.forEach(content => {
      // Add matching keywords
      content.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(queryLower)) {
          suggestions.add(keyword);
        }
      });
      
      // Add matching title words
      const titleWords = content.title.toLowerCase().split(' ');
      titleWords.forEach(word => {
        if (word.includes(queryLower) && word.length > 2) {
          suggestions.add(word);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, limit);
  }

  // Get popular searches
  public getPopularSearches(): string[] {
    return [
      'savings account',
      'credit card',
      'personal loan',
      'mobile banking',
      'online banking',
      'home loan',
      'business account',
      'investment',
      'fixed deposit',
      'customer support'
    ];
  }
}

export default SearchEngine;
export type { SearchResult, SearchOptions };