document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens de mockup e os botões de navegação
    const items = document.querySelectorAll('.mockup-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0; // Começa no primeiro item

    // Função para mostrar o item atual e esconder os outros
    function showItem(index) {
        // Remove a classe 'active' de todos os itens
        items.forEach(item => {
            item.classList.remove('active');
        });
        
        // Adiciona a classe 'active' ao item atual
        items[index].classList.add('active');
        currentIndex = index;
    }

    // Função para ir para o próximo item
    function nextItem() {
        currentIndex++;
        // Se ultrapassar o último, volta para o primeiro (loop)
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        showItem(currentIndex);
    }

    // Função para ir para o item anterior
    function prevItem() {
        currentIndex--;
        // Se for menor que o primeiro, vai para o último (loop)
        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        }
        showItem(currentIndex);
    }

    // Adiciona os eventos de clique aos botões
    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    // Inicializa mostrando o primeiro item
    showItem(currentIndex);

    // Opcional: Adicionar navegação por teclado (setas)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextItem();
        } else if (e.key === 'ArrowLeft') {
            prevItem();
        }
    });
});