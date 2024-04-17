import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

export const useGetQuery = (query, key, params, refetch) => {
	const baseUrl = `https://api-eu-west-2.hygraph.com/v2/cluub4q2x0dq408wavuuyj6uj/master`;

	const { data, isLoading, error } = useQuery({
		queryKey: [key, refetch ? refetch : null],
		queryFn: async () => request(baseUrl, query, params ? { ...params } : null),
	});

	return { data, isLoading, error };
};
