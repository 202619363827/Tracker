



// import { useState } from 'react';
// import styles from './Login.module.css';






// import { useNavigate } from 'react-router-dom'; 

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); 

//     const handleLogin = () => {
//         const data = localStorage.getItem("EmployeeData");
//         const employees = JSON.parse(data);

//         const user = employees.find(emp => emp.UserName === username && emp.pass === password);
//         if (user) {
//             if (username === 'divya' && password === 'divya123') {
                
                
//                 navigate('/Admin')
//             } else {
                
//                 navigate('/EmployeeData');
//             }
//         } else {
//             alert('add corrrect password!');
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <h2>Login</h2>
//             <input  className={styles.inputField} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//             <input className={styles.inputField} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            
//             <button className={styles.bt} onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default Login;



// import React, { useState } from 'react';

// const EmployeeInvoice = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         number: '',
//         email: '',
//         address: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         printInvoice();
//     };

//     const printInvoice = () => {
//         const invoiceWindow = window.open('', '_blank');
//         invoiceWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Employee Invoice</title>
//                     <style>
//                         body {
//                             font-family: Arial, sans-serif;
//                         }
//                         table {
//                             width: 100%;
//                             border-collapse: collapse;
//                         }
//                         th, td {
//                             border: 1px solid #dddddd;
//                             padding: 8px;
//                             text-align: left;
//                         }
//                         th {
//                             background-color: #f2f2f2;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <h2>Employee Invoice</h2>
//                     <table>
//                         <tr>
//                             <th>Name</th>
//                             <td>${formData.name}</td>
//                         </tr>
//                         <tr>
//                             <th>Phone Number</th>
//                             <td>${formData.number}</td>
//                         </tr>
//                         <tr>
//                             <th>Email</th>
//                             <td>${formData.email}</td>
//                         </tr>
//                         <tr>
//                             <th>Address</th>
//                             <td>${formData.address}</td>
//                         </tr>
//                     </table>
//                 </body>
//             </html>
//         `);
//         invoiceWindow.document.close();
//         invoiceWindow.print();
//     };

//     return (
//         <div>
//             <h1>Employee Invoice</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Phone Number:</label>
//                     <input type="tel" name="number" value={formData.number} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Address:</label>
//                     <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//                 </div>
//                 <button type="submit">Create Invoice</button>
//             </form>
//         </div>
//     );
// };

// export default EmployeeInvoice;






// {
//     "Budget": 10000,
//     "Expenses": [
//       {
//         "id":"1",
//         "name": "Groceries",
//         "cost": 500
//       },
//       {
//         "id":"2",
//         "name": "Dining out",
//         "cost": 300
//       },
//       {
//         "id":"3",
//         "name": "Shopping",
//         "cost": 700
//       }
//     ]
//   }
  



