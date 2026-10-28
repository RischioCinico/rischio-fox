pkgname=rischio-fox
pkgver=0
pkgrel=0
pkgdesc='Configurazione di Firefox'
arch=('any')
url='rischiocinico.altervista.org'
license=('Proprietary')
depends=(firefox)
provides=("${pkgname}")
conflicts=()

pkgver() {
  date +%Y%m%d%H%M
}

package() {
    install -Dm644 "$startdir/policies.json" \
        "$pkgdir/usr/lib/firefox/distribution/policies.json"
    install -Dm644 "$startdir/impostazioni.js" \
        "$pkgdir/usr/lib/firefox/defaults/pref/impostazioni.js"
    install -Dm644 "$startdir/rischio-fox.js" \
        "$pkgdir/usr/lib/firefox/rischio-fox.js"
}
