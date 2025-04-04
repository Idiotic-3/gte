const periodicTable = {
    elements: [
        { symbol: 'H', name: 'Hydrogen', number: 1, group: 1, period: 1, category: 'nonmetal' },
        { symbol: 'He', name: 'Helium', number: 2, group: 18, period: 1, category: 'noble-gas' },
        { symbol: 'Li', name: 'Lithium', number: 3, group: 1, period: 2, category: 'alkali-metal' },
        { symbol: 'Be', name: 'Beryllium', number: 4, group: 2, period: 2, category: 'alkaline-earth' },
        { symbol: 'B', name: 'Boron', number: 5, group: 13, period: 2, category: 'metalloid' },
        { symbol: 'C', name: 'Carbon', number: 6, group: 14, period: 2, category: 'nonmetal' },
        { symbol: 'N', name: 'Nitrogen', number: 7, group: 15, period: 2, category: 'nonmetal' },
        { symbol: 'O', name: 'Oxygen', number: 8, group: 16, period: 2, category: 'nonmetal' },
        { symbol: 'F', name: 'Fluorine', number: 9, group: 17, period: 2, category: 'halogen' },
        { symbol: 'Ne', name: 'Neon', number: 10, group: 18, period: 2, category: 'noble-gas' },
        { symbol: 'Na', name: 'Sodium', number: 11, group: 1, period: 3, category: 'alkali-metal' },
        { symbol: 'Mg', name: 'Magnesium', number: 12, group: 2, period: 3, category: 'alkaline-earth' },
        { symbol: 'Al', name: 'Aluminum', number: 13, group: 13, period: 3, category: 'post-transition' },
        { symbol: 'Si', name: 'Silicon', number: 14, group: 14, period: 3, category: 'metalloid' },
        { symbol: 'P', name: 'Phosphorus', number: 15, group: 15, period: 3, category: 'nonmetal' },
        { symbol: 'S', name: 'Sulfur', number: 16, group: 16, period: 3, category: 'nonmetal' },
        { symbol: 'Cl', name: 'Chlorine', number: 17, group: 17, period: 3, category: 'halogen' },
        { symbol: 'Ar', name: 'Argon', number: 18, group: 18, period: 3, category: 'noble-gas' },
        { symbol: 'K', name: 'Potassium', number: 19, group: 1, period: 4, category: 'alkali-metal' },
        { symbol: 'Ca', name: 'Calcium', number: 20, group: 2, period: 4, category: 'alkaline-earth' },
        { symbol: 'Sc', name: 'Scandium', number: 21, group: 3, period: 4, category: 'transition' },
        { symbol: 'Ti', name: 'Titanium', number: 22, group: 4, period: 4, category: 'transition' },
        { symbol: 'V', name: 'Vanadium', number: 23, group: 5, period: 4, category: 'transition' },
        { symbol: 'Cr', name: 'Chromium', number: 24, group: 6, period: 4, category: 'transition' },
        { symbol: 'Mn', name: 'Manganese', number: 25, group: 7, period: 4, category: 'transition' },
        { symbol: 'Fe', name: 'Iron', number: 26, group: 8, period: 4, category: 'transition' },
        { symbol: 'Co', name: 'Cobalt', number: 27, group: 9, period: 4, category: 'transition' },
        { symbol: 'Ni', name: 'Nickel', number: 28, group: 10, period: 4, category: 'transition' },
        { symbol: 'Cu', name: 'Copper', number: 29, group: 11, period: 4, category: 'transition' },
        { symbol: 'Zn', name: 'Zinc', number: 30, group: 12, period: 4, category: 'post-transition' },
        { symbol: 'Ga', name: 'Gallium', number: 31, group: 13, period: 4, category: 'post-transition' },
        { symbol: 'Ge', name: 'Germanium', number: 32, group: 14, period: 4, category: 'metalloid' },
        { symbol: 'As', name: 'Arsenic', number: 33, group: 15, period: 4, category: 'metalloid' },
        { symbol: 'Se', name: 'Selenium', number: 34, group: 16, period: 4, category: 'nonmetal' },
        { symbol: 'Br', name: 'Bromine', number: 35, group: 17, period: 4, category: 'halogen' },
        { symbol: 'Kr', name: 'Krypton', number: 36, group: 18, period: 4, category: 'noble-gas' },
        { symbol: 'Rb', name: 'Rubidium', number: 37, group: 1, period: 5, category: 'alkali-metal' },
        { symbol: 'Sr', name: 'Strontium', number: 38, group: 2, period: 5, category: 'alkaline-earth' },
        { symbol: 'Y', name: 'Yttrium', number: 39, group: 3, period: 5, category: 'transition' },
        { symbol: 'Zr', name: 'Zirconium', number: 40, group: 4, period: 5, category: 'transition' },
        { symbol: 'Nb', name: 'Niobium', number: 41, group: 5, period: 5, category: 'transition' },
        { symbol: 'Mo', name: 'Molybdenum', number: 42, group: 6, period: 5, category: 'transition' },
        { symbol: 'Tc', name: 'Technetium', number: 43, group: 7, period: 5, category: 'transition' },
        { symbol: 'Ru', name: 'Ruthenium', number: 44, group: 8, period: 5, category: 'transition' },
        { symbol: 'Rh', name: 'Rhodium', number: 45, group: 9, period: 5, category: 'transition' },
        { symbol: 'Pd', name: 'Palladium', number: 46, group: 10, period: 5, category: 'transition' },
        { symbol: 'Ag', name: 'Silver', number: 47, group: 11, period: 5, category: 'transition' },
        { symbol: 'Cd', name: 'Cadmium', number: 48, group: 12, period: 5, category: 'post-transition' },
        { symbol: 'In', name: 'Indium', number: 49, group: 13, period: 5, category: 'post-transition' },
        { symbol: 'Sn', name: 'Tin', number: 50, group: 14, period: 5, category: 'post-transition' },
        { symbol: 'Sb', name: 'Antimony', number: 51, group: 15, period: 5, category: 'metalloid' },
        { symbol: 'Te', name: 'Tellurium', number: 52, group: 16, period: 5, category: 'metalloid' },
        { symbol: 'I', name: 'Iodine', number: 53, group: 17, period: 5, category: 'halogen' },
        { symbol: 'Xe', name: 'Xenon', number: 54, group: 18, period: 5, category: 'noble-gas' },
        { symbol: 'Cs', name: 'Cesium', number: 55, group: 1, period: 6, category: 'alkali-metal' },
        { symbol: 'Ba', name: 'Barium', number: 56, group: 2, period: 6, category: 'alkaline-earth' },
        { symbol: 'La', name: 'Lanthanum', number: 57, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Ce', name: 'Cerium', number: 58, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Pr', name: 'Praseodymium', number: 59, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Nd', name: 'Neodymium', number: 60, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Pm', name: 'Promethium', number: 61, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Sm', name: 'Samarium', number: 62, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Eu', name: 'Europium', number: 63, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Gd', name: 'Gadolinium', number: 64, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Tb', name: 'Terbium', number: 65, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Dy', name: 'Dysprosium', number: 66, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Ho', name: 'Holmium', number: 67, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Er', name: 'Erbium', number: 68, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Tm', name: 'Thulium', number: 69, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Yb', name: 'Ytterbium', number: 70, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Lu', name: 'Lutetium', number: 71, group: 3, period: 6, category: 'lanthanide' },
        { symbol: 'Hf', name: 'Hafnium', number: 72, group: 4, period: 6, category: 'transition' },
        { symbol: 'Ta', name: 'Tantalum', number: 73, group: 5, period: 6, category: 'transition' },
        { symbol: 'W', name: 'Tungsten', number: 74, group: 6, period: 6, category: 'transition' },
        { symbol: 'Re', name: 'Rhenium', number: 75, group: 7, period: 6, category: 'transition' },
        { symbol: 'Os', name: 'Osmium', number: 76, group: 8, period: 6, category: 'transition' },
        { symbol: 'Ir', name: 'Iridium', number: 77, group: 9, period: 6, category: 'transition' },
        { symbol: 'Pt', name: 'Platinum', number: 78, group: 10, period: 6, category: 'transition' },
        { symbol: 'Au', name: 'Gold', number: 79, group: 11, period: 6, category: 'transition' },
        { symbol: 'Hg', name: 'Mercury', number: 80, group: 12, period: 6, category: 'post-transition' },
        { symbol: 'Tl', name: 'Thallium', number: 81, group: 13, period: 6, category: 'post-transition' },
        { symbol: 'Pb', name: 'Lead', number: 82, group: 14, period: 6, category: 'post-transition' },
        { symbol: 'Bi', name: 'Bismuth', number: 83, group: 15, period: 6, category: 'post-transition' },
        { symbol: 'Po', name: 'Polonium', number: 84, group: 16, period: 6, category: 'post-transition' },
        { symbol: 'At', name: 'Astatine', number: 85, group: 17, period: 6, category: 'halogen' },
        { symbol: 'Rn', name: 'Radon', number: 86, group: 18, period: 6, category: 'noble-gas' },
        { symbol: 'Fr', name: 'Francium', number: 87, group: 1, period: 7, category: 'alkali-metal' },
        { symbol: 'Ra', name: 'Radium', number: 88, group: 2, period: 7, category: 'alkaline-earth' },
        { symbol: 'Ac', name: 'Actinium', number: 89, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Th', name: 'Thorium', number: 90, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Pa', name: 'Protactinium', number: 91, group: 3, period: 7, category: 'actinide' },
        { symbol: 'U', name: 'Uranium', number: 92, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Np', name: 'Neptunium', number: 93, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Pu', name: 'Plutonium', number: 94, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Am', name: 'Americium', number: 95, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Cm', name: 'Curium', number: 96, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Bk', name: 'Berkelium', number: 97, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Cf', name: 'Californium', number: 98, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Es', name: 'Einsteinium', number: 99, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Fm', name: 'Fermium', number: 100, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Md', name: 'Mendelevium', number: 101, group: 3, period: 7, category: 'actinide' },
        { symbol: 'No', name: 'Nobelium', number: 102, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Lr', name: 'Lawrencium', number: 103, group: 3, period: 7, category: 'actinide' },
        { symbol: 'Rf', name: 'Rutherfordium', number: 104, group: 4, period: 7, category: 'transition' },
        { symbol: 'Db', name: 'Dubnium', number: 105, group: 5, period: 7, category: 'transition' },
        { symbol: 'Sg', name: 'Seaborgium', number: 106, group: 6, period: 7, category: 'transition' },
        { symbol: 'Bh', name: 'Bohrium', number: 107, group: 7, period: 7, category: 'transition' },
        { symbol: 'Hs', name: 'Hassium', number: 108, group: 8, period: 7, category: 'transition' },
        { symbol: 'Mt', name: 'Meitnerium', number: 109, group: 9, period: 7, category: 'transition' },
        { symbol: 'Ds', name: 'Darmstadtium', number: 110, group: 10, period: 7, category: 'transition' },
        { symbol: 'Rg', name: 'Roentgenium', number: 111, group: 11, period: 7, category: 'transition' },
        { symbol: 'Cn', name: 'Copernicium', number: 112, group: 12, period: 7, category: 'post-transition' },
        { symbol: 'Nh', name: 'Nihonium', number: 113, group: 13, period: 7, category: 'post-transition' },
        { symbol: 'Fl', name: 'Flerovium', number: 114, group: 14, period: 7, category: 'post-transition' },
        { symbol: 'Mc', name: 'Moscovium', number: 115, group: 15, period: 7, category: 'post-transition' },
        { symbol: 'Lv', name: 'Livermorium', number: 116, group: 16, period: 7, category: 'post-transition' },
        { symbol: 'Ts', name: 'Tennessine', number: 117, group: 17, period: 7, category: 'halogen' },
        { symbol: 'Og', name: 'Oganesson', number: 118, group: 18, period: 7, category: 'noble-gas' }
    ]
};

const questions = [
    { question: "Organic compounds are made up of?", answer: "C" },
    { question: "Which element is essential for breathing?", answer: "O" },
    { question: "Which noble gas is used in balloons?", answer: "He" },
    { question: "Which element is the most abundant in Earth's atmosphere?", answer: "N" },
    { question: "Which element is used in nuclear fusion in the sun?", answer: "H" },
    { question: "Which element is used in table salt along with chlorine?", answer: "Na" },
    { question: "Which element is known as the 'King of Metals'?", answer: "Au" },
    { question: "Which element is used in pencil leads?", answer: "C" },
    { question: "Which element is used in batteries and is highly reactive with water?", answer: "Li" },
    { question: "Which noble gas is used in advertising signs that glow red-orange?", answer: "Ne" },
    { question: "Which element is essential for strong bones and teeth?", answer: "Ca" },
    { question: "Which element is used in semiconductors and computer chips?", answer: "Si" },
    { question: "Which radioactive element is used in nuclear power plants?", answer: "U" },
    { question: "Which element is liquid at room temperature and used in thermometers?", answer: "Hg" },
    { question: "Which element is used to make steel stronger?", answer: "Fe" }
];

let currentQuestion = null;
let score = 0;

function createPeriodicTable() {
    const container = document.getElementById('periodic-table');
    
    // Create empty cells for proper positioning
    for (let i = 1; i <= 18 * 7; i++) {
        const cell = document.createElement('div');
        cell.className = 'element-space';
        container.appendChild(cell);
    }

    // Add elements
    periodicTable.elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.innerHTML = `
            <div class="atomic-number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
        `;
        
        // Position the element
        const position = (element.period - 1) * 18 + element.group;
        container.children[position - 1].replaceWith(elementDiv);

        elementDiv.addEventListener('click', () => handleElementClick(element));
    });

    // Add legend
    const legend = document.createElement('div');
    legend.className = 'legend';
    legend.innerHTML = `
        <div class="legend-item"><span class="color-box alkali-metal"></span>Alkali Metals</div>
        <div class="legend-item"><span class="color-box alkaline-earth"></span>Alkaline Earth Metals</div>
        <div class="legend-item"><span class="color-box transition"></span>Transition Metals</div>
        <div class="legend-item"><span class="color-box post-transition"></span>Post-Transition Metals</div>
        <div class="legend-item"><span class="color-box metalloid"></span>Metalloids</div>
        <div class="legend-item"><span class="color-box nonmetal"></span>Nonmetals</div>
        <div class="legend-item"><span class="color-box halogen"></span>Halogens</div>
        <div class="legend-item"><span class="color-box noble-gas"></span>Noble Gases</div>
        <div class="legend-item"><span class="color-box lanthanide"></span>Lanthanides</div>
        <div class="legend-item"><span class="color-box actinide"></span>Actinides</div>
    `;
    container.parentElement.appendChild(legend);
}

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion() {
    currentQuestion = getRandomQuestion();
    document.getElementById('current-question').textContent = currentQuestion.question;
    document.getElementById('feedback').textContent = '';
}

function handleElementClick(element) {
    if (!currentQuestion) return;

    const feedback = document.getElementById('feedback');
    const scoreElement = document.getElementById('score-value');
    
    if (element.symbol === currentQuestion.answer) {
        feedback.textContent = 'Correct!';
        feedback.className = 'correct';
        score += 10;
        scoreElement.textContent = score;
        
        // Highlight correct element
        const elementDiv = event.currentTarget;
        elementDiv.classList.add('correct');
        setTimeout(() => {
            elementDiv.classList.remove('correct');
            displayQuestion();
        }, 1000);
    } else {
        feedback.textContent = 'Incorrect! Try again.';
        feedback.className = 'incorrect';
        
        // Highlight incorrect element
        const elementDiv = event.currentTarget;
        elementDiv.classList.add('incorrect');
        setTimeout(() => {
            elementDiv.classList.remove('incorrect');
        }, 1000);
    }
}

// Initialize the game
window.addEventListener('load', () => {
    createPeriodicTable();
    displayQuestion();
});
