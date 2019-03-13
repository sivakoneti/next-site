import Container from '../container'
import Icon from '../icon-circle'
import Checkmark from '../icons/checkmark';
import Wrench from './svg/wrench'
import Rocket from './svg/rocket'
import ServerlessResult from '../static-exporting/svg/ServerlessResult';

export default () => (
  <Container gray wide divider>
      <div className="container" id="benefits">
        <div className="flex">
          <div className="col">
            <Icon><Rocket /></Icon>
            <h3 className="f3 fw6">Automated Hard Parts</h3>
            <p>
              Adapting the technologies involved in progressive web apps to your specific application
              can often be a challenge. By using Next.js, the heavy lifting is done for you. 
              Requirements like cache management and service worker registration are all handled automatically.
            </p>
          </div>

          <hr />

          <div className="col">
            <Icon><Wrench /></Icon>
            <h3 className="f3 fw6">Open to Extension</h3>
            <p>
              Next.js also allows for easy tweaking of the default configuration. 
              By exposing the WorkBox configuration, you can modify whatever you need. 
              By enabling you to hook into any part of the progressive web app tech stack, 
              Next.js guarantees your application will scale with you.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex">
          <div className="col">
            <Icon><Checkmark dark /></Icon>
            <h3 className="f3 fw6">Easy to Enable</h3>
            <p>
              With Next.js, converting you're application into a progressive web app has never been easier. 
              Simply add the next-offline package, create an app manifest file and you're application will be ready to go. 
              This is all you need to score 100 on the industry-standard Lighthouse PWA audit with Next.js.
            </p>
          </div>

          <div className="col">
            <img height="307px" src="/static/images/learn.png" />
          </div>
        </div>
    </div>

    <style jsx>
          {`
            h3 {
              margin: 1rem 0 0 0;
            }
            hr {
              border-top: 0;
              border-right: 0;
              border-style: solid;
              opacity: 0.1;
              align-self: stretch;
              margin: 0;
            }
            p {
              margin: 1rem 0 0 0;
            }
            .container {
              width: 100%;
              margin: 0 auto;
              max-width: 64rem;
            }
            .flex {
              display: flex;
            }
            .col {
              display: flex;
              flex-direction: column;
            }
            .col:first-child {
              padding: 4rem 4rem 4rem 0;
            }
            .col:last-child {
              padding: 4rem 0 4rem 4rem;
            }
            @media screen and (max-width: 1080px) {
              .col:first-child {
                padding: 4rem 4rem 4rem 2rem;
              }
              .col:last-child {
                padding: 4rem 2rem 4rem 4rem;
              }
              .flex:last-child > .col {
                padding: 4rem 2rem 4rem 2rem;
              }
              .flex:last-child > .col:last-child {
                display: none;
              }
            }
            @media screen and (max-width: 640px) {
              .flex:first-child {
                flex-direction: column;
              }
              .flex > .col {
                padding: 4rem 2rem;
              }
            }
          `}
        </style>
  </Container>
    );