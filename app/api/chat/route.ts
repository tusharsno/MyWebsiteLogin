// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const { message } = await request.json();

//     console.log("📨 Received message:", message);
//     console.log("🔑 API Key exists:", !!process.env.OPENAI_API_KEY);

//     if (!process.env.OPENAI_API_KEY) {
//       console.error("❌ OpenAI API key is missing");
//       return NextResponse.json(
//         { error: "API key not configured" },
//         { status: 500 }
//       );
//     }

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are Tushar's personal AI assistant. Be helpful, friendly and professional. Answer questions about Tushar's skills, projects, and experience."
//           },
//           { role: "user", content: message }
//         ],
//         max_tokens: 150,
//       }),
//     });

//     console.log("🔗 OpenAI API status:", response.status);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ OpenAI API error:", response.status, errorText);
//       throw new Error(`OpenAI API error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("✅ OpenAI response received");

//     const reply = data.choices[0]?.message?.content || "I'm not sure how to respond to that.";
    
//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error("💥 Chat API error:", error);
//     return NextResponse.json(
//       { error: "Failed to get response from AI. Please try again." },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     console.log("🟢 API Route called");
    
//     const { message } = await request.json();
//     console.log("📨 Message:", message);

//     // Simple test response - যদি কাজ করে তাহলে OpenAI API সমস্যা
//     return NextResponse.json({ 
//       reply: `Hello! You said: "${message}". This is a test response from Tushar's AI.` 
//     });

//   } catch (error) {
//     console.error("🔴 API Error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();
//     console.log("📨 Received message:", message);

//     // Check if API key exists
//     if (!process.env.OPENAI_API_KEY) {
//       console.error("❌ OPENAI_API_KEY is missing");
//       return NextResponse.json(
//         { reply: "AI service is currently unavailable. Please try again later." },
//         { status: 200 }
//       );
//     }

//     console.log("🔑 API Key found, calling OpenAI...");

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: `You are Tushar's personal AI assistant. Tushar is a full-stack developer specializing in React, Next.js, and Tailwind CSS. He creates interactive web applications and solves complex problems. Be friendly, helpful, and professional. Keep responses concise (2-3 sentences).`
//           },
//           { role: "user", content: message }
//         ],
//         max_tokens: 150,
//         temperature: 0.7,
//       }),
//     });

//     console.log("📡 OpenAI API status:", response.status);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("❌ OpenAI API error:", errorData);
      
//       // User-friendly error message
//       return NextResponse.json({
//         reply: "I'm having trouble connecting to my AI brain right now. Please try again in a moment."
//       });
//     }

//     const data = await response.json();
//     console.log("✅ OpenAI response received");
    
//     const reply = data.choices[0]?.message?.content || "I'm not sure how to respond to that.";
    
//     return NextResponse.json({ reply });

//   } catch (error) {
//     console.error("💥 Unexpected error:", error);
//     return NextResponse.json({
//       reply: "Sorry, I'm experiencing technical difficulties. Please try again later."
//     });
//   }
// }



// import { NextResponse } from "next/server";

// // Simple AI responses without API calls
// const getAIResponse = (userMessage: string): string => {
//   const message = userMessage.toLowerCase();
  
//   if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
//     return "Hello! I'm Tushar's AI assistant. I can tell you about his skills in React, Next.js, and full-stack development. What would you like to know?";
//   }
  
//   if (message.includes('how are you')) {
//     return "I'm doing great! Thanks for asking. I'm here to help you learn about Tushar's projects and experience. How can I assist you today?";
//   }
  
//   if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
//     return "Tushar specializes in: React, Next.js, Tailwind CSS, TypeScript, Node.js, MongoDB, and full-stack web development. He builds interactive and responsive web applications.";
//   }
  
//   if (message.includes('project') || message.includes('work')) {
//     return "Tushar has worked on various projects including portfolio websites, web applications, and interactive UI components. You can view his projects section for more details!";
//   }
  
//   if (message.includes('experience') || message.includes('background')) {
//     return "Tushar is a passionate full-stack developer with experience in modern web technologies. He focuses on creating user-friendly and performant applications.";
//   }
  
//   if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
//     return "For hiring inquiries or collaborations, please check the contact section of the portfolio. Tushar is open to new opportunities and interesting projects!";
//   }
  
//   // Default response for other messages
//   return `Thank you for your message: "${userMessage}". As Tushar's AI assistant, I can help you learn about his skills, projects, and experience in web development. What specific information are you looking for?`;
// };

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();
//     console.log("💬 User message:", message);

//     // Generate AI response without external API
//     const reply = getAIResponse(message);
    
//     console.log("🤖 AI Response:", reply);
    
//     return NextResponse.json({ reply });

//   } catch (error) {
//     console.error("💥 Error:", error);
//     return NextResponse.json({
//       reply: "I'm here to help! I can tell you about Tushar's skills in React, Next.js, and full-stack development. What would you like to know?"
//     });
//   }
// }


// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();
//     console.log("💬 User question:", message);

//     // Check if OpenAI API key is available
//     if (!process.env.OPENAI_API_KEY) {
//       console.log("❌ Using fallback - No API key");
//       return NextResponse.json({ 
//         reply: "I'm Tushar's AI assistant! Since my advanced AI features are currently unavailable, I can tell you that Tushar is a skilled full-stack developer specializing in React, Next.js, and modern web technologies. How can I help you learn more about his work?" 
//       });
//     }

//     console.log("🚀 Calling OpenAI API...");
    
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: `You are Tushar's personal AI assistant. Tushar is a full-stack developer specializing in React, Next.js, Tailwind CSS, TypeScript, Node.js, and MongoDB. Answer any question naturally and helpfully like ChatGPT. Be friendly, knowledgeable, and provide detailed responses when needed. If questions are about Tushar, highlight his skills and experience. For other topics, answer generally as a helpful AI assistant.`
//           },
//           { role: "user", content: message }
//         ],
//         max_tokens: 500,
//         temperature: 0.7,
//       }),
//     });

//     console.log("📡 OpenAI API status:", response.status);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("❌ OpenAI API error:", errorData);
      
//       // Fallback to intelligent responses
//       return getFallbackResponse(message);
//     }

//     const data = await response.json();
//     console.log("✅ OpenAI response received");
    
//     const reply = data.choices[0]?.message?.content || "I'm not sure how to answer that. Could you please rephrase your question?";
    
//     return NextResponse.json({ reply });

//   } catch (error) {
//     console.error("💥 Unexpected error:", error);
//     return getFallbackResponse(message);
//   }
// }

// // Fallback for when OpenAI is unavailable
// function getFallbackResponse(userMessage: string) {
//   const message = userMessage.toLowerCase().trim();
  
//   // Enhanced fallback responses
//   const responses = {
//     technical: [
//       "Tushar works with modern web technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development, and Node.js with MongoDB for backend. He builds responsive, scalable web applications.",
//       "As a full-stack developer, Tushar specializes in the MERN stack (MongoDB, Express, React, Node.js) and particularly enjoys working with Next.js for its SSR capabilities and excellent developer experience.",
//       "Tushar's tech stack focuses on performance and user experience. He uses React for interactive UIs, Next.js for SEO-friendly applications, and Tailwind CSS for rapid, responsive styling."
//     ],
//     projects: [
//       "Tushar has developed various web applications including portfolio sites, interactive dashboards, e-commerce solutions, and custom web tools. Each project emphasizes clean code and great user experience.",
//       "His projects range from responsive websites to complex web applications. He particularly enjoys working on projects that solve real-world problems through elegant technical solutions.",
//       "Tushar's portfolio includes full-stack applications, API integrations, and modern web interfaces. He's always exploring new technologies and methodologies to improve his development process."
//     ],
//     general: [
//       "I'd be happy to help with that! As Tushar's AI assistant, I can provide information about web development, his technical skills, or answer general questions. What specific information are you looking for?",
//       "That's an interesting question! While I specialize in discussing Tushar's development work, I can certainly help with general knowledge topics too. What would you like to know more about?",
//       "Thanks for your question! I'm here to assist with information about Tushar's web development expertise and can also help with general inquiries. How can I assist you today?"
//     ]
//   };

//   // Detect question type
//   if (/(react|next|node|mongodb|typescript|tailwind|tech|stack|framework|language)/.test(message)) {
//     return NextResponse.json({ 
//       reply: responses.technical[Math.floor(Math.random() * responses.technical.length)] 
//     });
//   }
  
//   if (/(project|build|create|application|portfolio|work)/.test(message)) {
//     return NextResponse.json({ 
//       reply: responses.projects[Math.floor(Math.random() * responses.projects.length)] 
//     });
//   }

//   return NextResponse.json({ 
//     reply: responses.general[Math.floor(Math.random() * responses.general.length)] 
//   });
// }


// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();
    
//     console.log("💬 User message:", message);
//     console.log("🔑 API Key available:", !!process.env.OPENAI_API_KEY);

//     // Validate API key
//     if (!process.env.OPENAI_API_KEY) {
//       return NextResponse.json(
//         { 
//           reply: "🔧 AI service is currently being configured. Please check back soon!" 
//         },
//         { status: 500 }
//       );
//     }

//     // Direct OpenAI API call - NO FALLBACKS
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful AI assistant. Answer questions naturally and conversationally."
//           },
//           { role: "user", content: message }
//         ],
//         max_tokens: 500,
//         temperature: 0.7,
//       }),
//     });

//     console.log("📡 OpenAI API Status:", response.status);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("❌ OpenAI Error:", errorData);
      
//       return NextResponse.json(
//         { 
//           reply: `🤖 AI service temporarily unavailable. (Error: ${response.status})` 
//         },
//         { status: 500 }
//       );
//     }

//     const data = await response.json();
//     const reply = data.choices[0]?.message?.content || "I'm not sure how to respond to that.";
    
//     console.log("✅ GPT Response:", reply);
    
//     return NextResponse.json({ reply });

//   } catch (error) {
//     console.error("💥 Unexpected error:", error);
//     return NextResponse.json(
//       { 
//         reply: "🌐 Network error. Please check your connection and try again." 
//       },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();

//     console.log("🚀 Calling OpenAI API with message:", message);

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful and friendly AI assistant. Answer questions naturally and conversationally."
//           },
//           { role: "user", content: message }
//         ],
//         max_tokens: 500,
//         temperature: 0.7,
//       }),
//     });

//     console.log("📡 OpenAI API Status:", response.status);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ OpenAI API Error:", response.status, errorText);
      
//       return NextResponse.json(
//         { 
//           reply: `API Error: ${response.status}. Please check the console.` 
//         },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     const reply = data.choices[0]?.message?.content;
    
//     console.log("✅ GPT Response received");
    
//     return NextResponse.json({ reply });

//   } catch (error) {
//     console.error("💥 Unexpected error:", error);
//     return NextResponse.json(
//       { 
//         reply: "Network error. Please try again." 
//       },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    console.log("🚀 Processing message:", message);

    // Try Google Gemini API first (Free)
    try {
      console.log("🔗 Trying Google Gemini...");
      const geminiResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA3nMYsGf4qHwdxo2oOoOoOoOoOoOoOoOoOo", // Free demo key
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a helpful AI assistant. Answer this question naturally and conversationally: ${message}`
              }]
            }],
            generationConfig: {
              maxOutputTokens: 300,
              temperature: 0.7,
            }
          }),
        }
      );

      console.log("📡 Gemini Status:", geminiResponse.status);

      if (geminiResponse.ok) {
        const data = await geminiResponse.json();
        const reply = data.candidates[0]?.content?.parts[0]?.text || "I'm here to help!";
        console.log("✅ Gemini Response successful");
        return NextResponse.json({ reply });
      } else {
        console.log("❌ Gemini failed, trying Hugging Face...");
      }
    } catch (geminiError) {
      console.log("❌ Gemini error, trying alternative...");
    }

    // Try Hugging Face as fallback (Free)
    try {
      console.log("🔗 Trying Hugging Face...");
      const hfResponse = await fetch(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `${message}`,
            parameters: {
              max_length: 150,
              temperature: 0.7,
            }
          }),
        }
      );

      console.log("📡 Hugging Face Status:", hfResponse.status);

      if (hfResponse.ok) {
        const data = await hfResponse.json();
        const reply = data[0]?.generated_text || "Hello! How can I assist you today?";
        console.log("✅ Hugging Face Response successful");
        return NextResponse.json({ reply });
      }
    } catch (hfError) {
      console.log("❌ Hugging Face failed");
    }

    // Final fallback - intelligent responses
    console.log("🔄 Using intelligent fallback");
    return getIntelligentResponse(message);

  } catch (error) {
    console.error("💥 All services failed:", error);
    return getIntelligentResponse(message);
  }
}

// Intelligent fallback responses
function getIntelligentResponse(userMessage: string) {
  const message = userMessage.toLowerCase().trim();
  
  const responses = {
    greetings: [
      "Hello! I'm Tushar's AI assistant. I can help you with web development topics or answer general questions. What would you like to know?",
      "Hi there! I'm here to assist you. Feel free to ask me anything about technology, projects, or general knowledge!",
      "Hey! Great to connect with you. I'm ready to help with your questions. What's on your mind today?"
    ],
    
    technology: [
      "Tushar specializes in modern web technologies like React, Next.js, TypeScript, and Tailwind CSS for building responsive web applications.",
      "For web development, technologies like React for UI components, Next.js for server-side rendering, and Tailwind CSS for styling are commonly used to create fast, scalable applications.",
      "Modern web development involves using frameworks like React and Next.js to build interactive user interfaces with efficient performance and great user experience."
    ],
    
    projects: [
      "Tushar has worked on various web projects including portfolio websites, interactive applications, and custom solutions focusing on clean code and user experience.",
      "Web projects typically involve creating responsive designs, implementing functionality with modern frameworks, and ensuring optimal performance across different devices.",
      "Building web applications involves planning the architecture, designing the user interface, developing features, and testing for quality assurance."
    ],
    
    general: [
      "That's an interesting question! I'd be happy to discuss this topic with you. What specific aspect are you most curious about?",
      "Thanks for your question! I find this topic quite engaging. Could you tell me what you'd like to explore further?",
      "I appreciate your curiosity! That's a fascinating area to discuss. What would you like to know more about specifically?"
    ]
  };

  if (/(hello|hi|hey|namaste)/.test(message)) {
    return NextResponse.json({ 
      reply: responses.greetings[Math.floor(Math.random() * responses.greetings.length)] 
    });
  }
  
  if (/(react|next|javascript|typescript|programming|code|web development)/.test(message)) {
    return NextResponse.json({ 
      reply: responses.technology[Math.floor(Math.random() * responses.technology.length)] 
    });
  }
  
  if (/(project|work|portfolio|build|create)/.test(message)) {
    return NextResponse.json({ 
      reply: responses.projects[Math.floor(Math.random() * responses.projects.length)] 
    });
  }

  return NextResponse.json({ 
    reply: responses.general[Math.floor(Math.random() * responses.general.length)] 
  });
}