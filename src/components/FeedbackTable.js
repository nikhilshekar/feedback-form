import { useState } from "react";

export default function FeedbackTable({ feedbackList }) {
  let [tableList, setTableList] = useState(feedbackList);

  function handleSearch(event) {
    let searchVal = event.target.value;
    if (searchVal === "") {
      setTableList(feedbackList);
      return;
    }
    let res = feedbackList.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    setTableList(res);
  }

  return (
    <div className="text-center p-3">
      <input
        type="search"
        className="form-control mb-3 search"
        placeholder="Search by Customer Name..."
        name="search"
        onChange={handleSearch}
      ></input>
      {tableList.length === 0 ? (
        <div
          className="alert alert-danger text-center d-inline-block p-4 mt-3"
          role="alert"
        >
          <i className="fa-solid fa-face-rolling-eyes fs-4 mx-3"></i>
          <span className="mute d-inline-block">
            No Feedbacks from the customers.
          </span>
        </div>
      ) : (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Service Quality</th>
                <th scope="col">Beverage Quality</th>
                <th scope="col">Restaurant Cleanliness</th>
                <th scope="col">Overall experience</th>
              </tr>
            </thead>

            <tbody>
              {tableList.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.qst1}</td>
                  <td>{item.qst2}</td>
                  <td>{item.qst3}</td>
                  <td>{item.qst4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
