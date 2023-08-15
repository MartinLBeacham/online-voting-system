import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../CSS/grafiket.css';
import Header from '../Components/Header.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Footer from '../Components/Footer.jsx';

function Chart() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className="pie-charts-wrapper">
        <div className='central-container'>
          <div className='central-elections-chart'>
            <h1>Zgjedhjet Qendrore</h1>
          </div>
          <div className='central-election-chart-container'>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='local-elections'>
          <h1>Zgjedhjet Lokale</h1>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Prishtine</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Prizren</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Peje</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Mitrovice</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Gjakove</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Skenderaj</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='prishtine-prizren-pej'>
          <div className='chart-container'>
            <h3>Ferizaj</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Gjilan</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='chart-container'>
            <h3>Podujeve</h3>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 30, label: 'VV' },
                    { id: 1, value: 15, label: 'LDK' },
                    { id: 2, value: 20, label: 'PDK' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Chart;