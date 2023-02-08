import { useFormik } from "formik";
import * as Yup from "yup";

const PopUpModel = ({ visible, onClose, action, target }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'model-container') onClose();
    }
                
    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            role: Yup.string().required("Role is required"),
            email: Yup.string().required("Email is required").email("Invalid email address"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values, onSubmitProps) => {
            console.log(values);
            onSubmitProps.resetForm();
            onClose();
        },
    })
    if (!visible) return null;

    return (
        <>
            <div
                onClick={handleOnClose}
                id='model-container'
                className="py-12 bg-gray-700 bg-opacity-50 backdrop-blur-sm transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col items-start relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <h1 className="text-gray-800 text-2xl font-semibold self-center font-lg tracking-normal leading-tight mb-4">{action.toLowerCase() === "add" ? "New" :"Edit"} {target}</h1>
                        <label
                            htmlFor="name"
                            className={`text-gray-800 text-sm font-bold leading-tight tracking-normal ${formik.touched.name && formik.errors.name ? 'text-red-400' : ''}`}>
                            {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="role"
                            className={`text-gray-800 text-sm font-bold leading-tight tracking-normal ${formik.touched.role && formik.errors.role ? 'text-red-400' : ''}`}>
                            {formik.touched.role && formik.errors.role ? formik.errors.role : "Role"}
                        </label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="Role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />


                        <label
                            htmlFor="email"
                            className={`text-gray-800 text-sm font-bold leading-tight tracking-normal ${formik.touched.email && formik.errors.email ? 'text-red-400' : ''}`} >
                            {formik.touched.email && formik.errors.email ? formik.errors.email : "E-mail"}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="e-mail@gmail.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />


                        <label
                            htmlFor="password"
                            className={`text-gray-800 text-sm font-bold leading-tight tracking-normal ${formik.touched.password && formik.errors.password ? 'text-red-400' : ''}`}>
                            {formik.touched.password && formik.errors.password ? formik.errors.password : "Password"}
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="text-gray-600 focus:outline-none focus:border focus:border-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="•••••••••••"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <button
                            type="submit"
                            className="self-center mt-10 rounded-lg w-1/2 h-10 bg-[#FFB703]"
                        >{action} {target}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUpModel;