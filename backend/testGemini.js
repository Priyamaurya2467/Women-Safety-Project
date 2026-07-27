require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent("Hello");
  console.log(result.response.text());
}

test().catch(console.error);