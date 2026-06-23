// ============================================================
//  EASY EDIT: paste your YouTube live link here when ready.
//  Accepts a full watch URL, a youtu.be link, or an embed URL.
//  Leave as "" to keep the "coming soon" placeholder.
//  Example: const LIVE_URL = "https://www.youtube.com/watch?v=XXXXXXXXXXX";
// ============================================================
const LIVE_URL = "https://youtube.com/live/sxqQyX3NRec?feature=share";

(function setupLivestream() {
  if (!LIVE_URL) return;
  const frame = document.querySelector(".live__frame");
  if (!frame) return;

  let embed = LIVE_URL.trim();
  const ytMatch = embed.match(/(?:youtu\.be\/|v=|live\/|embed\/)([\w-]{6,})/);
  if (ytMatch) embed = `https://www.youtube.com/embed/${ytMatch[1]}`;

  frame.innerHTML =
    `<iframe src="${embed}" title="Wedding livestream" ` +
    `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
    `allowfullscreen></iframe>`;
})();

// Gentle reveal-on-scroll for sections and events
(function revealOnScroll() {
  const targets = document.querySelectorAll(
    ".section__head, .event, .collage__item, .live__frame, .hero__inner"
  );
  targets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
})();
