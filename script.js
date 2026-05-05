const usersUrl = "https://raw.githubusercontent.com/g4dagoat/wholelotta4c/main/users.txt"

const container = document.querySelector(".container")

fetch(usersUrl)
  .then((res) => res.text())
  .then((text) => {
    const users = text
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean)

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
      })
    })
  })
  .catch(() => {})

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
