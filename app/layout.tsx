
import './globals.css';
import React from 'react';
export const metadata = { title: 'Testing client 1 | Premium Web' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Secure Context Shim (MUST BE FIRST) */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
            const mockSubtle = {
              digest: () => new Promise(resolve => resolve(new Uint8Array(32))),
              generateKey: () => new Promise(resolve => resolve({})),
              importKey: () => new Promise(resolve => resolve({})),
              sign: () => new Promise(resolve => resolve(new Uint8Array(32))),
              verify: () => new Promise(resolve => resolve(true)),
              encrypt: () => new Promise(resolve => resolve(new Uint8Array(32))),
              decrypt: () => new Promise(resolve => resolve(new Uint8Array(32)))
            };
            if (!window['crypto']) window['crypto'] = {};
            if (!window['crypto']['subtle']) {
              Object.defineProperty(window['crypto'], 'subtle', { value: mockSubtle, writable: true });
            }
            if (!window['crypto']['randomUUID']) {
              Object.defineProperty(window['crypto'], 'randomUUID', { 
                value: () => '00000000-0000-0000-0000-000000000000', 
                writable: true 
              });
            }
            console.log('Studio Infra: Shim v3 Active (Top-of-Head Execution)');
          }
        ` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;900&family=Syne:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-zinc-900 bg-white">
        {children}
      </body>
    </html>
  );
}
