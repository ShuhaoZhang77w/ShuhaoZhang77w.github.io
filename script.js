document.addEventListener("DOMContentLoaded", function() {
    const greetings = ["Hi", "你好", "Salut", "Hola", "Ciao", "Hallo", "Hej", "こんにちは"];
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