import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const newData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    newData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (error) {
    return <h2>There was an error</h2>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h5>No Tours Left</h5>
          <button
            className='btn'
            type='button'
            style={{ marginTop: "2rem" }}
            onClick={() => newData()}
          >
            Refresh List
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
