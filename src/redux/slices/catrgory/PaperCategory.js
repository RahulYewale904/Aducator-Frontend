import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

//Create category Action

export const createCategoryAction = createAsyncThunk(
  "Papercategory/create",
  async (category, { rejectWithValue, getState, dispatch }) => {

    const user = getState()?.user;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      const { data } = await axios.post(`${baseUrl}/api/paperCategory`, {
        title: category?.title,
      },config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all category
export const fetchCategoriesAction = createAsyncThunk(
  "Papercategory/fetch",
  async (category, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.user;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.get(`${baseUrl}/api/paperCategory`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch single category
export const detailCategoriesAction = createAsyncThunk(
  "Papercategory/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.user;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.get(`${baseUrl}/api/paperCategory/${id}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//update category
export const updateCategoriesAction = createAsyncThunk(
  "Papercategory/update",
  async (category, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.user;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.put(
        `${baseUrl}/api/paperCategory/${category?.id}`,
        { title: category?.title },
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//delete category
export const deleteCategoriesAction = createAsyncThunk(
  "Papercategory/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.user;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.delete(`${baseUrl}/api/paperCategory/${id}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);


//Slices

const categorySlices = createSlice({
  name: "PaperCategory",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(createCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    //fetch all
    builder.addCase(fetchCategoriesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      state.categoryList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch single category
    builder.addCase(detailCategoriesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(detailCategoriesAction.fulfilled, (state, action) => {
      state.detailCategories = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(detailCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //update category
    builder.addCase(updateCategoriesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateCategoriesAction.fulfilled, (state, action) => {
      state.updateCategories = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //delete category
    builder.addCase(deleteCategoriesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCategoriesAction.fulfilled, (state, action) => {
      state.deleteCategories = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default categorySlices.reducer;
