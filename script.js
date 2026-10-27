(function () {
  var kutu = document.getElementById("arama-kutusu");
  if (!kutu) return; 

  var temizle = document.getElementById("temizle");
  var sayac = document.getElementById("sayac");
  var bosMesaj = document.getElementById("bos-mesaj");
  var kartlar = document.querySelectorAll("#kartlar .kart");

  function kucult(metin) {
    return metin.toLocaleLowerCase("tr-TR").trim();
  }

  function suz() {
    var aranan = kucult(kutu.value);
    var gorunen = 0;

    kartlar.forEach(function (kart) {
      var baslik = kucult(kart.querySelector("h3").textContent);
      var eslesti = baslik.indexOf(aranan) !== -1;
      kart.classList.toggle("gizli", !eslesti);
      if (eslesti) gorunen++;
    });

    bosMesaj.classList.toggle("gizli", gorunen !== 0);
    sayac.textContent = aranan
      ? kartlar.length + " etkinlikten " + gorunen + " tanesi gösteriliyor."
      : "Toplam " + kartlar.length + " etkinlik gösteriliyor.";
  }

  kutu.addEventListener("input", suz);
  temizle.addEventListener("click", function () {
    kutu.value = "";
    suz();
    kutu.focus();
  });

  suz();
})();
