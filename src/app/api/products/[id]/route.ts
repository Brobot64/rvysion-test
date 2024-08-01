import ProductServices from '@/app/backends/services/products'
import { responseHandler } from '@/app/backends/utils/responseHandler';



export const PUT = async (request: Request, { params } :{ params: { id: string } }) => {
    try {
        const data = await request.json();
        const response = await ProductServices.updateProduct(params.id, data);
        return responseHandler(response, 200);
    } catch (error: any) {
        return responseHandler(error?.message, 400);   
    }
}


export const DELETE = async(request: Request, { params } : { params: { id: string } }) => {
    try {
        // const id = request.nextUrl.searchParams.get('id');
        const response = await ProductServices.deleteProduct(params.id);
        return responseHandler(response, 200);
    } catch (error: any) {
        return responseHandler(error?.message, 400);
    }
}

export const GET = async (request: Request, { params } :{ params: { id: string } }) => {
    try {
        const response = await ProductServices.getProductById(params.id);
        return responseHandler(response, 200);
    } catch (error: any) {
        return responseHandler(error?.message, 400);   
    }
}