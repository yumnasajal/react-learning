import { useState } from "react";

export const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [modalBox, setModalBox] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const openAddModal = () => {
        setSelectedStudent(null);
        setModalBox("add");
    };
    const openViewModal = (student) => {
        setSelectedStudent(student);
        setModalBox("view");
    };
    const openEditModal = (student) => {
        setSelectedStudent(student);
        setModalBox("edit");
    };
    const openDeleteModal = (student) => {
        setSelectedStudent(student);
        setModalBox("delete");
    };

    const addStudent = (student) => {
        setStudents(prev_students => [...prev_students, student]);
        setModalBox(null)
    }
    const updateStudent = (student) => {
        setStudents(prev_students => prev_students.map(prev_student => (prev_student.id === student.id ? student : prev_student)));
        setModalBox('view')
    }
    const deleteStudent = (student) => {
        setStudents(prev_students => prev_students.filter(prev_student => (prev_student.id !== student.id)));
        setModalBox(null)
    }
    const closeModal = () => {
        if (modalBox === 'add' || modalBox === 'view') {
            setSelectedStudent(null);
            setModalBox(null);
            return;
        }
        setModalBox('view')

    };
    return (
        <div className="p-2 m-2 border border-gray-200 rounded-md shadow-md bg-white">
            <div className="p-2 flex justify-between items-center border-b-2 border-gray-100">
                <h2 className="text-xl font-semibold">Student Management</h2>
                <button onClick={openAddModal} className="bg-orange-900 text-white p-2 rounded-lg shadow-md hover:scale-103 hover:shadow-lg">+ Add Student</button>
            </div>
            {
                modalBox && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center overflow-y-auto ">
                        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
                            {modalBox === "add" && (
                                <RegisterUser onAddStudent={addStudent} onClose={closeModal} />
                            )}
                            {modalBox === "view" && (
                                <StudentDetails onClose={closeModal} onEdit={openEditModal} onDelete={openDeleteModal} student={selectedStudent} />
                            )}
                            {modalBox === "edit" && (
                                <UpdateStudent onUpdate={updateStudent} onClose={closeModal} student={selectedStudent} />
                            )}
                            {modalBox === "delete" && (
                                <DeleteConfirmation onClose={closeModal} student={selectedStudent} onDelete={deleteStudent} />
                            )}
                        </div>
                    </div>
                )
            }
            <DisplayStudents students={students} onView={openViewModal} onEdit={openEditModal} onDelete={openDeleteModal} /></div>
    )
}

const RegisterUser = ({ onAddStudent, onClose }) => {
    const [error, setErrorMsg] = useState('')
    const handle_submit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const student = {
            name: form.name.value.trim(),
            roll_no: form.roll_no.value.trim(),
            email: form.email.value.trim(),
            section: form.section.value.trim(),
            cgpa: form.cgpa.value.trim(),
            gender: form.gender.value.trim()
        }
        const check = Object.values(student).filter(value => !value);
        if (check.length > 0) {
            setErrorMsg('Please fill in all fields');
            return
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(student.email)) {
            setErrorMsg('Please enter a valid email address');
            return;
        }
         if (student.cgpa < 0 || student.cgpa > 4) {
            setErrorMsg("CGPA must be between 0 and 4.");
            return;
        }
        student.id = Date.now();
        onAddStudent(student);
        form.reset();
    }
    return (
        <form onSubmit={handle_submit} className="w-3/4 m-auto flex flex-col gap-3 p-4" noValidate>
            <input name="name" className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-orange-700" type="text" placeholder="Student Name" />
            <input name="roll_no" className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-orange-700" type="text" placeholder="Student Roll no." />
            <input name="email" type="email" className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-orange-700" placeholder="Student Email" />
            <input name="section" type="text" className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-orange-700" placeholder="Student Class/Section" />
            <input name="cgpa" type="number" min='0' max='4' step={0.01} className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-orange-700" placeholder="Student CGPA" />
            <select name="gender" className="w-full rounded-md border border-gray-300 bg-white p-2 outline-none focus:border-orange-700">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {error && (
                <p className="text-red-600">{error}</p>
            )}
            <div className="flex justify-end gap-2">
                <button className="px-3 py-2 rounded-md w-20 bg-emerald-950 text-white hover:scale-103" type="submit">Submit</button>
                <button className="px-3 py-2 rounded-md w-20 bg-gray-200 text-black hover:scale-103" type="button" onClick={onClose} >Cancel</button>
            </div>
        </form>

    )
}

const DisplayStudents = ({ students, onEdit, onDelete, onView }) => {
    return (
        <table className="w-full p-2 text-center mt-4">
            <thead>
                <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Gender</th>
                    <th>CGPA</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => <tr key={student.id} onClick={() => onView(student)} className="cursor-pointer border-b-gray-200 hover:border-l-teal-950 hover:bg-gray-100">
                    <td>{student.roll_no}</td>
                    <td>{student.name}</td>
                    <td>{student.section}</td>
                    <td>{student.gender}</td>
                    <td>{student.cgpa}</td>
                    <td className="flex flex-row gap-2 justify-center items-center cursor-default" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => onEdit(student)} className="px-2 py-2 rounded-md hover:scale-103 shadow-md hover:shadow-lg bg-green-100">Edit</button>
                        <button onClick={() => onDelete(student)} className="px-2 py-2 rounded-md hover:scale-103 shadow-md hover:shadow-lg bg-red-100">Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

const UpdateStudent = ({ student, onClose, onUpdate }) => {
    const [error, setError] = useState('');
    const handle_submit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const section = form.section.value.trim();
        const cgpa = form.cgpa.value.trim();
        if (!section || !cgpa) {
            setError("Please fill in all fields.");
            return;
        }
        if (cgpa < 0 || cgpa > 4) {
            setError("CGPA must be between 0 and 4.");
            return;
        }
        const updateStudent = {
            ...student, section, cgpa
        }
        onUpdate(updateStudent);
    }
    return (
        <form action="" onSubmit={handle_submit} className="flex flex-col gap-3" noValidate>
            <Details student={student} />
            <input type="text" name="section" defaultValue={student.section} className="w-full rounded-md border p-1" placeholder="Class/Section" />
            <input type="number" name="cgpa" defaultValue={student.cgpa} className="w-full rounded-md border p-1" placeholder="CGPA" min="0" max="4" step="0.01" />
            {error && (
                <p className="text-red-600">{error}</p>
            )}
            <div className="flex justify-end gap-2">
                <button className="rounded-md bg-gray-200 px-4 py-2 hover:scale-103" type="button" onClick={onClose}>Close</button>
                <button className="rounded-md bg-blue-200 px-4 py-2 hover:scale-103" type="submit" >Submit</button>
            </div>
        </form>
    )
}

const Details = ({ student }) => {
    return (
        <>
            <h2 className="text-xl font-semibold pb-2 border-b-2 border-gray-200">Update Student Details</h2>
            <p className="text-gray-600">Student Name: <span className="text-gray-900"> {student.name}   </span> </p>
            <p className="text-gray-600">Roll.no: <span className="text-gray-900"> {student.roll_no}</span> </p>
            <p className="text-gray-600">Email: <span className="text-gray-900"> {student.email}  </span>  </p>
            <p className="text-gray-600">Gender: <span className="text-gray-900"> {student.gender} </span>   </p>
        </>
    )
}
const StudentDetails = ({ student, onClose, onEdit, onDelete }) => {
    return (
        <div className="flex flex-col gap-3">
            <Details student={student} />
            <p className="text-gray-600">Class/Section: <span className="text-gray-900"> {student.section} </span>   </p>
            <p className="text-gray-600">CGPA: <span className="text-gray-900"> {student.cgpa}  </span>  </p>
            <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => onEdit(student)} className="rounded-md bg-green-100 px-4 py-2 hover:scale-102">Edit</button>
                <button onClick={() => onDelete(student)} className="rounded-md bg-red-100 px-4 py-2 hover:scale-102">Delete</button>
                <button onClick={onClose} className="rounded-md bg-gray-200 px-4 py-2 hover:scale-102"> Close </button>
            </div>
        </div>
    )
}

const DeleteConfirmation = ({ student, onDelete, onClose }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Delete Student</h2>
            <p className="text-gray-600">Are you sure you want to delete '{student.name}' ?</p>
            <div className="flex justify-end gap-2">
                <button onClick={onClose} className="rounded-md bg-gray-200 px-4 py-2 hover:scale-102">Cancel</button>
                <button onClick={() => onDelete(student)} className="rounded-md bg-red-600 px-4 py-2 text-white hover:scalee-102">Delete</button>
            </div>
        </div>
    )
}

