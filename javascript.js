function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        const resultElement = document.getElementById('result');

        let resultText = `Your BMI is ${bmi.toFixed(2)}. `;

        if (bmi < 18.5) {
            resultText += 'You are underweight.)';
        } else if (bmi < 24.9) {
            resultText += 'You have a normal weight.';
        } else if (bmi < 29.9) {
            resultText += 'You are overweight.';
        } else {
            resultText += 'You are obese.';
        }

        resultElement.textContent = resultText;
    } else {
        alert('Please enter valid numbers for weight and height.');
    }
}


     
