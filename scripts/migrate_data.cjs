const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const hugoContentDir = path.join(__dirname, '../hugo_backup/content');
const outputDir = path.join(__dirname, '../src/data');

function slugify(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

function migrateProjects() {
    const projectsDir = path.join(hugoContentDir, 'project');
    const projects = [];

    if (fs.existsSync(projectsDir)) {
        fs.readdirSync(projectsDir).forEach(folder => {
            const indexPath = path.join(projectsDir, folder, 'index.md');
            if (fs.existsSync(indexPath)) {
                const fileContent = fs.readFileSync(indexPath, 'utf-8');
                const { data, content } = matter(fileContent);
                projects.push({
                    title: data.title,
                    summary: data.summary,
                    tags: data.tags || [],
                    external_link: data.external_link || '',
                    content: content.trim(),
                    slug: folder
                });
            }
        });
    }

    fs.writeFileSync(path.join(outputDir, 'projects.json'), JSON.stringify(projects, null, 2));
    console.log('Migrated projects');
}

function migratePublications() {
    const pubDir = path.join(hugoContentDir, 'publication');
    const publications = [];

    if (fs.existsSync(pubDir)) {
        const folders = fs.readdirSync(pubDir).filter(f => fs.lstatSync(path.join(pubDir, f)).isDirectory());
        folders.forEach(folder => {
            const indexPath = path.join(pubDir, folder, 'index.md');
            if (fs.existsSync(indexPath)) {
                const fileContent = fs.readFileSync(indexPath, 'utf-8');
                const { data, content } = matter(fileContent);
                publications.push({
                    title: data.title,
                    authors: data.authors || [],
                    date: data.date,
                    doi: data.doi || '',
                    publication: data.publication || '',
                    publication_short: data.publication_short || '',
                    abstract: data.abstract || '',
                    summary: data.summary || '',
                    tags: data.tags || [],
                    links: data.links || [],
                    url_pdf: data.url_pdf || '',
                    slug: folder
                });
            }
        });
    }

    fs.writeFileSync(path.join(outputDir, 'publications.json'), JSON.stringify(publications, null, 2));
    console.log('Migrated publications');
}

migrateProjects();
migratePublications();
