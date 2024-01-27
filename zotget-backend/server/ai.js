const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateSuggestions(category) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // or another appropriate model
      prompt: `Generate budget improvement suggestions for the category: ${category}`,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    throw error;
  }
}

module.exports = { generateSuggestions };
