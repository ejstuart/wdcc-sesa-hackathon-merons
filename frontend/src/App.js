import logo from './logo.svg';
import './App.css';
import Box from "./components/Box/Box";
import EmailTab from "./components/EmailTab/EmailTab";
import EmailTabContainer from "./components/EmailTabContainer/EmailTabContainer";

function App() {
  const RANDOM_EMAIL_NAMES = ["TODO..."]
  const RANDOM_EMAIL_BODIES = ["TODO..."]
  const RANDOM_EMAIL_TITLES = ["TODO..."]

  const FOLDER_COST = 100
  const ACCOUNT_COST = 500

  let sentEmails = 0;
  let folderData = [
    {
      name: "spam",
      score: 0,
      bought: false
    },
    {
      name: "uni",
      score: 0,
      bought: false
    }
  ];

  let accountData = [
      {
        name: "TODO",
        score: 0,
        bought: false
      }
    ]

  let emails = [];

  let incrementScore = () => {
    sentEmails++;
  }

  let incrementFolderScore = (folderNum) => {
    folderData[folderNum].score++;
  }

  let buyFolder = (folderNum) => {
    if (sentEmails >= FOLDER_COST) {
      folderData[folderNum].bought = true;
      sentEmails = sentEmails - FOLDER_COST;
    }
  }

  let incrementAccountScore = (accountNum) => {
    accountData[accountNum].score++;
  }

  let buyAccount = (accountNum) => {
    if (sentEmails >= ACCOUNT_COST) {
      accountData[accountNum].bought = true;
      sentEmails = sentEmails - ACCOUNT_COST;
    }
  }

  let addNewRandomEmail = () => {
    emails.shift();
    emails.push({
      emailName: "Remus",
      emailBody: "TODO",
      senderName: "TODO"
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box />
        <EmailTabContainer emailTabList={emails} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
