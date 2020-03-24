// MODEL /////////////////////////////////////

function createExpense(title, category, amount)
{
    // return {
    //     'title':title,
    //     'category':category,
    //     'amount':amount
    // }
    // the shortcut is:
    return { title, category, amount};
}

function addExpense(expense) {
    expenses.push(expense);

    // after adding an expense, we will sort the array
    expenses.sort(function(left, right){
        return left.amount - right.amount;
    })
}

function findByCategory(category) {
    let matched = [];
    for (let e of expenses) {
        if (e.category == category) {
            matched.push(e)
        }
    }
    return matched;
}

// this is the model that stores all the expenses
let expenses = [];



// VIeW //////////////////////////////////////////
$("#add-expense-btn").click(function(){
    let title = $("#title").val();
    let category = $("#category").val();
    let amount = $("#amount").val();
    handleAddExpense(title, category, amount);
})

$("#search-btn").click(function(){
    let category = $("#search-category").val();
    handleSearchByCategory(category);
})

function updateExpenseList(expenses)
{
    $("#expense-list").empty();
    for (let e of expenses) {
        $("#expense-list").append(`<li>[${e.category}] ${e.title} - ${e.amount}</li>`)
    }
}

// CONTROLLER ///////////////////////////////////
function handleAddExpense(title, category, amount) 
{
    let expenseObject = createExpense(title, category, amount);
    addExpense(expenseObject);
    updateExpenseList(expenses);

}

function handleSearchByCategory(category)
{
    let matched = findByCategory(category);
    updateExpenseList(matched);

}