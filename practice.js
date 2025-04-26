// // let userData = [
// //     {
// //         name:"waqas",
// //         email:"waqaskhan@gmail.com",
// //         password: "akdsaljflsa13"
// //     },
// //     {
// //         name:"waqas",
// //         email:"waqaskhan@gmail.com",
// //         password: "akdsaljflsa13"
// //     },

// // ]
// // let count = 0;
// // for (arr in userData){
// //     console.table(userData[arr]);
// //     count++;
    
// // }
// // console.log("count = ",count );

// // localStorage.setItem("userData",JSON.stringify(userData))
// // // let useData = [];

// // // function formValidate() {
// // //     const fullName = document.getElementById("fullName").value.trim();
// // //     const email = document.getElementById("exampleInputEmail1").value.trim();
// // //     const password = document.getElementById("exampleInputPassword1").value.trim();
// // //     const checkBox = document.getElementById("exampleCheck1").checked;

// // //     if (fullName === "") {
// // //         alert("Full Name is required.");
// // //         // return false;
// // //     }else{
// // //         console.log(fullName);
// // //         useData.push(fullName)
// // //         console.log("full name pushed");
// // //     }


// // //     // if (email === "") {
// // //     //     alert("Email address is required.");
// // //     //     return false;
// // //     // }

// // //     // if (!validateEmail(email)) {
// // //     //     alert("Please enter a valid email address.");
// // //     //     return false;
// // //     // }

// // //     // if (password === "") {
// // //     //     alert("Password is required.");
// // //     //     return false;
// // //     // }

// // //     // if (password.length < 6) {
// // //     //     alert("Password must be at least 6 characters long.");
// // //     //     return false;
// // //     // }

// // //     // if (!checkBox) {
// // //     //     alert("You must agree to the terms and conditions.");
// // //     //     return false;
// // //     // }

// // //     // Store the data into the array
// // //     // useData.push({
// // //     //     fullName: fullName,
// // //     //     email: email,
// // //     //     password: password
// // //     // });

// // //     alert("Form submitted successfully!");
// // //     return true;
// // // }

// // // // function validateEmail(email) {
// // // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // //     return emailRegex.test(email);
// // // // }
// // // useData.push("ali")
// // // console.log("User Data:", useData); // Log the array to the console








// // // Array to store all registered users
// // const users = [];

// // function storeData(newUser){

// // }

// // function formValidate() {
// //   // Prevent default form submission
// //   event.preventDefault();

// //   // Get input values
// //   const fullName = document.getElementById('fullName').value.trim();
// //   const email = document.getElementById('exampleInputEmail1').value.trim();
// //   const password = document.getElementById('exampleInputPassword1').value.trim();
// //   const isChecked = document.getElementById('exampleCheck1').checked;

// //   // Basic validation
// //   if (fullName === '' || email === '' || password === '') {
// //     alert('Please fill in all fields.');
// //     return;
// //   }

// //   if (!isChecked) {
// //     alert('You must agree to the terms (Check me out)');
// //     return;
// //   }

// //   // Create user object
// //   const user = {
// //     fullName: fullName,
// //     email: email,
// //     password: password
// //   };

// //   // Push user into the users array
// //   users.push(user);

// //   // Console log the single user and the full users array
// //   console.log("Newly Registered User:", user);
// //   console.log(JSON.stringify(users));
// //   console.log("All Registered Users:", users);
// // //   call storeData function to store data into local storage
// // storeData()
  
// //   // Optional: Reset form after successful registration
// //   document.querySelector('form').reset();
// // }

// // // localStorage.setItem("users",JSON.stringify(users))
// // let useData = [];

// // function formValidate() {
// //     const fullName = document.getElementById("fullName").value.trim();
// //     const email = document.getElementById("exampleInputEmail1").value.trim();
// //     const password = document.getElementById("exampleInputPassword1").value.trim();
// //     const checkBox = document.getElementById("exampleCheck1").checked;

// //     if (fullName === "") {
// //         alert("Full Name is required.");
// //         // return false;
// //     }else{
// //         console.log(fullName);
// //         useData.push(fullName)
// //         console.log("full name pushed");
// //     }


// //     // if (email === "") {
// //     //     alert("Email address is required.");
// //     //     return false;
// //     // }

// //     // if (!validateEmail(email)) {
// //     //     alert("Please enter a valid email address.");
// //     //     return false;
// //     // }

// //     // if (password === "") {
// //     //     alert("Password is required.");
// //     //     return false;
// //     // }

// //     // if (password.length < 6) {
// //     //     alert("Password must be at least 6 characters long.");
// //     //     return false;
// //     // }

// //     // if (!checkBox) {
// //     //     alert("You must agree to the terms and conditions.");
// //     //     return false;
// //     // }

// //     // Store the data into the array
// //     // useData.push({
// //     //     fullName: fullName,
// //     //     email: email,
// //     //     password: password
// //     // });

// //     alert("Form submitted successfully!");
// //     return true;
// // }

// // // function validateEmail(email) {
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     return emailRegex.test(email);
// // // }
// // useData.push("ali")
// // console.log("User Data:", useData); // Log the array to the console








// // Array to store all registered users
// const users = [];

// function storeData(newUser){

// }

// function formValidate() {
//   // Prevent default form submission
//   event.preventDefault();

//   // Get input values
//   const fullName = document.getElementById('fullName').value.trim();
//   const email = document.getElementById('exampleInputEmail1').value.trim();
//   const password = document.getElementById('exampleInputPassword1').value.trim();
//   const isChecked = document.getElementById('exampleCheck1').checked;

//   // Basic validation
//   if (fullName === '' || email === '' || password === '') {
//     alert('Please fill in all fields.');
//     return;
//   }

//   if (!isChecked) {
//     alert('You must agree to the terms (Check me out)');
//     return;
//   }

//   // Create user object
//   const user = {
//     fullName: fullName,
//     email: email,
//     password: password
//   };

//   // Push user into the users array
//   users.push(user);

//   // Console log the single user and the full users array
//   console.log("Newly Registered User:", user);
//   console.log(JSON.stringify(users));
//   console.log("All Registered Users:", users);
// //   call storeData function to store data into local storage
// storeData()
  
//   // Optional: Reset form after successful registration
//   document.querySelector('form').reset();
// }

// // localStorage.setItem("users",JSON.stringify(users))
