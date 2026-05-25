import React, { useState } from 'react';

/**
 * Simple client‑side speed‑test.
 * It fetches a known static asset (a small JS file from CDN) and measures the
 * download time using the high‑resolution performance timer. The result is
 * displayed as an approximate download speed in KB/s.
 *
 * This is lightweight and works without any external API keys – perfect for a
 * free‑to‑use web‑tool that can be hosted on Cloudflare Pages.
 */
export const SpeedTest: React.FC = () => {
  const [speed, setSpeed] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const runTest = async () => {
    try {
      setLoading(true);
      setSpeed('');
      const url = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js'; // ~120 KB static file
      const start = performance.now();
      // Fetch the resource – we only need the response body size, not the content.
      const response = await fetch(url, { cache: 'no-store' });
      // Force the download to complete by reading the body.
      await response.blob();
      const end = performance.now();
      const durationSec = (end - start) / 1000; // seconds
      // Size in kilobytes (approx 120 KB for the file above)
      const sizeKB = 120;
      const kbps = (sizeKB / durationSec).toFixed(2);
      setSpeed(`${kbps} KB/s`);
    } catch (e) {
      console.error('Speed test failed', e);
      setSpeed('Error – try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="speedtest">
      <h2>Internet Speed Test</h2>
      <button onClick={runTest} disabled={loading} className="btn-primary">
        {loading ? 'Testing…' : 'Run Test'}
      </button>
      {speed && <p>Approximate download speed: {speed}</p>}
    </section>
  );
};
