import Spinner from 'react-bootstrap/Spinner';

function Loader() {


  return (
    <div className="text-center">
      <h2 className='animate__animated animate__zoomInDown text-center mb-5 h1'>Accés à votre espace personnel</h2>
        <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
