npm create vite@latest . -- --template react-ts

cd to project directory

npm install

npm install gh-pages --save-dev : #-- add deployment config

🔹 2. Add homepage field in package.json

Inside your package.json, add a "homepage" key:

"homepage": "https://<your-username>.github.io/<repository-name>"

Example:

"homepage": "https://kentcagadas.github.io/my-portfolio"

🔹 3. Add deploy scripts in package.json

Also in package.json, under "scripts", add:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

So it looks like:

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
