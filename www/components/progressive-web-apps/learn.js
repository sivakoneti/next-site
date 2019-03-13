import Container from '../container';
import Button from '../button';
import Icon from '../icon-circle'
import Lightning from '../icons/lightning'

export default () => (
  <Container wide padding center divider>
    <div className="col">
      <Icon large><Lightning /></Icon>

    <h2 className="f0 fw6">
      Lightning Fast Navigation
    </h2>

    <div className="content">
      <p>
        Let janky scrolling and routing delays become a thing of the past. 
        By intelligently caching app content, PWA's create a smooth user experience, 
        no matter how sophisticated your application is. Eliminating navigation issues 
        ensures you maximize user retainment. 
      </p>
    </div>

    <div>
      <Button invert href="/learn/excel/static-html-export">
        Learn Next.js
      </Button>
    </div>
    </div>

    <style jsx>{`
      h2 {
        line-height: 1.3;
        margin: 1.5rem 0 0 0;
      }
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content {
        margin: 1rem auto 2.5rem auto;
        max-width: 42rem;
        padding: 0 2rem;
      }
    `}</style>
  </Container>
);
