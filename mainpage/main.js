function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

document.addEventListener('click', function touch(event) {
    if(event.target.id == "mySidepanel"){
        document.getElementById('mySidepanel').style.width="250px";
    }
});

function opencart(){
  document.getElementById("cartbar").style.width ="400px";
}

function closecart() {
  document.getElementById("cartbar").style.width = "0";
}
document.addEventListener('click', function touch(event) {
  if(event.target.id == "cartbar"){
      document.getElementById('cartbar').style.width="400px";
  }
});

function setProductImage() {
  var clickedImageSrc = localStorage.getItem('clickedImageSrc');
  console.log('Clicked Image Src:', clickedImageSrc); 
  document.getElementById('i').src = clickedImageSrc;
}

function changeProductImage(clickedImage) {
  var src = clickedImage.src;
  localStorage.setItem('clickedImageSrc', src);
}
//marvel stickers
document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_bfac9316-a050-4da4-be4d-e796d91e4c55_800x800.webp?alt=media&token=176039df-1939-4d61-b4ec-1a43cb8b4499",
      title: "Thor",
      price: "₹15.00",
      link:"./productpage.html",
      offer:"incl taxes",
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_595fe3c9-0526-44c0-8f5a-c0b5588178f0_800x800.webp?alt=media&token=c4a7b27b-cbb4-4079-8e14-6ef2386124fe",
      title: "Loki",
      price: "₹20.00",
      link:"./productpage.html",
      offer:"incl taxes",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_509b06c0-c428-4319-91d5-f0c23bd380c0_800x800.webp?alt=media&amp;token=e7ea5bbf-7cef-4cb2-b622-382601e625f9",
      title: "Iron man",
      price: "₹20.00",
      link:"./productpage.html",
      offer:"incl taxes",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_ffa2da50-4c4a-4cb0-adf8-001b571bee2f_800x800.webp?alt=media&token=2a4c3bfd-7bae-4afe-8dfb-42441f1d22cf",
      title: "Captain America",
      price: "₹20.00",
      link:"./productpage.html",
      offer:"incl taxes",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_829fdf3a-5afc-4fef-a987-2eec5ddf803d_800x800.webp?alt=media&amp;token=a758d0ce-09cd-4135-afb1-6fca9996d8f8",
      title: "Wanda",
      price: "₹20.00",
      link:"./productpage.html",
      offer:"incl taxes",
    },
    {
      id:6,
      image: "./peter parker.jpg",
      title: "Peter parker",
      price: "₹20.00",
      link:"./productpage.html",
      offer:"incl taxes",
    }
  ];

  const initApp = () => {
    let list = document.getElementById("s3");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}  <h6  id="no-offers">${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});
//cricket stickers
document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_b286f066-3587-4132-8bbc-aa7e13942ab8_800x800.webp?alt=media&token=787acf2a-8d5e-4cb3-9870-bcfd988bf898",
      title: "Yuvraj Singh",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html"
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_9e6d993b-cc03-4345-a73f-920e5ad4dae2_800x800.webp?alt=media&token=1d787dc9-b828-4d1a-a587-d0517b1604a0",
      title: "Virat Kohli",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_99cb6a3f-b177-43cd-ae86-ba56a5074435_800x800.webp?alt=media&token=cad61d86-f8a9-4f66-b3cc-16fc1c92bcef",
      title: "MS Dhoni",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_dced791b-ed0e-4f31-8962-4be65d21907a_800x800.webp?alt=media&token=740e2671-24a2-4906-9cef-ad3d000f8ec8",
      title: "Sachin Tendulkar",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_534b80c6-c534-4d6e-9135-1fdfc9aafaa9_800x800.webp?alt=media&token=f2019c82-011f-40ea-9c62-a6b9e3230140",
      title: "Rohit sharma",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:6,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_a952cc6b-7e79-48c3-b1c6-5deebb8db07a_800x800.webp?alt=media&token=8b3b6396-9a08-4f0f-a8f2-b21988e04f76",
      title: "Eat sleep cricket repeat",
      price: "₹20.00",
      link:"./productpage.html",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s1");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});

//bts stickers
document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_467cd1fd-c3d6-45dc-abc1-7e9e0013d8ff_800x800.webp?alt=media&token=a8213bb2-c2d1-4e4a-9c13-847b9609ba30",
      title: "BTS",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html"
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_165b25f7-ae92-4f0a-8b27-9ad6f124f283_800x800.webp?alt=media&token=fe2964ac-a5df-47ad-900c-fcb6adb0c9bc",
      title: "BTS",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_61def9a6-d472-4108-a832-4e3492dbaa84_800x800.webp?alt=media&token=6b8427ef-fae8-4489-89c4-e39143671e93",
      title: "BTS",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_dced791b-ed0e-4f31-8962-4be65d21907a_800x800.webp?alt=media&token=740e2671-24a2-4906-9cef-ad3d000f8ec8",
      title: "BTS",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_ca4dd6b6-58ce-4c89-90b7-64e03867b017_800x800.webp?alt=media&token=04565f02-1ba7-4e9c-8533-698768a92fd9",
      title: "BTS",
      price: "₹20.00",
      link:"./productpage.html",
    },
    {
      id:6,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_a22c4650-61d1-41af-93fd-acb9bf798808_800x800.webp?alt=media&token=7a92b48b-2cb1-4c69-9dc3-41a6de618739",
      title: "BTS",
      price: "₹20.00",
      link:"./productpage.html",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s2");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});
//Animie stickers

document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_8a6d8940-42ba-4053-b846-94202282455d_800x800.webp?alt=media&token=3f702e17-0520-424a-951c-eb523614333f",
      title: "Luffy 03",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html"
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_bdcf42c8-1089-463f-b46a-9292d037f4ba_800x800.webp?alt=media&token=403557ee-c575-4976-994a-ea36b8eba346",
      title: "Demon Slayer",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_25240a9a-ef38-4df9-8411-c25d158e4da4_800x800.webp?alt=media&token=2e92482d-4555-489d-885d-99a4429cb5e5",
      title: "Levi",
      price: "₹14.00",
      link:"./productpage.html",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_b16aa08b-4ac1-4205-94b5-f11dab5586a7_800x800.webp?alt=media&token=252a65f7-476f-4a9a-af4e-cb3f84594e4c",
      title: "Rengoku",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_cd51437a-7aaf-48ec-845e-2cbd0f5cbb65_800x800.webp?alt=media&token=3f525608-86da-4c9e-bd76-186af4135c74",
      title: "Jiraya",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:6,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_3189e0cb-631e-46df-8fcd-4b92cfcc6164_800x800.webp?alt=media&token=cbb5755b-1cab-4c55-9bcf-f6bd3bffd1f2",
      title: "Inosuke 02",
      price: "₹15.00",
      link:"./productpage.html",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s4");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});
//Medical Stickers

document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_bcdc8722-327f-4256-900c-c3c299b5aa8f_800x800.webp?alt=media&token=89ba37f2-3980-4e71-a5fa-955fcf40276d",
      title: "Nurse",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html"
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_de8e1ff0-4f8f-487e-9352-bda2bc97efa4_800x800.webp?alt=media&token=a8f82c7d-5979-4a1c-b64f-cc07379b0992",
      title: "Stay out of my laboratory",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_b2a01bcd-aaaa-4ad2-9a95-2d45979450d0_800x800.webp?alt=media&token=a8a5dd8a-2f67-4fd5-8197-f16bffa5db8e",
      title: "Lab technician and Coffee",
      price: "₹14.00",
      link:"./productpage.html",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_2bda218d-dc19-49b2-b483-9e8eec69c86b_800x800.webp?alt=media&token=c6dc3ee3-b43f-40e1-a087-d1297121b70b",
      title: "Laboratory Life",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_10360f82-49e1-4fe5-8a93-8ea5573e95ae_800x800.webp?alt=media&token=3f87eb98-2f29-4ca3-8abd-5ff2bb81778b",
      title: "Doctor couple",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:6,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_bd02088d-b265-4792-9b7c-3df2cbdb9643_800x800.webp?alt=media&token=0db9fdb1-fe28-4b51-be08-73dfe6c630b2",
      title: "Smooth Operator",
      price: "₹15.00",
      link:"./productpage.html",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s5");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});
//Aesthetic stickers

document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:18,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_598d269b-68f3-4491-9fb3-ffaf1f282fba_800x800.webp?alt=media&token=922b8a31-e0c8-498d-8ba5-08e5e18b90ad",
      title: "Hot pink finger heart (ae22)",
      price: "₹12.00 ",
      link:"./productpage.html",
      t:"./login.html",
      offer:" ₹15.00",
    },
    {
      id:19,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_92d4ed46-fc32-4469-aafb-b574d33ba2a2_800x800.webp?alt=media&token=45bc4fc0-15bf-4365-ad91-9690c7854286",
      title: "Virgo (ae13)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹15.00",
    },
    {
      id:20,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_80f96a8a-9de0-436f-9ff6-2956fe98f72c_800x800.webp?alt=media&token=dd742956-67a6-4627-a079-3aece20dd711",
      title: "Virgo Zodiac sign(ae14)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹15.00",
    },
    {
      id:21,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_bd42ee58-c0a8-4350-bb0f-581932599894_800x800.webp?alt=media&token=2fef6e2f-bf9a-45e2-a1d6-df8000b6a36c",
      title: "Girl Power(ae19)",
      price: "₹12.00",
      link:"./productpage.html",
      offer:" ₹15.00",
    },
    {
      id:22,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_26d0afae-6c69-4ec7-9386-3805c58aeb38_800x800.webp?alt=media&token=8e0d6535-7069-48b5-a03d-1f047db363e2",
      title: "Queen (ae21)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹15.00",
    },
    {
      id:23,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_6875ed5d-19bb-40e0-bb22-f9df6069d27b_800x800.webp?alt=media&token=b43060f8-ca77-4175-b2a5-84825cada396",
      title: "Multi-Coloured Ice Cream(ae12)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹15.00",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s6");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});

//Coding Stickers

document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:12,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_661d3d5e-e7f2-493f-a976-8dcce00bf26f_800x800.webp?alt=media&token=6bb5a5b4-72be-4c9b-98f3-e791dd68f80f",
      title: "Developer",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html"
    },
    {
      id:13,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_96eda698-a49f-4990-a43f-7ab815e8af32_800x800.webp?alt=media&token=dac245da-5f9b-42f4-abbb-f8ee01883c8b",
      title: "Coffee and Coding",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:14,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_fe39470a-25ed-4073-a601-c0fafd95015a_800x800.webp?alt=media&token=a8032e00-ce68-426e-aa72-06669dd109af",
      title: "False its True",
      price: "₹14.00",
      link:"./productpage.html",
    },
    {
      id:15,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_c9d3a241-50c6-4da9-a24c-44a8f2686e89_800x800.webp?alt=media&token=755a3b1a-c011-4077-b1df-090a55d87fe1",
      title: "I think in python",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:16,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_2c992f62-fb43-41c9-b6d9-bf3278043d75_800x800.webp?alt=media&token=be7a9868-f964-4324-b32e-54e0a695aa6d",
      title: "May stack overflow be with you",
      price: "₹15.00",
      link:"./productpage.html",
    },
    {
      id:17,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_1a07e3ee-e128-487a-aa75-4be3df241822_800x800.webp?alt=media&token=3c0b11ae-f486-4134-916c-1403d95cb475",
      title: "Node",
      price: "₹15.00",
      link:"./productpage.html",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s7");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});

//cartoon stickers
document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:7,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_978dfbc2-a569-4c2e-b297-8c4bedf75a0b_800x800.webp?alt=media&token=4f7767d7-a3e3-4269-b3c1-c5a409f999ec",
      title: "Hakuna Matata(ca09)",
      price: "₹12.00 ",
      link:"./productpage.html",
      t:"./login.html",
      offer:" ₹25.00",
    },
    {
      id:8,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_5d0988fb-d35a-43ba-887f-cc2b540751fb_800x800.webp?alt=media&token=be0d404d-faf9-40fa-ab60-64f44c2a23bc",
      title: "Itachi Uchiha(ca08)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:9,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_b09e67d9-2f23-485c-b806-19256788fe05_800x800.webp?alt=media&token=bc4da628-a505-49ea-8268-265ad9f60f6b",
      title: "George of the Jungle(ca10)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:10,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_fa82ea78-60f6-402e-bf6c-8d2fea6825e9_800x800.webp?alt=media&token=51f853ad-347a-4c9c-9d76-8c3e152c043e",
      title: "Orko (ca11)",
      price: "₹12.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:11,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_c22a3a14-4187-4c99-a60d-a0ec5b0ba1e3_800x800.webp?alt=media&token=0816e842-dda7-46b0-8f9c-dd7aa738bb5e",
      title: "Red ranger ( ca13)",
      price: "₹12.00 ",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    // {
    //   image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_6875ed5d-19bb-40e0-bb22-f9df6069d27b_800x800.webp?alt=media&token=b43060f8-ca77-4175-b2a5-84825cada396",
    //   title: "Multi-Coloured Ice Cream(ae12)",
    //   price: "₹12.00 ",
    //   link:"./productpage.html",
    //   offer:" ₹15.00",
    // }
  ];
  const initApp = () => {
    let list = document.getElementById("s8");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});

//Gym stickers
document.addEventListener("DOMContentLoaded", function() {
  let products = [
    {
      id:1,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_0e5fcf39-79cc-4154-988b-96688dc0f3b5_800x800.webp?alt=media&token=820a7818-eaa4-42ea-b86c-90d4ea4761b0",
      title: "Squat Bench Deadlift (gy03)",
      price: "₹15.00",
      link:"./productpage.html",
      t:"./login.html",
      offer:" ₹25.00",
    },
    {
      id:2,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_2ae6fce0-6df1-4fc1-b69b-bf853fa81a49_800x800.webp?alt=media&token=8824b315-8315-4464-8776-0da808c1d21d",
      title: "Barbell Babe (gy05)",
      price: "₹15.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:3,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_5536cbee-8c72-4b00-8ba9-90b0464edbf8_800x800.webp?alt=media&token=d0f8c2b1-d012-41b3-b196-6ec80164955f",
      title: "Practice Safe Sets(gy17)",
      price: "₹14.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:4,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_186b725b-6fd3-4266-b056-3195f2181f3f_800x800.webp?alt=media&token=b503b221-e484-4f8f-99fa-f5ce1b6b4127",
      title: "Stronger than your Excuses(gy09)",
      price: "₹15.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:5,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_13175ada-63d9-4f77-9746-75e7be74f632_800x800.webp?alt=media&token=243fb81d-2560-4379-a4fa-1b3874feaea8",
      title: "Good things come to those who sweat (gy10)",
      price: "₹15.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    },
    {
      id:6,
      image: "https://firebasestorage.googleapis.com/v0/b/instasell-7f53f.appspot.com/o/c1b56fda-b3ab-4c03-9f71-c2ebddd1ddc4%2Fpic_e8c39b29-49a9-4da6-ae80-a65bfbcbf4c4_800x800.webp?alt=media&token=3ee28af7-5c3c-48f7-9add-5107c1684697",
      title: "The Gym Is my Happy Hour (gy02)",
      price: "₹15.00",
      link:"./productpage.html",
      offer:" ₹25.00",
    }
  ];
  const initApp = () => {
    let list = document.getElementById("s9");
    products.forEach((value) => {
      let div = document.createElement('div');
      div.classList.add('products1');
      div.dataset.id =value.id;
      div.innerHTML = `
      <a href="./productpage.html">
        <img id="productimg" src="${value.image}" onclick="changeProductImage(this)" alt="${value.title}">
      </a>
      <h4 id="producttag">${value.title}</h4>
      <h4 id="adjust" id="productprice">${value.price}   <h6  id="offers"> ${value.offer}</h6></h4>
      <button type="button"  id="buybutton"  class="bbtn  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to cart</button>
      `;
      
      list.appendChild(div);
    });
    return list;
    return products;
  };
  const productList=initApp();
  productList.addEventListener('click', (event) => {
    let clickedPlace = event.target;
    if (clickedPlace.classList.contains('bbtn')) {
      let product_id = clickedPlace.parentElement.dataset.id;
      let carts=[];
      const addToCart =(product_id)=>{
        let index =carts.findIndex((value)=>{
          return (value.product_id ===product_id);
        });
        if(carts.length ===0){
          carts =[
            {
              product_id: product_id,
              quantity:1,
            }
          ]
        }
        else if(index<0){
          carts.push({
            product_id:product_id,
            quantity:1,
          })
        }
        else{
          carts[index].quantity+=1;
        }
        console.log(carts);

        let cartHtml=document.getElementById("cartbar");
      
        const addToHtml =()=>{
          if(carts.length >0){
            carts.forEach(cart =>{
              let newcart =document.createElement('div');
              newcart.classList.add('items');
              let position= products.findIndex((value)=>{
                return (value.id == cart.product_id);
              });
              let info = products[position];
              newcart.innerHTML=`
              <div id="pimage">
                        <img src="${info.image}" alt="">
                    </div>
                    <div id="pname">${info.title}
                    </div>
                    <div id="pprice">
                    ${info.price}
                    </div>
                    <div id="quantity">
                        <span id="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span id="plus">></span>
                    </div>
              `;
              cartHtml.appendChild(newcart);
            })
          }
        }
        addToHtml();
      }
      addToCart(product_id);
      if(localStorage.getItem('cart')){
        carts =JSON(localStorage.getItem('cart'));
        addToHtml();
      }
    }
  });
});

  