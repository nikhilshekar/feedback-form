export default function ValidateForm(data) {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Customer Name is required";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!data.mobile.trim()) {
    errors.mobile = "Mobile number is required";
  }
  if (!data.qst1.trim()) {
    errors.qst1 = "Please rate the above question";
  }
  if (!data.qst2.trim()) {
    errors.qst2 = "Please rate the above question";
  }
  if (!data.qst3.trim()) {
    errors.qst3 = "Please rate the above question";
  }
  if (!data.qst4.trim()) {
    errors.qst4 = "Please rate the above question";
  }

  return errors;
}
