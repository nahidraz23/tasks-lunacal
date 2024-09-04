import { NavLink } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

function App() {

  return (
    <>
      <div className="min-h-[calc(100vh-192px)] flex w-full gap-14 my-24">
        <div className="w-full">

        </div>
        <div className="w-full">
          <div className="bg-[#363C43] rounded-3xl mt-24 mr-20">
            <div className="mx-14">
              <Tabs>
                <TabList className={"flex justify-between bg-black rounded-3xl p-2"}>
                  <Tab >About Me</Tab>
                  <Tab >Experience</Tab>
                  <Tab >Recommended</Tab>
                </TabList>

                <TabPanel className={"py-4"}>
                  <h2>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                  </h2>
                  <br />
                  <h2>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                  </h2>
                </TabPanel>
                <TabPanel >
                  <h2>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                  </h2>
                  <br />
                  <h2>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                  </h2>
                  <br />
                  <h2>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                  </h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
