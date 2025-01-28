import FooterStyled from '../../View/Footer.module.scss';
import ButtonStyled from '../../View/Button.module.scss';
import AlarmStyled from '../../View/Alarm.module.scss';
import SignUpCheckListStyled from '../../View/SignUpCheckList.module.scss';
import SirenStyled from '../../View/Siren.module.scss';
import SearchStyled from '../../View/Search.module.scss';
import ToolStyled from '../../View/Tool.module.scss';
import FactoryStyled from '../../View/Factory.module.scss';
import SortStyled from '../../View/Sort.module.scss';
import ScrewStyled from '../../View/Screw.module.scss';
import BuildFactoryStyled from '../../View/BuildFactory.module.scss';
import DriverStyled from '../../View/Driver.module.scss';
import PtoryLogoStyled from '../../View/PtoryLogo.module.scss';
import {
  // TestFlexProps,
  FooterStyles,
  ButtonStyles,
  AlarmStylesLocal,
  SignUpCheckListStylesLocal,
  SirenStylesLocal,
  SearchStylesLocal,
  ToolStylesLocal,
  FactoryStylesLocal,
  SortStylesLocal,
  ScrewStylesLocal,
  BuildFactoryStylesLocal,
  DriverStylesLocal,
  PtoryLogoStyles,
} from '@shared/style';

//객체 매핑(Object Mapping)

export const FooterTypeStyles: FooterStyles = {
  container: FooterStyled.container,
  contents: FooterStyled.contents,
  image: FooterStyled.image,
  title: FooterStyled.title,
};

export const ButtonTypeStyles: ButtonStyles = {
  button: ButtonStyled.button,
  container: ButtonStyled.container,
  contents: ButtonStyled.contents,
  buttonContents: AlarmStyled.contents,
  title: ButtonStyled.title,
  image: ButtonStyled.image,
};

export const AlarmTypeStyles: AlarmStylesLocal = {
  title: AlarmStyled.title,
  container: AlarmStyled.container,
  contents: AlarmStyled.contents,
  buttonContents: AlarmStyled.buttonContents,
  button: AlarmStyled.button,
  buttonCancel: AlarmStyled.buttonCancel,
  buttonApprove: AlarmStyled.buttonApprove,
  image: AlarmStyled.image,
};

export const SignUpCheckListTypeStyles: SignUpCheckListStylesLocal = {
  title: SignUpCheckListStyled.container,
  container: SignUpCheckListStyled.container,
  contents: SignUpCheckListStyled.contents,
  checkbox: SignUpCheckListStyled.checkbox,
  required: SignUpCheckListStyled.required,
  conditions: SignUpCheckListStyled.conditions,
  selected: SignUpCheckListStyled.selected,
  all: SignUpCheckListStyled.all,
};

export const SirenTypeStyles: SirenStylesLocal = {
  title: SirenStyled.title,
  container: SirenStyled.container,
  contents: SirenStyled.contents,
  image: SirenStyled.image,
  alarm: SirenStyled.alarm,
};

export const SearchTypeStyles: SearchStylesLocal = {
  title: SearchStyled.title,
  container: SearchStyled.container,
  contents: SearchStyled.contents,
  button: SearchStyled.button,
  buttonContents: SearchStyled.buttonContents,
  image: SearchStyled.image,
  group: SearchStyled.group,
};

export const ToolTypeStyles: ToolStylesLocal = {
  container: ToolStyled.container,
  contents: ToolStyled.contents,
  image: ToolStyled.image,
  title: ToolStyled.title,
  tools: ToolStyled.tools,
};

export const SortTypeStyles: SortStylesLocal = {
  button: SortStyled.button,
  buttonContents: SortStyled.contents,
  container: SortStyled.container,
  contents: SortStyled.contents,
  sortOption: SortStyled.sortOption,
  title: SortStyled.title,
  image: SortStyled.image,
};

export const FactoryTypeStyles: FactoryStylesLocal = {
  container: FactoryStyled.container,
  contents: FactoryStyled.contents,
  title: FactoryStyled.title,
  image: FactoryStyled.image,
  button: FactoryStyled.button,
  buttonContents: FactoryStyled.buttonContents,
  name: FactoryStyled.name,
  count: FactoryStyled.count,
  managerBar: FactoryStyled.managerBar,
  clickArea: FactoryStyled.clickArea,
};

export const ScrewTypeStyles: ScrewStylesLocal = {
  container: ScrewStyled.container,
  contents: ScrewStyled.contents,
  title: ScrewStyled.title,
  button: ScrewStyled.button,
  buttonContents: ScrewStyled.buttonContents,
  screwSound: ScrewStyled.screwSound,
  bolt: ScrewStyled.bolt,
  nuts: ScrewStyled.nuts,
  nut: ScrewStyled.nut,
  screwShape: ScrewStyled.screwShape,
  checked: ScrewStyled.checked,
  unchecked: ScrewStyled.unchecked,
};

export const BuildFactoryTypeStyles: BuildFactoryStylesLocal = {
  container: BuildFactoryStyled.container,
  contents: BuildFactoryStyled.contents,
  title: BuildFactoryStyled.title,
  image: BuildFactoryStyled.image,
  titleBar: BuildFactoryStyled.titleBar,
  input: BuildFactoryStyled.input,
  charCounter: BuildFactoryStyled.charCounter,
  submit: BuildFactoryStyled.submit,
  button: BuildFactoryStyled.button,
  buttonContents: BuildFactoryStyled.buttonContents,
};

export const DriverTypeStyles: DriverStylesLocal = {
  title: DriverStyled.title,
  container: DriverStyled.container,
  contents: DriverStyled.contents,
  inputContents: DriverStyled.inputContents,
  buttonContents: DriverStyled.buttonContents,
  button: DriverStyled.button,
  image: DriverStyled.image,
  submit: DriverStyled.submit,
  createInput: DriverStyled.createInput,
};

export const PtoryLogoTypeStyles: PtoryLogoStyles = {
  container: PtoryLogoStyled.container,
  contents: PtoryLogoStyled.contents,
  title: PtoryLogoStyled.title,
};
