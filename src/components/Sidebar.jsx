import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Video, Lightbulb, Database, Settings, ArrowRightLeft, Store,
    Home as HomeIcon, LayoutGrid, Globe, PlayCircle, DollarSign,
    Users, BarChart2, Megaphone, Share2, Zap, Shield, Code, ChevronDown, ChevronRight
} from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();
    const isSuggestIQActive = location.pathname.startsWith('/suggestiq');

    const menuItems = [
        { path: '/', label: 'Home', icon: <HomeIcon size={18} /> },
        { path: null, label: 'Content Management', icon: <LayoutGrid size={18} />, hasChevron: true },
        { path: null, label: 'Website & Apps', icon: <Globe size={18} />, hasChevron: true },
        { path: null, label: 'Player', icon: <PlayCircle size={18} /> },
        { path: null, label: 'Monetization', icon: <DollarSign size={18} />, hasChevron: true },
        { path: '/encoding', label: 'Encoding', icon: <Settings size={18} /> },
        { path: '/suggestiq', label: 'SuggestIQ', icon: <Zap size={18} />, isExpandable: true },
        { path: null, label: 'User Management', icon: <Users size={18} />, hasChevron: true },
        { path: null, label: 'Analytics', icon: <BarChart2 size={18} />, hasChevron: true },
        { path: null, label: 'Marketing', icon: <Megaphone size={18} />, hasChevron: true },
        { path: null, label: 'Content Partner Portal', icon: <Share2 size={18} /> },
        { path: null, label: 'Interactivity', icon: <Zap size={18} />, hasChevron: true },
        { path: null, label: 'Security', icon: <Shield size={18} /> },
        { path: null, label: 'Dev Center', icon: <Code size={18} />, hasChevron: true },
        { path: null, label: 'Settings', icon: <Settings size={18} />, hasChevron: true },
    ];

    const suggestIqSubLinks = [
        { path: '/suggestiq/stores', label: 'Store Setup' },
        { path: '/suggestiq/import-data', label: 'Import Data' },
        { path: '/suggestiq/setup-apis', label: 'Setup APIs' },
    ];

    return (
        <aside style={{
            width: '260px',
            backgroundColor: '#fff',
            borderRight: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto'
        }}>
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    backgroundColor: '#0066ff', color: 'white', width: '32px', height: '32px',
                    borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '1.2rem', fontStyle: 'italic'
                }}>
                    M
                </div>
                <h2 style={{ fontSize: '1.25rem', color: '#0066ff', margin: 0, fontWeight: 700, letterSpacing: '0.5px' }}>MUVI</h2>
            </div>

            <nav style={{ flex: 1, padding: '1rem 0' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {menuItems.map((item, idx) => {

                        // Active check
                        let isActive = false;
                        if (item.label === 'SuggestIQ') {
                            isActive = isSuggestIQActive;
                        } else if (item.path && item.path === '/') {
                            // strictly home
                            isActive = location.pathname === '/';
                        } else if (item.path) {
                            isActive = location.pathname === item.path;
                        }

                        // Determine content wrapper
                        const Content = () => (
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%'
                            }}>
                                <span style={{ color: isActive ? '#0066ff' : '#64748b' }}>
                                    {item.icon}
                                </span>
                                <span style={{ flex: 1, fontSize: '0.9rem' }}>{item.label}</span>

                                {item.hasChevron && <ChevronDown size={14} color="#94a3b8" />}
                                {item.isExpandable && (
                                    isActive ? <ChevronDown size={14} color="#0066ff" /> : <ChevronRight size={14} color="#94a3b8" />
                                )}
                            </div>
                        );

                        return (
                            <li key={item.label} style={{ marginBottom: '0.25rem' }}>
                                {item.path ? (
                                    <NavLink
                                        to={item.path === '/suggestiq' ? '/suggestiq/stores' : item.path}
                                        style={{
                                            display: 'block',
                                            padding: '0.75rem 1.5rem',
                                            color: isActive ? '#0066ff' : '#475569',
                                            backgroundColor: isActive ? '#f0f9ff' : 'transparent',
                                            borderLeft: isActive ? '3px solid #0066ff' : '3px solid transparent',
                                            fontWeight: isActive ? 600 : 500,
                                            textDecoration: 'none',
                                            position: 'relative',
                                            transition: 'all 0.2s',
                                        }}
                                        className="sidebar-link"
                                    >
                                        {/* Home has a special rounded right edge in image, but standard bar works well. Adjusting slightly. */}
                                        {isActive && item.label === 'Home' && (
                                            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', backgroundColor: '#0066ff', borderRadius: '4px 0 0 4px' }} />
                                        )}
                                        <Content />
                                    </NavLink>
                                ) : (
                                    <div style={{
                                        display: 'block',
                                        padding: '0.75rem 1.5rem',
                                        color: '#475569',
                                        borderLeft: '3px solid transparent',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                    }}>
                                        <Content />
                                    </div>
                                )}

                                {/* Sub-menu for SuggestIQ */}
                                {item.label === 'SuggestIQ' && isActive && (
                                    <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0 }}>
                                        {suggestIqSubLinks.map(subLink => {
                                            const isSubActive = location.pathname.includes(subLink.path) || (subLink.path === '/suggestiq/stores' && location.pathname === '/suggestiq/store-setup');

                                            return (
                                                <li key={subLink.label}>
                                                    <NavLink
                                                        to={subLink.path}
                                                        style={{
                                                            display: 'block',
                                                            padding: '0.5rem 1.5rem 0.5rem 3.25rem',
                                                            color: isSubActive ? '#0066ff' : '#64748b',
                                                            fontSize: '0.85rem',
                                                            fontWeight: isSubActive ? 600 : 400,
                                                            textDecoration: 'none',
                                                            transition: 'color 0.2s'
                                                        }}
                                                    >
                                                        {subLink.label}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
