import "./App.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackTable from "./components/FeedbackTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [value, setValue] = useState("1");
  let [feedbackList, setFeedbackList] = useState(
    JSON.parse(localStorage.getItem("feedback")) || []
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <ToastContainer />
      <header className="app-header">
        <h1>
        Aromatic Bar
        </h1>
      </header>
      <main className="container mt-2 mb-5 border  border-primary-subtle">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} className="my-2" centered>
                <Tab label="Feedback Form" value="1" />
                <Tab label="Feedback Table" value="2" />
              </TabList>
            </Box>
            <TabPanel className="mt-2" value="1">
              <FeedbackForm setFeedbackList={setFeedbackList} />
            </TabPanel>
            <TabPanel value="2">
              <FeedbackTable feedbackList={feedbackList} />
            </TabPanel>
          </TabContext>
        </Box>
      </main>
    </div>
  );
}

export default App;
