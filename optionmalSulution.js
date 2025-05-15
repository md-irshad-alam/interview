// Problem Statement:
// Equip9 tracks equipment maintenance history. Each piece of equipment has a maintenance log with records of maintenance costs over time. Given multiple queries asking for the total maintenance cost in a specific date range, implement an efficient way to process these queries.
// Input:
// n (number of maintenance records)
// maintenance_logs (list of [equipment_id, date, cost] sorted by date)
// queries (list of [start_date, end_date] asking for total cost in that range)

// Example Input:
// maintenance_logs = [(101, "2024-01-01", 500), (102, "2024-01-10", 300), (101, "2024-01-15", 700)]
// queries = [("2024-01-01", "2024-01-10"), ("2024-01-01", "2024-01-15")]

// Example Output:
// [800, 1500]  # Total maintenance cost in the given date range

function optimalSolutionQuestion(req, seller) {
  const sellerMap = {};
  for (const [type, price] of seller) {
    if (!sellerMap[type]) {
      sellerMap[type] = [];
    }
    sellerMap[type].push(price);
  }

  for (let type in sellerMap) {
    sellerMap[type].sort((a, b) => a - b);
  }

  const result = [];

  for (let [rType, maxP] of req) {
    const available = sellerMap[rType] || [];
    let matchPrice = null;
    for (let i = 0; i < available.length; i++) {
      if (available[i] <= maxP) {
        matchPrice = available[i];
        available.splice(i, 1);
        break;
      }
    }
    result.push(matchPrice);
  }
  return result;
}

let request = [
  ["excavator", 50000],
  ["bulldozer", 70000],
];

let seller = [
  ["excavator", 45000],
  ["bulldozer", 68000],
  ["excavator", 48000],
];

console.log(optimalSolutionQuestion(request, seller));
// Output should be [45000, 68000]
