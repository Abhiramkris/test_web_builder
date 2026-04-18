import React from 'react';
import config from '../data/config.json';
import NAVINDUSTRIAL from '../components/nav-industrial';
import HEROCINEMATICVIDEO from '../components/hero-cinematic-video';
import SERVICESCOREFEATURES from '../components/services-core-features';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      <section id="nav-industrial">
        <NAVINDUSTRIAL />
      </section>
      
      <section id="hero-cinematic-video">
        <HEROCINEMATICVIDEO />
      </section>
      
      <section id="services-core-features">
        <SERVICESCOREFEATURES />
      </section>
    </main>
  );
}