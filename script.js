document.addEventListener("DOMContentLoaded", () => {
  const mainSelect = document.getElementById("main-genre");
  const subSelect = document.getElementById("sub-genre");
  const infoContainer = document.getElementById("info-container");

  for (let category in genreData) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    mainSelect.appendChild(option);
  }

  function updateSubGenres() {
    const selectedCategory = mainSelect.value;
    subSelect.innerHTML = "";
    const subGenres = genreData[selectedCategory];

    for (let sub in subGenres) {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      subSelect.appendChild(option);
    }

    showInfo();
  }

  function showInfo() {
    const category = mainSelect.value;
    const sub = subSelect.value;
    const data = genreData[category][sub];

    infoContainer.innerHTML = `
      <h2>${sub}</h2>
      <p>${data.description}</p>
      <h3>代表アーティスト</h3>
      <ul>${data.artists.map(a => `<li>${a}</li>`).join("")}</ul>
      <h3>代表曲</h3>
      <ul>${data.songs.map(s => `<li>${s}</li>`).join("")}</ul>
      <h3>日本人アーティスト</h3>
      <ul>${data.japanese.artists.map(a => `<li>${a}</li>`).join("")}</ul>
      <h3>日本人の代表曲</h3>
      <ul>${data.japanese.songs.map(s => `<li>${s}</li>`).join("")}</ul>
    `;
  }

  mainSelect.addEventListener("change", updateSubGenres);
  subSelect.addEventListener("change", showInfo);

  updateSubGenres(); // 初期化
});
