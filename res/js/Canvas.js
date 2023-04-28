//Canvas
const canvas = document.getElementById("canvas"); //takes canvas from index.html body
const ctx = canvas.getContext("2d"); //creates a context(ctx)
canvas.width = 405; //width of canvas
canvas.height = 796; //height of canvas

export { canvas, ctx };