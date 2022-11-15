import Joi from "joi";
// https://joi.dev/api/?v=17.6.3

class ProductValidator {
    
    static validate(product) {

        const productSchema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
            price: Joi.number().required(),
            stock: Joi.string().required(),
            brand: Joi.string().required(),
            category: Joi.string().required(),
            description: Joi.string().required(),
            longDescription: Joi.string().required(),
            ageD: Joi.string().required(),
            ageU: Joi.string().required(),           
        });

        const { error } = productSchema.validate(product);

        return error;
    }
}

export default ProductValidator;
