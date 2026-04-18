import React from 'react';
import config from '../data/config.json';
import NAVINDUSTRIAL from '../components/nav-industrial';
import HEROCINEMATICVIDEO from '../components/hero-cinematic-video';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      <section id="nav-industrial">
        <NAVINDUSTRIAL />
      </section>
      
      <section id="hero-cinematic-video">
        <HEROCINEMATICVIDEO />
      </section>
    </main>
  );
}