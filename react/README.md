# react
## How to create new reactproject
In terminal:
```
npm create vite@latest projectfolder_name
choose 'React' then 'Javascript + swc'
cd projectfolder_name
npm install
```
Run app: ```npm run dev```

## Downloadables 
- Pie Chart: ```npm install chart.js ```
- OpenAI api: ```npm install --save openai```
- Axios: ```npm i axios```

## OpenAI api
Create a .env file in project directory to store the api secret key. 
- Follow this format:
    ```
        VITE_OPENAI_API_KEY= "OPENAI_SECRET_KEY"
    ```
- This app uses model GPT3

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
