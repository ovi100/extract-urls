
const Search = ({setSearch}) => {
  
  return (
    <div className="search-bar relative w-1/2 mb-5">
      <input
        type="text"
        id="search"
        autoComplete="off"
        className="bg-white w-full h-10 border border-gray-300 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 block my-3 px-4 py-1"
        placeholder="Search by shop name and zone"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            rx="9.10146"
            ry="8.88476"
            transform="matrix(-1 0 0 1 11.8985 10.8848)"
            stroke="#ADB5BD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.56836 17.5259L2.00007 21.0002"
            stroke="#ADB5BD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default Search