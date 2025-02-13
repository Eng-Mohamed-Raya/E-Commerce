// name description price id img







document.addEventListener('DOMContentLoaded',async function(){
    async function fetchdata(){

        try{
            const response = await fetch("https://orientonline.info/api/products");
            const result = await response.json();
            const products =result.products;
            console.log(products);
            let parent = document.getElementsByClassName("cards")[0];
            if(!parent){
                console.error("Element with claas 'catrt' no found");
                return;
            }
            const productElement = products.map((product,index)=>{

                let card = document.createElement("div");
                card.classList.add("card");
                let img_div=document.createElement("div");
                img_div.classList.add("img");
                let image=document.createElement("img");
                // image.src=product.img ;
                image.src = `https://orientonline.info/${product.img}`
                image.alt="image of product";
                 img_div.appendChild(image)
                card.appendChild(img_div);
                
                let content = document.createElement("div");
                content.classList.add("content");
                let p=document.createElement("p");
                p.textContent = product.description;
                content.appendChild(p);
                let span=document.createElement("span");
                span.textContent = `$${product.price}`;
                content.appendChild(span);
                card.appendChild(content);
                
                let btn=document.createElement("div");
                let button=document.createElement("button");
                button.textContent = "Add to Cart";
                btn.classList.add("btn_add_to_cards");
                btn.appendChild(button);
                content.appendChild(btn);

                    return card;
               
            });
            parent.append(...productElement);



        }catch(error){
            console.error("Error fetching data: ",error);
        }



    }

fetchdata();
});



// let star=document.createElement('i');

// star.classList.add("fa-solid");
// star.classList.add("fa-star");
// star.classList.add("gold");
// content.appendChild(star);
// content.appendChild(star,star);