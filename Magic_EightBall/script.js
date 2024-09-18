document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("questionForm");
    const responseDiv = document.getElementById("response");

    const responses = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const question = document.getElementById("question").value;
        if (question.trim() !== "") {
            const randomIndex = Math.floor(Math.random() * responses.length);
            const answer = responses[randomIndex];
            responseDiv.textContent = answer;
        } else {
            responseDiv.textContent = "Please ask a question!";
        }
    });
});
