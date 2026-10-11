// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./routers/ProtectedRoute.jsx";
// import AuthPage from "./pages/AuthPage";
// import Navbar from "./Component/navbar.jsx";

// import Home from "./Component/Home";
// import Assessment from "./Component/Assessment";
// import Musculoskeletal from "./Component/Musculoskeletal";
// import Obesity from "./Component/Obesity";
// import Pilates from "./Component/Pilates";
// import TreatmentPlan from "./Component/TreatmentPlan";
// import Client from "./Component/Client";
// import Reports from "./Component/Reports";
// import Bill from "./Component/Bill";
// import Expenses from "./Component/Expenses";
// import Inventory from "./Component/Inventory";
// import Salary from "./Component/Salary";
// import Rent from "./Component/Rent";
// import Total from "./Component/Total";
// import Attendence from "./Component/Attendence";
// import PatientDetails from "./Component/PatientDetails.jsx";
// import EmployeeDetails from "./Component/EmployeeDetails.jsx";
// import { useState } from "react";
// import AllEnquiry from "./Component/AllEnquiry.jsx";
// import AllEmployee from "./Component/AllEmployee.jsx";
// import ProtectedRouteAdmin from "./routers/ProtectedRouteAdmin.jsx";
// import CreateBill from "./Component/CreateBill.jsx";
// import PatientAttendancePage from "./Component/PatientAttendancePage.jsx";
// import Enquiry from "./Component/Enquiry.jsx";
// import Newbill from "./Component/Newbill.jsx"
// function App() {
//   const [role, setRole] = useState("employee");
//   return (
//     <Router>
//       <Navbar />

//       <Routes>

    

//         {/* PROTECTED */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home role={role} />
//             </ProtectedRoute>
//           }
//         />

// <Route path="/" element={<Home role={role} />} />


        
//         <Route
//           path="/allEnquiry"
//           element={
//             <ProtectedRoute>
//               <AllEnquiry />
//             </ProtectedRoute>
//           }
          
//         />

// <Route
//           path="/Newbill"
//           element={
//             <ProtectedRoute>
//               <Newbill/>
//             </ProtectedRoute>
//           }
          
//         />
//                 <Route
//           path="/Enquiry"
//           element={
//             <ProtectedRoute>
//               <Enquiry />
//             </ProtectedRoute>
//           }
          
//         />
//         <Route
//           path="/allEmployee"
//           element={
//             <ProtectedRoute>
//               <ProtectedRouteAdmin>
//                 <AllEmployee />
//               </ProtectedRouteAdmin>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/assessment"
//           element={
//             <ProtectedRoute>
//               <Assessment />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/musculoskeletal"
//           element={
//             <ProtectedRoute>
//               <Musculoskeletal />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/obesity"
//           element={
//             <ProtectedRoute>
//               <Obesity />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/pilates"
//           element={
//             <ProtectedRoute>
//               <Pilates />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/treatmentPlan"
//           element={
//             <ProtectedRoute>
//               <TreatmentPlan />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/client"
//           element={
//             <ProtectedRoute>
//               <Client />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/reports"
//           element={
//             <ProtectedRoute>
//               <Reports />
//             </ProtectedRoute>
//           }
//         >
//           <Route
//             index
//             element={
//               <div className="text-gray-500 text-lg">
//                 Select a report to view details
//               </div>
//             }
//           />
//           <Route
//             path="bill"
//             element={
//               <ProtectedRoute>
//                 <Bill />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="expenses"
//             element={
//               <ProtectedRoute>
//                 <Expenses />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="inventory"
//             element={
//               <ProtectedRoute>
//                 <Inventory />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="salary"
//             element={
//               <ProtectedRoute>
//                 <Salary />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="rent"
//             element={
//               <ProtectedRoute>
//                 <Rent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="daily-attendance"
//             element={
//               <ProtectedRoute>
//                 <PatientAttendancePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="total"
//             element={
//               <ProtectedRoute>
//                 <Total />
//               </ProtectedRoute>
//             }
//           />
//         </Route>
//         <Route
//           path="/attendence"
//           element={
//             <ProtectedRoute>
//               <Attendence />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/PatientDetails/:id"
//           element={
//             <ProtectedRoute>
//               <PatientDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/createBill"
//           element={
//             <ProtectedRoute>
//               <CreateBill />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/EmployeeDetails/:id"
//           element={
//             <ProtectedRoute>
//               <EmployeeDetails role={role} />
//             </ProtectedRoute>
//           }
//         />
// </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Component/navbar.jsx";
import Home from "./Component/Home";
import Assessment from "./Component/Assessment";
import Musculoskeletal from "./Component/Musculoskeletal";
import Obesity from "./Component/Obesity";
import Pilates from "./Component/Pilates";
import TreatmentPlan from "./Component/TreatmentPlan";
import Client from "./Component/Client";
import Reports from "./Component/Reports";
import Bill from "./Component/Bill";
import Expenses from "./Component/Expenses";
import Inventory from "./Component/Inventory";
import Salary from "./Component/Salary";
import Rent from "./Component/Rent";
import Total from "./Component/Total";
import Attendence from "./Component/Attendence";
import PatientDetails from "./Component/PatientDetails.jsx";
import EmployeeDetails from "./Component/EmployeeDetails.jsx";
import AllEnquiry from "./Component/AllEnquiry.jsx";
import AllEmployee from "./Component/AllEmployee.jsx";
import CreateBill from "./Component/CreateBill.jsx";
import PatientAttendancePage from "./Component/PatientAttendancePage.jsx";
import Enquiry from "./Component/Enquiry.jsx";
import Newbill from "./Component/Newbill.jsx";

function App() {
  const [role] = useState("admin");

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home role={role} />} />

          <Route path="/allEnquiry" element={<AllEnquiry />} />
          <Route path="/Enquiry" element={<Enquiry />} />
          <Route path="/Newbill" element={<Newbill />} />
          <Route path="/createBill" element={<CreateBill />} />

          <Route path="/allEmployee" element={<AllEmployee />} />
          <Route
            path="/EmployeeDetails/:id"
            element={<EmployeeDetails role={role} />}
          />

          <Route path="/assessment" element={<Assessment />} />
          <Route path="/musculoskeletal" element={<Musculoskeletal />} />
          <Route path="/obesity" element={<Obesity />} />
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/treatmentPlan" element={<TreatmentPlan />} />

          <Route path="/client" element={<Client />} />
          <Route
            path="/PatientDetails/:id"
            element={<PatientDetails />}
          />

          <Route path="/reports" element={<Reports />}>
            <Route
              index
              element={
                <div className="p-4 text-gray-500">
                  Select a report to view details
                </div>
              }
            />
            <Route path="bill" element={<Bill />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="salary" element={<Salary />} />
            <Route path="rent" element={<Rent />} />
            <Route
              path="daily-attendance"
              element={<PatientAttendancePage />}
            />
            <Route path="total" element={<Total />} />
          </Route>

          <Route path="/attendence" element={<Attendence />} />

          <Route
            path="*"
            element={
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold">
                  Page not found
                </h2>
                <a href="/" className="text-blue-600 underline">
                  Return to Dashboard
                </a>
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
