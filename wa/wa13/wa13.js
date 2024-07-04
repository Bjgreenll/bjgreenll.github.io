// Problem 1: Create JSON for each employee with the given details
let Sam = {        
     name: "Sam",         
     department: "Tech",        
     job: "Manager",        
     salary: 40000,        
     raise: true     
}; 
        
let Mary = {         
    name: "Mary",        
    department: "Finance",      
    job: "Trainee",       
    salary: 18500,      
    raise: true     
};

let Bill = {         
    name: "Bill",       
    department: "HR",        
    job: "Executive",        
    salary: 21200,        
    raise: false     
}; 

console.log("Problem 1", [Sam, Mary, Bill]);

// Problem 2: Create JSON for the company with the given details
const company = {     
    companyName: "Tech Stars",     
    website: "www.techstars.site",     
    employees: [Sam, Mary, Bill], 
}; 

console.log("Problem 2", company);

// Problem 3: Add a new employee to the company
company.employees.push({    
    name: "Anna",    
    department: "Tech",    
    job: "Executive",     
    salary: 25600,     
    raise: false 
}); 

console.log("Problem 3", company); 

// Problem 4: Calculate the total salary for all company employees
let sum = 0; 
for (let i = 0; i < company.employees.length; i++) {     
    sum += company.employees[i].salary; 
} 

console.log("Problem 4", sum); 

// Problem 5: Update the salary for each raise eligible employee and set their eligibility to false
for (let i = 0; i < company.employees.length; i++) {     
    if (company.employees[i].raise) {         
        company.employees[i].salary *= 1.1;         
        company.employees[i].raise = false;     
    }
} 

console.log("Problem 5", company);

// Problem 6: Update the company JSON with employees working from home
const peopleWFH = ['Anna', 'Sam']; 
for (let i = 0; i < company.employees.length; i++) {    
    company.employees[i].wfh = peopleWFH.includes(company.employees[i].name); 
} 

console.log("Problem 6", company);
