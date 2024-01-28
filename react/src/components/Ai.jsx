// Ai.jsx
import OpenAI from 'openai';

// import fs from 'fs';
// import path from 'path'; // Node.js path module

// // Get the absolute path to secrets.json
// const secretsPath = path.resolve(__dirname, '../../secrets.json');
// // Read the API key from secrets.json
// const secrets = JSON.parse(fs.readFileSync(secretsPath, 'utf-8'));
// const apiKey = secrets.openaiApiKey;

const apiKey = 'OPEN_AI_KEY'; // Replace with your actual API key

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

// Define the function
const getOpenAIResponse = async (prompt) => {
    try {
        const response = await openai.completions.create({
            //model: 'text-davinci-003', //deprecated as of 01/04/2024 https://stackoverflow.com/questions/77789886/openai-api-error-the-model-text-davinci-003-has-been-deprecated
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            max_tokens: 100,
        });
        return response.choices[0].text;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return null;
    }
};

// Export the function
export { getOpenAIResponse };
