import React, { useEffect,useState } from 'react'
import './covid.css';
const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="container">
                <div className="card_main">
                    <h1>LIVE</h1>
                    <h2>COVID-LIVE-TRACKER</h2>
                    <div className="card_container">
                        <div className="card_inner">
                            <p className='card_name'><span>our </span>COUNTRY</p>
                            <p className="card_text">INDIA</p>
                        </div>
                        <div className="card_inner1">
                            <p className='card_name'><span>Total </span>RECOVERED</p>
                            <p className="card_text">{data.recovered}</p>
                        </div>
                        <div className="card_inner2">
                            <p className='card_name'><span>Total </span>CONFIRMED</p>
                            <p className="card_text">{data.confirmed}</p>
                        </div>
                        <div className="card_inner3">
                            <p className='card_name'><span>Total </span>DEATH</p>
                            <p className="card_text">{data.deaths}</p>
                        </div>
                        <div className="card_inner4">
                            <p className='card_name'><span>Total </span>ACTIVE</p>
                            <p className="card_text">{data.active}</p>
                        </div>
                        <div className="card_inner5">
                            <p className='card_name'><span>Last </span>UPDATED</p>
                            <p className="card_text">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Covid