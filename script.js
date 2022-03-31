const form = document.getElementById('form');

form.addEventListener('submit', submitDefault);

function submitDefault (event){
    event.preventDefault();

    const age = numberValue('age');
    const weight = numberValue('weight');
    const height = numberValue('height');
    const gender = selectValue('gender');
    const activity = selectValue('activity');
    
    const tmb = Math.round(
        gender === 'female'
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );
    
    const maintenance = Math.round(tmb * Number(activity));
    
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const layout = 
    `<p>Seu metabolismo basal é de <strong>${tmb} calorias</strong>.</p>  
    <p>Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.</p> 
    <p>Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.</p>  
    <p>Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.</p>`;

    const result = document.getElementById('layout')
        result.innerHTML = layout;
}

function numberValue (id){
    return Number(document.getElementById(id).value);
}

function selectValue (id){
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;

}