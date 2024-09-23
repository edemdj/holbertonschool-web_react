// Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

//render the table
function renderTable(): void {
    // Create table element
    const table = document.createElement('table');

    // Iterate over studentsList to create table rows
    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        
        // Create and append first name cell
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        
        // Create and append location cell
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        // Append the row to the table
        table.appendChild(row);
    });

    // Append the table to the body
    document.body.appendChild(table);
}

// Call the function to render the table
document.addEventListener('DOMContentLoaded', renderTable);
