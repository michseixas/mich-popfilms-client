const Footer = () => {
  return (
    <section>
      {/* Footer */}
      <footer className="bg-dark text-white text-center text-md-start">
        {/* Grid container */}
        <div className="container">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0 mt-1 custom-text">GitHub</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/michseixas" target="_blank" className="text-white">Mich Seixas GitHub</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0 mt-1 custom-text">LinkedIn</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/michseixas/" target="_blank" className="text-white">Mich Seixas LinkedIn</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © Popfilms 2023 by Mich Seixas @  
          <a className="text-white" href="https://ironhack.com"> Ironhack</a>
          &nbsp; &nbsp; 
          <img src="/images/tmdb-logo.svg" width="50px" height="50px"/>
        </div>

        {/* Copyright */}
      </footer>
      {/* Footer */}
    </section>
  );
};

export default Footer;
