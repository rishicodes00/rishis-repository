const calculateTax = () => {
  const income = parseFloat(document.getElementById('income').value);
  const regime = document.querySelector('input[name="regime"]:checked').value;

  let tax = 0;
  if (regime === 'old') {
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
  } else if (regime === 'new') {
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 750000) {
      tax = 12500 + (income - 500000) * 0.1;
    } else if (income <= 1000000) {
      tax = 37500 + (income - 750000) * 0.15;
    } else if (income <= 1250000) {
      tax = 75000 + (income - 1000000) * 0.2;
    } else if (income <= 1500000) {
      tax = 125000 + (income - 1250000) * 0.25;
    } else {
      tax = 187500 + (income - 1500000) * 0.3;
    }
  }

  const totalAmount = income + tax;
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Tax amount: ₹ ${tax.toFixed(
    2
  )}\nTotal amount: ₹ ${totalAmount.toFixed(2)}`;
};

const calculateButton = document.getElementById('calculate-btn');
calculateButton.addEventListener('click', calculateTax);

const regimeRadios = document.querySelectorAll('input[name="regime"]');
regimeRadios.forEach((radio) => radio.addEventListener('change', calculateTax));
