import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({}),
});
