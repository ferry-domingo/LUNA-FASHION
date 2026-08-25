const image=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
const baseDescription="A considered wardrobe essential with an easy silhouette, tactile finish, and thoughtful details designed for repeat wear.";
export const products = [
  {id:"sloane-blazer",name:"Sloane Relaxed Blazer",category:"Tailoring",price:248,color:"Oat",image:image("photo-1591047139829-d91aecb6caea"),tag:"Bestseller",featured:true,description:"An unstructured single-breasted blazer cut from a softly textured wool blend. Designed with a relaxed shoulder and an easy, elongated line.",material:"Wool blend",fit:"Relaxed"},
  {id:"mara-knit",name:"Mara Ribbed Knit",category:"Knitwear",price:118,color:"Ivory",image:image("photo-1434389677669-e08b4cac3105"),tag:"New",featured:true,material:"Merino wool",fit:"Easy"},
  {id:"elodie-dress",name:"Élodie Column Dress",category:"Dresses",price:198,color:"Espresso",image:image("photo-1566174053879-31528523f8ae"),tag:"New",featured:true,material:"Viscose satin",fit:"Slim"},
  {id:"noa-trouser",name:"Noa Wide-Leg Trouser",category:"Tailoring",price:148,color:"Stone",image:image("photo-1594633312681-425c7b97ccd1"),featured:true,material:"Recycled suiting",fit:"Wide leg"},
  {id:"celine-shirt",name:"Céline Silk Shirt",category:"Tops",price:138,color:"Pearl",image:image("photo-1605763240000-7e93b172d754"),material:"Silk twill",fit:"Relaxed"},
  {id:"ana-cardigan",name:"Ana Cloud Cardigan",category:"Knitwear",price:168,color:"Mushroom",image:image("photo-1576566588028-4147f3842f27"),tag:"Limited",material:"Alpaca blend",fit:"Cropped"},
  {id:"lucie-skirt",name:"Lucie Bias Skirt",category:"Bottoms",price:128,color:"Black",image:image("photo-1583496661160-fb5886a0aaaa"),material:"Washed satin",fit:"Bias cut"},
  {id:"camille-coat",name:"Camille Wrap Coat",category:"Outerwear",price:328,color:"Camel",image:image("photo-1548624149-f6c8b8e0c9de"),tag:"Signature",featured:true,material:"Double-face wool",fit:"Oversized"},
  {id:"remi-tee",name:"Rémi Essential Tee",category:"Tops",price:58,color:"Chalk",image:image("photo-1521572163474-6864f9cf17ab"),material:"Organic cotton",fit:"Classic"},
  {id:"mila-dress",name:"Mila Linen Dress",category:"Dresses",price:178,color:"Sand",image:image("photo-1595777457583-95e059d581b8"),material:"European linen",fit:"Relaxed"},
  {id:"ines-jean",name:"Inès Straight Jean",category:"Bottoms",price:128,color:"Ecru",image:image("photo-1541099649105-f69ad21f3246"),material:"Organic denim",fit:"Straight"},
  {id:"jade-jacket",name:"Jade Cropped Jacket",category:"Outerwear",price:218,color:"Olive",image:image("photo-1544022613-e87ca75a784a"),tag:"New",material:"Cotton canvas",fit:"Cropped"},
  {id:"solene-trench",name:"Solène Fluid Trench",category:"Outerwear",price:288,color:"Dune",image:image("photo-1529139574466-a303027c1d8b"),tag:"Editor pick",material:"Water-resistant cotton",fit:"Oversized"},
  {id:"liv-satin-top",name:"Liv Satin Camisole",category:"Tops",price:92,color:"Rosewood",image:image("photo-1564257577054-2e2b7e8d6d9b"),material:"Recycled satin",fit:"Slim"},
  {id:"thea-knit-dress",name:"Thea Knit Dress",category:"Dresses",price:188,color:"Charcoal",image:image("photo-1515372039744-b8f02a3ae446"),tag:"Bestseller",material:"Viscose knit",fit:"Fitted"},
  {id:"roma-cargo",name:"Roma Soft Cargo",category:"Bottoms",price:138,color:"Moss",image:image("photo-1506629905607-d9c297d7d6a4"),material:"Cotton twill",fit:"Relaxed"},
  {id:"isla-boucle",name:"Isla Bouclé Vest",category:"Tailoring",price:158,color:"Cream",image:image("photo-1485968579580-b6d095142e6e"),tag:"New",material:"Bouclé wool",fit:"Boxy"},
  {id:"margot-midi",name:"Margot Pleated Midi",category:"Dresses",price:218,color:"Ink",image:image("photo-1496747611176-843222e1e57c"),material:"Fluid crepe",fit:"A-line"},
  {id:"celeste-crew",name:"Celeste Crewneck",category:"Knitwear",price:128,color:"Oatmeal",image:image("photo-1578587018452-892bacefd3f2"),material:"Cashmere blend",fit:"Relaxed"},
  {id:"yves-pleat",name:"Yves Pleated Pant",category:"Tailoring",price:168,color:"Graphite",image:image("photo-1509631179647-0177331693ae"),material:"Stretch wool",fit:"Straight"},
  {id:"amara-wrap",name:"Amara Wrap Top",category:"Tops",price:108,color:"Terracotta",image:image("photo-1551488831-00ddcb6c6bd3"),material:"Tencel jersey",fit:"Wrap"},
  {id:"flora-longline",name:"Flora Longline Coat",category:"Outerwear",price:348,color:"Mocha",image:image("photo-1539533018447-63fcce2678e3"),tag:"Signature",material:"Brushed wool",fit:"Longline"},
  {id:"nina-slip",name:"Nina Slip Skirt",category:"Bottoms",price:118,color:"Pearl",image:image("photo-1585488432209-9fe09b5a0a7b"),material:"Silk blend",fit:"Fluid"},
  {id:"elara-knit",name:"Elara Fine Knit Polo",category:"Knitwear",price:136,color:"Pistachio",image:image("photo-1591369822096-ffd140ec948f"),material:"Cotton cashmere",fit:"Easy"},
];
export const categories=["All","Dresses","Knitwear","Tailoring","Tops","Bottoms","Outerwear"];
export const money=v=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v);
export const benefits=["Free delivery over $200","Easy 30-day returns","Thoughtful materials","Small-batch production"];
