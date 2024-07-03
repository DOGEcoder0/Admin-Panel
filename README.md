# Admin_panel
## Description
Developed a basic admin panel that include user registration. login functionality and CRUD operations on users

## Project Setup
### Client Setup
```markdown
1. Create a `client` directory:
   ```bash
   mkdir client
   cd client
   ```
2. Initialize a new React app:
   ```bash
   npx create-react-app .
   ```
3. Replace the `src` folder with the contents from your GitHub repository.

### Server Setup
1. Create a `server` directory:
   ```bash
   mkdir server
   cd server
   ```
2. Initialize npm and create `package.json`:
   ```bash
   npm init -y
   ```
3. Install server dependencies:
   ```bash
   npm install mongoose bcrypt jsonwebtoken dotenv cors express nodemon
   ```

### Environment Setup
1. Create a `.env` file in the `server` directory.
2. Add the following keys with appropriate values:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

### Client Dependencies
1. Install React dependencies:
   ```bash
   cd client
   npm install react redux redux-thunk react-router
   ```

## Running the Project
1. Start the server:
   ```bash
   cd server
   npm start
   ```
2. Start the client (in a separate terminal):
   ```bash
   cd client
   npm start
   ```

