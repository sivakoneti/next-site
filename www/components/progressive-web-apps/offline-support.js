import Container from '../container';
import OfflineSupport from './svg/offline-support'

export default () => (
  <Container wide center>
    <h2 className="f0 fw6">
      Offline Support
    </h2>

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
      h2 {
        line-height: 1.3;
        margin: 4rem 0 0 0;
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
