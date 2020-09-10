import cn from 'classnames';
import {
  cfpSpeakerTitleShort,
  cfpSpeakerDescriptionSentences,
  cfpSpeakerTime,
  cfpWorkshopTitleShort,
  cfpWorkshopDescriptionSentences,
  cfpWorkshopTime,
  cfpApprovalPanel,
  decisionDeadlineShort,
  guidelinesUrl
} from '@lib/conf';
import Link from 'next/link';
import ExternalLink from '@components/icons/external-link';
import styles from './proposal-type.module.css';
import styleUtils from './utils.module.css';

export default function ProposalType() {
  return (
    <>
      <section className={styles.section}>
        <div className={cn(styles.cards, styleUtils.appear, styleUtils['appear-third'])}>
          <div className={cn(styles.gradient, styles['gradient-speaker'])}>
            <Link href="/conf/cfp/speaker">
              <a className={cn(styles.card)}>
                <div>
                  <h3 className={cn(styles['proposal-type'])}>{cfpSpeakerTitleShort}</h3>
                  <p className={styles['proposal-text']}>
                    {cfpSpeakerDescriptionSentences[0]}{' '}
                    <br className={styleUtils['hide-on-mobile']} />
                    {cfpSpeakerDescriptionSentences[1]}
                  </p>
                </div>
                <div className={styles['additional-info-section']}>
                  <p className={cn(styles['additional-info'])}>
                    {cfpSpeakerTime}, including Q & A. (5-minute format also available)
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className={cn(styles.gradient, styles['gradient-workshop'])}>
            <Link href="/conf/cfp/workshop">
              <a className={cn(styles.card)}>
                <div>
                  <h3 className={cn(styles['proposal-type'])}>{cfpWorkshopTitleShort}</h3>
                  <p className={styles['proposal-text']}>
                    {cfpWorkshopDescriptionSentences[0]}{' '}
                    <br className={styleUtils['hide-on-mobile']} />
                    {cfpWorkshopDescriptionSentences[1]}
                  </p>
                </div>
                <div className={styles['additional-info-section']}>
                  <p className={cn(styles['additional-info'])}>{cfpWorkshopTime}</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={cn(
            styles['small-description'],
            styleUtils.appear,
            styleUtils['appear-fourth']
          )}
        >
          Want to contribute in some other way?{' '}
          <Link href="/conf/cfp/propose-something">
            <a className={styles['description-link']}>Propose Something</a>
          </Link>
        </div>
      </section>
      <section className={cn(styleUtils.appear, styleUtils['appear-fifth'])}>
        <h2 className={styles['small-hero']}>Approval Panel</h2>
        <p className={styles['small-description']}>
          Our reviewers will take a look at your submissions, and you’ll be notified of the decision
          by {decisionDeadlineShort}. Please do not message them about your submission. For more
          details, please read the{' '}
          <a
            href={guidelinesUrl}
            className={styles['description-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            Proposal Guidelines <ExternalLink color="currentColor" />
          </a>
          .
        </p>
        <div className={styles.panels}>
          {cfpApprovalPanel.map(({ name, company, image }) => (
            <a
              key={name}
              className={styles['panel-item']}
              href={guidelinesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/static/images/conf/${image}`}
                alt={name}
                className={styles['panel-image']}
                width={110}
                height={110}
              />
              <div className={styles['panel-name']}>{name}</div>
              <div className={styles['panel-company']}>{company}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
