document.addEventListener("DOMContentLoaded", function() {
    const greetings = ["Hello", "你好", "Bonjour", "Hola", "Ciao", "Hallo", "Hej", "Olá", "こんにちは", "안녕하세요", "مرحباً", "नमस्ते", "Здравствуйте"];
    let index = 0;

    function changeGreeting() {
        const greetingElement = document.getElementById("greeting");

        greetingElement.style.opacity = 0;

        setTimeout(() => {
            greetingElement.textContent = greetings[index];
            greetingElement.style.opacity = 1;
            index = (index + 1) % greetings.length;
        }, 1000);
    }

    setInterval(changeGreeting, 3000);

    changeGreeting();
});
