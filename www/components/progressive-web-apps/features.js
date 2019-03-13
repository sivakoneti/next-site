import Container from '../container';
import Checkmark from '../icons/checkmark';

const Bullets = () => (
  <>
    <ul>
      <div>
        <li>
          <Checkmark inverse />
          <h4>Full Screen Support</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Rich Offline Experiences</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Periodic Background Sync</h4>
        </li>
      </div>
      <div>
        <li>
          <Checkmark inverse />
          <h4>Push Notifications</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Install to Home Screen</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Progressive Enhancement</h4>
        </li>
      </div>
    </ul>

    <style jsx>
    {`
      ul {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        max-width: 52rem;
        width: 100%;
        margin: 0 auto;
      }
      li {
        display: flex;
        align-items: center;
        width: 18rem;
      }
      h4 {
        font-size: .8888875rem;
        font-weight: 600;
        margin: 0 0 0 0.4rem;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      div:last-child {
        margin-top: 1.5rem;
      }
      @media screen and (max-width: 840px) {
        li {
            width: unset;
            margin: 1rem 0;
          }
        div {
          width: unset;
          flex-direction: column;
          justify-content: unset;
          align-items: flex-start;
        }
        div:last-child {
          margin: 0;
        }
        ul {
          flex-direction: row;
          justify-content: space-between;
          max-width: 36rem;
        }
      }
      @media screen and (max-width: 640px) {
        ul {
          flex-direction: column;
          align-items: center;
        }
        li {
           margin: 1rem 0;
        }
        div {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}
    </style>
  </>
)

export default () => (
  <Container wide padding center divider>
    <h2 className="f0 fw6">
      Native Features
    </h2>

    <div className="content">
      <p>
        On supported platforms, progressive web apps can live natively on a user's home screen. 
        Coupled with full screen interactivity and push notifications, PWA's take web application experiences 
        to the next level.
      </p>
    </div>

    <h4>Includes Support For</h4>

    <Bullets />

    <style jsx>{`
      h2 {
        line-height: 1.3;
      }
      h4 {
        text-transform: uppercase;
        font-size: 0.790125rem;
        font-weight: 600;
        letter-spacing: .1rem;
        line-height: 1.5625rem;
        margin: 0 0 2rem 0;
        color: #999999;
      }
      .content {
        margin: 1rem auto 3rem auto;
        max-width: 36rem;
        padding 0 2rem;
      }
    `}</style>
  </Container>
);
