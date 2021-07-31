import logo from './logo.svg';
import './App.css';
import Box from "./components/Box/Box";
import EmailTab from "./components/EmailTab/EmailTab";
import EmailTabContainer from "./components/EmailTabContainer/EmailTabContainer";
import EmailViewer from "./components/EmailViewer/EmailViewer";
import ScoreSidebar from "./components/ScoreSidebar/ScoreSidebar";
import SettingsTab from "./components/SettingsTab/SettingsTab";

function App() {
  const NUM_RANDOM_EMAILS = 1
  const RANDOM_EMAIL_NAMES = ["TODO..."]
  const RANDOM_EMAIL_BODIES = ["TODO..."]
  const RANDOM_EMAIL_TITLES = ["TODO..."]

  const FOLDER_COST = 100
  const ACCOUNT_COST = 500

  let sentEmails = 0;

  let emails = [];
  let viewEmail = emails[0];

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

  let loadFirstEmailToViewer = () => {
    let viewEmail = emails[0];
  }

  let addNewRandomEmail = () => {
    // Does this work?
    let randomNum = Math.random()*NUM_RANDOM_EMAILS;

    emails.shift();
    emails.push({
      emailName: RANDOM_EMAIL_TITLES[randomNum],
      emailBody: RANDOM_EMAIL_BODIES[randomNum],
      senderName: RANDOM_EMAIL_NAMES[randomNum]
    })
  };

  let updateFolders = () => {
    for (let folder in folderData) {
      if (folder.bought) {
        folder.score++;
      }
    }
  }
  setInterval(updateFolders, 100);

  let updateAccount = () => {
    for (let account in accountData) {
      if (account.bought) {
        account++
      }
    }
  }
  setInterval(updateAccount, 100)

  return (
    <div className="App">
      <header className="App-header">
        <ScoreSidebar sentEmails={sentEmails} accounts={accountData} folders={folderData} />
        <EmailTabContainer emailTabArray={emails} />
        <EmailViewer email={viewEmail} />
        <SettingsTab buyFolderFunction={buyFolder} buyAccountFunction={buyAccount}/>
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
