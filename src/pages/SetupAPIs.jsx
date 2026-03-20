import React, { useState } from 'react';
import { Plus, Settings, Code, Code2 } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const SetupAPIs = () => {
    const navigate = useNavigate();
    const [selectedStore, setSelectedStore] = useState('');

    // Mock data representing a unified list of saved APIs across all stores
    const allSavedApis = [
        { id: 1, name: 'Homepage Recommendations', algo: 'Hybrid', limit: 12, status: 'Active', store: 'Muvi-Video-Store' },
        { id: 2, name: 'Related Items Slider', algo: 'Similarity', limit: 6, status: 'Active', store: 'Muvi-Video-Store' },
        { id: 3, name: 'Trending Audio Weekly', algo: 'Trending', limit: 10, status: 'Active', store: 'Muvi-Audio-Store' },
        { id: 4, name: 'Custom User Segment', algo: 'Custom', limit: 5, status: 'Inactive', store: 'Muvi-Audio-Store' }
    ];

    const displayedApis = selectedStore
        ? allSavedApis.filter(api => api.store === (selectedStore === 'store1' ? 'Muvi-Video-Store' : 'Muvi-Audio-Store'))
        : allSavedApis;

    return (
        <div className="fade-in" style={{ height: '100%', backgroundColor: '#f8fafc', margin: '-2rem', padding: '2rem' }}>
            <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600, color: '#1e293b' }}>Setup APIs</h1>
                    <p className="text-muted" style={{ fontSize: '1rem', color: '#64748b' }}>Activate your recommendations. Build and manage your API endpoints.</p>
                </div>
                <button
                    className="btn btn-primary fade-in"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.25rem',
                        backgroundColor: '#0066ff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '0.25rem'
                    }}
                    onClick={() => navigate('/suggestiq/create-api')}
                >
                    <Plus size={18} /> Create New API
                </button>
            </header>

            <div className="card" style={{ marginBottom: '2.5rem', padding: '1.5rem', maxWidth: '600px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
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

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', animation: 'fadeIn 0.3s ease-in' }}>

                {/* Configs List */}
                <div style={{ flex: 1, minWidth: '400px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1.25rem' }}>Saved API Configurations</h2>

                    {displayedApis && displayedApis.length > 0 ? (
                        <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <tr>
                                        <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>API Name</th>
                                        <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Target Store</th>
                                        <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Algorithm</th>
                                        <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limit</th>
                                        <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedApis.map((api, idx) => (
                                        <tr key={api.id} style={{ borderBottom: idx !== displayedApis.length - 1 ? '1px solid #e2e8f0' : 'none', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                                            <td style={{ padding: '1rem', fontSize: '0.95rem', color: '#1e293b', fontWeight: 600 }}>{api.name}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>{api.store}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>
                                                <span style={{ backgroundColor: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500 }}>
                                                    {api.algo}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>{api.limit}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: api.status === 'Active' ? '#10b981' : '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>
                                                    <span style={{ width: '8px', height: '8px', backgroundColor: api.status === 'Active' ? '#10b981' : '#cbd5e1', borderRadius: '50%' }}></span> {api.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '4rem 2rem',
                            border: '2px dashed #e2e8f0',
                            borderRadius: '12px',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                            color: '#64748b',
                            minHeight: '280px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                        }}>
                            <Settings size={36} color="#e2e8f0" style={{ marginBottom: '1rem' }} />
                            <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>No APIs created yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SetupAPIs;
