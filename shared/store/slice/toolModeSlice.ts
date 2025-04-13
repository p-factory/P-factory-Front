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
      } else if (mode === 'highlight') {
        //Tool 컴포넌트에서 상태값을 의존하지 않고 Redux에서 의존 할수 있게 일부 수정
        if (state.tool.includes('highlight')) {
          state.tool = ['eng', 'kor'];
        } else {
          state.tool = ['highlight'];
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
