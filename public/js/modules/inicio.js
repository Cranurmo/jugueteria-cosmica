import productController from '/js/controllers/product.js';

// console.log('🆗: Módulo PageInicio cargado.');

// class PageInicio {
    
//     static async renderTemplateCards(products) {
//         const hbsFile = await fetch('templates/inicio.hbs').then(r => r.text());
//         const template = Handlebars.compile(hbsFile);
//         const html = template({ products });
//         document.querySelector('.cards-container').innerHTML = html;
//     }

//     static async renderTemplateCart(products) {
//         const hbsFile = await fetch('templates/cart.hbs').then(r => r.text());
//         const template = Handlebars.compile(hbsFile);
//         const html = template({ products });
//         document.querySelector('.cards-container').innerHTML = html;
//     }
    
//     static async init () {
//         console.log('PageInicio.init()');
        
//         const products = await productController.getProducts();
//         console.log(`Se encontraron ${products.length} productos`);
        
//         await PageInicio.renderTemplateCards(products);
        
//     }
// }


// import productController from '/js/controllers/products.js';
console.log('🆗: Módulo PageInicio cargado.');

class PageInicio {

    static async renderTemplateCards(products) {
        const hbsFile = await fetch('templates/inicio.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({ products });
        document.querySelector('.cards-container').innerHTML = html;
    }

    static async renderTemplateCart(cart) {
        const hbsFile = await fetch('templates/cart.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({cart});
        document.querySelector('#carrito').innerHTML = html;

        console.log('renderizando carrito');
    }

    static async init () {
        console.log('PageInicio.init()');

        const products = await productController.getProducts();
        console.log(`Se encontraron ${products.length} productos`);
        await PageInicio.renderTemplateCards(products);


        const cart = [];
        PageInicio.renderTemplateCart(cart);


        document.querySelector('.cards-container').addEventListener('click', async e => {
            console.log('agregado');

            //Funcion para agregar al carrito
            const id= e.target.id;
            console.log(id)
            console.log(e.target);
            const productGet = await productController.getProduct(id);

            const product = {
                name: productGet.name,
                // img: productGet.img,
                price: productGet.price,
                quantity: 1,
                id: productGet.id
            }
            console.log(productGet);

            cart.forEach((item) =>{
                if(item.id === productGet.id){
                    item.quantity++
                }
            })

            cart.push(product);

            //Renderizo el carrito
            PageInicio.renderTemplateCart(cart);
        });

    }
}

export default PageInicio;
