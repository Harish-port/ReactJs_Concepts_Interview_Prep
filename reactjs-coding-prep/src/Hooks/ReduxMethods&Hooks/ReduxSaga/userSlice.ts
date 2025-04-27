import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchError } = userSlice.actions;
export default userSlice.reducer;
