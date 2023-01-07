import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    // private for make sure the argument is automatically storedin an equality
    // readonly for make clear that you will never replace product service with a new value
    constructor(private readonly productService: ProductsService) {}

    @Post()
    // Body if for parse the incoming request body so convert it from json to js object and given to prodTitle argument
    addProducts(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string, 
        @Body('price') price: number )
    : any {
        this.productService.insertProduct(prodTitle, prodDesc, price);
    }
}