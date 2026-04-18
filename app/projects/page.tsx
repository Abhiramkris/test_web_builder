import React from 'react';
import config from '../../data/config.json';
import NAVINDUSTRIAL from '../../components/nav-industrial';
import HEROFLOATINGSTATS from '../../components/hero-floating-stats';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      
      <section id="nav-industrial">
        <NAVINDUSTRIAL />
      </section>
      
      <section id="hero-floating-stats">
        <HEROFLOATINGSTATS />
      </section>
    </main>
  );
}