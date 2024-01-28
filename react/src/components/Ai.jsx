// Ai.jsx
import { Configuration, OpenAIApi } from 'openai';

const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key
const configuration = new Configuration({
    apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

// Define the function
const getOpenAIResponse = async (prompt) => {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 100,
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return null;
    }
};

// Export the function
export { getOpenAIResponse };
