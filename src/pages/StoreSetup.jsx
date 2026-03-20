import React, { useState } from 'react';
import { Plus, X, Save } from 'lucide-react';

const StoreSetup = () => {
    const [storeName, setStoreName] = useState('');
    const [userIdFields, setUserIdFields] = useState(['user_id']);
    const [itemIdFields, setItemIdFields] = useState(['item_id']);

    const [userIdInput, setUserIdInput] = useState('');
    const [itemIdInput, setItemIdInput] = useState('');

    const [eventWeights, setEventWeights] = useState([
        { id: 1, type: 'click', weight: 0.2 },
        { id: 2, type: 'view', weight: 0.5 },
        { id: 3, type: 'purchase', weight: 1.0 },
    ]);

    const [metadataFields, setMetadataFields] = useState(['Artist', 'Category1', 'Language']);
    const [tagInput, setTagInput] = useState('');

    const handleAddEvent = () => {
        setEventWeights([...eventWeights, { id: Date.now(), type: '', weight: 0.1 }]);
    };

    const handleRemoveEvent = (id) => {
        setEventWeights(eventWeights.filter(e => e.id !== id));
    };

    const handleEventChange = (id, field, value) => {
        setEventWeights(eventWeights.map(e =>
            e.id === id ? { ...e, [field]: field === 'weight' ? parseFloat(value) || 0 : value } : e
        ));
    };

    const handleAddTag = (e, fieldType) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (fieldType === 'metadata' && tagInput.trim()) {
                if (!metadataFields.includes(tagInput.trim())) setMetadataFields([...metadataFields, tagInput.trim()]);
                setTagInput('');
            } else if (fieldType === 'userId' && userIdInput.trim()) {
                if (!userIdFields.includes(userIdInput.trim())) setUserIdFields([...userIdFields, userIdInput.trim()]);
                setUserIdInput('');
            } else if (fieldType === 'itemId' && itemIdInput.trim()) {
                if (!itemIdFields.includes(itemIdInput.trim())) setItemIdFields([...itemIdFields, itemIdInput.trim()]);
                setItemIdInput('');
            }
        }
    };

    const handleRemoveTag = (tag, fieldType) => {
        if (fieldType === 'metadata') {
            setMetadataFields(metadataFields.filter(t => t !== tag));
        } else if (fieldType === 'userId') {
            setUserIdFields(userIdFields.filter(t => t !== tag));
        } else if (fieldType === 'itemId') {
            setItemIdFields(itemIdFields.filter(t => t !== tag));
        }
    };

    return (
        <div className="fade-in">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Store Setup</h1>
                    <p className="text-muted">Configure the POST /store settings for your new SuggestIQ module.</p>
                </div>
                <button className="btn btn-primary">
                    <Save size={18} />
                    Save Configuration
                </button>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>

                {/* Basic Info Card */}
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">General Information</h2>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Store Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Muvi-Video-Store"
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                        />
                        <small className="text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>
                            Used as the unique identifier for the /store endpoint.
                        </small>
                    </div>
                </div>

                {/* Identity Mapping Card */}
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Identity Mapping</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">User ID Fields</label>
                            <div className="tags-input-container">
                                {userIdFields.map(tag => (
                                    <div key={tag} className="tag">
                                        {tag}
                                        <span className="tag-remove" onClick={() => handleRemoveTag(tag, 'userId')}>
                                            <X size={14} />
                                        </span>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    className="tags-input"
                                    placeholder="Add user ID field..."
                                    value={userIdInput}
                                    onChange={(e) => setUserIdInput(e.target.value)}
                                    onKeyDown={(e) => handleAddTag(e, 'userId')}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">Item ID Fields</label>
                            <div className="tags-input-container">
                                {itemIdFields.map(tag => (
                                    <div key={tag} className="tag">
                                        {tag}
                                        <span className="tag-remove" onClick={() => handleRemoveTag(tag, 'itemId')}>
                                            <X size={14} />
                                        </span>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    className="tags-input"
                                    placeholder="Add item ID field..."
                                    value={itemIdInput}
                                    onChange={(e) => setItemIdInput(e.target.value)}
                                    onKeyDown={(e) => handleAddTag(e, 'itemId')}
                                />
                            </div>
                            <small className="text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>
                                e.g., mapping "Vcode" as the item ID.
                            </small>
                        </div>
                    </div>
                </div>

                {/* Event Weights Card */}
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Event Weights</h2>
                        <button className="btn btn-outline" onClick={handleAddEvent} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                            <Plus size={16} /> Add Event
                        </button>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Event Type</th>
                                <th>Weight (0.1 - 5.0)</th>
                                <th style={{ width: '80px', textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventWeights.map((evt) => (
                                <tr key={evt.id}>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g. subscribe"
                                            value={evt.type}
                                            onChange={(e) => handleEventChange(evt.id, 'type', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            className="form-control"
                                            step="0.1"
                                            min="0.1"
                                            max="5.0"
                                            value={evt.weight}
                                            onChange={(e) => handleEventChange(evt.id, 'weight', e.target.value)}
                                        />
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button
                                            className="btn btn-outline"
                                            style={{ padding: '0.4rem', border: 'none', color: 'var(--text-muted)' }}
                                            onClick={() => handleRemoveEvent(evt.id)}
                                        >
                                            <X size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {eventWeights.length === 0 && (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                        No events defined. Add one to start.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Metadata Fields Card */}
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Metadata Fields (Embedding)</h2>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Searchable / Embedding Fields</label>
                        <div className="tags-input-container">
                            {metadataFields.map(tag => (
                                <div key={tag} className="tag">
                                    {tag}
                                    <span className="tag-remove" onClick={() => handleRemoveTag(tag, 'metadata')}>
                                        <X size={14} />
                                    </span>
                                </div>
                            ))}
                            <input
                                type="text"
                                className="tags-input"
                                placeholder="Type and press Enter to add..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => handleAddTag(e, 'metadata')}
                            />
                        </div>
                        <small className="text-muted" style={{ display: 'block', marginTop: '0.5rem' }}>
                            Fields like "Artist", "Category1", or "ContentLanguage" used to compute document embeddings.
                        </small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StoreSetup;
