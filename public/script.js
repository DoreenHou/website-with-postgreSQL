// JavaScript to toggle between sections based on navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.getElementById(this.getAttribute('href').substring(1));
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        targetSection.style.display = 'block';
    });
});

// Fetch data from /resume/work_experience endpoint and display work experience
fetch('/resume/work_experience')
    .then(response => response.json())
    .then(data => {
        const workExperienceTable = document.getElementById('workExperienceTable');
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        for (const key of Object.keys(data[0])) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(th);
        }
        for (const item of data) {
            const row = table.insertRow();
            for (const key in item) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        }
        workExperienceTable.appendChild(table);
    })
    .catch(error => console.error('Error fetching work experience data:', error));

// Fetch data from /resume/education endpoint and display education
fetch('/resume/education')
    .then(response => response.json())
    .then(data => {
        const educationTable = document.getElementById('educationTable');
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        for (const key of Object.keys(data[0])) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(th);
        }
        for (const item of data) {
            const row = table.insertRow();
            for (const key in item) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        }
        educationTable.appendChild(table);
    })
    .catch(error => console.error('Error fetching education data:', error));

// Fetch data from /resume/skills endpoint and display skills
fetch('/resume/skills')
    .then(response => response.json())
    .then(data => {
        const skillsTable = document.getElementById('skillsTable');
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        for (const key of Object.keys(data[0])) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(th);
        }
        for (const item of data) {
            const row = table.insertRow();
            for (const key in item) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        }
        skillsTable.appendChild(table);
    })
    .catch(error => console.error('Error fetching skills data:', error));

// Fetch data from /resume/certifications endpoint and display certifications
fetch('/resume/certifications')
    .then(response => response.json())
    .then(data => {
        const certificationsTable = document.getElementById('certificationsTable');
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        for (const key of Object.keys(data[0])) {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(th);
        }
        for (const item of data) {
            const row = table.insertRow();
            for (const key in item) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        }
        certificationsTable.appendChild(table);
    })
    .catch(error => console.error('Error fetching certifications data:', error));
