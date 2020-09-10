import { SkipNavContent } from '@reach/skip-nav';
import { SITE_URL } from '@lib/constants';
import Page from '@components/page';
import SocialMeta from '@components/social-meta';
import Layout from '@components/conf/layout';
import ProposalType from '@components/conf/proposal-type';
import ProposalHeader from '@components/conf/proposal-header';
import { cfpTitle, cfpDescriptionSentences } from '@lib/conf';
import styleUtils from '@components/conf/utils.module.css';

export default function Index() {
  const title = `${cfpTitle} – Next.js Conf`;
  return (
    <Page title={title} hideHeader>
      <SocialMeta
        image="/static/twitter-cards/conf/cfp.png"
        title={title}
        url={`${SITE_URL}/conf/cfp`}
        description={cfpDescriptionSentences.join(' ')}
      />
      <SkipNavContent />
      <Layout skipHeaderFooterAnimation confLogoLink="/conf">
        <ProposalHeader
          hero={cfpTitle}
          description={
            <>
              {cfpDescriptionSentences[0]} <br className={styleUtils['hide-on-mobile']} />
              {cfpDescriptionSentences[1]} <br className={styleUtils['hide-on-mobile']} />
              {cfpDescriptionSentences[2]}
            </>
          }
        />
        <ProposalType />
      </Layout>
    </Page>
  );
}
