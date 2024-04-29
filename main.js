const dataAtual = new Date ();
let dataObjetivo=prompt("sata final ANO-MES-DIA exemplo:2021=-04=-10");
dataObjetivo=new date (dataObjetivo + "T23:59:59");
let diasQueFaltam=math.floor ((dataObjetivo- dataAtual)/86400000);
document.querySelector("#dias_restantes").textcontent=diasQueFaltam;
