window.onload = () => {
  const items = document.querySelectorAll(".wheel-item");
  const container = document.querySelector(".wheel-container");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");
  const popupClose = document.getElementById("popupClose");

  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;
  const radius = 230; // smaller radius to fit your container

  // Define the content or links for each wheel item by index
  const sectionContent = [
    {
      label: "About Cathy",
content: `<h2>About Cathy</h2>

<p>Hi! I’m Cathy, a Unity game developer and UI/UX designer based in Canada, passionate about 2D pixel art and building thoughtful, player-friendly interfaces.</p>

<p>My journey into game development started with a beloved rogue-like game as a teen. I was creating custom pixel outfits and editing sprites before I ever wrote a line of code. That early love for visual design evolved into a passion for crafting interactive experiences that are fun, intuitive, and engaging.</p>

<p>In 2024, I earned my diploma in Web Development from triOS College, where I built a foundation in HTML, CSS, and JavaScript. Since then, I’ve expanded into game development using Unity and C#, with a special focus on designing in-game UI like menus, HUDs, and feedback systems.</p>

<p>Right now, I’m developing a PC indie game in Unity that combines my love for 2D pixel art and interface design. I'm handling everything from programming to UI/UX. Designing systems that feel natural, support gameplay, and create a strong sense of immersion.</p>

<p>While my current focus is on PC, I’m also interested in mobile game development and love working on projects that bring beautiful, accessible game experiences to any platform.</p>

<p><strong>Let’s connect!</strong> I’m looking for opportunities as a <strong>2D Game Developer</strong> or <strong>Game UI/UX Designer</strong>, especially on pixel-style games where I can grow, collaborate, and help create something players truly enjoy.</p>`
    },
    {
      label: "My Toolkit",
      content: `
        <h2>My Toolkit</h2>
      
        <h3>Languages</h3>
        <p>
          <img src="assets/html.png" alt="HTML" class="skill-icon">
          <img src="assets/css.png" alt="CSS" class="skill-icon">
          <img src="assets/js.png" alt="JavaScript" class="skill-icon">
          <img src="asssets/c-sharp.png" alt="C#" class="skill-icon">
        </p>
      
        <h3>Frameworks</h3>
        <p>
          <img src="assets/unity.png" alt="Unity" class="skill-icon">
        </p>
      
        <h3>Tools & Version Control</h3>
        <p>
          <img src="assets/vscode.png" alt="VS Code" class="skill-icon">
          <img src="assets/github.png" alt="GitHub" class="skill-icon">
        </p>
      
        <h3>UI/UX</h3>
        <p>
          <img src="assets/photoshop.png" alt="Photoshop" class="skill-icon">
          <img src="assets/illustrator.png" alt="Illustrator" class="skill-icon">
          <img src="assets/adobe.png" alt="Adobe XD" class="skill-icon">
          <img src="assets/pixquare.png" alt="Pixquare" class="skill-icon">
        </p> `,
    },
    {
      label: "Game Projects",
      content: "<h2>Game Projects</h2>" + popupText.innerHTML,
    },
    {
        label: "Pixel Game UI/UX",
        content: "<h2>Pixel Game UI/UX</h2>" + document.getElementById("appProjects").innerHTML,
    },
    {
      label: "GitHub",
      link: "https://github.com/CatCodes89?tab=repositories",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/cathy-carvalho",
    },
  ];

  // Clear popupText initially (optional)
  popupText.innerHTML = "";

  items.forEach((item, index) => {
    const angle = (index / items.length) * 2 * Math.PI - Math.PI / 2;
    const width = item.offsetWidth;
    const height = item.offsetHeight;

    const x = centerX + radius * Math.cos(angle) - width / 2;
    const y = centerY + radius * Math.sin(angle) - height / 2;

    item.style.position = "absolute";
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    const photo = item.querySelector(".wheel-photo");
    photo.style.cursor = "pointer";
    photo.addEventListener("click", () => {
      const section = sectionContent[index];
      if (section.link) {
        window.open(section.link, "_blank");
      } else if (section.content) {
        popupText.innerHTML = section.content;
        popup.classList.add("show");
      }
    });
  });

  popupClose.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
};