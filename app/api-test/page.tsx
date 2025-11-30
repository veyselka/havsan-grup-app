'use client';

import { useEffect, useState } from 'react';
import { getEntries } from '@/lib/strapi';

export default function APITestPage() {
  const [robotikData, setRobotikData] = useState<any>(null);
  const [aiData, setAIData] = useState<any>(null);
  const [enerjiData, setEnerjiData] = useState<any>(null);
  const [referencesData, setReferencesData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        const [robotik, ai, enerji, references] = await Promise.all([
          getEntries('robotiks', {}),
          getEntries('ai-services', {}),
          getEntries('enerji-solutions', {}),
          getEntries('references', {}),
        ]);

        setRobotikData(robotik);
        setAIData(ai);
        setEnerjiData(enerji);
        setReferencesData(references);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading Strapi Data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          <h1 className="text-2xl font-bold mb-4">Error:</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Strapi API Test</h1>

        {/* Robotik Data */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-google-blue">Robotik Content</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(robotikData, null, 2)}
          </pre>
        </section>

        {/* AI Services */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-green-600">AI Services</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(aiData, null, 2)}
          </pre>
        </section>

        {/* Enerji Solutions */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Enerji Solutions</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(enerjiData, null, 2)}
          </pre>
        </section>

        {/* References */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">References</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(referencesData, null, 2)}
          </pre>
        </section>

        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <strong>Success!</strong> Strapi CMS is connected and working properly.
        </div>
      </div>
    </main>
  );
}
