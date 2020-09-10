import { SkipNavContent } from '@reach/skip-nav';
import { SITE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import Layout from '@components/conf/layout';
import { cfpWorkshopTitle, cfpWorkshopDescriptionSentences } from '@lib/conf';
import ProposalForm from '@components/conf/proposal-form';

export default function Speaker() {
  const title = `${cfpWorkshopTitle} – Next.js Conf`;
  const description = cfpWorkshopDescriptionSentences.join(' ');

  return (
    <Page title={title} hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/cfp-twitter-card.png"
        title={title}
        url={`${SITE_URL}/conf/cfp/workshop`}
        description={description}
      />
      <SkipNavContent />
      <Layout skipHeaderFooterAnimation confLogoLink="/conf">
        <ProposalForm proposalType="workshop" />
      </Layout>
    </Page>
  );
}
