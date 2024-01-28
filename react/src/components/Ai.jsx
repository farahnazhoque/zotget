import OpenAI from "openai";
import axios from "axios"; // Make sure to import axios

const GPTKEY = import.meta.env.VITE_OPENAI_API_KEY;

const GPT4TurboModel = "gpt-4-1106-preview";
const GPT3 = "gpt-3.5-turbo-1106";
// Define the function
async function getOpenAIResponse(prefix, product, suffix) {
    try {
      const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
  
            model: GPT3,
            messages: [
              {
                role: "user",
                content: `${prefix} ${product} ${suffix}`,
              },
            ],
            temperature: 0.7,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${GPTKEY}`,
            },
          }
      );
      console.log(response.data.choices[0].message.content)
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling OpenAI to generate tutorial notes:", error);
      throw error;
    }
  }

// Export the function
export { getOpenAIResponse };
