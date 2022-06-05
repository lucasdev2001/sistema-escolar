import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossOrigin="" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <footer className="bg-dark text-light text-center p-3">
            <small>Copyright &copy; Lucas Pereira</small>
        </footer>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js"
        ></Script>
        <Script src='scripts/formScripts.js'></Script>
      </body>
    </Html>
  )
}