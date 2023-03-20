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
  const api = new openai.api(process.env.OPENAI_API_KEY);
  function generateOutput() {
    const inputText = document.getElementById("input-text").value;
    api.completions.create({
      engine: 'text-davinci-002',
      prompt: `Convert the following query to bash:\n${inputText}`,
      maxTokens: 1024,
      n: 1,
      stop: "\n"
    }).then((response) => {
      const outputText = response.choices[0].text.trim();
      document.getElementById("output-text").value = outputText;
    }).catch((error) => {
      console.error(error);
    });
  }