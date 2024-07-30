import { createSlice } from "@reduxjs/toolkit";

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: [],
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.findIndex((testimonial) => testimonial.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addTestimonial, updateTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
