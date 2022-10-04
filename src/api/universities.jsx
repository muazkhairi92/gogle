import axios from "axios";
import { get } from ".";

/**
 * function to fetch universities
 */

export const getUniversities = async (country='Malaysia')=>{
    const res = await get(
        `http://universities.hipolabs.com/search?country=${country}`,
    );
    return res;
};