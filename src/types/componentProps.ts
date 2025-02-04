export interface ButtonProps {
  functionParam?: string;
  handleButtonClick: (param1: string) => void;
  text: string;
  type: {
    action: ButtonActionType;
    style: string;
  };
  styles?: string;
}

export type ButtonActionType = HTMLButtonElement["type"];

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
