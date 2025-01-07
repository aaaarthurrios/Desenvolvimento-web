const colors = {
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    // Método para retornar a cor da tag ou a cor padrão
    get(tag) {
        return this[tag] ? this[tag] : this.padrao;
    }
}

// Selecione todos os elementos com a classe 'tag' e aplique o estilo
document.querySelectorAll(".tag").forEach(box => {
    const tagName = box.tagName.toLowerCase();

    // Aplique a cor de borda com base na tag
    box.style.borderColor = colors.get(tagName);

    // Verifique se o box não possui a classe 'nolabel'
    if (!box.classList.contains("nolabel")) {
        const label = document.createElement("label");
        
        // Aplique a cor de fundo do label com base na tag
        label.style.backgroundColor = colors.get(tagName);
        
        // Defina o conteúdo do label com o nome da tag
        label.innerHTML = tagName;

        // Insira o label no início do box
        box.insertBefore(label, box.childNodes[0]);
    }
});
