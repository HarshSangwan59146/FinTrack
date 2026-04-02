let totalIncome = 0;
let totalExpense = 0;
let currentType = "";

function saveTransaction() {

    let desc = document.getElementById('desc').value;
    let amount = +document.getElementById('amount').value;
    let category = document.getElementById('category').value;

    if (!desc || !amount) {
        alert("Please fill all fields");
        return;
    }

    if (currentType === "income") {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    document.getElementById('transaction-list').innerHTML =
        `<div class="transaction-item">
            <div class="item-icon">${category}</div>
            <div class="item-info">
                <h4>${desc}</h4>
                <p>${currentType}</p>
            </div>
            <div class="item-amount">₹${amount}</div>
        </div>` +
        document.getElementById('transaction-list').innerHTML;

    document.getElementById('total-income').innerText = "₹" + totalIncome;
    document.getElementById('total-expense').innerText = "₹" + totalExpense;
    document.getElementById('total-balance').innerText = "₹" + (totalIncome - totalExpense);

    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('category').value = "";

    closeModal();
}

function openModal(type) {
    currentType = type;

    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('category').value = "";

    document.getElementById('modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}






// let transactions = JSON.parse(localStorage.getItem('finTrack_data')) || [];
// let currentType = 'income';

// window.onload = updateUI;

// function openModal(type) {
//     currentType = type;
//     document.getElementById('modal-title').innerText = type === 'income' ? 'Add Income' : 'Add Expense';
//     document.getElementById('modal').style.display = 'flex';
// }

// function closeModal() {
//     document.getElementById('modal').style.display = 'none';
//     clearInputs();
// }

// function clearInputs() {
//     document.getElementById('desc').value = '';
//     document.getElementById('amount').value = '';
//     document.getElementById('friends').value = '';
// }

// function saveTransaction() {
//     const desc = document.getElementById('desc').value;
//     const amount = parseFloat(document.getElementById('amount').value);
//     const category = document.getElementById('category').value;
//     const friendsInput = document.getElementById('friends').value;

//     if (!desc || isNaN(amount)) return alert("Please fill details");

//     const newTransaction = {
//         id: Date.now(),
//         desc,
//         amount,
//         type: currentType,
//         category,
//         friends: friendsInput ? friendsInput.split(',').map(f => f.trim()) : []
//     };

//     transactions.push(newTransaction);
//     localStorage.setItem('finTrack_data', JSON.stringify(transactions));

//     updateUI();
//     closeModal();
// }

// function updateUI() {
//     const list = document.getElementById('transaction-list');
//     const incomeEl = document.getElementById('total-income');
//     const expenseEl = document.getElementById('total-expense');
//     const balanceEl = document.getElementById('total-balance');

//     list.innerHTML = '';
//     let totalInc = 0;
//     let totalExp = 0;

//     transactions.forEach(t => {
//         if (t.type === 'income') totalInc += t.amount;
//         else totalExp += t.amount;

//         const div = document.createElement('div');
//         div.className = 'transaction-item';

//         let splitText = 'Cash';
//         if (t.friends.length > 0) {
//             const splitAmt = (t.amount / (t.friends.length + 1)).toFixed(2);
//             splitText = `${t.friends.join(', ')} owe ₹${splitAmt} each`;
//         }

//         div.innerHTML = `
//             <div class="item-icon">${t.category.split(' ')[0]}</div>
//             <div class="item-info">
//                 <h4>${t.desc}</h4>
//                 <p>${splitText}</p>
//             </div>
//             <div class="item-amount ${t.type === 'income' ? 'amt-income' : 'amt-expense'}">
//                 ${t.type === 'income' ? '+' : '-'} ₹${t.amount}
//             </div>
//         `;
//         list.prepend(div);
//     });

//     if (transactions.length === 0) {
//         list.innerHTML = '<p class="empty-msg">No transactions yet.</p>';
//     }

//     incomeEl.innerText = `₹${totalInc}`;
//     expenseEl.innerText = `₹${totalExp}`;
//     balanceEl.innerText = `₹${totalInc - totalExp}`;
// }