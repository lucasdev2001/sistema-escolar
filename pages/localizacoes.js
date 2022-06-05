import Script from 'next/script'
export default function Localizacoes(params) {

    return (
    <>
 <Script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
   crossorigin=""></Script>
    <div id="map"></div>
    <Script src='scripts/localizacoesScript.js' strategy='lazyOnload'></Script>
    </>
    )
}