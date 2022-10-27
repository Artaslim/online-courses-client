import React from "react";

const Blog = () => {
  return (
    <>
      <div className="border border-info p-3 mb-4">
        <h4>what is cors?</h4>
        <p className=" p-3 w-75">
          <small>
            The Cross-Origin Resource Sharing standard works by adding new HTTP
            headers that let servers describe which origins are permitted to
            read that information from a web browser.
            <br /> Additionally, for HTTP request methods that can cause
            side-effects on server data (in particular,
            <br /> HTTP methods other than GET, or POST with certain MIME
            types), the specification mandates that browsers "preflight"
            <br /> the request, soliciting supported methods from the server
            with the HTTP OPTIONS request method, and then, upon "approval" from
            the server, sending the actual request. Servers can also inform
            clients whether "credentials" (such as Cookies and HTTP
            Authentication) should be sent with requests.
            <br />
            CORS failures result in errors but for security reasons, specifics
            about the error are not available to JavaScript. <br />
            All the code knows is that an error occurred. The only way to
            determine what specifically went wrong is to look at the browser's
            console for details. Subsequent sections discuss scenarios, as well
            as provide a breakdown of the HTTP headers used.
          </small>
        </p>
      </div>
      <div className="border border-info p-3 mb-4">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p className=" p-3 w-75">
          <small>
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
          </small>
        </p>
      </div>
      <div className="border border-info p-3 mb-4">
        <h4>What is Node? How does Node work?</h4>

        <p className=" p-3 w-75">
          <small>
            Node.js takes a different approach. It runs a single-threaded event
            loop registered with the system to handle connections, and each new
            connection causes a JavaScript callback function to fire. <br />
            The callback function can handle requests with non-blocking I/O
            calls, and if necessary can spawn threads from a pool to execute
            blocking or CPU-intensive operations and to load-balance across CPU
            cores. <br />
            Node’s approach to scaling with callback functions requires less
            memory to handle more connections than most competitive
            architectures that scale with threads, including Apache HTTP Server,
            the various Java application servers, IIS and ASP.NET, and Ruby on
            Rails.
          </small>
        </p>
      </div>
      <div className="border border-info p-3 mb-4">
        <h4>What is Node? How does Node work?</h4>
        <p className=" p-3 w-75">
          <small>
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
            <br />
            The current logged in user (authUser) is retrieved from Redux state
            with a call to the useSelector() hook. Redux is used in this example
            however it is not required to implement a Private Route component in
            React Router 6. You could use a different state management library
            or any approach you prefer to get the logged in status of the user.
          </small>
        </p>
      </div>
    </>
  );
};

export default Blog;
