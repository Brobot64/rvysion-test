import ProductServices from '@/app/backends/services/products'
import { responseHandler } from '@/app/backends/utils/responseHandler';

export const POST = async (request: Request) => {
    try {
        const data = await request.json();
        const response = await ProductServices.createProduct(data);
        return responseHandler(response, 201);
    } catch (error: any) {
        return responseHandler(error?.message, 400)
    }
}


export const GET = async (request: Request) => {
    try {
        let query = {};
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        const filter = Object.fromEntries(params.entries());

        if (filter) {
            query = filter;
        }
        
        const response = await ProductServices.getProducts();
        return responseHandler(response, 200);
    } catch (error: any) {
        return responseHandler(error?.message, 500);
    }
}