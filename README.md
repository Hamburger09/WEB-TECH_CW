# 📚 Book Review Web Application

This is a full-stack web application that allows users to add, view, and review books. It supports form validation, dynamic rendering of reviews, rating system, and image uploads.

---

## 📝 About the App

The Book Review App lets users:

- Submit new book reviews (with title, summary, full review, rating, and cover image)
- View existing reviews in styled Bootstrap cards
- See ratings displayed as stars
- Navigate through a clean and responsive interface

The app is built using **Node.js**, **Express**, and **EJS** for the backend and templating. Frontend uses **Bootstrap 5**, **Vanilla JS**.

---

## 🚀 How to Run the App Locally 

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Hamburger09/WEB-TECH_CW.git
2. **Go into the folder**
   ```bash
   cd WEB-TECH_CW
3. **Install all the dependencies**
   ```bash
   npm install
4. **Start the server**
   ```bash
   npm start
### Go to <a href="http://localhost:4200">http://localhost:4200</a>


## 📦 Dependencies List 

### Here are the main dependencies used in this project:

    express - web framework

    ejs - templating engine

    body-parser - parsing request bodies

    express-validator - form validation

    nodemon - dev server auto-reload (for development only)

## Links
### Github Repository <a href="https://github.com/Hamburger09/WEB-TECH_CW.git">Book Review App</a>


## Project Structure
    /WEB-TECH_CW
        app.js
        controllers/
            api/
                book/
                    index.js
            web/
                home/
                    index.js
        data/
            books.json
        public/
            favicon/
                books-icon.png
            icons/
                star-fill.svg
                star-outline.svg
            images/
            javascripts/
            styles/
                style.css
        routes/
            api/
                book/
                    index.js
                index.js
            web/
                book/
                    index.js
                index.js
        services/
            book.js
        validators/
            book/
                index.js
        views/
            book/
                add_edit.ejs
                details.ejs
                index.ejs
            head.ejs
        .gitignore
        package-lock.json
        package.json
        README.md
        

    


