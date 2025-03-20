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
          state.tool = ['eng', 'kor']; // ✅ 'deleted'을 다시 클릭하면 초기 상태로 복귀
        } else {
          state.tool = ['deleted']; // ✅ 처음 선택하면 기존 모드 삭제 후 'deleted'만 유지
        }
      } else {
        if (state.tool.includes('deleted')) {
          state.tool = [mode]; // ✅ 'deleted' 상태에서 다른 모드를 선택하면 새로운 모드만 유지
        } else if (state.tool.includes(mode)) {
          state.tool = state.tool.filter((el) => el !== mode); // ✅ 동일한 모드 클릭 시 해제
        } else {
          state.tool.push(mode); // ✅ 일반 모드는 다중 선택 가능
        }
      }
    },
  },
});

export const { SetMode } = toolSlice.actions;
export default toolSlice.reducer;
