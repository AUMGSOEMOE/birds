import { ApiService } from "../service/Apiservice";

const birdEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    Get: builder.query({
      query: () => "/Tbl_Bird",
    }),
    GetEndemic: builder.query({
      query: () => "/Endemic",
    }),
  }),
});

export const { useGetQuery, useGetEndemicQuery } = birdEndpoints;
