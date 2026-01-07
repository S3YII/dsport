let squad = [
  { name: "Manuel Neuer", pos: "GK", number: 1, rating: 90 },
  { name: "Alphonso Davies", pos: "LB", number: 19, rating: 87 },
  { name: "Virgil van Dijk", pos: "CB", number: 4, rating: 91 },
  { name: "Kalidou Koulibaly", pos: "CB", number: 5, rating: 88 },
  { name: "Trent Alexander-Arnold", pos: "RB", number: 66, rating: 89 },
  { name: "N'Golo Kanté", pos: "CM", number: 7, rating: 90 },
  { name: "Kevin De Bruyne", pos: "CM", number: 17, rating: 92 },
  { name: "Lionel Messi", pos: "CAM", number: 30, rating: 93 },
  { name: "Cristiano Ronaldo", pos: "LW", number: 7, rating: 91 },
  { name: "Robert Lewandowski", pos: "ST", number: 9, rating: 92 },
  { name: "Kylian Mbappé", pos: "RW", number: 10, rating: 93 }
];

function showStats(index) {
  const p = squad[index];
  document.getElementById("playerStats").innerHTML = `
    <h2>${p.name}</h2>
    <p>Position: ${p.pos}</p>
    <p>Number: ${p.number}</p>
    <p>Rating: ${p.rating}</p>
  `;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
