import * as React from 'react';
import {
  ColorValue,
  FlexStyle,
  ImageSourcePropType,
  ScaledSize,
  TextStyle,
  Dimensions,
  Platform,
  LayoutProps,
} from 'react-native';

// Spacing types
export interface ISpacing
  extends Pick<
    FlexStyle,
    LayoutProps
  > {}

export type TWeight =
  /** fontWeight: 400 */
  | 'normal'
  /** fontWeight: 100 */
  | 'thin'
  /** fontWeight: 200 */
  | 'extralight'
  /** fontWeight: 300 */
  | 'light'
  /** fontWeight: 500 */
  | 'medium'
  /** fontWeight: 600 */
  | 'semibold'
  /** fontWeight: 700 */
  | 'bold'
  /** fontWeight: 800 */
  | 'extrabold'
  /** fontWeight: 900 */
  | 'black';

export interface ITheme {
  colors: ThemeColors;
  gradients: ThemeGradients;
  sizes: ThemeSizes & ThemeSpacing & ICommonTheme['sizes'];
  assets: ThemeAssets;
  icons: ThemeIcons;
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
}
export interface ICommonTheme {
  assets: ThemeAssets;
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
  icons: ThemeIcons;
  sizes: {
    width: ScaledSize['width'];
    height: ScaledSize['height'];
  };
}

export interface IThemeProvider {
  children?: React.ReactNode;
  theme?: ITheme;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  black: ColorValue;
  white: ColorValue;
  light: ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  shadow: ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  facebook: ColorValue;
  twitter: ColorValue;
  dribbble: ColorValue;
  icon: ColorValue;
  blurTint: 'light' | 'dark' | 'default';
  link: ColorValue;
}

export interface ThemeGradients {
  primary?: string[];
  secondary?: string[];
  tertiary?: string[];
  fourth?: string[];
  fifth?: string[];
  sixth?: string[];
  black?: string[];
  white?: string[];
  light?: string[];
  dark?: string[];
  gray?: string[];
  danger?: string[];
  warning?: string[];
  success?: string[];
  info?: string[];
  divider?: string[];
  menu?: string[];
  drawer?: string[];
}

export interface ThemeSizes {
  base: number;
  text: number;
  radius: number;
  padding: number;

  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;

  buttonBorder: number;
  buttonRadius: number;
  socialSize: number;
  socialRadius: number;
  socialIconSize: number;

  inputHeight: number;
  inputBorder: number;
  inputRadius: number;
  inputPadding: number;

  shadowOffsetWidth: number;
  shadowOffsetHeight: number;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;

  cardRadius: number;
  cardPadding: number;

  imageRadius: number;
  avatarSize: number;
  avatarRadius: number;

  switchWidth: number;
  switchHeight: number;
  switchThumb: number;

  checkboxWidth: number;
  checkboxHeight: number;
  checkboxRadius: number;
  checkboxIconWidth: number;
  checkboxIconHeight: number;

  linkSize: number;

  multiplier: number;
}

export interface ThemeSpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ThemeWeights {
  text: TextStyle['fontWeight'];
  h1?: TextStyle['fontWeight'];
  h2?: TextStyle['fontWeight'];
  h3?: TextStyle['fontWeight'];
  h4?: TextStyle['fontWeight'];
  h5?: TextStyle['fontWeight'];
  p?: TextStyle['fontWeight'];

  thin: TextStyle['fontWeight'];
  extralight: TextStyle['fontWeight'];
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semibold?: TextStyle['fontWeight'];
  bold?: TextStyle['fontWeight'];
  extrabold?: TextStyle['fontWeight'];
  black?: TextStyle['fontWeight'];
}
export interface ThemeIcons {
  apple: ImageSourcePropType;
  google: ImageSourcePropType;
  facebook: ImageSourcePropType;
  arrow: ImageSourcePropType;
  articles: ImageSourcePropType;
  basket: ImageSourcePropType;
  bell: ImageSourcePropType;
  calendar: ImageSourcePropType;
  chat: ImageSourcePropType;
  check: ImageSourcePropType;
  clock: ImageSourcePropType;
  close: ImageSourcePropType;
  components: ImageSourcePropType;
  document: ImageSourcePropType;
  documentation: ImageSourcePropType;
  extras: ImageSourcePropType;
  flight: ImageSourcePropType;
  home: ImageSourcePropType;
  hotel: ImageSourcePropType;
  image: ImageSourcePropType;
  location: ImageSourcePropType;
  menu: ImageSourcePropType;
  more: ImageSourcePropType;
  notification: ImageSourcePropType;
  office: ImageSourcePropType;
  payment: ImageSourcePropType;
  profile: ImageSourcePropType;
  register: ImageSourcePropType;
  rental: ImageSourcePropType;
  search: ImageSourcePropType;
  settings: ImageSourcePropType;
  star: ImageSourcePropType;
  train: ImageSourcePropType;
  users: ImageSourcePropType;
  warning: ImageSourcePropType;
}

export interface ThemeAssets {
  OpenSansLight?: any;
  OpenSansRegular?: any;
  OpenSansSemiBold?: any;
  OpenSansExtraBold?: any;
  OpenSansBold?: any;

  logo: ImageSourcePropType;
  header: ImageSourcePropType;
  background: ImageSourcePropType;
  ios: ImageSourcePropType;
  android: ImageSourcePropType;

  card1: ImageSourcePropType;
  card2: ImageSourcePropType;
  card3: ImageSourcePropType;
  card4: ImageSourcePropType;
  card5: ImageSourcePropType;
}

export interface ThemeFonts {
  text: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  p: string;
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  bold: string;
  semibold: string;
  extrabold: string;
  black: string;
}

export interface ThemeLineHeights {
  text: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;
}

const { width, height } = Dimensions.get('window');

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ASSETS: ThemeAssets = {
  // fonts
  OpenSansLight: require('../assets/fonts/OpenSans-Light.ttf'),
  OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
  OpenSansSemiBold: require('../assets/fonts/OpenSans-SemiBold.ttf'),
  OpenSansExtraBold: require('../assets/fonts/OpenSans-ExtraBold.ttf'),
  OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),

  // backgrounds/logo
  logo: require('../assets/images/logo.png'),
  header: require('../assets/images/header.png'),
  background: require('../assets/images/background.png'),
  ios: require('../assets/images/ios.png'),
  android: require('../assets/images/android.png'),

  // cards
  card1: require('../assets/images/card1.png'),
  card2: require('../assets/images/card2.png'),
  card3: require('../assets/images/card3.png'),
  card4: require('../assets/images/card4.png'),
  card5: require('../assets/images/card5.png'),
};


export const ICONS: ThemeIcons = {
  apple: require('../assets/icons/apple.png'),
  google: require('../assets/icons/google.png'),
  facebook: require('../assets/icons/facebook.png'),
  arrow: require('../assets/icons/arrow.png'),
  articles: require('../assets/icons/articles.png'),
  basket: require('../assets/icons/basket.png'),
  bell: require('../assets/icons/bell.png'),
  calendar: require('../assets/icons/calendar.png'),
  chat: require('../assets/icons/chat.png'),
  check: require('../assets/icons/check.png'),
  clock: require('../assets/icons/clock.png'),
  close: require('../assets/icons/close.png'),
  components: require('../assets/icons/components.png'),
  document: require('../assets/icons/document.png'),
  documentation: require('../assets/icons/documentation.png'),
  extras: require('../assets/icons/extras.png'),
  flight: require('../assets/icons/flight.png'),
  home: require('../assets/icons/home.png'),
  hotel: require('../assets/icons/hotel.png'),
  image: require('../assets/icons/image.png'),
  location: require('../assets/icons/location.png'),
  menu: require('../assets/icons/menu.png'),
  more: require('../assets/icons/more.png'),
  notification: require('../assets/icons/notification.png'),
  office: require('../assets/icons/office.png'),
  payment: require('../assets/icons/payment.png'),
  profile: require('../assets/icons/profile.png'),
  register: require('../assets/icons/register.png'),
  rental: require('../assets/icons/rental.png'),
  search: require('../assets/icons/search.png'),
  settings: require('../assets/icons/settings.png'),
  star: require('../assets/icons/star.png'),
  train: require('../assets/icons/train.png'),
  users: require('../assets/icons/users.png'),
  warning: require('../assets/icons/warning.png'),
};

export const FONTS: ThemeFonts = {
  // based on font size
  text: 'OpenSans-Regular',
  h1: 'OpenSans-Bold',
  h2: 'OpenSans-Bold',
  h3: 'OpenSans-Bold',
  h4: 'OpenSans-Bold',
  h5: 'OpenSans-SemiBold',
  p: 'OpenSans-Regular',

  // based on fontWeight
  thin: 'OpenSans-Light',
  extralight: 'OpenSans-Light',
  light: 'OpenSans-Light',
  normal: 'OpenSans-Regular',
  medium: 'OpenSans-SemiBold',
  semibold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  extrabold: 'OpenSans-ExtraBold',
  black: 'OpenSans-ExtraBold',
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: {...ICONS, ...ASSETS},
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: {width, height},
};

