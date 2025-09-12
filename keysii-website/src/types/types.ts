import type { IconType } from "react-icons"; 

export type HeaderItems = {
  id: string;
  title: string;
  link?: URL;
  icon?: IconType; // optional
};

export type ClassText = {
  class: string;
  text: string;
}

export type CardItems = {
  id: number;
  title: string;
  disc: string;
  icon: IconType;
}

export type IconsType = {
  index?: number;
  icon: IconType;
  href?: string;
};