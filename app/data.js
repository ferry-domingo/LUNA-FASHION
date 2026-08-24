export const products = [
  { id:"sloane-blazer",name:"Sloane Relaxed Blazer",category:"Tailoring",price:248,color:"Oat",image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=85",tag:"Bestseller",description:"An unstructured single-breasted blazer cut from a softly textured wool blend. Designed with a relaxed shoulder and an easy, elongated line." },
  { id:"mara-knit",name:"Mara Ribbed Knit",category:"Knitwear",price:118,color:"Ivory",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",tag:"New" },
  { id:"elodie-dress",name:"Élodie Column Dress",category:"Dresses",price:198,color:"Espresso",image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",tag:"New" },
  { id:"noa-trouser",name:"Noa Wide-Leg Trouser",category:"Tailoring",price:148,color:"Stone",image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85" },
  { id:"celine-shirt",name:"Céline Silk Shirt",category:"Tops",price:138,color:"Pearl",image:"https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85" },
  { id:"ana-cardigan",name:"Ana Cloud Cardigan",category:"Knitwear",price:168,color:"Mushroom",image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=85",tag:"Limited" },
  { id:"lucie-skirt",name:"Lucie Bias Skirt",category:"Bottoms",price:128,color:"Black",image:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1200&q=85" },
  { id:"camille-coat",name:"Camille Wrap Coat",category:"Outerwear",price:328,color:"Camel",image:"https://images.unsplash.com/photo-1548624149-f6c8b8e0c9de?auto=format&fit=crop&w=1200&q=85",tag:"Signature" },
  { id:"remi-tee",name:"Rémi Essential Tee",category:"Tops",price:58,color:"Chalk",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85" },
  { id:"mila-dress",name:"Mila Linen Dress",category:"Dresses",price:178,color:"Sand",image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85" },
  { id:"ines-jean",name:"Inès Straight Jean",category:"Bottoms",price:128,color:"Ecru",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85" },
  { id:"jade-jacket",name:"Jade Cropped Jacket",category:"Outerwear",price:218,color:"Olive",image:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=85",tag:"New" },
];
export const categories=["All","Dresses","Knitwear","Tailoring","Tops","Bottoms","Outerwear"];
export const money=v=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v);
