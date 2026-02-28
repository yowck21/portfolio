const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const navbtn = document.getElementById("navbtn");
const nav = document.getElementById("nav");

navbtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navbtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navbtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "230586Y@mymail.nyp.edu.sg";
  try {
    await navigator.clipboard.writeText(email);
    alert("Email copied!");
  } catch {
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    alert("Email copied!");
  }
});