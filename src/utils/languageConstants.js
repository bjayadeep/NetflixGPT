// src/utils/languageConstants.js

export const LANGUAGES = [
  {
    identifier: "en",
    name: "English",
    greeting: "Hello",
    placeholder: "What would you like to watch today?",
    searchButton: "Search",
    gptPromptPrefix: "Recommend movies based on: ",
    gptPromptSuffix: ". Give a comma-separated list of 5 movie names based on the query. If the query is a movie title, include that movie in the list. The movie names must be in English and nothing else. For example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.",
    noSuggestions: "No suggestions found."
  },
  {
    identifier: "hi",
    name: "हिन्दी",
    greeting: "नमस्ते",
    placeholder: "आज आप क्या देखना चाहेंगे?",
    searchButton: "खोजें",
    gptPromptPrefix: "इन पसंदों के आधार पर फ़िल्में सुझाएं: ",
    gptPromptSuffix: ". कृपया अल्पविराम से अलग की गई 5 फिल्मों के नाम ही दें। कोई अन्य पाठ शामिल न करें। उदाहरण के लिए: गदर, शोले, डॉन, गोलमाल, कोई मिल गया।",
    noSuggestions: "कोई सुझाव नहीं मिला।"
  },
  {
    identifier: "te",
    name: "తెలుగు",
    greeting: "హాయ్",
    placeholder: "ఈరోజు మీరు ఏమి చూడాలని కోరుకుంటున్నారు?",
    searchButton: "వెతకండి",
    gptPromptPrefix: "ఈ అభిరుచుల ఆధారంగా సినిమాలను సూచించండి: ",
    gptPromptSuffix: ". దయచేసి కొమా-వేరుచేసిన 5 సినిమా పేర్లను మాత్రమే ఇవ్వండి. ఇతర వచనాన్ని చేర్చవద్దు. ఉదాహరణకు: గదర్, షోలే, డాన్, గోల్మాల్, కోయి మిల్ గయా।",
    noSuggestions: "ఎటువంటి సూచనలు కనుగొనబడలేదు."
  }
];