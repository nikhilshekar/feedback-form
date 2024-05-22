import { useState } from "react";
import { toast } from "react-toastify";

export default function FeedbackTable({ feedbackList, setFeedbackList }) {
  let [tableList, setTableList] = useState(feedbackList);
  let [checkedValue, setCheckedValue] = useState([]);

  function handleSearch(event) {
    let searchVal = event.target.value;
    if (searchVal === "") {
      setTableList(feedbackList);
      return;
    }
    let res = feedbackList.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()) ||
        item.email.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    setTableList(res);
  }

  function handleCheck(event) {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValue([...checkedValue, Number(value)]);
    } else {
      setCheckedValue(checkedValue.filter((item) => item !== Number(value)));
    }
  }

  function handleDelete() {
    if (checkedValue.length !== 0) {
      let deletedList = tableList.filter(
        (item) => !checkedValue.find((id) => id === item.id)
      );
      setTableList(deletedList);
      toast.success("Feedback has been deleted");
      localStorage.setItem("feedbacks", JSON.stringify(deletedList));
      setFeedbackList(deletedList);
      setCheckedValue([]);
    }
  }

  return (
    <div className="text-center p-3">
      <input
        type="search"
        className="form-control mb-3 search"
        placeholder="Search by Customer Name or Email..."
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
          <div className="overflow-auto">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Service Quality</th>
                  <th scope="col">Beverage Quality</th>
                  <th scope="col">Restaurant Cleanliness</th>
                  <th scope="col">Overall experience</th>
                  <th scope="col">
                    <i className="fa-solid fa-ban"></i>
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableList.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.qst1}</td>
                    <td>{item.qst2}</td>
                    <td>{item.qst3}</td>
                    <td>{item.qst4}</td>
                    <td>
                      <input
                        key={item.id}
                        className="form-check-input"
                        type="checkbox"
                        name="delete"
                        value={item.id}
                        onChange={handleCheck}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={checkedValue.length !== 0 ? false : true}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
