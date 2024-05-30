import { useQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>('/platforms')
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
    // initialData: { count: platforms.length, results: platforms }
  });
export default usePlatforms;
