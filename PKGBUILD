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

package() {
    cd "$startdir"
}

pkgver() {
  date +%Y%m%d%H%M
}

package() {
cd "$srcdir"
    install -Dm644 "policies.json" \
        "$pkgdir/usr/lib/firefox/distribution/policies.json"
    install -Dm644 "impostazioni.js" \
        "$pkgdir/usr/lib/firefox/defaults/pref/impostazioni.js"
    install -Dm644 "rischio-fox.js" \
        "$pkgdir/usr/lib/firefox/rischio-fox.js"
        }
