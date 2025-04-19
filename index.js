import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"Hospital",
  password:"2678",
  port:5432,
})

db.connect();

const app = express();
const port=3000;
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


// Route to render the form
app.get('/', (req, res) => {
    res.render('index');
});

app.post("/submit",async(req,res)=>{
    const{name, age, gender, contact, disease }=req.body;

    try{
        await db.query(
            'INSERT INTO information (name, age, gender, contact, disease) VALUES ($1, $2, $3, $4, $5)',
            [name, age, gender, contact, disease]
        );
        res.send("Data stored successfully");
    }catch (err) {
        console.error(err);
        res.send('Error storing data.');
    };
})

// Start the server
app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});
