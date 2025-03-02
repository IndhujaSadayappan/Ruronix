var cardNumInput = document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if(Number(cNumber)){
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})


  document.getElementById("generate-qr").addEventListener("click", function() {
    const qrCodeContainer = document.getElementById("qrcode");

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    // Define the payment URL (or data)
    const paymentDetails = "https://example.com/pay?amount=19.69&order_id=12345";  // Change this to your actual payment link or data

    // Generate the QR code
    new QRCode(qrCodeContainer, {
      text: paymentDetails,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });

