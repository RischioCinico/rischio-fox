pkgname=rischio-fox
pkgver=0
pkgrel=0
pkgdesc='Configurazione di Firefox'
arch=('any')
url='rischiocinico.altervista.org'
license=('GPL2')
makedepends=(cpio)
depends=(firefox)
provides=("${pkgname}")
conflicts=()
source=(
policies.json
impostazioni.js
rischio-fox.js
)
sha256sums=(
'SKIP'
'SKIP'
'SKIP'
)

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