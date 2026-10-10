
function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}

function getResult(marks) {
    const average = calculateAverage(marks);

    if (average >= 50) {
        return "Pass";
    }

    return "Fail";
}

function displayResults(students) {
    students.forEach(student => {
        const result = getResult(student.marks);
        console.log(`${student.name}: ${result}`);
    });
}

const students = [
    { name: "Aman", marks: [70, 80, 90] },
    { name: "Riya", marks: [20, 60, 50] },
    { name: "Kabir", marks: [30, 35, 40] }
];

displayResults(students);
