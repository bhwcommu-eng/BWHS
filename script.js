function generateLetter() {
  const name = document.getElementById("studentName").value.trim();
  document.getElementById("nameField").innerText = name || "________________";
}

// ฟังก์ชันดาวน์โหลดจดหมายเป็น PNG
function downloadLetter() {
  const letter = document.getElementById("letter");
  html2canvas(letter).then(canvas => {
    const link = document.createElement('a');
    link.download = 'letter.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

// อัปเดตจดหมายแบบ realtime ขณะพิมพ์
document.getElementById("studentName").addEventListener("input", generateLetter);
