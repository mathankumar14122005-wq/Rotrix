import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { BusTracker } from './components/BusTracker';
import { SeatSelection } from './components/SeatSelection';
import { UDIDVerification } from './components/UDIDVerification';
import { ChatBot } from './components/ChatBot';
import { BusResults } from './components/BusResults';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import routrixLogo from 'figma:asset/4b634f1bb0b86e9e11de33f02bad2db6a70ed60d.png';

export default function App() {
  const [language, setLanguage] = useState('english');
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [selectedBus, setSelectedBus] = useState<any | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [showSeatSelection, setShowSeatSelection] = useState(false);

  const translations = {
    english: {
      title: 'Punjab Bus Tracker',
      searchTab: 'Search Buses',
      trackTab: 'Track Bus',
      bookingTab: 'Book Tickets'
    },
    punjabi: {
      title: 'ਪੰਜਾਬ ਬੱਸ ਟਰੈਕਰ',
      searchTab: 'ਬੱਸ ਖੋਜੋ',
      trackTab: 'ਬੱਸ ਟਰੈਕ ਕਰੋ',
      bookingTab: 'ਟਿਕਟ ਬੁੱਕ ਕਰੋ'
    }
  };

  const t = translations[language];

  const handleSearch = (searchData: any) => {
    // Mock search results
    const mockResults = [
      {
        id: 1,
        operator: 'Punjab Roadways',
        route: `${searchData.from} → ${searchData.to}`,
        departure: '08:30 AM',
        arrival: '12:45 PM',
        duration: '4h 15m',
        fare: 250,
        seatsAvailable: 12,
        busType: 'AC Sleeper'
      },
      {
        id: 2,
        operator: 'Punjab State Transport',
        route: `${searchData.from} → ${searchData.to}`,
        departure: '10:00 AM',
        arrival: '02:30 PM',
        duration: '4h 30m',
        fare: 180,
        seatsAvailable: 8,
        busType: 'Non-AC'
      }
    ];
    setSearchResults(mockResults);
  };

  const handleBusSelect = (bus: any) => {
    setSelectedBus(bus);
    if (isVerified) {
      setShowSeatSelection(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, var(--punjab-saffron) 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, var(--punjab-green) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <Header language={language} setLanguage={setLanguage} translations={translations} />
      
      <main className="relative container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-9xl">🚌</div>
          </div>
          <div className="relative z-10">
            {/* Routrix Branding */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-full">
                <img 
                  src={routrixLogo} 
                  alt="Routrix Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="text-left">
                  <div className="text-2xl font-bold bg-gradient-to-r from-punjab-saffron to-punjab-orange bg-clip-text text-transparent">
                    Routrix
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'english' ? 'Powered by AI' : 'AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ'}
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="mb-4 bg-gradient-to-r from-punjab-saffron to-punjab-orange bg-clip-text text-transparent text-4xl md:text-5xl">
              {t.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {language === 'english' 
                ? '🌟 Track buses across Punjab\'s beautiful Tier 2 cities and book tickets with secure UDID verification 🎫'
                : '🌟 ਪੰਜਾਬ ਦੇ ਸੁੰਦਰ ਟਿਅਰ 2 ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਬੱਸਾਂ ਨੂੰ ਟਰੈਕ ਕਰੋ ਅਤੇ ਸੁਰੱਖਿਤ UDID ਵੈਰੀਫਿਕੇਸ਼ਨ ਨਾਲ ਟਿਕਟ ਬੁੱਕ ਕਰੋ 🎫'
              }
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl text-punjab-saffron">🚌</div>
                <div className="text-xl text-punjab-saffron">500+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'english' ? 'Daily Buses' : 'ਰੋਜ਼ਾਨਾ ਬੱਸਾਂ'}
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl text-punjab-green">🏙️</div>
                <div className="text-xl text-punjab-green">15+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'english' ? 'Cities Connected' : 'ਜੁੜੇ ਸ਼ਹਿਰ'}
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl text-punjab-orange">👥</div>
                <div className="text-xl text-punjab-orange">10k+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'english' ? 'Happy Travelers' : 'ਖੁਸ਼ ਯਾਤਰੀ'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1 border-punjab-saffron/20">
            <TabsTrigger 
              value="search" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-punjab-saffron data-[state=active]:to-punjab-orange data-[state=active]:text-white transition-all duration-300"
            >
              🔍 {t.searchTab}
            </TabsTrigger>
            <TabsTrigger 
              value="track"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-punjab-green data-[state=active]:to-teal-500 data-[state=active]:text-white transition-all duration-300"
            >
              📍 {t.trackTab}
            </TabsTrigger>
            <TabsTrigger 
              value="booking"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
            >
              🎫 {t.bookingTab}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-8 mt-8">
            <SearchForm onSearch={handleSearch} language={language} />
            {searchResults && (
              <BusResults 
                results={searchResults} 
                onBusSelect={handleBusSelect}
                language={language}
              />
            )}
          </TabsContent>

          <TabsContent value="track" className="space-y-6 mt-8">
            <BusTracker language={language} />
          </TabsContent>

          <TabsContent value="booking" className="space-y-6 mt-8">
            {!isVerified ? (
              <UDIDVerification 
                onVerified={() => setIsVerified(true)}
                language={language}
              />
            ) : showSeatSelection ? (
              <SeatSelection 
                bus={selectedBus}
                language={language}
                onBookingComplete={() => setShowSeatSelection(false)}
              />
            ) : (
              <div className="text-center py-16">
                <div className="glass-card p-8 rounded-xl max-w-md mx-auto">
                  <div className="text-6xl mb-4">🎫</div>
                  <h3 className="text-punjab-saffron mb-3">
                    {language === 'english' ? 'Ready to Book!' : 'ਬੁੱਕਿੰਗ ਲਈ ਤਿਆਰ!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'english' 
                      ? 'Search and select a bus from the Search tab to view seat availability and book your tickets'
                      : 'ਸੀਟ ਦੀ ਉਪਲਬਧਤਾ ਦੇਖਣ ਅਤੇ ਆਪਣੇ ਟਿਕਟ ਬੁੱਕ ਕਰਨ ਲਈ ਖੋਜ ਟੈਬ ਤੋਂ ਇੱਕ ਬੱਸ ਖੋਜੋ ਅਤੇ ਚੁਣੋ'
                    }
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <ChatBot language={language} />
    </div>
  );
}