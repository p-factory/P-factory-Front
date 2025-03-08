import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolState {
  tool: ('eng' | 'kor' | 'highlight' | 'deleted')[];
}

const initialState: ToolState = {
  tool: ['eng'],
};

const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    SetMode: (state, action: PayloadAction<ToolState['tool'][number]>) => {
      const mode = action.payload;
      if (mode === 'deleted') {
        state.tool = ['deleted'];
      } else {
        if (state.tool.includes('deleted')) {
          state.tool = [mode];
        } else if (state.tool.includes(mode)) {
          //제거되는 코드
          state.tool = state.tool.filter((el) => el !== mode);
        } else {
          state.tool.push(mode);
        }
      }
    },
  },
});

export const { SetMode } = toolSlice.actions;
export default toolSlice.reducer;
