import Script from 'next/script'
export default function Localizacoes() {

  const handleFirstLink = (e) => {
    e.preventDefault()
    window.location.replace("/")
  }

  const handleSecondLink = (e) => {
    e.preventDefault()
    window.location.replace("/estatisticas")
  }

    return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item"><a href='' onClick={handleFirstLink} className="nav-link">início</a>
          </li>
          <li className="nav-item">
            <a href="" onClick={handleSecondLink} className="nav-link">Estatísticas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
 <Script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
   crossOrigin=""></Script>
    <div id="map"></div>
    <Script src='scripts/localizacoesScript.js' strategy='lazyOnload'></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
    </>
    )
}