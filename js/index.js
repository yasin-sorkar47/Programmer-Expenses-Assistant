// get income value globule to use multiple places
let getIncomeValue;
let increment = 0;
// get the calculate button and calculate the input value
document.getElementById("calculate").addEventListener("click", function () {
  increment++;
  // get the input value as number
  let income = getInputToReturnValue("income");
  let software = getInputToReturnValue("software");
  let courses = getInputToReturnValue("courses");
  let internet = getInputToReturnValue("internet");

  // validate the input filed
  if (income <= 0 || isNaN(income)) {
    validateTheInputFiled("income-error");
    return;
  }
  if (software <= 0 || isNaN(software)) {
    validateTheInputFiled("software-error");
    return;
  }
  if (courses <= 0 || isNaN(courses)) {
    validateTheInputFiled("courses-error");
    return;
  }
  if (internet <= 0 || isNaN(internet)) {
    validateTheInputFiled("internet-error");
    return;
  }

  getIncomeValue = income;

  //   get the total expenses
  let totalExpenses = software + courses + internet;
  let balance = income - totalExpenses;
  //   validate the input filed
  if (income < totalExpenses) {
    validateTheInputFiled("logic-error");
    return;
  }

  //   shoe your total expenses result in the dom
  let getTotalExpensesFiledToNumber = parseFloat(
    document.getElementById("total-expenses").innerText
  );
  let finalExpenses = getTotalExpensesFiledToNumber + totalExpenses;
  document.getElementById("total-expenses").innerText =
    finalExpenses.toFixed(2);

  //   show balance in dom
  let getBalanceFiledIntoNumber = parseFloat(
    document.getElementById("balance").innerText
  );
  let finalBalance = getBalanceFiledIntoNumber + balance;
  document.getElementById("balance").innerText = finalBalance.toFixed(2);

  //   show the result section
  document.getElementById("results").classList.remove("hidden");

  //   add the child in history-section

  let div = document.createElement("div");
  div.classList.add(
    "p-3",
    "border-l-2",
    "border-purple-400",
    "rounded-md",
    "bg-white",
    "shadow-sm"
  );
  div.innerHTML = `
    <p>${increment}</p>
    <p>${new Date().toLocaleDateString()}</p>
    <p>Amount: $${income.toFixed(2)}</p>
    <p>expenses:$${totalExpenses.toFixed(2)}</p>
    <p>balance:$${balance.toFixed(2)}</p>
    `;

  // add the creating div in dom as a firstChild
  let historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(div, historyContainer.firstChild);
  //   clear the input filed
  document.getElementById("income").value = " ";
  document.getElementById("software").value = " ";
  document.getElementById("courses").value = " ";
  document.getElementById("internet").value = " ";
});

// get saving button to save the money
document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    // get the input value
    let income = getIncomeValue;
    let savingInput = parseFloat(document.getElementById("savings").value);

    // validate the input filed
    if (savingInput <= 0 || isNaN(savingInput)) {
      document.getElementById("savings-error").classList.remove("hidden");
      return;
    }

    // get the saving amount
    let savingAmount = (income * savingInput) / 100;
    let remainingBalance = income - savingAmount;

    // show savings-amount in dom
    let getSavingsAmountIntoNumber = parseFloat(
      document.getElementById("savings-amount").innerText
    );
    let finalSavingAmount = getSavingsAmountIntoNumber + savingAmount;
    document.getElementById("savings-amount").innerText =
      finalSavingAmount.toFixed(2);

    // show Remaining Balance amount
    let getRemainingBalanceIntoNumber = parseFloat(
      document.getElementById("remaining-balance").innerText
    );
    let finalRemainingBalance =
      getRemainingBalanceIntoNumber + remainingBalance;
    document.getElementById("remaining-balance").innerText =
      finalRemainingBalance.toFixed(2);

    //   clear the input filed
    document.getElementById("savings").value = " ";
    getIncomeValue = " ";
  });

//  get the history to write history codes
document.getElementById("history-tab").addEventListener("click", function () {
  // add the classes on button
  this.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  // remove the classes from button
  document
    .getElementById("assistant-tab")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );

  document.getElementById("assistant-tab").classList.add("text-gray-600");

  //   hide the input fileds
  document.getElementById("expense-form").classList.add("hidden");

  //   show the history-section
  document.getElementById("history-section").classList.remove("hidden");
});

// switch the assistant filed
document.getElementById("assistant-tab").addEventListener("click", function () {
  // add the classes on button
  this.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  // remove the classes from button
  document
    .getElementById("history-tab")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );

  document.getElementById("history-tab").classList.add("text-gray-600");

  //   show the input fileds
  document.getElementById("expense-form").classList.remove("hidden");

  //   hide the history-section
  document.getElementById("history-section").classList.add("hidden");
});
