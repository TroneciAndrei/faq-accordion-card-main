console.log("Hello World");
// Here I select every question
const questions = document.querySelectorAll(".question");

// I do an forEach loop over them to can apply an click event on all container not just the text or the arrow
questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Here I select the children and it give me an HTMLCollection that's means I can destructurion and choose the children that I want
    const children = question.children;
    const [text, img] = children;

    // Apply some classes for text and img
    text.classList.toggle("bold");
    img.classList.toggle("rotate");

    // Here I check for the next Element Sibling and toggle the hide class to reveal or hide the answers
    const nextElement = question.nextElementSibling;

    nextElement.classList.toggle("hide");
  });
});
