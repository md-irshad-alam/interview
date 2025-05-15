// Equip9 manages a network of equipment rental providers. Each provider has connections with other providers, allowing customers to rent equipment even if their preferred provider does not have availability. Given a list of providers and their connections, determine the shortest path to find the nearest available equipment of a given type.

// Example Input:
// n = 5
// edges = [(1, 2), (2, 3), (3, 4), (4, 5)]
// availability = {1: ["excavator"], 2: [], 3: ["bulldozer"], 4: ["excavator"], 5: ["crane"]}
// start_provider = 2
// target_equipment = "excavator"

// Example Output:
// [2, 3, 4]  # Shortest path to provider 4 with an excavator

function Equipment_Rental_Availability(n, adges, availability, start, target) {
  const grp = {};
  for (let i = 1; i <= n; i++) {
    grp[i] = [];
  }
  for (const [a, b] of adges) {
    grp[a].push(b);
    grp[b].push(a);
  }
  const que = [[start, [start]]];
  const visited = new Set();
  visited.add(start);
  while (que.length > 0) {
    const [cur, path] = que.shift();
    if (availability[cur] && availability[cur].includes(target)) {
      return path;
    }
    for (const ngh of grp[cur]) {
      if (!visited.has(ngh)) {
        visited.add(ngh);
        que.push([ngh, [...path, ngh]]);
      }
    }
  }
  return [];
}

let n = 5;

let edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
let availability = {
  1: ["excavator"],
  2: [],
  3: ["bulldozer"],
  4: ["excavator"],
};
let start_p = 2;
let target_p = "excavator";

console.log(
  Equipment_Rental_Availability(n, edges, availability, start_p, target_p)
);
