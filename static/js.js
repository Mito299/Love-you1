
// สร้าง IntersectionObserver เพื่อตรวจจับการเลื่อนหน้าจอ
const messageBoxes = document.querySelectorAll('.message-box');

// ตั้งค่าการสังเกตให้เป็นช่วงที่ขอบล่างของกล่องข้อความเข้าไปใน viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // เมื่อข้อความปรากฏในหน้าจอ (scroll จนถึงจุดที่กำหนด)
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // ตั้งค่าค่า threshold เป็น 0.5 หมายถึงให้เห็น 50% ของข้อความ

// เริ่มสังเกตที่ element ที่ต้องการ
messageBoxes.forEach(box => {
    observer.observe(box);
});
function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play(); // เล่นเพลง



    var contents = document.querySelectorAll('.message-box');
    contents.forEach(function (content, index) {
        setTimeout(function () {
            content.classList.add('show-content'); // เพิ่มคลาส show-content เพื่อให้ข้อความค่อยๆ ปรากฏ
        }, index * 100); // ให้แต่ละข้อความแสดงทีละ 2 วินาที
    });


    // แสดงข้อความหลังจากที่เพลงเริ่มเล่น
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content, index) {
        setTimeout(function () {
            content.classList.add('show-content'); // เพิ่มคลาส show-content เพื่อให้ข้อความค่อยๆ ปรากฏ
        }, index * 100); // ให้แต่ละข้อความแสดงทีละ 2 วินาที
    });
}

document.getElementById('background-music').addEventListener('ended', function () {
    var audio = document.getElementById('background-music');
    audio.currentTime = 0; // รีเซ็ตเพลงไปที่จุดเริ่มต้น
    audio.play(); // เล่นเพลงใหม่
});




