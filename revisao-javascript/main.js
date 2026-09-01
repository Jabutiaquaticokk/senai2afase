import exemplo from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/cond.js";
import exemplosDatas from "./scripts/outros/datas.js";
import exemplosObjects from "./scripts/objects.js";
import exemplosArrays from "./scripts/arrays.js";
import exemploFunctions from "./scripts/functions.js";

document.getElementById('btn-var').addEventListener('click',exemplo);

document.getElementById('btn-cond').addEventListener('click',exemplosCondicionais);

document.getElementById('btn-datas').addEventListener('click',exemplosDatas);

document.getElementById('btn-objects').addEventListener('click',exemplosObjects);

document.getElementById('btn-arrays').addEventListener('click',exemplosArrays);

document.getElementById('btn-function').addEventListener('click',exemploFunctions);