import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Lazy loading below-the-fold components to improve Lighthouse Performance score
const Services = lazy(() => import('./components/Services/Services'));
const Results = lazy(() => import('./components/Results/Results'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Results />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
