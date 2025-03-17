# College Management System

## 📌 Project Overview
The **College Management System** is a full-stack web application that helps manage students, faculty, courses, departments, exams, and results. It is built using **React (Frontend)**, **Django (Backend)**, and **MySQL (Database)**, ensuring a scalable and efficient system for academic institutions.

## 🚀 Features
- **User Authentication (JWT)** – Secure login/logout for admins and faculty.
- **Student Management** – CRUD operations for student records.
- **Faculty Management** – Add, update, and manage faculty details.
- **Course & Department Management** – Organize courses under departments.
- **Enrollment System** – Students can enroll in courses.
- **Exam Scheduling & Results** – Faculty can schedule exams and manage results.
- **Responsive UI** – Built with Bootstrap for an intuitive experience.

## 🏗️ Tech Stack
### **Frontend (React)**
- React.js (SPA - Single Page Application)
- React Router (Navigation)
- Bootstrap (Styling & UI Components)
- Axios (API Calls)

### **Backend (Django + Django REST Framework)**
- Django (REST API Framework)
- Django REST Framework (Serializers, Authentication)
- Simple JWT (Token-Based Authentication)
- CORS Middleware (API Security)

### **Database (MySQL)**
- MySQL for structured data storage
- Django ORM for efficient querying

## 📁 Project Structure
```
college_management_system/
│── backend/   # Django Backend
│── frontend/  # React Frontend
```

### **Backend (Django)**
```
backend/
│── college_management/           # Django Project
│── authentication/               # User Authentication (JWT)
│── students/                     # Students Module
│── faculty/                       # Faculty Module
│── courses/                       # Courses Module
│── departments/                   # Departments Module
│── enrollment/                    # Enrollment System
│── exams/                         # Exams Module
│── results/                       # Results Module
│── requirements.txt               # Backend Dependencies
│── .env                           # Environment Variables (SECRET_KEY, DB Config)
│── manage.py                      # Django CLI Commands
│── .gitignore                      # Ignored Files
```

### **Frontend (React)**
```
frontend/
│── src/
│   │── components/                # UI Components
│   │── pages/                      # Main Pages
│   │── services/api.js             # API Integration
│   │── styles/                      # CSS Styles
│   │── App.js                       # Main React Component
│   │── index.js                     # React Entry Point
│── package.json                     # React Dependencies
│── .gitignore                        # Ignored Files
```

## 💻 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/college_management_system.git
cd college_management_system
```

### **2️⃣ Backend Setup (Django)**
```sh
cd backend
python -m venv venv       # Create a virtual environment
source venv/bin/activate  # Activate virtual environment (Mac/Linux)
venv\Scripts\activate     # Activate virtual environment (Windows)

pip install -r requirements.txt  # Install dependencies
python manage.py migrate          # Apply migrations
python manage.py createsuperuser  # Create an admin user
python manage.py runserver        # Start the Django server
```

### **3️⃣ Frontend Setup (React)**
```sh
cd ../frontend
npm install    # Install dependencies
npm start      # Start the React development server
```

## 🌐 API Endpoints
| Endpoint                | Method | Description              |
|-------------------------|--------|--------------------------|
| /api/auth/token/        | POST   | User login (JWT Token)   |
| /api/students/          | GET    | List all students        |
| /api/faculty/           | GET    | List all faculty         |
| /api/courses/           | GET    | List all courses         |
| /api/departments/       | GET    | List all departments     |
| /api/enrollment/        | POST   | Enroll a student         |
| /api/exams/             | GET    | Fetch exam schedule      |
| /api/results/           | GET    | Fetch student results    |

## 🛠️ Deployment
### **Frontend (Netlify)**
```sh
npm run build
```
Upload the `build/` folder to Netlify.

### **Backend (Render/Heroku)**
```sh
git init
git add .
git commit -m "Deploy Backend"
git push heroku main  # For Heroku Deployment
```

## 🔥 Future Enhancements
- Student & Faculty Dashboards
- Role-Based Access Control (RBAC)
- File Upload for Assignments & Results
- Performance Optimizations



