document.addEventListener("DOMContentLoaded", function () {
    const skinOptions = ["skin1.svg", "skin2.svg", "skin3.svg"];
    const eyeOptions = ["eyes1.svg", "eyes2.svg", "eyes3.svg"];
    const hairOptions = ["hair1.svg", "hair2.svg"];
    const clothesOptions = ["clothes1.svg", "clothes2.svg"];

    let skinIndex = 0;
    let eyeIndex = 0;
    let hairIndex = 0;
    let clothesIndex = 0;

    const characterBase = document.getElementById("characterBase");
    const characterEyes = document.getElementById("characterEyes");
    const characterHair = document.getElementById("characterHair");
    const characterClothes = document.getElementById("characterClothes");

    function changeImage(element, options, index) {
        element.classList.add("fade");
        setTimeout(() => {
            element.src = `assets/${options[index]}`;
            element.classList.remove("fade");
        }, 300);
    }

    // Helper function to handle thumbnail click event
    function handleThumbnailClick(type, index) {
        switch (type) {
            case "skin":
                skinIndex = index;
                changeImage(characterBase, skinOptions, skinIndex);
                break;
            case "eyes":
                eyeIndex = index;
                changeImage(characterEyes, eyeOptions, eyeIndex);
                break;
            case "hair":
                hairIndex = index;
                changeImage(characterHair, hairOptions, hairIndex);
                break;
            case "clothes":
                clothesIndex = index;
                changeImage(characterClothes, clothesOptions, clothesIndex);
                break;
        }

        updateSelectedThumbnail(type, index);
    }

    // Update selected thumbnail with border highlight
    function updateSelectedThumbnail(type, index) {
        const thumbnails = document.querySelectorAll(`#${type}1, #${type}2, #${type}3`);
        thumbnails.forEach(thumbnail => thumbnail.classList.remove("selected"));
        document.getElementById(`${type}${index + 1}`).classList.add("selected");
    }

    // Add event listeners for all thumbnail images
    document.querySelectorAll(".thumbnail").forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const type = this.id.slice(0, -1);  // Gets 'skin', 'eyes', 'hair', or 'clothes'
            const index = parseInt(this.id.slice(-1)) - 1;
            handleThumbnailClick(type, index);
        });
    });

    // Randomize Button
    document.getElementById("randomize").addEventListener("click", function () {
        skinIndex = Math.floor(Math.random() * skinOptions.length);
        eyeIndex = Math.floor(Math.random() * eyeOptions.length);
        hairIndex = Math.floor(Math.random() * hairOptions.length);
        clothesIndex = Math.floor(Math.random() * clothesOptions.length);

        changeImage(characterBase, skinOptions, skinIndex);
        changeImage(characterEyes, eyeOptions, eyeIndex);
        changeImage(characterHair, hairOptions, hairIndex);
        changeImage(characterClothes, clothesOptions, clothesIndex);

        updateSelectedThumbnail("skin", skinIndex);
        updateSelectedThumbnail("eyes", eyeIndex);
        updateSelectedThumbnail("hair", hairIndex);
        updateSelectedThumbnail("clothes", clothesIndex);
    });

    // Save Button (Placeholder functionality)
    document.getElementById("save").addEventListener("click", function () {
        alert("Character saved!");
    });
});