 import data from '../../Data/userdata.json';
 
 function Factures() {

  const lastInvoice = data.user.factures[0];

  const thirdInvoices = [data.user.factures[1],data.user.factures[2],data.user.factures[3]];

  const jsxInvoices = thirdInvoices.map(invoice => (
    <div className='col-md-4 text-center'>
      <div className='row text-sosh'>
        <p className='mb-0'> <strong>{invoice.date.moisTxt} {invoice.date.annee}</strong></p>
      </div>
      <div className='row'>
        <p className='mb-0'>{invoice.montant}€</p>
      </div>
      <button className='row btn btn-secondary btn-sm'>
        Télécharger
      </button>
    </div>
  ));

  return (
    <div className="bg-sosh-subtle px-5 py-3 h-100 d-flex flex-column justify-content-between">
      <h2 className='text-center'>Factures</h2>
      <p className='text-center'>
        <span className='h4'>Ma dernière facture</span>
        <span> - </span>
        <span className='me-3'>{`${lastInvoice.date.jour} ${lastInvoice.date.moisTxt} ${lastInvoice.date.annee}`} : {lastInvoice.montant}€</span>
        <button className='row btn btn-secondary btn-sm '>
          Télécharger
        </button>
      </p>
      <div className='row'>
        {jsxInvoices}
      </div>
      <div className="pt-3 d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark">
          Historique complet
        </button>
      </div>
    </div>
  );
}

export default Factures;
