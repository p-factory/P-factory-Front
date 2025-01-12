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

// functions => multi args >> object
export interface Functions {
  defaultFunction: () => void;
  transitionFunction<Cell, Organism>(args: Cell): Organism;
}

// Custom type
type FooterStyles = Styles.Common & Styles.Image;
type ButtonStyles = Styles.Common & Styles.Button & Styles.Image;
type AlarmStyles = Styles.Common & Styles.Button & Styles.Image;
type SignUpCheckListStyles = Styles.Common;
type SirenStyles = Styles.Common & Styles.Image;
type SearchStyles = Styles.Common & Styles.Button & Styles.Image;
type ToolStyles = Styles.Common & Styles.Image;
type ScrewStyles = Styles.Common & Styles.Button;
type SortButtonStyles = Styles.Common & Styles.Button & Styles.Image;
type SortOptionStyles = Styles.Common;

type FactoryStyles = Styles.Common & Styles.Image & Styles.Button;
z;

export interface AlarmStylesLocal extends AlarmStyles {
  buttonCancel: string; // '아니요' 버튼 id
  buttonApprove: string; // '네' 버튼 id
}

export interface SignUpCheckListStylesLocal extends SignUpCheckListStyles {
  checkbox: string;
  required: string;
  conditions: string;
  selected: string;
  all: string;
}

export interface SirenStylesLocal extends SirenStyles {
  alarm: string;
}

export interface SearchStylesLocal extends SearchStyles {
  group: string;
}

export interface ScrewStylesLocal extends ScrewStyles {
  screwSound: string;
  bolt: string;
  nuts: string;
  screwShape: string;
}

export interface FactoryStylesLocal extends FactoryStyles {
  name: string;
  count: string;
}
