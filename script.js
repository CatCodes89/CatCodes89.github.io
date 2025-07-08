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
      label: "About",
content: `<h2>About Me</h2>
<p>Hi! I’m Cathy Carvalho, based in Canada. I’m a developer, a creative, and a lover of all things video games.</p>

<p>My motto is: One day at a time. As long as I create something each day, even if it’s small, that’s one step closer to the goal and the bigger picture.</p>

<p>My journey into tech began as a teenager, designing pixel outfits for my favourite roguelike game. That early love for game art turned into a passion for building fun, user-friendly digital experiences.</p>

<p>In 2024, I earned my diploma in Web Development from triOS College. Since then, I’ve been designing and developing websites with HTML, CSS, and JavaScript, while growing my skills in UI/UX design to create interfaces that feel intuitive and engaging.</p>

<p>Right now, I’m focused on UI/UX design for web and mobile, with a special interest in video game UI. My dream is to help bring games to life with thoughtful, player-friendly interfaces that make every click and tap feel amazing!</p>

<p>Currently, I’m working on my own passion project, a fully functional mobile game app for Android that lets me combine my love for design, development, and interactive storytelling.</p>

<p><strong>Let’s connect!</strong> I’m looking for opportunities in UI/UX design, especially for games or apps where I can learn, grow, and create experiences people love to use.</p>`
    },
    {
      label: "Skills",
      content: `
        <h2>Skills</h2>
      
        <h3>Languages</h3>
        <p>
          <img src="assets/html.png" alt="HTML" class="skill-icon">
          <img src="assets/css.png" alt="CSS" class="skill-icon">
          <img src="assets/js.png" alt="JavaScript" class="skill-icon">
          <img src="assets/swift.png" alt="Swift" class="skill-icon">
        </p>
      
        <h3>Frameworks</h3>
        <p>
          <img src="assets/react.png" alt="React" class="skill-icon">
          <img src="assets/unity.png" alt="Unity" class="skill-icon">
        </p>
      
        <h3>Tools & Version Control</h3>
        <p>
          <img src="assets/vscode.png" alt="VS Code" class="skill-icon">
          <img src="assets/xcode.png" alt="Xcode" class="skill-icon">
          <img src="assets/github.png" alt="GitHub" class="skill-icon">
          <img src="assets/edgedev.png" alt="Edge DevTools" class="skill-icon">
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
      label: "Websites",
      content: "<h2>Websites</h2>" + popupText.innerHTML,
    },
    {
        label: "Apps",
        content: "<h2>Apps</h2>" + document.getElementById("appProjects").innerHTML,
    },
    {
      label: "Art",
      content: "<h2>Art</h2>",
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