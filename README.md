# MERN-techNotes

### Env Variables

Create a .env file in backend and add the following:

```
NODE_ENV = development
DATABASE_URI = your mongo db uri
ACCESS_TOKEN_SECRET = your access token secret
REFRESH_TOKEN_SECRET = your refresh token secret
```

### Install Dependencies (backend & frontend)

```
cd backend and run npm install
cd frontend and run npm install
```

### Run

```
# Run backend (:3500)
cd backend and than run next command: npm run dev

# Run frontend (:3000)
cd frontend and than run next command: npm start
```

### Seed Database

You can use the following commands to seed the database with some sample users and notes as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

username: DanD (Admin, Employee, Manager)
password: Dand1234

username: Mark (Manager)
password: Mark1234

username: John (Employee)
password: John1234
```

```
Complete functionalities in this application:
 1. Added a public facing page with basic contact info
 2. Added an employee login to the notes app
 3. Provided a welcome page after login
 4. Provided easy navigation
 5. Display current user and assigned role
 6. Logout option
 7. Require users to login at least once per week
 8. Provide a way to remove employee access asap if needed
 9. Notes are assigned to specific employees
 10. Notes have a ticket #, title, note body, created & updated dates
 11. Notes are either OPEN or COMPLETED
 12. Users can be Employees, Managers, or Admins
 13. Notes can only be deleted by Managers or Admins
 14. Anyone can create a note (when customer checks-in)
 15. Employees can only view and edit their assigned notes
 16. Managers and Admins can view, edit, and delete all notes
 17. Only Managers and Admins can access User Settings
 18. Only Managers and Admins can create new users
 19. Desktop mode is most important but should be available in mobile
```
