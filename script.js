// toggle class active 
let currentSectionIndex = 0;
const sections = ['home', 'about', 'contact', 'form', 'blog'];

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function openLink(link) {
    window.open(link, '_blank');
}

function showNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showSection(sections[currentSectionIndex]);
    }
}

function showPreviousSection() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showSection(sections[currentSectionIndex]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection(sections[currentSectionIndex]);
});