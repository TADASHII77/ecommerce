import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    password: "rohit2002",
    host: "localhost",
    database: "clothingimagesdb",
    port: 5432,
});

db.connect();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Function to fetch categories from the database


app.get('/', async (req, res) => {
 res.render("index.ejs");
});

app.get("/search", async (req, res) => {
    console.log('Server received a request');
    const query = req.query.q || '';
    if (query.length <= 3) {
        return res.json([]);
    }
    
    try {
        const result = await db.query(
            `SELECT c.category_name, i.image_url
             FROM categories c
             JOIN imageurls i ON c.id = i.category_id
             WHERE c.category_name ILIKE $1`,
            [`%${query}%`]
        );
        console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
