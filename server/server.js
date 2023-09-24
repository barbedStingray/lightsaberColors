
// create server and organize folders
// terminal command: npm init --yes
// create .gitignore file (node_modules/ .DS_Store *.log)
// terminal command: npm install express

// code your terminal
const express = require(`express`);
const app = express();
const PORT = 5001;

app.use(express.static(`server/public`));

app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
});


