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
  }

  export interface Footer {
    footer: string;
    contents: string;
  }

  export interface Button {
    button: string;
    contents: string;
  }

  export interface Image {
    image: string;
  }
}

// Custom type
type FooterStyles = Styles.Common & Styles.Footer & Styles.Image;
type ButtonStyles = Styles.Common & Styles.Button & Styles.Image;
