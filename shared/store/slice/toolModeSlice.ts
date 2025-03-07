import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolState {
  tool: 'eng' | 'kor' | 'highlight' | 'deleted';
}

const initialState: ToolState = {
  tool: 'eng',
};

const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    SetMode: (state, action: PayloadAction<ToolState['tool']>) => {
      state.tool = action.payload;
    },
  },
});

export const { SetMode } = toolSlice.actions;
export default toolSlice.reducer;
