const task = {
    id: 1,
    text: "Süt al",
    complated: false
}

// SENARYO - 1
const fonk = function () {
    return !task.complated;
}
console.log(fonk());

const implicitFonk = () => !task.complated;
console.log(implicitFonk());

// SENARYO - 2
const newFonk = (m) => ({id: Date.now(), text: (m), complated: false});
console.log(newFonk("ekmek al"));

// SENARYO - 3
const tasks = [
  { text: "proje sunumunu hazırla", completed: false },
  { text: "staj raporunu yaz", completed: true },
  { text: "kod incelemesini tamamla", completed: false }
];

const upperTextTaks = tasks.map((t) => t.text.toUpperCase());
console.log(upperTextTaks);

// SENARYO - 4
const checkbox = {
    label: "Görev tamamlandı",
    normalFonk: function () {
        console.log(this.label);
    },

    arrowFonk: () => {
        console.log(this.label);
    }
};

checkbox.normalFonk();
checkbox.arrowFonk();