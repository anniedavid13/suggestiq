import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MoreVertical, Store, Users, FileText } from 'lucide-react';

const StoreList = () => {
    const navigate = useNavigate();

    // Mock data for existing stores
    const [stores] = useState([
        { id: '1', name: 'Muvi-Video-Store', userIdFields: ['user_id'], itemIdFields: ['v_code'] },
        { id: '2', name: 'Muvi-Audio-Store', userIdFields: ['user_id', 'email'], itemIdFields: ['track_id', 'item_id'] }
    ]);

    return (
        <div className="fade-in">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Stores</h1>
                    <p className="text-muted">Manage your SuggestIQ stores and configurations.</p>
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/suggestiq/store-setup')}>
                    <Plus size={18} />
                    Create New Store
                </button>
            </header>

            {stores.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <Store size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                    <h2 style={{ marginBottom: '0.5rem' }}>No Stores Found</h2>
                    <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Get started by creating your first SuggestIQ store.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/suggestiq/store-setup')} style={{ margin: '0 auto' }}>
                        <Plus size={18} />
                        Create New Store
                    </button>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {stores.map(store => (
                        <div key={store.id} className="card" style={{ padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'translateY(-2px)' } }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,123,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                        <Store size={20} />
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{store.name}</h3>
                                </div>
                                <button className="btn btn-outline" style={{ padding: '0.4rem', border: 'none', color: 'var(--text-muted)' }}>
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                    <Users size={16} color="var(--text-muted)" />
                                    <span className="text-muted">User IDs:</span>
                                    <span style={{ fontWeight: 500 }}>{store.userIdFields.join(', ')}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                    <FileText size={16} color="var(--text-muted)" />
                                    <span className="text-muted">Item IDs:</span>
                                    <span style={{ fontWeight: 500 }}>{store.itemIdFields.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StoreList;
