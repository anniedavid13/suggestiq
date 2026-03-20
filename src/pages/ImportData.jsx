import React, { useState } from 'react';
import { Database, User, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';
import MappingModal from '../components/MappingModal';

const ImportData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadType, setUploadType] = useState('items');
    const [selectedStore, setSelectedStore] = useState('');
    const [activeApiTab, setActiveApiTab] = useState('items');

    // Mock data for already imported datasets based on store selection
    const mockDatasets = {
        'store1': [
            { id: 1, name: 'catalog_q1_2026.csv', type: 'Catalog', rows: '12,450', date: 'Oct 12, 2026' },
            { id: 2, name: 'user_profiles_batch1.json', type: 'Customer Profiles', rows: '8,192', date: 'Oct 10, 2026' }
        ],
        'store2': [
            { id: 3, name: 'audio_events_sept.csv', type: 'Activity Log', rows: '45,021', date: 'Oct 01, 2026' }
        ]
    };

    const handleCardClick = (type) => {
        setUploadType(type);
        setIsModalOpen(true);
    };

    const cards = [
        {
            id: 'items',
            title: 'Catalog',
            description: 'ITEMS & METADATA',
            icon: <Database size={32} color="#a5b4fc" />,
        },
        {
            id: 'users',
            title: 'Customer Profiles',
            description: 'USER ATTRIBUTES',
            icon: <User size={32} color="#a5b4fc" />,
        },
        {
            id: 'events',
            title: 'Activity Log',
            description: 'INTERACTIONS & EVENTS',
            icon: <PlayCircle size={32} color="#a5b4fc" />,
        }
    ];

    return (
        <div className="fade-in">
            <header style={{ marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600, color: '#1e293b' }}>Import Data</h1>
                <p className="text-muted" style={{ fontSize: '1rem', color: '#64748b' }}>Select a store and feed the engine. Drop your CSV or JSON files into the buckets below.</p>
            </header>

            <div className="card" style={{ marginBottom: '2.5rem', padding: '1.5rem', maxWidth: '600px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    1. SELECT TARGET STORE
                </label>
                <select
                    className="form-control"
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }}
                >
                    <option value="">Select a store...</option>
                    <option value="store1">Muvi-Video-Store</option>
                    <option value="store2">Muvi-Audio-Store</option>
                </select>
            </div>

            {selectedStore && (
                <div style={{ animation: 'fadeIn 0.3s ease-in' }}>

                    {/* Imported Datasets Section */}
                    <div style={{ marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Imported Datasets</h2>
                        </div>

                        {mockDatasets[selectedStore] && mockDatasets[selectedStore].length > 0 ? (
                            <>
                                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                        <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                            <tr>
                                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>File Name</th>
                                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Data Type</th>
                                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Records</th>
                                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date Imported</th>
                                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mockDatasets[selectedStore].map((dataset, idx) => (
                                                <tr key={dataset.id} style={{ borderBottom: idx !== mockDatasets[selectedStore].length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#1e293b', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <FileText size={16} color="#94a3b8" />
                                                        {dataset.name}
                                                    </td>
                                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>
                                                        <span style={{ backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500 }}>
                                                            {dataset.type}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>{dataset.rows}</td>
                                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>{dataset.date}</td>
                                                    <td style={{ padding: '1rem' }}>
                                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#16a34a', fontSize: '0.85rem', fontWeight: 500 }}>
                                                            <CheckCircle2 size={16} /> Processed
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Start of API Docs Section */}
                                <div style={{ marginTop: '3rem', backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                        <div style={{ backgroundColor: '#3b82f6', padding: '0.5rem', borderRadius: '8px' }}>
                                            <Database size={24} color="white" />
                                        </div>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'white' }}>Data Ingestion API (Recommended)</h2>
                                    </div>
                                    <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                                        Now that you've seeded your initial data, use our REST API for continuous updates. Select a data type below to view the corresponding payload structure.
                                    </p>

                                    <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #334155', marginBottom: '1.5rem' }}>
                                        {['items', 'users', 'events'].map(tab => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveApiTab(tab)}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: activeApiTab === tab ? '#60a5fa' : '#94a3b8',
                                                    borderBottom: activeApiTab === tab ? '2px solid #60a5fa' : '2px solid transparent',
                                                    padding: '0.5rem 1rem',
                                                    cursor: 'pointer',
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    textTransform: 'capitalize',
                                                    outline: 'none',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {tab === 'items' ? 'Catalog (Items)' : tab === 'users' ? 'User Profiles' : 'Activity Events'}
                                            </button>
                                        ))}
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '2rem', alignItems: 'start' }}>
                                        <div>
                                            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Endpoint</h3>
                                            <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
                                                <span style={{ color: '#3b82f6', fontWeight: 700, marginRight: '0.5rem' }}>POST</span>
                                                https://api.suggestiq.com/v1/data/ingest
                                            </div>

                                            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Headers</h3>
                                            <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0' }}>
                                                <div style={{ marginBottom: '0.25rem' }}>Authorization: Bearer <span style={{ color: '#a5b4fc' }}>&lt;TOKEN&gt;</span></div>
                                                <div>Content-Type: application/json</div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Example Payload (cURL)</h3>
                                            <pre style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', overflowX: 'auto', fontFamily: 'monospace', fontSize: '0.8rem', color: '#e2e8f0', margin: 0, lineHeight: 1.6 }}>
                                                <span style={{ color: '#f59e0b' }}>curl</span> -X POST https://api.suggestiq.com/v1/data/ingest \
                                                -H <span style={{ color: '#86efac' }}>"Authorization: Bearer YOUR_API_KEY"</span> \
                                                -H <span style={{ color: '#86efac' }}>"Content-Type: application/json"</span> \
                                                -d '{'{'}
                                                <span style={{ color: '#93c5fd' }}>"store_id"</span>: <span style={{ color: '#86efac' }}>"{selectedStore}"</span>,
                                                <span style={{ color: '#93c5fd' }}>"data_type"</span>: <span style={{ color: '#86efac' }}>"{activeApiTab}"</span>,
                                                <span style={{ color: '#93c5fd' }}>"records"</span>: [
                                                {activeApiTab === 'items' && <span>{'{'} <span style={{ color: '#93c5fd' }}>"item_id"</span>: <span style={{ color: '#86efac' }}>"v_449"</span>, <span style={{ color: '#93c5fd' }}>"title"</span>: <span style={{ color: '#86efac' }}>"The Matrix"</span>, <span style={{ color: '#93c5fd' }}>"category"</span>: <span style={{ color: '#86efac' }}>"Action"</span> {'}'}</span>}
                                                {activeApiTab === 'users' && <span>{'{'} <span style={{ color: '#93c5fd' }}>"user_id"</span>: <span style={{ color: '#86efac' }}>"u_192"</span>, <span style={{ color: '#93c5fd' }}>"plan"</span>: <span style={{ color: '#86efac' }}>"premium"</span>, <span style={{ color: '#93c5fd' }}>"country"</span>: <span style={{ color: '#86efac' }}>"US"</span> {'}'}</span>}
                                                {activeApiTab === 'events' && <span>{'{'} <span style={{ color: '#93c5fd' }}>"user_id"</span>: <span style={{ color: '#86efac' }}>"u_192"</span>, <span style={{ color: '#93c5fd' }}>"item_id"</span>: <span style={{ color: '#86efac' }}>"v_449"</span>, <span style={{ color: '#93c5fd' }}>"event_type"</span>: <span style={{ color: '#86efac' }}>"play"</span> {'}'}</span>}
                                                ]
                                                {'}'}'
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', color: '#64748b' }}>
                                <Database size={32} color="#cbd5e1" style={{ marginBottom: '1rem' }} />
                                <p>No datasets imported for this store yet.</p>
                            </div>
                        )}
                    </div>

                    {/* Import New Data Section */}
                    <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Alternative: Manual File Upload</h2>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>If you need to do a one-off bulk import, you can still use the manual upload tool.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            {cards.map(card => (
                                <div
                                    key={card.id}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        padding: '3rem 1.5rem',
                                        border: '2px dashed #cbd5e1',
                                        borderRadius: '8px',
                                        backgroundColor: 'white',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onClick={() => handleCardClick(card.id)}
                                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.backgroundColor = 'white'; }}
                                >
                                    <div style={{ marginBottom: '1.25rem' }}>
                                        {card.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal', color: '#1e293b' }}>{card.title}</h3>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <MappingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                uploadType={uploadType}
            />
        </div>
    );
};

export default ImportData;
