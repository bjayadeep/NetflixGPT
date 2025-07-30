export const fetchGptMovieSuggestions = async (prompt) => {

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    console.error("Gemini API Key is not set in environment variables.");
    return "";
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }]
        })
      }
    );

    const result = await res.json();
    return result?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (err) {
    console.error('Gemini API Error:', err);
    return "";
  }
};