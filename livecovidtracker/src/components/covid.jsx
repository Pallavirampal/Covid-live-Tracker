import React, { useEffect } from 'react'
import './covid.css';
const Covid = () => {
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.rootnet.in/covid19-in/stats/history');
            const actualData = await res.json();
            console.log(actualData.data[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        // getCovidData();
    }, [])

    return (
        <>
            <section>
                <h1>Live</h1>
                <h2>Covid-19 Coronavirus Tracker</h2>
                <div className="card_main">
                    <div className='card_inner'>
                        <p className='card_name'><span> Our </span> Country </p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                    <div className='card_inner'>
                        <p className='card_name'><span> Our </span> Country </p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                    <div className='card_inner'>
                        <p className='card_name'><span> Our </span> Country </p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                    <div className='card_inner'>
                        <p className='card_name'><span> Our </span> Country </p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Covid