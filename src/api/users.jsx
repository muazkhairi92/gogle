import { get } from ".";

/**
 * function to fetch universities
 */

export const getUser = async ()=>{
    const res = await get(
        'https://randomuser.me/api/',
    );
    return res;
};