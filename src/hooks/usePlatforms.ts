import { useQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
const apiClient = new APIClient<Platform>('/platforms')
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
    // initialData: { count: platforms.length, results: platforms }
  });
export default usePlatforms;
