import { NavLink } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import nextButton from './assets/images/nextButton.svg'
import prevButton from './assets/images/prevButton.svg'
import image from './assets/images/image.svg'
// import 'react-tabs/style/react-tabs.css';

function App() {

  return (
    <>
      <div className="min-h-[calc(100vh-192px)] flex w-full gap-14 my-24 ">
        {/* left div */}
        <div className="w-full">

        </div>
        {/* right div */}
        <div className="w-full flex flex-col justify-center mx-14">
          <div className="bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.3)] rounded-3xl">
            <div className="mx-14">
              <Tabs>
                <TabList className={"flex justify-between bg-black rounded-3xl p-2"}>
                  <Tab >About Me</Tab>
                  <Tab >Experience</Tab>
                  <Tab >Recommended</Tab>
                </TabList>

                <TabPanel>
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
          {/* divider */}
          <hr className="my-6 mx-20 border-2 border-[#363C43] rounded-3xl custom-glass-effect" />
          <div className="bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.3)] rounded-3xl">
            <div className="flex items-center justify-between py-5 mx-14">
              <div>
                <h1 className="bg-black text-lg font-medium text-white px-6 py-3 rounded-2xl">Gallery</h1>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <button className="text-white font-bold flex items-center gap-1 custom-add-button py-3 px-6"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M5.95368 10.0807C5.95368 10.2812 6.03333 10.4735 6.17512 10.6153C6.3169 10.7571 6.50921 10.8367 6.70972 10.8367C6.91024 10.8367 7.10254 10.7571 7.24433 10.6153C7.38612 10.4735 7.46577 10.2812 7.46577 10.0807V6.80449H10.742C10.9425 6.80449 11.1348 6.72483 11.2766 6.58305C11.4184 6.44126 11.498 6.24895 11.498 6.04844C11.498 5.84792 11.4184 5.65562 11.2766 5.51383C11.1348 5.37204 10.9425 5.29239 10.742 5.29239H7.46577V2.01618C7.46577 1.81566 7.38612 1.62336 7.24433 1.48157C7.10254 1.33979 6.91024 1.26013 6.70972 1.26013C6.50921 1.26013 6.3169 1.33979 6.17512 1.48157C6.03333 1.62336 5.95368 1.81566 5.95368 2.01618V5.29239H2.67747C2.47695 5.29239 2.28465 5.37204 2.14286 5.51383C2.00107 5.65562 1.92142 5.84792 1.92142 6.04844C1.92142 6.24895 2.00107 6.44126 2.14286 6.58305C2.28465 6.72483 2.47695 6.80449 2.67747 6.80449H5.95368V10.0807Z" fill="white" />
                  </svg><h4>ADD IMAGE</h4></button>
                </div>
                <div className="flex gap-5">
                  {/* drop-shadow-[-2px_-3px_5px_#96BEE7] */}
                  <button className="bg-gradient-to-r from-[#303439] to-[#161718] p-4 rounded-full custom-gradient-fill custom-drop-shadow">
                    <img src={prevButton} alt="" />
                  </button>
                  <button className="bg-gradient-to-r from-[#303439] to-[#161718] p-4 rounded-full custom-gradient-fill custom-drop-shadow">
                    <img src={nextButton} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-14 flex justify-between py-4">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
          </div>
          {/* divider */}
          <hr className="my-6 mx-20  border-2 border-[#363C43] rounded-3xl custom-glass-effect" />
        </div>
      </div>
    </>
  )
}

export default App
