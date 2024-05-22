database:postgreSQL
------------------------
user: 'postgres',
host: 'localhost',
database: 'Resume',
password: 'p10399996',
port: 5432,
------------------------
CREATE TABLE work_experience (
    id SERIAL PRIMARY KEY,
    position VARCHAR(255),
    company VARCHAR(255),
    start_date DATE,
    end_date DATE,
    responsibilities TEXT
);

CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    degree VARCHAR(255),
    school VARCHAR(255),
    start_year INT,
    end_year INT
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    skills TEXT
);

CREATE TABLE certifications (
    id SERIAL PRIMARY KEY,
    certification VARCHAR(255)
);

-- 插入工作經驗
INSERT INTO work_experience (position, company, start_date, end_date, responsibilities) VALUES
('Machine Learning Intern', 'Industrial Technology Research Institute (ITRI)', '2022-03-01', '2022-07-01', 'Responsible for machine learning-related projects. Testing and training machine models. Propose relatively optimized methods for existing models or systems.'),
('Research Intern', 'InsightXplorer Cor.', '2023-01-01', '2024-01-01', 'Design and establish various market questionnaires. Setting the questionnaires on the system. Observe the data analysis charts of the questionnaire results and explain the business logic.');
('Assistant Cloud Architect Intern', 'President Information CORP', '2024-02-21', '2024-06-18', 'Responsible for aws projects.')

-- 插入教育背景
INSERT INTO education (degree, school, start_year, end_year) VALUES
('Graduate Institute of Information Management', 'National Taipei University', 2022, 2024),
('Bachelor of Information Management', 'Tamkang University', 2018, 2022);

-- 插入技能
INSERT INTO skills (category, skills) VALUES
('Programming', 'Python, Java, C++, HTML'),
('Operating System', 'Windows, Linux, VMware'),
('Database', 'MySQL, PostgreSQL'),
('Cloud skill', 'Amazon Web Services (AWS)'),
('Data analysis', 'SPSS, SmartPLS');

-- 插入認證
INSERT INTO certifications (certification) VALUES
('AWS Certified Cloud Practitioner'),
('AWS Certified Solutions Architect - Associate');
