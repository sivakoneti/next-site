import cn from 'classnames';
import styles from './proposal-form-input.module.css';

export default function ProposalFormInput({ className, ...props }: JSX.IntrinsicElements['input']) {
  return <input className={cn(styles.input, className)} {...props} />;
}
