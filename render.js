import ejs from 'ejs';
import { writeFileSync } from 'fs';

// Example posts data
const posts = [
    {
        title: 'First Post',
        date: 'October 20, 2024',
        cardContent: 'This is a summary of the first post.'
    },
    {
        title: 'Second Post',
        date: 'October 21, 2024',
        cardContent: 'This is a summary of the second post.'
    }
];

// Render the EJS template with the posts data
ejs.renderFile('views/templates.ejs', { posts }, (err, html) => {
    if (err) {
        console.error('Error rendering the EJS file:', err);
        return;
    }

    // Write the rendered HTML to output.html
    writeFileSync('index.html', html);
    console.log('HTML file successfully created!');
});
