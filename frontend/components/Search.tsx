"use client";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import debounce from "lodash/debounce";

interface SearchProps {
  onCitySelect: (cityName: string) => void;
}

interface SearchResult {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export default function Search({ onCitySelect }: SearchProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchCities = debounce(async (searchTerm: string) => {
    if (searchTerm.length < 3) {
      setResults([]);
      return;
    }

    try {
      setIsSearching(true);
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, 500);

  return (
    <div className="relative w-full">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search cities..."
          className="w-full pl-10 pr-4 py-2 bg-white rounded-xl"
          onChange={(e) => searchCities(e.target.value)}
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>

      {results.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={`${result.name}-${result.country}-${index}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onCitySelect(result.name);
                setResults([]);
              }}
            >
              <span className="font-medium">{result.name}</span>
              <span className="text-gray-500 ml-2">{result.country}</span>
            </div>
          ))}
        </div>
      )}

      {isSearching && (
        <div className="absolute w-full mt-1 bg-white rounded-xl shadow-lg z-10 p-4 text-center text-gray-500">
          Searching...
        </div>
      )}
    </div>
  );
}