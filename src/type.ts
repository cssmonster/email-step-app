import { EMAIL, FULLNAME, CARD_NUMBER,EXP_MONTH,EXP_YEAR, CVV } from '@/constants/type'

export type ItemType = {
  id: number;
  content: string;
};

export type FormFiledType = typeof EMAIL | typeof FULLNAME | typeof CARD_NUMBER | typeof EXP_MONTH | typeof EXP_YEAR | typeof  CVV