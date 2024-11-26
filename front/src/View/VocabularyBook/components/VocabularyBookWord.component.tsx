import React, { useState } from "react";
import pencilIcon from "../../../global/Img/pencilIcon.svg";
import pencilIconGrey from "../../../global/Img/pencilIconGrey.svg";

// props 타입 정의
interface VocabularyBookWordProps {
  word: string;
  wordLine?: number;
  wordHighlight?: boolean;
  wordDelete?: boolean;
}

const VocabularyBookWord = ({
  word,
  wordLine,
  wordHighlight,
  wordDelete,
}: VocabularyBookWordProps) => {
  const [isEditableState, setEditableState] = useState(false);

  const [isEditable, setIsEditable] = useState(false); // 상태로 editable 여부 관리

  const handleEditable = () => {
    setIsEditable(true); // 클릭 시 editable 활성화
    setEditableState(true);
    console.log(isEditableState);
  };

  const handleUnEditable = () => {
    setIsEditable(false); // 포커스가 벗어났을 때 editable 비활성화
    setEditableState(false);
  };

  return (
    <div
      className={`relative grid grid-cols-[1fr_auto_1fr] ${
        wordLine === 2 ? "h-[188px]" : "h-[76px]"
      }  border-[0.9px] border-solid rounded-[18px] ${
        isEditableState
          ? "border-[--primary-color]"
          : wordDelete
            ? "text-[#e8e8e8] border-[#e8e8e8]"
            : "border-[#959595]"
      }
      `}
    >
      <div
        className="pl-[clamp(0px,28.97%,84px)] pt-[23px] flex"
        contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
        suppressContentEditableWarning // React 경고 제거
      >
        <div className="w-3/4 break-all">
          <span className={`${wordHighlight ? "--primary-bg-Color" : ""}`}>
            {word}
          </span>
        </div>
      </div>
      <div
        className={`h-full border-l-[0.9px] ${
          wordDelete ? "border-[#e8e8e8]" : "border-[#959595]"
        }`}
      />
      <div
        className="flex justify-center pt-[23px]"
        contentEditable={isEditable} // 상태에 따라 contentEditable 속성 변경
        suppressContentEditableWarning // React 경고 제거
      >
        <span>뜻</span>
      </div>
      <img
        src={`${wordDelete ? pencilIconGrey : pencilIcon}`}
        alt="Pencil Icon"
        className="absolute top-[23px] right-[40px] w-[22px] h-[22px] cursor-pointer"
        onClick={() => (isEditable ? handleUnEditable() : handleEditable())}
      />
      {wordDelete && (
        <div className="absolute flex items-center justify-center w-full">
          <hr className="flex absolute w-4/5 top-[35px] border-black" />
        </div>
      )}
    </div>
  );
};

export default VocabularyBookWord;
