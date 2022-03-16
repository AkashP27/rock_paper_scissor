const selectionButtons = document.querySelectorAll("[data-selection]");
const SELECTION = [
 {
  name: "rock",
  emoji: "✊",
  beats: "scissor",
 },
 {
  name: "paper",
  emoji: "✋",
  beats: "rock",
 },
 {
  name: "scissor",
  emoji: "✌️",
  beats: "paper",
 },
];

selectionButtons.forEach((selectionButton) => {
 selectionButton.addEventListener("click", (e) => {
  const selectionName = selectionButton.dataset.selection;
  const selection = SELECTIONS.find(
   (selection) => selection.name === selectionName
  );
  makeSelection(selectionName);
 });
});

function makeSelection(selection) {
 console.log(selection);
}
