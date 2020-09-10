import cn from 'classnames';
import Link from 'next/link';
import { submissionDeadlineShort } from '@lib/conf';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      CFP now open until {submissionDeadlineShort}. <br className={styleUtils['show-on-mobile']} />
      <Link href="/conf/cfp">
        <a className={styles['contact-email']}>Submit →</a>
      </Link>
    </div>
  );
}
