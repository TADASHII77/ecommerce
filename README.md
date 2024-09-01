ShopSphere
ShopSphere is a simple web application designed to provide dynamic search functionality for clothing items. The application allows users to search for items by category name, displaying matching results dynamically as the user types in the search box.

Tree

ShopSphere/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── snoopy.jpg
│   │       ├── fancytshirt.jpg
│   │       ├── flowertshirt.jpg
│   │       ├── polotshirt.jpg
│   │       ├── casual.jpg
│   │       ├── yellowstone.jpg
│   │       ├── fullsleeves.jpg
│   │       └── tshirt.jpg
│   ├── styles/
│   │   └── style.css
│   └── script.js
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── package-lock.json


Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
PostgreSQL: Relational database for storing and querying item data.
EJS: Embedded JavaScript templating engine for generating HTML views.
Bootstrap: CSS framework for styling the application.
Font Awesome: Icon toolkit for implementing navigation icons.


Installation

Clone the repository to your local machine:

--git clone <repository_url>
--cd ShopSphere


Install the required dependencies using npm:

---npm install


Ensure that you have a PostgreSQL database set up. Update the index.js file with your database credentials:

const db = new pg.Client({
    user: "postgres",
    password: "/* use your password */",
    host: "localhost",
    database: "/* Your database name */",
    port: 5432,
});


Start the server:
node index.js
Open your browser and navigate to http://localhost:3000.

Usage
Search Functionality: Type more than three letters in the search input field to display items related to the entered category name.
Dynamic Results: The results will dynamically update based on your input.
No Results Handling: If no items match the query, a message stating "Items not found" will be displayed.

![Screenshot 2024-09-02 012123](https://github.com/user-attachments/assets/98c3879a-752f-4212-885e-abfbbe2dbdfa)

![Screenshot 2024-09-02 012139](https://github.com/user-attachments/assets/1599e12a-fd86-40fb-a84b-d8c407f5ab8c)


![Screenshot 2024-09-02 012156](https://github.com/user-attachments/assets/31ec5331-9b92-4718-8bc6-71c9199e4e0d)

![Screenshot 2024-09-02 012211](https://github.com/user-attachments/assets/51e4c888-e601-48ee-871d-d9c4bdc4f5cb)


Files and Folders
public/assets/images/: Contains image files used in the application.
public/styles/style.css: Custom CSS file for additional styling.
public/script.js: JavaScript file responsible for handling the search input, making requests to the server, and displaying results.
views/index.ejs: EJS template file that renders the HTML content.
index.js: The main server file, handles routing, database queries, and serves static files.
package.json: Lists the project dependencies and scripts.
package-lock.json: Automatically generated file that locks the dependencies' versions.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this project.








