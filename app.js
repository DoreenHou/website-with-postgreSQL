const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Resume',
  password: 'p10399996',
  port: 5432,
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to fetch work experience data from the database
app.get('/resume/work_experience', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM public.work_experience');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Define a route to fetch education data from the database
  app.get('/resume/education', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM public.education');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Define a route to fetch skills data from the database
  app.get('/resume/skills', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM public.skills');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Define a route to fetch certifications data from the database
  app.get('/resume/certifications', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM public.certifications');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  });

// Redirect root to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
