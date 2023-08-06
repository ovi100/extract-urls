import React, { useEffect, useState } from "react";
import './App.css';
import Search from './components/Search';
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const regex = /mailto|tel/g;

    setIsLoading(true);
    const getUrls = async (url) => {
      try {
        await fetch(url)
          .then((response) => response.text())
          .then((html) => {
            // console.log(html);
            const tempElement = document.createElement('div');
            tempElement.innerHTML = html;
            const anchorTags = tempElement.querySelectorAll('a');
            let urls = Array.from(anchorTags).map(a => a.href.replace('http://localhost:3000', url.replace(/\//g, ""))).filter(link => link !== "" && !link.match(regex));
            urls = [...new Set(urls)]
            setResults(urls);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getUrls(search);
  }, [search]);

  console.log(isLoading, results)

  return (
    <div className="App">
      <div className="content grid grid-cols-2 py-5">
        <div className='results relative px-5'>
          {!isLoading ? <>
            <div className="title text-center text-xl capitalize">results</div>
            <div className="links h-[90vh] overflow-y-auto">
              {results.map((result, index) => (
                <a className="text-blue-500 block mt-3" href={result} key={index}>{result}</a>
              ))}
            </div>
          </> : <Loader />}
        </div>
        <div className='search'>
          <Search setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;
