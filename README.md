# How To Run the Project

    1. Have postgres running
    2. Go into the backend directory
    3. Edit the DB field in the .env file to have a valid DB name
    4. Run npm install
    5. Run npm run dev
    6. The backend server should start on port 3080
    7. Go into the frontend directory
    8. Run npm install
    9. Run npm run start
    10. The frontend should start at http://localhost:3000 and automatically connect to the backend.
 

## Features

- The frontend is built using `React` (Typescript) as requested and styled with `Bootstrap`
- The backend uses `NodeJS` and `PostgreSQL`. The logos are not saved to the database. Only the filename is saved for a particular record which is all that is needed to retrive it later if needed. The logos are saved in the backend directory in a folder named images which is created when the server runs.

