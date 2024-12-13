import React from 'react';
import { Header } from './components/Header';
import { QuoteSection } from './components/QuoteSection';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto mt-8 sm:mt-16 px-4">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-12">
          <QuoteSection />
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default App;