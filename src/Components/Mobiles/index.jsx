import dataJson from '../../Data/userdata.json';

function Mobiles() {

    const dataMobiles = dataJson.user.mobiles[0];
    const dataInfoUser = dataJson.user.infos;

    return (
        <div className="bg-sosh-subtle px-5 py-3">
            <h2 className="text-center pb-3">Mobiles</h2>
            <div className="row">
                <p className="h4">
                    <i className="fas fa-mobile-alt"></i>
                    Mobile de {dataInfoUser.nom} - {dataMobiles.numero}
                </p>
                <span className="text-sosh">
                    {dataMobiles.nomForfait} : {dataMobiles.prixDeBase}€
                </span>
            </div>

            <div className="row pt-3">
                <div className="d-flex flex-wrap justify-content-center">
                    <p className="me-md-auto">
                        Restant : {dataMobiles.dataEnd} Go
                    </p>
                    <p className="">
                        Valide jusqu’au 30 Juin 2023
                    </p>
                </div>


                <div class="progress px-0" role="progressbar" aria-label="Warning consommation" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar text-bg-sosh fs-6">75%</div>
                </div>
            </div>
            <div className="row col-md-5">
                <button className="btn btn-link">
                    Suivi de la consommation &gt;
                </button>
            </div>
            <div className="pt-3 d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark">
                    Gérer mes mobiles
                </button>
            </div>
        </div>
    )
}

export default Mobiles;
