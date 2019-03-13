import Container from '../container'
import SectionHeader from '../section-header'
import Twitch from '../icons/companies/twitch';
import QQ from '../icons/companies/qq';
import Staples from '../icons/companies/staples';

export default () => (
  <Container wide divider padding>
    <SectionHeader id="customers" title="Who's Using Next.js PWAs" />

    <div className="logos-container">
      <div>
        <Twitch />
      </div>
      <div>
        <Staples />
      </div>
      <div>
        <QQ />
      </div>
    </div>
    
    <style jsx>
    {`
      .logos-container {
        display: flex;
        opacity: .4;
        max-width: 35rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
      }

      @media screen and (max-width: 640px) {
        .logos-container {
          transform: scale(0.75);
        }
      }
      @media screen and (max-width: 480px) {
        .logos-container {
          max-width: unset;
          margin: unset;
          transform: scale(0.6);
        }
      }
    `}
    </style>
  </Container>
)