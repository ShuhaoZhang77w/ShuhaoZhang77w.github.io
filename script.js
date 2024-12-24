document.addEventListener("DOMContentLoaded", function() {
    const greetings = ["Hello", "你好", "Bonjour", "Hola", "Ciao", "Hallo", "Hej", "Olá", "こんにちは", "안녕하세요", "مرحباً", "שלום", "नमस्ते", "Привіт", "Здравствуйте", "Merhaba", "Γειά σου"];
    
    function getRandomGreeting() {
        const randomIndex = Math.floor(Math.random() * greetings.length); // 随机生成一个索引
        return greetings[randomIndex];
    }

    function changeGreeting() {
        const greetingElement = document.getElementById("greeting");

        greetingElement.style.opacity = 0;

        setTimeout(() => {
            greetingElement.textContent = getRandomGreeting(); // 使用随机问候语
            greetingElement.style.opacity = 1;
        }, 1000);
    }

    setInterval(changeGreeting, 3000);

    changeGreeting();
});