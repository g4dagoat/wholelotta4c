const usersUrl =
  "https://github.com/g4dagoat/wholelotta4c/blob/main/users.txt"

function createUserBox(user, index) {
  const div = document.createElement("div")
  div.className = "user-box";

  div.innerHTML = `
          <div class="copied" id="copied-${index}">copied user</div>

          <div class="copy-icon" data-name="${user}" data-id="${index}">
            <i class="fa-regular fa-copy"></i>
          </div>

          <div class="user-name">${user}</div>
        `

  return div
}

function setupCopy() {
  document.querySelectorAll(".copy-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const text = icon.getAttribute("data-name")
      const id = icon.getAttribute("data-id")

      navigator.clipboard.writeText(text)

      const el = document.getElementById("copied-" + id)
      el.classList.add("show");

      setTimeout(() => {
        el.classList.remove("show")
      }, 1000);
    })
  })
}

fetch(usersUrl)
  .then((res) => res.text())
  .then((text) => {
    const users = text
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean)

    const container = document.querySelector(".container")

    users.forEach((user, i) => {
      const div = document.createElement("div")
      div.className = "user-box"

      div.innerHTML = `
        <div class="copied" id="copied-${i}">copied user</div>

        <div class="copy-icon" data-name="${user}" data-id="${i}">
          <i class="fa-regular fa-copy"></i>
        </div>

        <div class="user-name">${user}</div>
      `;

      container.appendChild(div)
    })

    document.querySelectorAll(".copy-icon").forEach((icon) => {
      icon.addEventListener("click", () => {
        const text = icon.getAttribute("data-name")
        const id = icon.getAttribute("data-id")

        navigator.clipboard.writeText(text)

        const el = document.getElementById("copied-" + id)
        el.classList.add("show")

        setTimeout(() => el.classList.remove("show"), 1000)
      });
    });
  })
  .catch((err) => {
    console.error("Failed to load users:", err)
  })

const isMobile = window.innerWidth < 600

particlesJS("particles-js", {
  particles: {
    number: { value: isMobile ? 40 : 80 },
    color: { value: "#ff69b4" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: {
      enable: !isMobile,
      distance: 150,
      color: "#ff69b4",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: isMobile ? 1 : 2,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: !isMobile, mode: "repulse" },
    },
  },
})
