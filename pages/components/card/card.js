const favs = document.querySelectorAll(".fa-heart");
favs.forEach((fav) =>
  fav.addEventListener("click", () => {
    fav.classList.contains("far")
      ? (fav.className = "fas fa-heart")
      : (fav.className = "far fa-heart");
  })
);

const titles = document.querySelectorAll(".card_content_title");
titles.forEach((title) => {
  let timer;
  title.addEventListener("mouseover", () => {
    timer = setTimeout(() => {
      title.setAttribute("fulltext", title.innerText);
    }, 500);
  });
  title.addEventListener("mouseout", () => {
    clearTimeout(timer);
    title.setAttribute("fulltext", "");
  });
});
