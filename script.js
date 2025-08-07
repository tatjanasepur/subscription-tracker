const subscriptions = [
  {
    name: "Netflix",
    category: "Entertainment",
    cost: "$12.99",
    renewal: "2025-09-01",
    note: "Renew early to avoid service interruption",
  },
  {
    name: "Spotify",
    category: "Entertainment",
    cost: "$9.99",
    renewal: "2025-08-20",
    note: "Student discount applied",
  },
  {
    name: "Wolt+",
    category: "Food",
    cost: "$5.99",
    renewal: "2025-08-10",
    note: "",
  },
  {
    name: "Glovo+",
    category: "Food",
    cost: "$6.50",
    renewal: "2025-08-25",
    note: "Shared plan",
  },
  {
    name: "Google Drive",
    category: "Utilities",
    cost: "$1.99",
    renewal: "2025-09-05",
    note: "",
  }
];

function renderSubscriptions() {
  const grouped = {
    Entertainment: document.getElementById('entertainment-list'),
    Food: document.getElementById('food-list'),
    Utilities: document.getElementById('utilities-list'),
  };

  subscriptions.forEach(sub => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${sub.name}</strong>
      <span>Cost: ${sub.cost}</span>
      <span>Renewal Date: ${sub.renewal}</span>
      ${sub.note ? `<span>Note: ${sub.note}</span>` : ''}
    `;
    grouped[sub.category]?.appendChild(li);
  });
}

renderSubscriptions();
