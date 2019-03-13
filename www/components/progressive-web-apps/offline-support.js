import Container from '../container';
import SectionHeader from '../section-header'
import OfflineSupport from './svg/offline-support'

export default () => (
  <Container wide center>
    <SectionHeader anchor="offline-support" title="Offline Support" margin="3rem 0 0 0" />

    <div className="content">
      <p>
        Unreliable network connections are an unavoidable reality on the mobile web. 
        But that doesn't mean they need to disrupt your users. Progressive web apps 
        leverage modern web technologies to provide offline support so your app never goes down.
      </p>
    </div>

    <div className="device">
      <OfflineSupport />
    </div>
    
    <style jsx>{`
      a {
        display: none;
        margin: 0 0 0 0;
      }
      .content {
        margin: 1rem 0 1.5rem;
        max-width: 42rem;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .device {
        justify-content: center;
        display: flex;
      }
    `}</style>
  </Container>
);
