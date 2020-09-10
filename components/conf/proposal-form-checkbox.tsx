import cn from 'classnames';
import styles from './proposal-form-checkbox.module.css';

type Props = {
  labelProps: JSX.IntrinsicElements['label'];
  inputProps: JSX.IntrinsicElements['input'];
  children: React.ReactNode;
};

export default function ProposalFormCheckbox({ labelProps, inputProps, children }: Props) {
  const { htmlFor, className: labelClassName, ...labelPropsRest } = labelProps;
  const { className: inputClassName, ...inputPropsRest } = inputProps;
  return (
    <label htmlFor={htmlFor} className={cn(labelClassName, styles.label)} {...labelPropsRest}>
      <input type="checkbox" className={cn(inputClassName, styles.checkbox)} {...inputPropsRest} />
      <span className={styles.text}>{children}</span>
    </label>
  );
}
