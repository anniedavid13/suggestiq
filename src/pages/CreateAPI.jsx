import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';

const CreateAPI = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('hybrid');

    return (
        <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
            <button
                onClick={() => navigate('/suggestiq/setup-apis')}
                style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'none', border: 'none', color: '#64748b',
                    fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                    padding: 0, marginBottom: '2rem', transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#1e293b'}
                onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
                <ArrowLeft size={16} /> Back to Setup APIs
            </button>

            <header style={{ marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600, color: '#1e293b' }}>Build Recommendation API</h1>
                <p className="text-muted" style={{ fontSize: '1rem', color: '#64748b' }}>Configure your algorithms and create logic endpoints programmatically.</p>
            </header>

            <div style={{ backgroundColor: '#1e293b', padding: '2.5rem', borderRadius: '12px', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#8b5cf6', padding: '0.5rem', borderRadius: '8px' }}>
                        <Code size={24} color="white" />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'white' }}>Endpoint Configuration API</h2>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                    Instead of manual setup, you can dynamically create recommendation endpoints by sending a POST request containing your algorithm weights, limits, and configuration data.
                </p>

                <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
                    {['hybrid', 'cf', 'trending'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: activeTab === tab ? '#c084fc' : '#94a3b8',
                                borderBottom: activeTab === tab ? '2px solid #c084fc' : '2px solid transparent',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            {tab === 'hybrid' ? 'Hybrid Model' : tab === 'cf' ? 'Collaborative Filtering' : 'Trending Algorithms'}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '2.5rem', alignItems: 'start' }}>
                    <div>
                        <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Admin Endpoint</h3>
                        <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
                            <span style={{ color: '#c084fc', fontWeight: 700, marginRight: '0.5rem' }}>POST</span>
                            https://api.suggestiq.com/v1/config/endpoints
                        </div>

                        <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Authentication</h3>
                        <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0' }}>
                            <div style={{ marginBottom: '0.25rem' }}>Authorization: Bearer <span style={{ color: '#fca5a5' }}>&lt;ADMIN_KEY&gt;</span></div>
                            <div>Content-Type: application/json</div>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Example Request Payload</h3>
                        <pre style={{ backgroundColor: '#0f172a', padding: '1.25rem', borderRadius: '8px', border: '1px solid #334155', overflowX: 'auto', fontFamily: 'monospace', fontSize: '0.8rem', color: '#e2e8f0', margin: 0, lineHeight: 1.6 }}>
                            <span style={{ color: '#f59e0b' }}>curl</span> -X POST https://api.suggestiq.com/v1/config/endpoints \
                            -H <span style={{ color: '#86efac' }}>"Authorization: Bearer ADMIN_KEY"</span> \
                            -H <span style={{ color: '#86efac' }}>"Content-Type: application/json"</span> \
                            -d '{'{'}
                            <span style={{ color: '#93c5fd' }}>"api_name"</span>: <span style={{ color: '#86efac' }}>"My Custom Engine"</span>,
                            <span style={{ color: '#93c5fd' }}>"store_id"</span>: <span style={{ color: '#86efac' }}>"muvi-video-store"</span>,
                            <span style={{ color: '#93c5fd' }}>"algorithm"</span>: <span style={{ color: '#86efac' }}>"{activeTab}"</span>,
                            <span style={{ color: '#93c5fd' }}>"limit"</span>: <span style={{ color: '#fbbf24' }}>10</span>,
                            <span style={{ color: '#93c5fd' }}>"config"</span>: {'{'}
                            {activeTab === 'hybrid' && <span><br />        <span style={{ color: '#93c5fd' }}>"weights"</span>: {'{'} <span style={{ color: '#93c5fd' }}>"similarity"</span>: <span style={{ color: '#fbbf24' }}>40</span>, <span style={{ color: '#93c5fd' }}>"cf"</span>: <span style={{ color: '#fbbf24' }}>40</span>, <span style={{ color: '#93c5fd' }}>"trending"</span>: <span style={{ color: '#fbbf24' }}>20</span> {'}'}<br />      </span>}
                            {activeTab === 'cf' && <span><br />        <span style={{ color: '#93c5fd' }}>"min_user_history"</span>: <span style={{ color: '#fbbf24' }}>5</span>,<br />        <span style={{ color: '#93c5fd' }}>"similarity_metric"</span>: <span style={{ color: '#86efac' }}>"cosine"</span><br />      </span>}
                            {activeTab === 'trending' && <span><br />        <span style={{ color: '#93c5fd' }}>"time_filter"</span>: <span style={{ color: '#86efac' }}>"weekly"</span>,<br />        <span style={{ color: '#93c5fd' }}>"metric"</span>: <span style={{ color: '#86efac' }}>"views"</span><br />      </span>}
                            {'}'}
                            {'}'}'
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAPI;
