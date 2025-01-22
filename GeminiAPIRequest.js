import { useState } from "react";
import Prompt_Text from "./Prompt";

const GeminiAPIRequest = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  function getJson(text){
    let ans = text.substring(
        text.indexOf("json") + 4, 
        text.lastIndexOf("```")
    )
    return ans;
    }

  const fetchAIResponse = async () => {
    setLoading(true);
    setError(null);
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBv3eUS8aZBuVj2kxgz45mdjDEuuA1VrOo";

    const requestData = {
      contents: [
        {
          parts: [{ text: Prompt_Text+" "+query }]
        }
      ]
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setResponseData(json);
      console.log(JSON.parse(getJson(json.candidates[0].content.parts[0].text)));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

        <input onChange={(e) => setQuery(e.target.value)} />


      <button onClick={fetchAIResponse} disabled={loading}>
        {loading ? "Loading..." : "Fetch AI Response"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{getJson(responseData.candidates[0].content.parts[0].text)} </pre>
        </div>
      )}
    </div>
  );
};

export default GeminiAPIRequest;
