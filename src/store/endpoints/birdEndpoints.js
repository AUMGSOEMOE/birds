import { ApiService } from "../service/Apiservice";

const birdEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    Get: builder.query({
      query: () => "/Tbl_Bird",
    }),
  }),
});

export const { useGetQuery } = birdEndpoints;
