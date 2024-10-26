import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for handling async API calls
export const submitPersonalDetails = createAsyncThunk(
  'student/submitPersonalDetails',
  async (personalDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/students/personalDetails', { personalDetails });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitprogramApplyingFor = createAsyncThunk(
  'student/submitprogramApplyingFor',
  async (programApplyingFor, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/students/programApplyingFor', { programApplyingFor });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitEducationalBackground = createAsyncThunk(
  'student/submitEducationalBackground',
  async (educationalBackground, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/students/educationalBackground', { educationalBackground });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitGuardianDetails = createAsyncThunk(
  'student/submitGuardianDetails',
  async (guardianDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/students/guardianDetails', { guardianDetails });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state for the student slice
const initialState = {
  student: {},
  loading: false,
  error: null,
};

// Create the student slice
const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle personal details submission
    builder
      .addCase(submitPersonalDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitPersonalDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.student = { ...state.student, personalDetails: action.payload.student.personalDetails };
      })
      .addCase(submitPersonalDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    // Handle program details submission
    builder
      .addCase(submitprogramApplyingFor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitprogramApplyingFor.fulfilled, (state, action) => {
        state.loading = false;
        state.student = { ...state.student, programApplyingFor: action.payload.student.programApplyingFor };
      })
      .addCase(submitprogramApplyingFor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    // Handle educational background submission
    builder
      .addCase(submitEducationalBackground.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitEducationalBackground.fulfilled, (state, action) => {
        state.loading = false;
        state.student = { ...state.student, educationalBackground: action.payload.student.educationalBackground };
      })
      .addCase(submitEducationalBackground.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    // Handle guardian details submission
    builder
      .addCase(submitGuardianDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitGuardianDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.student = { ...state.student, guardianDetails: action.payload.student.guardianDetails };
      })
      .addCase(submitGuardianDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default studentSlice.reducer;
