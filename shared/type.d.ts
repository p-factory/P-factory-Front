// Test
export interface TestButtonProps {
  onPress: () => void;
  label: string;
}

export interface TestFlexProps {
  name: string;
  age: number;
  isActive?: boolean;
}

// namespace interface
export namespace Styles {
  export interface Common {
    title: string;
    container: string;
    contents: string;
  }

  export interface Button {
    button: string;
    buttonContents: string;
  }

  export interface Image {
    image: string;
  }
}

// Custom type
type FooterStyles = Styles.Common & Styles.Image;
type ButtonStyles = Styles.Common & Styles.Button & Styles.Image;
type AlarmStyles = Styles.Common & Styles.Button & Styles.Image;

export interface AlarmStylesLocal extends AlarmStyles {
  buttonCancel: string; // '아니요' 버튼 id
  buttonApprove: string; // '네' 버튼 id
}
