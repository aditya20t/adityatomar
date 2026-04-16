import React from 'react';
import PublicationCard from '../components/PublicationCard';
import publicationsData from '../data/publications.json';

const Publications: React.FC = () => {
    return (
        <div className="page publications-page">
            <section className="section">
                <div className="section-header">
                    <h1 className="page-title">Publications</h1>
                    <p className="section-subtitle">Scientific papers, conference proceedings, and book chapters.</p>
                </div>
                <div className="publications-list">
                    {publicationsData.map(pub => (
                        <PublicationCard key={pub.slug} pub={pub} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Publications;
