import React from "react";
import { FaApple, FaVolumeUp, FaBatteryFull } from "react-icons/fa";
import { MdOutlineRestore, MdBluetooth, MdWifi } from "react-icons/md";
import finder from '../../images/finder.png'


const PropsIcon = {
  size: 20,
}

export default function Home() {

  const diasDaSemana = ['Dom', 'Seg','Ter','Qua','Qui','Sex','Sab']
  const date = new Date();
  const dia = date.getDay();
  const hora = date.getHours();
  const minutos = date.getMinutes();

  //CONVERSAO STRING
  const horaString = hora.toString().padStart(2, '0');
  const minutosString = minutos.toString().padStart(2, '0');
  const diaString = diasDaSemana[dia]
 

  return (
    <div className="h-full w-full bg-my-image bg-cover bg-center">
      <div className="flex flex-col items-center h-full justify-between overflow-hidden">
        <nav className="nav">
          <ul className="ulist">
            <li>
              <a href="/">
                <FaApple {...PropsIcon}></FaApple>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Finder</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>File</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Edit</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>View</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Go</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Window</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Help</p>
              </a>
            </li>
          </ul>
          <ul className="ulist">
            <li>
              <a href="/">
                <MdOutlineRestore {...PropsIcon}/>
              </a>
            </li>
            <li>
              <a href="">
                <MdBluetooth />
              </a>
            </li>
            <li>
              <a href="">
                <MdWifi {...PropsIcon}/>
              </a>
            </li>
            <li>
              <a href="">
                <FaVolumeUp {...PropsIcon}/>
              </a>
            </li>
            <li>
              <a href="">
                <FaBatteryFull {...PropsIcon}/>
              </a>
            </li>
            <li>
              <a href="">
                <p>{diaString} {horaString}:{minutosString}</p>
              </a>
            </li>
          </ul>
        </nav>
        <footer className="flex justify-center bg-neutral-100 bg-opacity-60 rounded-t-lg overflow-hidden">
            <div className="flex items-center footer">
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
                <img src={finder} alt="finder" className="" />
            </div>
        </footer>
      </div>
    </div>
  );
}
