import React from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <div className="flex-1 space-y-4 hidden sm:block">
      <Quote className="w-8 h-8 text-blue-400" />
      <p className="text-gray-300 text-lg leading-relaxed">
       I see Bitcoin as ultimately becoming a reserve currency for banks, playing much the same role as gold did in the early days of banking. 
        Banks could issue digital cash with greater anonymity and lighter weight, more efficient transactions.
      </p>
    </div>
  );
}
