import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "./features/allJobs/allJobsSlice";
import jobSlice from "./features/job/jobSlice";
import UserSlice from "./features/user/UserSlice";

export const store = configureStore({
    reducer:{
        user: UserSlice,
        job: jobSlice,
        allJobs: allJobsSlice
    }
})