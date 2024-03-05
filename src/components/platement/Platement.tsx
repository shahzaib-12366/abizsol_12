import React, { useState, useEffect } from 'react';
import "./Platement.scss"
import Rectangle5592 from "../../assets/Rectangle 5592.png"
import { Collapse, Image } from 'antd';
interface ProductData {
  heading: string;
  subHeading: string;
  description: string;
  image: {
    data: {
      url: string;
    }
  };
}
interface QAData {
  id: number;
  attributes: {
    question: string;
    answer: string;
  };
}


const { Panel } = Collapse;

const Platement = () => {
  const [data, setData] = useState<ProductData | null>(null);
  const [qaData, setQAData] = useState<QAData[]>([]);

  useEffect(() => {
    fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-product?populate=*')
      .then(response => response.json())
      .then(data => {
        setData(data.data.attributes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://377a-119-73-112-80.ngrok-free.app/api/generic-question-answers')
      .then(response => response.json())
      .then(data => {
        setQAData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      <div className='platementWrapper'>
        <div className="placement-container">
          {/* <div className="placement-content">
            <h3>PRODUCTS AND PLATFORMS</h3>
            <h2>Accelerate banking transformation with our innovative solutions.</h2>
            <p>At aBizSol, we take pride in being at the forefront of digital innovation. Established in [Year of Establishment], our journey has been marked by a relentless pursuit of excellence. We are a team of passionate developers, designers,</p>
          </div> */}
          <div className="placement-content">
            {data && (
              <>
                <h3>{data.subHeading}</h3>
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
              </>
            )}
          </div>
        </div>
        <div className="placement-details">
          {/* <div className="placement-image">
            <img src={Rectangle5592} alt="Rectangle 5592" />
          </div> */}
          <div className="placement-image">
            {data && (
              <img src={data.image.data.url} alt={data.heading} />
            )}
          </div>
          {/* <div className="placement-accordion">
            <Collapse defaultActiveKey={['1']}>
              <Panel header="Q1 Abizsol Bancs" key="1">
                <p>Accelerate banking transformation with our innovative solutions.</p>
              </Panel>
              <Panel header=" Q2 Abizsol Bancs" key="2">
                <p>Accelerate banking transformation with our innovative solutions.</p>
              </Panel>
              <Panel header="Q3 Abizsol Bancs" key="3">
                <p>Accelerate banking transformation with our innovative solutions.</p>
              </Panel>
              <Panel header="Q4 Abizsol Bancs" key="4">
                <p>Accelerate banking transformation with our innovative solutions.</p>
              </Panel>
            </Collapse>
          </div> */}
          <div className="placement-accordion">
          <Collapse defaultActiveKey={['1']}>
                {qaData.map((item, index) => (
                    <Panel header={`0${index + 1}: ${item.attributes.question}`} key={item.id.toString()}>
                        <p>{item.attributes.answer}</p>
                    </Panel>
                ))}
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platement;

