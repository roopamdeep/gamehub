import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'ebfd20d59218482da497d44c49877da0'
  }
})