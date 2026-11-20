pkgname=rischio-fox
pkgver=0
pkgrel=1
pkgdesc='Configurazione di Firefox'
arch=('any')
url='https://rischiocinico.altervista.org'
license=('custom:RischioFox-PrivateUse')
depends=(firefox)
source=(
  policies.json
  impostazioni.js
  rischio-fox.js
  LICENSE
)
sha256sums=(
  'SKIP'
  'SKIP'
  'SKIP'
  'SKIP'
)

pkgver() {
  date -u +%Y%m%d%H%M%S
}

package() {
  install -Dm644 "$srcdir/policies.json" \
    "$pkgdir/usr/lib/firefox/distribution/policies.json"
  install -Dm644 "$srcdir/impostazioni.js" \
    "$pkgdir/usr/lib/firefox/defaults/pref/impostazioni.js"
  install -Dm644 "$srcdir/rischio-fox.js" \
    "$pkgdir/usr/lib/firefox/rischio-fox.js"
  install -Dm644 "$srcdir/LICENSE" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
