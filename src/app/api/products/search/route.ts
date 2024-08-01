import ProductServices from '@/app/backends/services/products'
import { responseHandler } from '@/app/backends/utils/responseHandler';
import { NextRequest } from 'next/server';


export const GET = async (request: NextRequest) => {
    try {
        // let query = {};

        const friuts = request.nextUrl.searchParams;
        // @ts-ignore
        const search = friuts.get('query');
        // const url = new URL(request.url);

        // if (filter) {
        //     query = filter;
        // }
        // @ts-ignore
        const response = await ProductServices.searchProducts(search);
        return responseHandler(response, 200);
    } catch (error: any) {
        return responseHandler(error?.message, 500);
    }
}