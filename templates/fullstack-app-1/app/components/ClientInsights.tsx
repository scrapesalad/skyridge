'use client';

import { useState, useEffect, useCallback } from 'react';

interface ClientInsight {
  metric: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

interface ClientInsightsProps {
  clientData?: any[];
}

export default function ClientInsights({ clientData = [] }: ClientInsightsProps) {
  const [insights, setInsights] = useState<ClientInsight[]>([]);
  const [loading, setLoading] = useState(true);

  const calculateInsights = useCallback(() => {
    if (!clientData || clientData.length === 0) {
      setLoading(false);
      return;
    }

    const totalClients = clientData.length;
    const residentialClients = clientData.filter(c => c.tags?.includes('Residential')).length;
    const commercialClients = clientData.filter(c => c.tags?.includes('Commercial')).length;
    
    // Calculate lead source effectiveness
    const leadSources: Record<string, number> = {};
    clientData.forEach(client => {
      if (client.tags) {
        const sources = client.tags.split(',');
        sources.forEach((source: string) => {
          const cleanSource = source.trim();
          if (cleanSource && !cleanSource.includes('Due Upon Receipt')) {
            leadSources[cleanSource] = (leadSources[cleanSource] || 0) + 1;
          }
        });
      }
    });

    // Geographic analysis
    const clientsByCounty: Record<string, number> = {};
    clientData.forEach(client => {
      if (client.county) {
        clientsByCounty[client.county] = (clientsByCounty[client.county] || 0) + 1;
      }
    });

    // Recent activity (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentClients = clientData.filter(c => 
      new Date(c.createdOn) >= thirtyDaysAgo
    ).length;

    // Calculate insights
    const calculatedInsights: ClientInsight[] = [
      {
        metric: 'Total Client Base',
        value: totalClients,
        change: 0, // Would need historical data for actual change
        trend: 'up',
        description: 'Total number of clients in your database'
      },
      {
        metric: 'Residential vs Commercial',
        value: Math.round((residentialClients / totalClients) * 100),
        change: 0,
        trend: residentialClients > commercialClients ? 'up' : 'down',
        description: `Residential clients make up ${Math.round((residentialClients / totalClients) * 100)}% of your client base`
      },
      {
        metric: 'Top Lead Source',
        value: Math.max(...Object.values(leadSources)),
        change: 0,
        trend: 'up',
        description: `Your best performing lead source brings in ${Math.max(...Object.values(leadSources))} clients`
      },
      {
        metric: 'Geographic Concentration',
        value: Math.round((Math.max(...Object.values(clientsByCounty)) / totalClients) * 100),
        change: 0,
        trend: 'up',
        description: `Your top county represents ${Math.round((Math.max(...Object.values(clientsByCounty)) / totalClients) * 100)}% of clients`
      },
      {
        metric: 'Recent Growth',
        value: recentClients,
        change: 0,
        trend: recentClients > 0 ? 'up' : 'stable',
        description: `${recentClients} new clients in the last 30 days`
      },
      {
        metric: 'Client Retention',
        value: clientData.filter(c => c.onHold !== 'Yes').length,
        change: 0,
        trend: 'up',
        description: `${clientData.filter(c => c.onHold !== 'Yes').length} active clients (${Math.round((clientData.filter(c => c.onHold !== 'Yes').length / totalClients) * 100)}% retention)`
      }
    ];

    setInsights(calculatedInsights);
    setLoading(false);
  }, [clientData]);

  useEffect(() => {
    calculateInsights();
  }, [calculateInsights]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0d9488]"></div>
        <span className="ml-2">Calculating insights...</span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Client Insights</h2>
        <p className="text-gray-600">Key insights from your client database</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{insight.metric}</h3>
              <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                insight.trend === 'up' ? 'bg-teal-100 text-teal-800' :
                insight.trend === 'down' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {insight.trend === 'up' ? '↗' : insight.trend === 'down' ? '↘' : '→'}
              </div>
            </div>
            
            <div className="mb-3">
              <span className="text-3xl font-bold text-[#0d9488]">{insight.value}</span>
              {insight.change !== 0 && (
                <span className={`ml-2 text-sm font-medium ${
                  insight.change > 0 ? 'text-teal-600' : 'text-red-600'
                }`}>
                  {insight.change > 0 ? '+' : ''}{insight.change}%
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600">{insight.description}</p>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Recommended Actions</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="ml-3 text-sm text-trust-blue-dark">
              <strong>Focus on top-performing lead sources:</strong> Double down on your best converting channels
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="ml-3 text-sm text-trust-blue-dark">
              <strong>Geographic expansion:</strong> Consider expanding to underserved counties
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="ml-3 text-sm text-trust-blue-dark">
              <strong>Client retention:</strong> Implement follow-up campaigns for inactive clients
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="ml-3 text-sm text-trust-blue-dark">
              <strong>Referral program:</strong> Leverage your satisfied clients for referrals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
