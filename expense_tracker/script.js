document.addEventListener("DOMContentLoaded", () => {
  const expenseform = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();

  expenseform.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expenses.push(newExpense);
      saveExpensesToLocal()
      renderExpenses()
      updateTotal()

      //clear input
      expenseNameInput.value =''
      expenseAmountInput.value=''
    }
  });

  function calculateTotal(){
    return expenses.reduce((sum,expense)=>(sum+expense.amount),0)
  }

  function saveExpensesToLocal(){
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  function renderExpenses(){
    expenseList.innerHTML=''
    expenses.forEach(expense =>{
      const li =document.createElement("li");
      li.innerHTML=`
      ${expense.name} - ${expense.amount}
      <button data-id="${expense.id}">Delelet</button>
      `
      expenseList.appendChild(li)
    })
  }

  function updateTotal(){
    totalAmount= calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  expenseList.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
      const expenseId= parseInt(e.target.getAttribute('data-id'))
      expenses= expenses.filter(expense => expense.id !== expenseId)

      saveExpensesToLocal()
      renderExpenses()
      updateTotal()
    }
  })

});
