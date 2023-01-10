type Card = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url_m: string;
  height_m: number;
  width_m: NumberConstructor;
};

type Value = {
  value: string;
  isDisabled: boolean;
  arrCard: Card[];
};

type Photos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Card[];
};

type ResponseCard = {
  photos: Photos;
  stat: string;
};

type CardFormProps = {
  inputText: string;
  inputDate: string;
  select: string;
  privacy: boolean;
  gender: boolean;
  file: FileList | null;
};

type ModalProps = {
  title: string;
  url: string;
  owner: string;
  isOpen: boolean;
  onCancel: () => void;
};

interface ICardForm {
  inputText: string;
  inputDate: string;
  select: string;
  privacy: boolean;
  gender: boolean;
  file: FileList | null;
}

export type { Card, Value, ResponseCard, CardFormProps, ModalProps, ICardForm };
