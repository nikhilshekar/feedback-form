import { useState } from "react";
import ValidateForm from "../validation";
import { toast } from "react-toastify";

export default function FeedbackForm({ setFeedbackList }) {
  let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qst1: "",
    qst2: "",
    qst3: "",
    qst4: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const newErrors = ValidateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      formData.id = feedbackList.length + 1;
      feedbackList.push(formData);
      setFeedbackList(feedbackList);
      localStorage.setItem("feedback", JSON.stringify(feedbackList));
      toast.success("Feedback has been submitted");
    } else {
      toast.error("Feedback submission has failed!");
    }
  };

  return (
    <>
      <p className="form-desc">
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </p>
      <form
        className="d-flex justify-content-center"
        onSubmit={handlesubmit}
        noValidate
      >
        <div className="row g-4 d-flex justify-content-around">
          <div>
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label">
                Customer Name* :
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
                }
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message"><i class="fa-solid fa-circle-exclamation  me-2"></i>{errors.name}</span>
              )}
            </div>
          </div>
          <div>
            <div className="col-auto">
              <label htmlFor="email" className="col-form-label">
                Email* :
              </label>
            </div>
            <div className="col-auto">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                className={
                  errors.email
                    ? "form-control is-invalid"
                    : "form-control valid"
                }
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.email}</span>
              )}
            </div>
          </div>
          <div>
            <div className="col-auto">
              <label htmlFor="mobile" className="col-form-label">
                Mobile Number* :
              </label>
            </div>
            <div className="col-auto">
              <input
                type="number"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                className={
                  errors.mobile ? "form-control is-invalid" : "form-control"
                }
                onChange={handleChange}
              />
              {errors.mobile && (
                <span className="error-message"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.mobile}</span>
              )}
            </div>
          </div>

          <div>
            <p>
              1. Please rate the quality of the service you received from your
              host.*
            </p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst1"
                value="excellent"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="excellent">
                Excellent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst1"
                value="good"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="good">
                Good
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst1"
                value="fair"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="fair">
                Fair
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst1"
                value="bad"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="bad">
                Bad
              </label>
            </div>
          </div>
          <div>
            {errors.qst1 && (
              <span className="error-message qst-err"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.qst1}</span>
            )}
          </div>

          <div>
            <p>2. Please rate the quality of your beverage.*</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst2"
                value="excellent"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="excellent">
                Excellent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst2"
                value="good"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="good">
                Good
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst2"
                value="fair"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="fair">
                Fair
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst2"
                value="bad"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="bad">
                Bad
              </label>
            </div>
          </div>
          <div>
            {errors.qst2 && (
              <span className="error-message qst-err"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.qst2}</span>
            )}
          </div>

          <div>
            <p>3. Was our restaurant clean?*</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst3"
                value="excellent"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="excellent">
                Excellent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst3"
                value="good"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="good">
                Good
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst3"
                value="fair"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="fair">
                Fair
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst3"
                value="bad"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="bad">
                Bad
              </label>
            </div>
          </div>
          <div>
            {errors.qst3 && (
              <span className="error-message qst-err"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.qst3}</span>
            )}
          </div>
          <div>
            <p>4. Please rate your overall dining experience.*</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst4"
                value="excellent"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="excellent">
                Excellent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst4"
                value="good"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="good">
                Good
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst4"
                value="fair"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="fair">
                Fair
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="qst4"
                value="bad"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="bad">
                Bad
              </label>
            </div>
          </div>
          <div>
            {" "}
            {errors.qst4 && (
              <span className="error-message qst-err"><i class="fa-solid fa-circle-exclamation me-2"></i>{errors.qst4}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary btn-lg mt-4">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
