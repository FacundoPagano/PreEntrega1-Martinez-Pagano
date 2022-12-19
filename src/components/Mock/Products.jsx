import nisutaTec from "../assets/Teclado-nisuta.jpg";
import nisutaAur from "../assets/Auriculares-nisuta.webp";
import nisutaMou from "../assets/Mouse-nisuta.webp";
import redragonTec from "../assets/Teclado-Redragon.webp";
import corsairTec from "../assets/Teclado-Corsair.webp";
import redragonMou from "../assets/Mouse-redragon.webp";
import corsairMou from "../assets/Mouse-Corsair.webp";
import lgMon from "../assets/Monitor-lg.webp";
import samsungMon from "../assets/Monitor-Samsung.webp";
import asusMon from "../assets/Monitor-asus.webp";
import hyperxAur from "../assets/Auriculares-hyperx.webp";
import astroAur from "../assets/Auriculares-astro.webp";

const products = [
{
id:1, 
category:"Teclado", 
name:"Nisuta NS-KBG5RL",
image: nisutaTec ,
imageAlt:"",
description:"Teclado Nisuta de alto rendimiento. RGB. Semi-mecánico. Tecnologia antighosting. Conector USB." ,
price: 4850 ,
stock:9 },

{
id:2,
category:"Teclado", 
name:"Redragon Kumara K552" ,
image: redragonTec,
imageAlt:"",
description:" Su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Ergonómico, base antidelizante y rápido tiempo de respuesta. RGB. Switch: Outemu Blue. Mecanico Conector USB." ,
price: 12000 ,
stock:16 },

{
id:3, 
category:"Teclado", 
name:"Corsair K60 RGB PRO",
image:corsairTec,
imageAlt:"",
description:"Corsair es un fabricante mundial de equipos y tecnología de alto rendimiento. Sus productos van dirigidos a jugadores, creadores de contenido y diseñadores. A su vez, con sus teclados podrás conseguir un óptimo desempeño al darle un uso intensivo. RGB. Switch: Cherry Viola. Mecanico. Conector USB 3.1. Tecnologia antighosting.",
price: 25000,
stock:23 },

{
id:4, 
category:"Mouse", 
name:"Nisuta Usb 7d Gaming Rgb 7200 Dpi" ,
image: nisutaMou,
imageAlt:"",
description:"7 Botones. 7.200 DPI - 4 Niveles de DPI. USB. RGB. Peso: 102g." ,
price:6000 ,
stock:12 },

{
id:5, 
category:"Mouse", 
name:"Redragon Storm Elite M988 black" ,
image: redragonMou,
imageAlt:"",
description:"8 Botones. 16.000 DPI - 5 Niveles de DPI . USB. RGB. Peso: 85g. ",
price:8000,
stock:7 },

{
id:6, 
category:"Mouse", 
name:"Corsair M65 RGB Elite black" ,
image: corsairMou,
imageAlt:"",
description:"8 Botones. 18.000 DPI - 5 Niveles de DPI. USB . RGB. Peso: 89g." ,
price:17000 ,
stock:26 },

{
id:7, 
category:"Monitor", 
name:"LG 19M38A led" ,
image: lgMon,
imageAlt:"",
description:"19 Pulgadas. 75Hz Max. 60Hz Rec. HD. D-sub. Panel TN." ,
price:38300 ,
stock:8 },

{
id:8, 
category:"Monitor", 
name:"Samsung F24T35 led" ,
image: samsungMon,
imageAlt:"",
description:"24 Pulgadas. 75Hz. Full HD. 5ms de respuesta. HDMI 1.4. Panel IPS." ,
price:46500 ,
stock:14 },

{
id:9, 
category:"Monitor", 
name:"Asus Gaming VG248QG led" ,
image: asusMon,
imageAlt:"",
description:"24 Pulgadas. 165Hz. Full HD. 1ms de respuesta. HDMI 1.4, DVI-D (Dual Link), Jack 3.5 mm, DisplayPort 1.2. Panel TN. " ,
price:115000 ,
stock:25 },

{
id:10, 
category:"Auriculares", 
name:"Nisuta NSAUG350 " ,
image: nisutaAur,
imageAlt:"",
description:"Auriculares de gran calidad con micrófono. Cable 2.2M. Playstation. Jack 3.5mm " ,
price:6300 ,
stock:9 },

{
id:11, 
category:"Auriculares", 
name:"Hyperx Cloud Stinger Core " ,
image: hyperxAur,
imageAlt:"",
description:"Auriculares de gran calidad con micrófono. Cancelacion de ruido. Cable 1.3M. PC, Playstation, Xbox y Nintendo Switch" ,
price: 14000,
stock:16 },

{
id:12, 
category:"Auriculares", 
name:" Logitech Astro A50" ,
image: astroAur,
imageAlt:"",
description:"Auriculares de gran calidad inalambricos. 15Hrs de duracion. Con micrófono. Alcance 15M. Cancelacion de ruido. " ,
price: 61000,
stock:23 }

]

export {products}