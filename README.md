# 🎓 Marks Display Web Application

A full-stack Express.js-based web application designed to manage and visualize student marks. This application enables users to submit student marks across four subjects, displays a summary table, and calculates how many students have an average score above 90% or below 40%.

## 📌 Features

- ✅ Student mark entry form (Name, Subject 1–4)
- 📋 Responsive table listing all student records
- 📈 Real-time computation of:
  - Number of students scoring **more than 90%**
  - Number of students scoring **less than 40%**
- 🎨 Built using **Bootstrap 5.3** for styling
- 📦 Modular routing with Express
- 💾 Data stored and retrieved using **MySQL database**

---

## 🚀 Technologies Used

| Technology    | Purpose                            |
| ------------- | ---------------------------------- |
| Node.js       | Runtime environment                |
| Express.js    | Server framework                   |
| EJS           | Templating engine                  |
| MySQL         | Database for storing records       |
| Bootstrap 5.3 | UI framework for responsive design |

---

## 📂 Project Structure

```
project-root/
│
├── public/                # Static files (if any)
├── routes/
│   ├── index.js           # Handles GET and POST requests for home
│   ├── more.js            # Route for students scoring >90%
│   └── less.js            # Route for students scoring <40%
│
├── views/
│   └── index.ejs          # Main front-end template
│
├── db.js                  # MySQL DB connection config
├── app.js                 # Main Express app
└── package.json
```

---

## 🧪 Installation & Setup

### ✅ Prerequisites

- Node.js and npm installed
- MySQL installed and running
- A database named `studentdb` (you may rename)
- A table `marks` with the following schema:

```sql
CREATE TABLE marks (
    sid INT AUTO_INCREMENT PRIMARY KEY AUTO_INCREMENT,
    sname VARCHAR(50) NOT NULL,
    marks1 INT NOT NULL,
    marks2 INT NOT NULL,
    marks3 INT NOT NULL,
    marks4 INT NOT NULL
);
```

---

### 🔧 Steps to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/itspriyambhattacharya/MSc_Sem2_ADB_Assignment3.git
cd MSc_Sem2_ADB_Assignment3
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Database:**

Create a `db.js` file in the root directory:

```js
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "assign3",
  connectionLimit: 10,
});

module.exports = pool;
```

4. **Start the server:**

```bash
npm start
```

5. **Access the app:**

Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 💻 Functional Overview

### 📝 Submit Student Marks

- A form allows input of a student's name and marks in four subjects.
- On submission, data is inserted into the database.

### 📊 View Records Table

- Displays all entries from the `marks` table in a responsive HTML table.
- If no data is available, a message is shown.

### 📈 Analytical Routes

- **`/more`** — Displays the number of students with an average score above 90%.
- **`/less`** — Displays the number of students with an average score below 40%.

---

## 🧩 Sample Route Logic

**Sample route to fetch students with avg > 90:**

```js
const sql = `SELECT COUNT(sname) AS c FROM marks WHERE (marks1 + marks2 + marks3 + marks4)/4.0 > 90`;
```

**Sample route to fetch students with avg < 40:**

```js
const sql = `SELECT COUNT(sname) AS c FROM marks WHERE (marks1 + marks2 + marks3 + marks4)/4.0 < 40`;
```

---

## 🧑‍💻 Author

**Priyam Bhattacharya**  
M.Sc. Computer Science, University of Calcutta  
[LinkedIn](https://linkedin.com/in/itspriyambhattacharya) • [GitHub](https://github.com/itspriyambhattacharya)

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Feedback or Suggestions?

Feel free to raise an issue or drop a mail at: `itspriyambhattacharya@gmail.com`
