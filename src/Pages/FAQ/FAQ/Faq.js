import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border border-primary">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body className="border border-primary">
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
          <br />
          Authentication:
          <br /> Lets start by listing the various ways through which we can
          achieve authentication,
          <br /> *Cookie-Based authentication <br />
          *Token-Based
          <br />
          *authentication Third party access(OAuth, API-token)
          <br /> *OpenId SAML
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="border border-primary">
          How does the private route work?
        </Accordion.Header>
        <Accordion.Body className="border border-primary">
          Node.js takes a different approach. It runs a single-threaded event
          loop registered with the system to handle connections, and each new
          connection causes a JavaScript callback function to fire. <br />
          The callback function can handle requests with non-blocking I/O calls,
          and if necessary can spawn threads from a pool to execute blocking or
          CPU-intensive operations and to load-balance across CPU cores. <br />
          Node’s approach to scaling with callback functions requires less
          memory to handle more connections than most competitive architectures
          that scale with threads, including Apache HTTP Server, the various
          Java application servers, IIS and ASP.NET, and Ruby on Rails.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="border border-primary">
          What is Node? How does Node work?
        </Accordion.Header>
        <Accordion.Body className="border border-primary">
          The react private route component renders child components (children)
          if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
          <br />
          The current logged in user (authUser) is retrieved from Redux state
          with a call to the useSelector() hook. Redux is used in this example
          however it is not required to implement a Private Route component in
          React Router 6. You could use a different state management library or
          any approach you prefer to get the logged in status of the user.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Faq;
