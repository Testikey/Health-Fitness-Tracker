function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  
  if (weight > 0 && height > 0) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let category = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${category})`;
  } else {
    alert('Please enter valid weight and height!');
  }
}
