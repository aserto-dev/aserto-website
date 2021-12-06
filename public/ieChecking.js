function testIE() {
  var ua = window.navigator.userAgent
  var ie11 = ua.indexOf('Trident/')
  var olderIe = ua.indexOf('MSIE ')
  if (ie11 !== -1 || olderIe !== 1) {
    document.body.innerHTML =
      '<div style="display: flex;justify-content: center;background-color: rgba(18, 18, 18, 1);align-items: center; width: 100vw;height: 100vh">' +
      '<div style="color: whitesmoke;width: 70vw;height: 50vh;' +
      '          padding: 5rem;' +
      '          border: 1px solid white;' +
      '          border-radius: 10px;' +
      '          font-size: 40px;' +
      '          display: flex;>"' +
      '        <p>' +
      '          🦖 Looks like you are using IE. Update your browser for more security,' +
      '          speed and the best experience on this site.' +
      '        </p>' +
      '</div>' +
      '</div>'
  }
}

window.addEventListener('load', testIE)
