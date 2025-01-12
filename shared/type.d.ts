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
type SortStyles = Styles.Common & Styles.Button & Styles.Image;
type FactoryStyles = Styles.Common & Styles.Image & Styles.Button;
type ManagerBarStyles = Styles.Common & Styles.Image & Styles.Button;

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
  nut: string;
  screwShape: string;
  checked: string;
  unchecked: string;
}

export interface SortStylesLocal extends SortStyles {
  sortOptions: string;
  sortOption: string;
}

export interface FactoryStylesLocal extends FactoryStyles {
  name: string;
  count: string;
  managerBar: string;
}