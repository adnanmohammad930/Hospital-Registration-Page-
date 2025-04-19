🏥 Hospital Patient Information Form
A simple web application built with Express.js, EJS, and PostgreSQL that collects and stores patient information through a user-friendly form.

🚀 Features
Collects patient details: name, age, gender, contact, and disease

Stores data in a PostgreSQL database

Renders forms using EJS templates

Organized structure with static files served from a public folder

🛠️ Technologies Used
Node.js & Express.js – Web server framework

EJS – Templating engine

PostgreSQL – Relational database

HTML/CSS – For form design (in public/)

🧾 Setup Instructions
Clone the repository

bash
Copy
Edit
git clone <repo-url>
cd hospital-form-app
Install dependencies

bash
Copy
Edit
npm install
Setup PostgreSQL Database

Create a database named Hospital

Create a table:

sql
Copy
Edit
CREATE TABLE information (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  gender VARCHAR(10),
  contact VARCHAR(15),
  disease TEXT
);
Start the server

bash
Copy
Edit
node index.js
Visit in browser

arduino
Copy
Edit
http://localhost:3000
📁 Project Structure
csharp
Copy
Edit
hospital-form-app/
│
├── public/            # Static files (CSS, images)
├── views/             # EJS templates
│   └── index.ejs
├── index.js           # Main Express app
├── package.json
📬 Feedback
Feel free to contribute, report bugs, or suggest features to improve the project!
