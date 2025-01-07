
import { SearchApi } from "@/api/search/searchApi";
import { SearchedData } from "@/types/class/searchService";
import axios from "axios";
import { AxiosResponse } from "axios";
class SearchService {
    private searchValue:string|null ;
    private searchedData:SearchedData[] |null;

    constructor() {
        this.searchValue = null;
        this.searchedData = null;
    }
    
SetSearchValue(search_value:string) {
    this.searchValue = search_value;
}
async Search() {
    try {
if(this.searchValue && this.searchValue.length >0 ) {
    const data:AxiosResponse<SearchedData[]> = await axios.post(SearchApi.search,{
        search_value:this.searchValue
    })
    this.searchedData =  data.data
}
    return this.searchedData;
}
catch(error) {
    throw new Error('Error')
}
}
}
export const searchService = new SearchService();