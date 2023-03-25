const textarea = document.querySelector('textarea');
const card1 = document.querySelector('.card-1');

textarea.addEventListener('input', function() {
  if (textarea.value !== '') {
    card1.style.background = 'rgba(19, 19, 19, 0.8)';   
    card1.style.border = '1px solid rgba(255, 255, 255, 0.35)';
  } else {
    card1.style.background = '';
    card1.style.transform = '';
    card1.style.transition = '0.3s';
    card1.style.border = '';
  }
});
textarea.onfocus = function() {
    card1.style.transform = 'translateY(-0.8em)';
    card1.style.transition = '0.3s';
  };
  
  textarea.onblur = function() {
    card1.style.transform = '';
    card1.style.transition = '0.3s';
  };
  // OpenAI code
  const apiKey = process.env.OPENAI_API_KEY; // retrieve API key from .env
const queryTextarea = document.querySelector('.query#input-text');
const convertButton = document.querySelector('.convert');
const outputTextarea = document.querySelector('.output-text');

convertButton.addEventListener('click', async () => {
  const query = queryTextarea.value;
// Send the request to OpenAI API
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: `Convert the following bash command to code:\n${query}`,
      max_tokens: 1024,
      temperature: 0.5
    })
  });
// Parse the response
const data = await response.json();
  
// Check if the request was successful
if (response.ok) {
  // Retrieve the generated code from the response
  const code = data.choices[0].text.trim();
  
  // Update the output textarea with the generated code
  outputTextarea.value = code;
} else {
  // Show an error message if the request failed
  alert(`Error: ${data.error.message}`);
}
});