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
      content: `<h2>About Me</h2><p>Hi! I'm Cathy Carvalho, a passionate iOS Developer and Web Developer based in Canada.</p>
  
  <p>My journey into tech began as a teenager, designing pixel outfits for my favorite games. That creative spark soon turned into a love for coding, first with JavaScript and now with Swift and iOS development.</p>
  
  <p>In 2024, I earned my diploma in Web Development from triOS College. Since then, I’ve been actively building projects in both web and mobile development. I’ve completed a web development internship, created websites using HTML, CSS, and JavaScript, and developed Swift-based iOS apps that include features like interactive UI, custom animations, and local data storage.</p>
  
  <p>I’m currently focused on becoming a full-time iOS Developer. I love solving real problems through user-friendly mobile apps and constantly expanding my skills in Swift, SwiftUI, and Xcode.</p>
  
  <p>My dream? To create my own video game and publish it on the App Store one day.</p>
  
  <p><strong>Let’s connect!</strong> I’m actively looking for junior iOS developer opportunities where I can grow, learn, and contribute to meaningful projects.</p>`,
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
            <img src="assets/java.png" alt="Java" class="skill-icon">
            <img src="assets/swift.png" alt="Swift" class="skill-icon">
          </p>
      
          <h3>Frameworks</h3>
          <p>
            <img src="assets/react.png" alt="React" class="skill-icon">
            <img src="assets/angular.png" alt="Angular" class="skill-icon">
            <img src="assets/node.png" alt="Node.js" class="skill-icon">
            <img src="assets/bootstrap.png" alt="Bootstrap" class="skill-icon">
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
            <img src="assets/responsivedesign.png" alt="Responsive Design" class="skill-icon">
          </p>
      `,
    },
    {
      label: "Websites",
      content: "<h2>Websites</h2>" + popupText.innerHTML, // Use the default gallery
    },
    {
      label: "Apps",
      content: "<h2>Apps</h2>",
    },
    {
      label: "Art",
      content: "<h2>Art</h2>",
    },
    {
      label: "Heartwood",
      content: `
        <h2>Heartwood</h2>
        <p>A labour of love, here is a small glimpse of my video game project!</p>
        <video controls width="100%" style="max-width: 500px; border-radius: 10px; margin-top: 1rem; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
          <source src="assets/naming.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
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
    // Position items in circle
    const angle = (index / items.length) * 2 * Math.PI - Math.PI / 2; // Start from top center
    const width = item.offsetWidth;
    const height = item.offsetHeight;

    const x = centerX + radius * Math.cos(angle) - width / 2;
    const y = centerY + radius * Math.sin(angle) - height / 2;

    item.style.position = "absolute";
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    // Add click to photo image
    const photo = item.querySelector(".wheel-photo");
    photo.style.cursor = "pointer";
    photo.addEventListener("click", () => {
      const section = sectionContent[index];
      if (section.link) {
        // Open external link in new tab
        window.open(section.link, "_blank");
      } else if (section.content) {
        popupText.innerHTML = section.content;
        popup.classList.add("show");
      }
    });
  });

  // Close popup when clicking X
  popupClose.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Close popup when clicking outside content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
};
