import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const MappingModal = ({ isOpen, onClose, uploadType }) => {
    const [step, setStep] = useState(1); // 1: Mapping, 2: Processing, 3: Success
    const [requestId, setRequestId] = useState('');

    useEffect(() => {
        if (isOpen) {
            setStep(1);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // Mock data based on upload type
    const mockHeaders =
        uploadType === 'items' ? ['Vcode', 'Title', 'Director', 'Category', 'ReleaseYear'] :
            uploadType === 'users' ? ['UserID', 'Email', 'Plan', 'Country'] :
                ['EventID', 'UserID', 'Vcode', 'Action', 'Timestamp'];

    const systemFields = ['item_id', 'user_id', 'event_type', 'timestamp', 'embedding_field_1', 'embedding_field_2', 'IGNORE'];

    const handleProcess = () => {
        setStep(2);
        // Simulate API delay
        setTimeout(() => {
            setRequestId(`req_${Math.random().toString(36).substr(2, 9)}`);
            setStep(3);
        }, 2000);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                {step === 1 && (
                    <>
                        <h2 style={{ marginBottom: '1rem' }}>Map Data Fields</h2>
                        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                            We detected {mockHeaders.length} columns in your file. In this case, we only need you to map the main unique field.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 600, color: '#1e293b' }}>
                                    Select the Unique {uploadType === 'items' ? 'Item ID' : uploadType === 'users' ? 'User ID' : 'Event ID'} Column
                                </label>
                                <select className="form-control" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', width: '100%', outline: 'none' }}>
                                    <option value="">Choose a column from your file...</option>
                                    {mockHeaders.map((header) => (
                                        <option key={header} value={header}>{header}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button className="btn btn-outline" onClick={onClose}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleProcess}>Import Data</button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                        <Loader2 className="animate-spin text-primary" size={48} style={{ margin: '0 auto', animation: 'spin 1s linear infinite' }} />
                        <h2 style={{ marginTop: '1.5rem' }}>Processing Data</h2>
                        <p className="text-muted" style={{ marginTop: '0.5rem' }}>
                            Ingesting records to /data/ingest endpoint. This might take a moment.
                        </p>
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                {step === 3 && (
                    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                        <CheckCircle2 color="var(--success)" size={64} style={{ margin: '0 auto' }} />
                        <h2 style={{ marginTop: '1.5rem' }}>Import Successful</h2>

                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', marginTop: '1.5rem', textAlign: 'left', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span className="text-muted">Status:</span>
                                <span style={{ color: 'var(--success)', fontWeight: 600 }}>ACCEPTED</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="text-muted">Request ID:</span>
                                <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{requestId}</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>Done</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MappingModal;
