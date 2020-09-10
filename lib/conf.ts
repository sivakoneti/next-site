export type TicketGenerationState = 'default' | 'loading';

export function isMobileOrTablet() {
  // https://stackoverflow.com/a/8876069/114157
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  return viewportWidth < 1200;
}

export const submissionDeadlineShort = 'Sep 21';
export const decisionDeadlineShort = 'Sep 28';
export const codeOfConductUrl =
  'https://www.notion.so/vercel/Next-js-Conf-Code-of-Conduct-2dae92927656409db28aaf2a62d99c41';
export const guidelinesUrl =
  'https://www.notion.so/vercel/Guidelines-Next-js-Conf-Call-for-Proposals-9f8bdd32aaad4d468c5cac30e43ad75f';
export const confEmail = 'conf@nextjs.org';
export const cfpTitle = 'Call for Proposals';
export const cfpDescriptionSentences = [
  'Help make Next.js Conf a turning point for the projects,',
  'companies, and careers of our attendees.',
  `Submissions due ${submissionDeadlineShort}.`
];
export const cfpSpeakerTitleShort = 'Speaker';
export const cfpSpeakerTitle = 'Call for Speakers';
export const cfpSpeakerDescriptionSentences = [
  'The classic presentation, critical for spreading experience and big ideas.',
  'Attendees will leave with new thoughts and inspiration.',
  `Submissions due ${submissionDeadlineShort}.`
];
export const cfpSpeakerTime = '40 minutes';

export const cfpWorkshopTitleShort = 'Workshop';
export const cfpWorkshopTitle = 'Call for Workshops';
export const cfpWorkshopDescriptionSentences = [
  'A more hands-on presentation allowing for audience participation.',
  'Attendees will leave knowing how to do something.',
  `Submissions due ${submissionDeadlineShort}.`
];
export const cfpWorkshopTime = '40-85 minutes';
export const cfpOtherTitle = 'Propose Something';
export const cfpOtherDescription = 'Let us know if you’d like to contribute in some other way.';
export type ProposalType = 'speaker' | 'workshop' | 'propose-something';
export const cfpApprovalPanel = [
  {
    name: 'Dan Abramov',
    company: 'Facebook',
    image: 'dan.jpg'
  },
  {
    name: 'Rachel Nabors',
    company: 'Facebook',
    image: 'rachel.jpg'
  },
  {
    name: 'Shubhie Panicker',
    company: 'Google',
    image: 'shubhie.jpg'
  },
  {
    name: 'Nicole Sullivan',
    company: 'Google',
    image: 'nicole.jpg'
  }
];
