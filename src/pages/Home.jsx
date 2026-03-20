import React from 'react';
import { Plus, Database, BarChart2, DollarSign, Users, ChevronDown, ChevronRight, ChevronLeft, LayoutGrid, MonitorPlay } from 'lucide-react';

const QuickActionCard = ({ icon, title }) => (
    <div style={{
        flex: 1,
        minWidth: '150px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '1.25rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        cursor: 'pointer',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
    }}
        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
        onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}
    >
        <div style={{
            backgroundColor: '#f0f9ff',
            color: '#0ea5e9',
            padding: '0.6rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem', lineHeight: 1.2 }}>{title}</span>
    </div>
);

const MetricCard = ({ title, value, hasData = true }) => (
    <div style={{
        flex: 1,
        minWidth: '300px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontWeight: 600, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
                {title} <ChevronRight size={16} color="#94a3b8" />
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                By
                <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    padding: '0.25rem 0.5rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white', color: '#334155', cursor: 'pointer'
                }}>
                    Views <ChevronDown size={14} />
                </button>
            </div>
        </div>

        {hasData ? (
            <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>
                    {value}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '40px', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    {/* Simulated chart dots */}
                    {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                        <div key={i} style={{
                            width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6',
                            transform: `translateY(-${Math.random() * 20}px)`
                        }} />
                    ))}
                </div>
            </div>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px', color: '#94a3b8' }}>
                <LayoutGrid size={32} color="#e2e8f0" style={{ marginBottom: '1rem' }} />
                <span style={{ fontSize: '0.9rem' }}>No Data found</span>
            </div>
        )}
    </div>
);

const ProductCard = ({ title, tag, description, color, actionLabel }) => (
    <div style={{
        flex: 1,
        minWidth: '280px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
                backgroundColor: color, color: 'white', fontWeight: 800, fontSize: '0.75rem',
                padding: '0.25rem 0.5rem', borderRadius: '4px', letterSpacing: '0.05em'
            }}>
                {title.split(' ')[0]}
            </div>
            <span style={{ fontWeight: 700, color: '#1e293b' }}>{title.split(' ')[1]}</span>
            {tag && (
                <span style={{ marginLeft: 'auto', backgroundColor: '#dcfce7', color: '#166534', fontSize: '0.7rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '12px' }}>
                    {tag}
                </span>
            )}
        </div>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1, marginBottom: '1.5rem' }}>
            {description}
        </p>
        <button style={{
            alignSelf: 'flex-start',
            color: '#0066ff',
            backgroundColor: 'transparent',
            border: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            padding: 0
        }}>
            {actionLabel}
        </button>
    </div>
);

const Home = () => {
    return (
        <div className="fade-in" style={{ padding: '0 2rem', maxWidth: '1400px', margin: '0 auto', paddingBottom: '4rem' }}>

            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#1e293b', margin: 0 }}>Good Morning, Annie Arora!</h1>
                <a href="#" style={{ color: '#0066ff', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Guided Tour <ChevronRight size={16} />
                </a>
            </header>

            {/* Quick Actions */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155', marginBottom: '1rem' }}>Quick Actions</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <QuickActionCard icon={<Plus size={20} />} title="Add Content" />
                    <QuickActionCard icon={<Database size={20} />} title="Manage Assets" />
                    <QuickActionCard icon={<BarChart2 size={20} />} title="Discover Insights" />
                    <QuickActionCard icon={<DollarSign size={20} />} title="Monetize Content" />
                    <QuickActionCard icon={<Users size={20} />} title="Manage Users" />
                </div>
            </section>

            {/* Overview */}
            <section style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Overview</h2>
                    <button style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: '6px', background: 'white', color: '#475569', fontSize: '0.85rem', cursor: 'pointer'
                    }}>
                        <LayoutGrid size={14} /> Last 7 Days <ChevronDown size={14} />
                    </button>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <MetricCard title="Engagement" value="0" />
                    <MetricCard title="Revenue" value="$ 0" />
                    <MetricCard title="Trending Content" hasData={false} />
                </div>
            </section>

            {/* Explore Products */}
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Explore Products</h2>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '6px', background: 'white', cursor: 'pointer', color: '#64748b' }}>
                            <ChevronLeft size={18} />
                        </button>
                        <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '6px', background: 'white', cursor: 'pointer', color: '#64748b' }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                    <ProductCard
                        title="ONE ONE"
                        tag="DEMO"
                        color="#0066ff"
                        description="Build Streaming Platforms like Netflix, Udemy or Audible"
                        actionLabel="Get Started"
                    />
                    <ProductCard
                        title="FLEX FLEX"
                        color="#3b82f6"
                        description="Host, publish, manage video, and audio files in one place"
                        actionLabel="Explore Now"
                    />
                    <ProductCard
                        title="LIVE LIVE"
                        color="#0066ff"
                        description="Live stream events, shows, tournaments on any device"
                        actionLabel="Start Streaming"
                    />
                    <ProductCard
                        title="PLAY PLAYOUT"
                        color="#2563eb"
                        description="Cloud playout software for linear TV & FAST channels"
                        actionLabel="Learn More"
                    />
                </div>
            </section>

        </div>
    );
};

export default Home;
