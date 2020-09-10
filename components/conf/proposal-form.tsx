import cn from 'classnames';
import { useState } from 'react';
import { ProposalType, guidelinesUrl, codeOfConductUrl } from '@lib/conf';
import Link from 'next/link';
import { API_URL } from '@lib/constants';
import FormError from '@lib/form-error';
import ExternalLink from '@components/icons/external-link';
import styles from './proposal-form.module.css';
import styleUtils from './utils.module.css';
import Select from './proposal-form-select';
import ProposalFormInput from './proposal-form-input';
import TimezoneOptions from './timezone-options';
import ProposalFormHeader from './proposal-form-header';
import ProposalFormTextarea from './proposal-form-textarea';
import ProposalFormCheckbox from './proposal-form-checkbox';
import LoadingDots from './loading-dots';

type Props = {
  proposalType: ProposalType;
};

type FormState = 'default' | 'loading' | 'error' | 'success';

export default function ProposalForm({ proposalType }: Props) {
  const [formState, setFormState] = useState<FormState>('default');
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [timezone, setTimezone] = useState('');
  const [twitter, setTwitter] = useState('');
  const [title, setTitle] = useState('');
  const [proposal, setProposal] = useState('');
  const [lightningTalk, setLightningTalk] = useState(false);
  const [previousTalks, setPreviousTalks] = useState('');
  const [sponsorContact, setSponsorContact] = useState('');
  return (
    <section className={styles.section}>
      <ProposalFormHeader submitted={formState === 'success'} proposalType={proposalType} />
      {formState === 'success' ? (
        <div className={cn(styles['text-center'], styleUtils.appear, styleUtils['appear-third'])}>
          <Link href="/conf/cfp">
            <a className={styles.btn}>Go back</a>
          </Link>
        </div>
      ) : (
        <form
          className={cn(styles.form, styleUtils.appear, styleUtils['appear-third'])}
          onSubmit={e => {
            if (formState === 'default' || formState === 'error') {
              setFormState('loading');
              fetch(`${API_URL}/conf-cfp`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  proposalType,
                  name,
                  email,
                  company,
                  role,
                  timezone,
                  twitter,
                  title,
                  proposal,
                  lightningTalk: lightningTalk.toString(),
                  previousTalks,
                  sponsorContact
                })
              })
                .then(res => {
                  if (res.ok) {
                    setFormState('success');
                  } else {
                    throw new FormError(res);
                  }
                })
                .catch(async err => {
                  let message = 'Error! Please try again.';

                  if (err instanceof FormError) {
                    const { res } = err;
                    const data = res.headers.get('Content-Type')?.includes('application/json')
                      ? await res.json()
                      : null;

                    if (data?.error?.code === 'bad_email') {
                      message = 'Please enter a valid email.';
                    }
                  }

                  setErrorMessage(message);
                  setFormState('error');
                });
            }
            e.preventDefault();
          }}
        >
          <div>
            <div className={styles['form-group']}>
              <div className={styles['small-heading']}>Personal Information</div>
              <div className={cn(styles.grid, styles['grid-2-col'])}>
                <ProposalFormInput
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  name="name"
                  placeholder="Full Name"
                  aria-label="Your full name"
                  required
                  disabled={formState === 'loading'}
                />
                <ProposalFormInput
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  placeholder="Email"
                  aria-label="Your email address"
                  required
                  disabled={formState === 'loading'}
                />
                <ProposalFormInput
                  type="text"
                  onChange={e => setCompany(e.target.value)}
                  value={company}
                  name="company"
                  placeholder="Company (Optional)"
                  aria-label="Your company (Optional)"
                  disabled={formState === 'loading'}
                />
                <Select
                  aria-label="Choose your role"
                  required
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  disabled={formState === 'loading'}
                >
                  <option value="" disabled>
                    Role
                  </option>
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>Full-Stack</option>
                  <option>Design</option>
                  <option>Product</option>
                  <option>DevOps</option>
                  <option>Executive</option>
                  <option>Other</option>
                </Select>
                <Select
                  aria-label="Choose your timezone"
                  required
                  value={timezone}
                  onChange={e => setTimezone(e.target.value)}
                  disabled={formState === 'loading'}
                >
                  <option value="" disabled>
                    Timezone
                  </option>
                  <TimezoneOptions />
                </Select>
                <ProposalFormInput
                  name="twitter"
                  type="text"
                  value={twitter}
                  onChange={e => setTwitter(e.target.value)}
                  placeholder="Twitter Account (Optional)"
                  aria-label="Your Twitter Account (Optional)"
                  disabled={formState === 'loading'}
                />
              </div>
            </div>
            <div className={styles['form-group']}>
              <div className={styles['small-heading']}>Proposal</div>
              <div className={styles['small-description']}>
                Please read the{' '}
                <a
                  href={guidelinesUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proposal Guidelines <ExternalLink color="currentColor" />
                </a>{' '}
                and{' '}
                <a
                  href={codeOfConductUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct <ExternalLink color="currentColor" />
                </a>
                .
              </div>
              <div className={styles.grid}>
                {proposalType !== 'propose-something' && (
                  <>
                    <ProposalFormInput
                      name="title"
                      type="text"
                      placeholder="Title"
                      aria-label="The proposal title"
                      required
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      disabled={formState === 'loading'}
                    />
                  </>
                )}
                <ProposalFormTextarea
                  value={proposal}
                  onChange={e => setProposal(e.target.value)}
                  name="proposal"
                  placeholder="Describe your proposal in one or two paragraphs (2000 characters max)."
                  aria-label="Describe your proposal in one or two paragraphs (2000 characters max)."
                  required
                  rows={10}
                  maxLength={2000}
                  disabled={formState === 'loading'}
                />
              </div>
              {proposalType !== 'propose-something' && (
                <div className={cn(styles['small-description'], styles['small-description-below'])}>
                  Only the title and proposal text will be accessible to the{' '}
                  <a
                    href={guidelinesUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Approval Panel <ExternalLink color="currentColor" />
                  </a>
                  . <br className={styleUtils['hide-on-mobile']} />
                  Please make your proposal about what you will present and not about who you are.
                </div>
              )}
            </div>
            {proposalType === 'speaker' && (
              <div className={styles['form-group']}>
                <div className={styles['small-heading']}>
                  Lightning Talk{' '}
                  <span className={styles['small-heading-optional']}>(Optional)</span>
                </div>
                <ProposalFormCheckbox
                  labelProps={{ htmlFor: 'lightning-talk' }}
                  inputProps={{
                    id: 'lightning-talk',
                    name: 'lightningTalk',
                    checked: lightningTalk,
                    onChange: e => setLightningTalk(e.target.checked),
                    disabled: formState === 'loading'
                  }}
                >
                  I'm open to presenting in a 5-minute format.
                </ProposalFormCheckbox>
              </div>
            )}
            {proposalType !== 'propose-something' && (
              <div className={styles['form-group']}>
                {/* eslint-disable jsx-a11y/label-has-associated-control */}
                <label htmlFor="previous-talks">
                  <div className={styles['small-heading']}>
                    Previous Talks{' '}
                    <span className={styles['small-heading-optional']}>(Optional)</span>
                  </div>
                  <div className={styles['small-description']}>
                    If you’ve presented at conferences or meetups before, please share 1-3 links to
                    your slides and recordings.
                  </div>
                </label>
                <ProposalFormTextarea
                  id="previous-talks"
                  value={previousTalks}
                  onChange={e => setPreviousTalks(e.target.value)}
                  name="previousTalks"
                  placeholder="Previous talk slides and recordings"
                  aria-label="Previous talk slides and recordings"
                  rows={3}
                  maxLength={2000}
                  disabled={formState === 'loading'}
                />
              </div>
            )}
            <div className={styles['form-group']}>
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <label htmlFor="sponsor-contact">
                <div className={styles['small-heading']}>
                  Sponsorship <span className={styles['small-heading-optional']}>(Optional)</span>
                </div>
                <div className={styles['small-description']}>
                  If your company is interested in sponsoring Next.js Conf, please leave the contact
                  email.
                </div>
              </label>
              <ProposalFormInput
                type="email"
                id="sponsor-contact"
                value={sponsorContact}
                onChange={e => setSponsorContact(e.target.value)}
                name="sponsorContact"
                placeholder="Sponsor contact email"
                aria-label="Sponsor contact email"
                disabled={formState === 'loading'}
              />
            </div>
            {formState === 'error' && errorMessage && (
              <div className={cn(styles['form-group'], styles['error-message'])}>
                {errorMessage}
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <Link href="/conf/cfp">
              <a className={styles.link}>← Back</a>
            </Link>
            <button type="submit" className={styles.btn} disabled={formState === 'loading'}>
              {formState === 'loading' ? <LoadingDots size={8} /> : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
