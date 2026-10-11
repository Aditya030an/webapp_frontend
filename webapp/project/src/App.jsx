import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProtectedRoute from "./routers/ProtectedRoute.jsx";
import ProtectedRouteAdmin from "./routers/ProtectedRouteAdmin.jsx";

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
  const [role] = useState("employee");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* PROTECTED */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home role={role} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allEnquiry"
          element={
            <ProtectedRoute>
              <AllEnquiry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Newbill"
          element={
            <ProtectedRoute>
              <Newbill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Enquiry"
          element={
            <ProtectedRoute>
              <Enquiry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allEmployee"
          element={
            <ProtectedRoute>
              <ProtectedRouteAdmin>
                <AllEmployee />
              </ProtectedRouteAdmin>
            </ProtectedRoute>
          }
        />
        <Route
          path="/assessment"
          element={
            <ProtectedRoute>
              <Assessment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/musculoskeletal"
          element={
            <ProtectedRoute>
              <Musculoskeletal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/obesity"
          element={
            <ProtectedRoute>
              <Obesity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pilates"
          element={
            <ProtectedRoute>
              <Pilates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/treatmentPlan"
          element={
            <ProtectedRoute>
              <TreatmentPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client"
          element={
            <ProtectedRoute>
              <Client />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <div className="text-gray-500 text-lg">
                Select a report to view details
              </div>
            }
          />
          <Route path="bill" element={<Bill />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="salary" element={<Salary />} />
          <Route path="rent" element={<Rent />} />
          <Route path="daily-attendance" element={<PatientAttendancePage />} />
          <Route path="total" element={<Total />} />
        </Route>

        <Route
          path="/attendence"
          element={
            <ProtectedRoute>
              <Attendence />
            </ProtectedRoute>
          }
        />
        <Route
          path="/PatientDetails/:id"
          element={
            <ProtectedRoute>
              <PatientDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createBill"
          element={
            <ProtectedRoute>
              <CreateBill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EmployeeDetails/:id"
          element={
            <ProtectedRoute>
              <EmployeeDetails role={role} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
