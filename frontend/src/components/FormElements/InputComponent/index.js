export default function InputComponent({
  label,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 pb-0 p1-2 absolute -mt-3 mr-0 mb-0 m1-2 font-medium text-gray-800">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 p1-4 mr-0 mt-0 m1-0 text-base block bg-white border-gray-300 rounded-md"
      />
    </div>
  );
}
