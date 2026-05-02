import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Link as LinkIcon, BookOpen, ChevronUp } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Publication {
    title: string;
    authors: string[];
    date: string;
    publication: string;
    url_pdf: string;
    doi: string;
    abstract: string;
    slug: string;
}

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => {
    const [showAbstract, setShowAbstract] = React.useState(false);

    return (
        <motion.div
            className="publication-card"
        >
            <div className="pub-meta" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <span className="pub-date">{new Date(pub.date).getFullYear()}</span>
                <span className="pub-journal" style={{ wordBreak: 'break-word' }}>{pub.publication}</span>
            </div>
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-authors" style={{ wordBreak: 'break-word', hyphens: 'auto' }}>{pub.authors.join(', ')}</p>
            <div className="pub-actions" style={{ flexWrap: 'wrap' }}>
                {pub.url_pdf && (
                    <a href={pub.url_pdf} target="_blank" rel="noopener noreferrer" className="pub-link">
                        <FileText size={16} />
                        PDF
                    </a>
                )}
                {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-link">
                        <LinkIcon size={16} />
                        DOI
                    </a>
                )}
                <button
                    className={`pub-details-btn ${showAbstract ? 'active' : ''}`}
                    onClick={() => setShowAbstract(!showAbstract)}
                >
                    {showAbstract ? <ChevronUp size={16} /> : <BookOpen size={16} />}
                    {showAbstract ? 'Hide Abstract' : 'Details'}
                </button>
            </div>
            <AnimatePresence>
                {showAbstract && pub.abstract && (
                    <motion.div
                        className="pub-abstract"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="abstract-content">
                            <h4>Abstract</h4>
                            <p>{pub.abstract}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default PublicationCard;
