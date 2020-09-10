import {
  cfpSpeakerTitle,
  cfpWorkshopTitle,
  cfpOtherTitle,
  ProposalType,
  cfpSpeakerDescriptionSentences,
  cfpWorkshopDescriptionSentences,
  cfpOtherDescription,
  submissionDeadlineShort,
  decisionDeadlineShort
} from '@lib/conf';
import styleUtils from './utils.module.css';
import ProposalHeader from './proposal-header';

type Props = {
  proposalType: ProposalType;
  submitted: boolean;
};

const hero: Record<ProposalType, string> = {
  speaker: cfpSpeakerTitle,
  workshop: cfpWorkshopTitle,
  'propose-something': cfpOtherTitle
};

const description: Record<ProposalType, React.ReactNode> = {
  speaker: (
    <>
      {cfpSpeakerDescriptionSentences[0]} <br className={styleUtils['hide-on-mobile']} />
      {cfpSpeakerDescriptionSentences[1]} <br className={styleUtils['hide-on-mobile']} />
      {cfpSpeakerDescriptionSentences[2]}
    </>
  ),
  workshop: (
    <>
      {cfpWorkshopDescriptionSentences[0]} <br className={styleUtils['hide-on-mobile']} />
      {cfpWorkshopDescriptionSentences[1]} <br className={styleUtils['hide-on-mobile']} />
      {cfpWorkshopDescriptionSentences[2]}
    </>
  ),
  'propose-something': <>{cfpOtherDescription}</>
};

const thankYouTitle = `Thank You`;
const thankYouDescription = (
  <>We'll respond to every proposal via email by {decisionDeadlineShort}.</>
);

export default function ProposalFormHeader({ submitted, proposalType }: Props) {
  return (
    <ProposalHeader
      keyName={submitted.toString()}
      hero={submitted ? thankYouTitle : hero[proposalType]}
      description={submitted ? thankYouDescription : description[proposalType]}
    />
  );
}
