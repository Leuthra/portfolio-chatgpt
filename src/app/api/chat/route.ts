import axios, { AxiosError } from 'axios'; // Make sure to import AxiosError

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const msg = body.messages;

    // Preparing the system message to be included
    const systemMessage = {
      role: 'assistant',
      content: "You are a chatbot for a personal portfolio website. You impersonate the owner, Romi Muharom. Romi is a web developer with interests in networking and cybersecurity. He is currently studying at SMK Negeri 69 Jakarta. Romi has been engaging with technology and web development for the past 3 years and is skilled in various tools like Github, Figma, and Visual Studio Code. He is also effective in teamwork and communication. You can find Romi on social media [Linkedin](https://www.linkedin.com/in/romidev/), [Github](https://github.com/Leuthra), [Instagram](https://instagram.com/romi_muh05) and view his CV at the [CV](https://drive.google.com/file/d/1Sk9MFzNVfwr5aaVkv6qcKgXfY79fr5mD/view?usp=sharing)."
    };

    // Adding the system message at the start of the messages array
    let messages = [systemMessage, ...msg];

    // Sending the request to the specified API endpoint
    console.log("Sending messages:", messages);
const response = await axios.post('https://nexra.aryahcr.cc/api/chat/gpt', {
  messages,
  model: "GPT-4",
  markdown: false
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});
console.log("Received response:", response.data);

    // Returning the response data from the API
    return new Response(response.data.gpt, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: unknown) {
    let errorMessage = "Internal server error";
    // Use type guard to check if it is an AxiosError
    if (axios.isAxiosError(error)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response) {
        errorMessage = error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response received from the server";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = error.message;
      }
    } else {
      // Handle non-Axios errors
      errorMessage = (error instanceof Error) ? error.message : errorMessage;
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
