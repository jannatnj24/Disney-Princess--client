import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowData from "./ShowData";



const Category = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/dataCollections')
            .then(res => res.json())
            .then(data => (data.map(newData=>setData(newData))));
    }, [])
    console.log(Data);
    return (
        <div className="text-center">
            <div className="text-center text-5xl font-bold m-6">
                <h2>Category</h2>
            </div>
            <Tabs>
                <TabList className='text-black-3xl m-4'>
                    <Tab>Disney-Princess</Tab>
                    <Tab>Marvel</Tab>
                    <Tab>Pixar</Tab>
                </TabList>

                <TabPanel>
                    <div className="card lg:card-side mx-[30px] bg-base-100 shadow-xl  ">
                        {
                            Data?.Disney?.[0]?.toys?.map(Doll => <ShowData
                                Doll={Doll}
                            ></ShowData>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side mx-[30px] bg-base-100 shadow-xl  ">
                        {
                            Data?.Disney?.[1]?.toys?.map(Doll => <ShowData
                                Doll={Doll}
                            ></ShowData>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side mx-[30px] bg-base-100 shadow-xl  ">
                        {
                            Data?.Disney?.[2]?.toys?.map(Doll => <ShowData
                                Doll={Doll}
                            ></ShowData>)
                        }
                    </div>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Category;