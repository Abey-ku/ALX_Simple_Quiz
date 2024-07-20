<script>
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the user’s answer with the correct answer
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
</script>