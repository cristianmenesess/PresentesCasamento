function showModal(presentValue) {
    document.getElementById('present-value').textContent = presentValue;
    document.getElementById('pix-key-type').textContent = 'Celular'; // Tipo de chave PIX para Vianez
    document.getElementById('pix-key').textContent = '34996951619'; // Chave PIX de Vianez
    document.getElementById('pix-key-heloisa-type').textContent = 'CPF'; // Tipo de chave PIX para Heloísa
    document.getElementById('pix-key-heloisa').textContent = '13966578603'; // Chave PIX de Heloísa
    document.getElementById('modal').classList.add('active');
}

function hideModal() {
    document.getElementById('modal').classList.remove('active');
}

function copyPixKey() {
    const pixKey = document.getElementById('pix-key').textContent;
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada!');
    }, () => {
        alert('Falha ao copiar a chave PIX.');
    });
}

function copyPixKeyHeloisa() {
    const pixKeyHeloisa = document.getElementById('pix-key-heloisa').textContent;
    navigator.clipboard.writeText(pixKeyHeloisa).then(() => {
        alert('Chave PIX copiada!');
    }, () => {
        alert('Falha ao copiar a chave PIX.');
    });
}
