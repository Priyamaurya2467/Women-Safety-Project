const AIChat = require("../models/AIChat");
const client = require("../config/grok")

const aichat = async (req, res) => {
    try {
        const userId = req.user.id;
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required"
            });
        }

 

        const completion = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "system",
      content:
        "You are an AI Safety Assistant for women. Give practical safety advice. Keep responses under 200 words. Be calm and supportive. If it's an emergency, advise contacting emergency services and trusted contacts.",
    },
    {
      role: "user",
      content: message,
    },
  ],
});

const aiResponse = completion.choices[0].message.content;
        let chat = await AIChat.findOne({ userId });

        if (!chat) {
            chat = await AIChat.create({
                userId,
                messages: [
                    {
                        role: "user",
                        content: message,
                        timeStamp: new Date()
                    },
                    {
                        role: "assistant",
                        content: aiResponse,
                        timeStamp: new Date()
                    }
                ]
            });
        } else {
            chat.messages.push({
                role: "user",
                content: message,
                timeStamp: new Date()
            });

            chat.messages.push({
                role: "assistant",
                content: aiResponse,
                timeStamp: new Date()
            });

            await chat.save();
        }

        return res.status(200).json({
            success: true,
            message: "Chat saved successfully",
            reply: aiResponse,
            data: chat
        });

    } catch (error) {

        if (error.status === 429) {
    return res.status(429).json({
        success: false,
        message: "Groq API rate limit exceeded. Please try again later."
    });
}

      

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




const aichatHistory = async(req,res) => {
    try{
        
        const chat = await AIChat.findOne({userId:req.user.id})

        if(!chat){
            return res.status(404).json({
                success: false,
                message: "No chat history found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Chat fetched Successfully",
            data: chat
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteChatHistory = async(req,res)=>{
    try{
        const chat = await AIChat.findOne({
            _id: req.params.id,
            userId: req.user.id
        })

        if(!chat){
            return res.status(404).json({
                success: false,
                message: "Chat history not found"
            })
        }
        await AIChat.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success: true,
            message: "Chat deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    aichat,aichatHistory,deleteChatHistory
};