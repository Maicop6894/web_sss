const cardsContainer = document.querySelector("#about .cards");
const cards = document.querySelectorAll("#about .cards .card");
const dotsContainer = document.getElementById("dots");

let isManualScrolling = false;

// =============================
//  TẠO DOTS
// =============================
dotsContainer.innerHTML = "";
cards.forEach((_, idx) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.dataset.index = idx;
  if (idx === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll(".dot");

// =============================
// SET ACTIVE CARD
// =============================
function setActiveCard(idx) {
  cards.forEach(c => c.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  cards[idx].classList.add("active");
  dots[idx].classList.add("active");
}

// =============================
// HÀM ĐƯA CARD VÀO GIỮA (3 CARD VISIBLE)
// =============================
function scrollToCard(idx) {
  const card = cards[idx];

  const cardLeft = card.offsetLeft;
  const cardWidth = card.offsetWidth;

  // đưa card vào đúng trung tâm vùng hiển thị (3 card visible)
  const target =
    cardLeft - (cardsContainer.clientWidth / 2 - cardWidth / 2);

  cardsContainer.scrollTo({ left: target, behavior: "smooth" });
}

// =============================
//  SCROLL DETECTION (EDGE + CENTER)
// =============================
cardsContainer.addEventListener("scroll", () => {
  if (isManualScrolling) return;

  clearTimeout(cardsContainer._t);
  cardsContainer._t = setTimeout(() => {
    const scrollLeft = cardsContainer.scrollLeft;
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    // EDGE CASE — đầu
    if (scrollLeft <= 2) {
      setActiveCard(0);
      return;
    }

    // EDGE CASE — cuối
    if (scrollLeft >= maxScroll - 2) {
      setActiveCard(cards.length - 1);
      return;
    }

    // Tìm card gần center nhất
    const centerPos = scrollLeft + cardsContainer.clientWidth / 2;
    let closestIdx = 0;
    let minDist = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(centerPos - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });

    setActiveCard(closestIdx);
  }, 100);
});

// =============================
//   CLICK CARD
// =============================
cards.forEach((card, idx) => {
  card.addEventListener("click", () => {
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    isManualScrolling = true;

    // Card đầu
    if (idx === 0) {
      cardsContainer.scrollTo({ left: 0, behavior: "smooth" });
      setActiveCard(0);
      setTimeout(() => (isManualScrolling = false), 500);
      return;
    }

    // Card cuối
    if (idx === cards.length - 1) {
      cardsContainer.scrollTo({ left: maxScroll, behavior: "smooth" });
      setActiveCard(cards.length - 1);
      setTimeout(() => (isManualScrolling = false), 500);
      return;
    }

    // Card giữa → đưa vào trung tâm
    scrollToCard(idx);
    setActiveCard(idx);

    setTimeout(() => (isManualScrolling = false), 500);
  });
});

// =============================
//   CLICK DOT
// =============================
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const idx = parseInt(dot.dataset.index);
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    isManualScrolling = true;

    if (idx === 0) {
      cardsContainer.scrollTo({ left: 0, behavior: "smooth" });
      setActiveCard(0);
      setTimeout(() => (isManualScrolling = false), 500);
      return;
    }

    if (idx === cards.length - 1) {
      cardsContainer.scrollTo({ left: maxScroll, behavior: "smooth" });
      setActiveCard(cards.length - 1);
      setTimeout(() => (isManualScrolling = false), 500);
      return;
    }

    scrollToCard(idx);
    setActiveCard(idx);

    setTimeout(() => (isManualScrolling = false), 500);
  });
});

// =============================
// AUTO SNAP (APPLE STYLE)
// =============================
let autoSnapTimeout;

cardsContainer.addEventListener("scroll", () => {
  clearTimeout(autoSnapTimeout);

  autoSnapTimeout = setTimeout(() => {
    if (isManualScrolling) return;

    const scrollLeft = cardsContainer.scrollLeft;
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    if (scrollLeft <= 2 || scrollLeft >= maxScroll - 2) return;

    const centerPos = scrollLeft + cardsContainer.clientWidth / 2;

    let closestIdx = 0;
    let minDist = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(centerPos - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });

    isManualScrolling = true;
    scrollToCard(closestIdx);
    setActiveCard(closestIdx);
    setTimeout(() => (isManualScrolling = false), 500);
  }, 140);
});

// =============================
// MẶC ĐỊNH
// =============================
setActiveCard(0);
