import React from 'react';
import config from '../../data/config.json';
import NAVINDUSTRIAL from '../../components/nav-industrial';
import HEROFULLIMAGESTATS from '../../components/hero-full-image-stats';
import SERVICESCOREFEATURES from '../../components/services-core-features';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      
      <section id="nav-industrial">
        <NAVINDUSTRIAL />
      </section>
      
      <section id="hero-full-image-stats">
        <HEROFULLIMAGESTATS />
      </section>
      
      <section id="services-core-features">
        <SERVICESCOREFEATURES />
      </section>
    </main>
  );
}