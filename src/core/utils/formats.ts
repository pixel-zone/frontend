export interface IHandleInputChangeProps {
  event: React.ChangeEvent<HTMLInputElement>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

export const handleInputChange = ({
  event,
  setAmount,
}: IHandleInputChangeProps) => {
  const subst = '';
  const regex = /[^\d.]|\.(?=.*\.)/g;
  const value = event.target.value?.replace(regex, subst);

  setAmount(value);
};
