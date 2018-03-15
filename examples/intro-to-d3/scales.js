import * as d3 from "d3";

let shapes = d3
    .scaleOrdinal()
    .domain(["triangle", "rectangle", "polygon", "square"])
    .range(["red", "orange", "green", "red"]);

let linear = d3
    .scaleLinear()
    .domain([0, 200])
    .range([10, 500]);

const div = document.createElement("div");
div.innerHTML = [shapes("triangle"), linear(0), linear(200), linear(100)];
document.body.appendChild(div);
