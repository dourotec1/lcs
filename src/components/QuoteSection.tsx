import React from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <div className="flex-1 space-y-4 hidden sm:block">
      <Quote className="w-8 h-8 text-blue-400" />
      <p className="text-gray-300 text-lg leading-relaxed">
        Experience the future of digital currency exchange with LocalCoins. 
        Trade cryptocurrencies securely and efficiently with users from around the globe.
      </p>
    </div>
  );
}