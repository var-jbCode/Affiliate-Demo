//Layout Voucher Codes
voucherCodes = [document.querySelector('.code-1').innerText,
document.querySelector('.code-2').innerText,
document.querySelector('.code-3').innerText
]

// Setup Event Listeners

document.getElementById('copy-btn-1').addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(voucherCodes[0]);
    alert( `"${voucherCodes[0]}" copied to clipboard`);
  } catch (err) {
    console.error('Failed to copy', err);
  }
})

document.getElementById('copy-btn-2').addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(voucherCodes[1]);
    alert( `"${voucherCodes[1]}" copied to clipboard`);
  } catch (err) {
    console.error('Failed to copy', err);
  }
})

document.getElementById('copy-btn-3').addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(voucherCodes[2]);
    alert( `"${voucherCodes[2]}" copied to clipboard`);
  } catch (err) {
    console.error('Failed to copy', err);
  }
})





