const fields = [
  { label: "Full Name", type: "text", name: "fullName", placeholder: "John Doe" },
  { label: "Birthdate", type: "date", name: "birthdate", placeholder: "" },
  { label: "Email", type: "email", name: "email", placeholder: "johndoe@email.com" },
  { label: "Password", type: "password", name: "password", placeholder: "********" },
];

export default function register() {
  return (
    <div>
      <center>
        <div className="mt-48 p-12 w-1/2  border-3 border-theme-background rounded-2xl text-theme-background shadow-black shadow-md bg-gray-200">
          <h1 className="bbh-sans-hegarty-regular text-2xl">Register </h1>

          {fields.map((field) => (
            <div key={field.name} className="mt-4">
              <label className="block text-theme-background font-bold mb-2 text-left" htmlFor={field.name}>
                {field.label}
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-background" type={field.type} name={field.name} id={field.name} placeholder={field.placeholder} />
            </div>
          ))}
          <button className="mt-6 w-full bg-theme-background text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition-all hover:scale-102 duration-300">Register</button>
        </div>
      </center>
    </div>
  );
}
