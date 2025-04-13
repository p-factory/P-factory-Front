import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolState {
  tool: ('eng' | 'kor' | 'highlight' | 'deleted')[];
}

const initialState: ToolState = {
  tool: ['eng', 'kor'],
};

const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    SetMode: (state, action: PayloadAction<ToolState['tool'][number]>) => {
      const mode = action.payload;

      if (mode === 'deleted') {
        if (state.tool.includes('deleted')) {
          state.tool = ['eng', 'kor'];
        } else {
          state.tool = ['deleted'];
        }
      } else {
        if (state.tool.includes('deleted')) {
          state.tool = [mode];
        } else if (state.tool.includes(mode)) {
          state.tool = state.tool.filter((el) => el !== mode);
        } else {
          state.tool.push(mode);
        }
      }
    },
    ResetToolMode: () => initialState,
  },
});

export const { SetMode, ResetToolMode } = toolSlice.actions;
export default toolSlice.reducer;
