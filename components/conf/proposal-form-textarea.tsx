import cn from 'classnames';
import styles from './proposal-form-textarea.module.css';

export default function ProposalFormTextarea({
  className,
  ...props
}: JSX.IntrinsicElements['textarea']) {
  return <textarea className={cn(styles.textarea, className)} {...props} />;
}
