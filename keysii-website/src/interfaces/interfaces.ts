import type {HeaderItems} from '../types/types';

import type { CardItems } from '../types/types';

export interface HeaderProps {
  headerItems: HeaderItems[];
  baseStyle?: React.CSSProperties;
} // type for headers


export interface CardProps {
  cardProps: CardItems[];
  isMobile: boolean;
}