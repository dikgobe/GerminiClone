
const apiKey = "AIzaSyAtmhrucGfElcT1PFAKF97sZhXyafVQQOA"

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai")

const MODEL_NAME = "gemini-1.0-pro"
const API_KEY =  "AIzaSyAtmhrucGfElcT1PFAKF97sZhXyafVQQOA"

async function runChat() {
    const client = new GoogleGenerativeAI(API_KEY)
    const model = GenerativeModel.GenerativeModel({model: MODEL_NAME});

    const genarationConfig = {
        temperature: 0.9,
        maxOutputTokens: 2044,
        topP: 1,
        topK: 1,
    };
    const safetySettings = [
        {category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_HIGH_AND_ABOVE,
        },
        {category: HarmCategory.HARM_CATEGORY_SELF_HARM,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
    ];
    const chat = model.startChat({
        safetySettings,
        generationConfig,
        history: [],
    });

    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response
    console.log(result.text);
}