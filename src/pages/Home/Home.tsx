import React from "react";
import { FaApple, FaVolumeUp, FaBatteryFull } from "react-icons/fa";
import { MdOutlineRestore, MdBluetooth, MdWifi } from "react-icons/md";
import finder from '../../images/finder.png'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-my-image bg-cover bg-center">
      <div className="flex">
        <nav className="nav">
          <ul className="ulist">
            <li>
              <a href="/">
                <FaApple></FaApple>
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
                <MdOutlineRestore />
              </a>
            </li>
            <li>
              <a href="">
                <MdBluetooth />
              </a>
            </li>
            <li>
              <a href="">
                <MdWifi />
              </a>
            </li>
            <li>
              <a href="">
                <FaVolumeUp />
              </a>
            </li>
            <li>
              <a href="">
                <FaBatteryFull />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-end">
        <footer className="flex justify-center bg-neutral-100 bg-opacity-60 rounded-t-lg">
            <div className="flex items-center">
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
                <img src={finder} alt="finder" className="w-[80px]" />
            </div>
        </footer>
      </div>
    </div>
  );
}
