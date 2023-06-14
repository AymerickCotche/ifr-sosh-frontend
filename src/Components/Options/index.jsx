import data from '../../Data/userdata.json';

function Options() {

  return (
    <div className="bg-light px-5 py-3 h-100 d-flex flex-column justify-content-between border-perso">
      <h2 className='text-center'>Les options</h2>

      <div className="row text-center">

        <div className="col-6 col-lg-3">

          <h3>La musique</h3>

          <div className="row f-flex align-items-center justify-content-center">
            <div className="col-5 col-lg-4">
              <img className='w-100' src='/options/deezer.png' alt="logo deezer" />

            </div>
            <div className="col-5 col-lg-3">
              <img className='w-100' src='/options/spotify.png' alt="logo spotify" />

            </div>
          </div>

        </div>

        <div className="col-6 col-lg-3">

          <h3>Le cinéma</h3>

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-5 col-lg-3">
              <img className='w-100' src='/options/netflix.png' alt="logo deezer" />

            </div>
            <div className="col-5 col-lg-4">
              <img className='w-100 align-middle' src='/options/prime.png' alt="logo spotify" />

            </div>
          </div>

        </div>

        <div className="col-6 col-lg-3">
          <h3>Pass internet</h3>
          <div>
            <a href="/#">Pass internet 25 Go</a>
          </div>
          <div>
            <a href="/#">Pass internet 50 Go</a>
          </div>
          <div>
            <a href="/#">Pass internet 100 Go</a>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <h3>Options Sosh Sécurité</h3>
          <div>
            <a href="/#">Option sécurité STANDARD</a>
          </div>
          <div>
            <a href="/#">Option sécurité PRENIUM</a>
          </div>


        </div>

      </div>
    </div>
  );
}

export default Options;
