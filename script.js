// === HEADER ANİMASYONU ===
// Sayfa kaydırıldığında header arka planı değiştir
window.addEventListener('scroll', () => {
    const header = document.querySelector('.subpage-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
        header.style.transition = 'background-color 0.5s ease-in-out';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// === NAVBAR LİNK AKTİFLEŞTİRME ===
// Navbar linklerine tıklanınca aktif sınıfı ekle
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// === FORM ANİMASYONLARI ===
// Input alanlarına odaklanınca animasyon ekle
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.border = '2px solid #4CAF50';
        input.style.transition = 'border 0.3s ease-in-out';
    });
    input.addEventListener('blur', () => {
        input.style.border = '1px solid #ccc';
    });
});

// === GÖNDER BUTONU ANİMASYONU ===
// Gönder butonuna basıldığında animasyon
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('mousedown', () => {
    submitButton.style.transform = 'scale(0.95)';
});
submitButton.addEventListener('mouseup', () => {
    submitButton.style.transform = 'scale(1)';
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.transform = 'scale(1)';
});

// === SAYFA YÜKLENME ANİMASYONU ===
// Sayfa yüklenince fade-in efekti
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
    
});

// === GERİ DÖNÜŞ MESAJI ANİMASYONU ===
// Form gönderildiğinde animasyonlu bildirim
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = document.getElementById('formResponse');

    if (name && email && message) {
        response.innerText = 'Mesajınız başarıyla gönderildi!';
        response.style.color = 'green';
        response.style.opacity = '1';
        response.style.transform = 'translateY(0)';
        response.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        document.getElementById('contactForm').reset();

        setTimeout(() => {
            response.style.opacity = '0';
            response.style.transform = 'translateY(-20px)';
        }, 3000);
    } else {
        response.innerText = 'Lütfen tüm alanları doldurun!';
        response.style.color = 'red';
    }
});
