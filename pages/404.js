export default function Custom404() {
    return (
        <div className="main-content errors-content">
            <div className="container info-container">
                Oops! Sorry, we couldn't find the page you were looking for.
            </div>
            <style global jsx>
                {`	
                    header {background: none;}
                    .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before { background-color: #0c6; }
                `}
            </style>
        </div>
    );
  }