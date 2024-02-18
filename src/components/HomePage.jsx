import { useState } from "react";
import employeeData from "../data.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [employees, setEmployees] = useState(employeeData);

  const handleBorrar = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    toast.success("Registro eliminado correctamente");
  };

  return (
    <>
      <ToastContainer />
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Sexo</th>
                <th>Profesión</th>
                <th>Departamento</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="fade-out">
                  <td>{employee.id}</td>
                  <td>{employee.nombre}</td>
                  <td>{employee.telefono}</td>
                  <td>{employee.sexo}</td>
                  <td>{employee.profesion}</td>
                  <td>{employee.departamento}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleBorrar(employee.id)}>
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
