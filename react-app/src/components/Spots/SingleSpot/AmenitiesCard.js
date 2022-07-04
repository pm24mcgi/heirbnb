import React from "react";
import { BsWifi } from 'react-icons/bs'
import { MdLocalLaundryService } from 'react-icons/md'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { RiTempColdLine } from 'react-icons/ri'
import { GrMonitor } from 'react-icons/gr'
import { MdOutlineIron } from 'react-icons/md'
import { MdOutdoorGrill } from 'react-icons/md'
import { TbLamp } from 'react-icons/tb'
import { MdPool } from 'react-icons/md'
import { MdOutlineBathroom } from 'react-icons/md'
import { FaWineBottle } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { ImBooks } from 'react-icons/im'
import { BsFillFilePersonFill } from 'react-icons/bs'

const AmenitiesCard = () => {
  return (
    <div>
      <h2>Amenities</h2>
      <div className="AmenitiesContainer">
        <div className="AmenitiesGroup">
          <div className="AmenitiesBlock">
            <BsWifi className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Wifi</div>
          </div>
          <div className="AmenitiesBlock">
            <MdLocalLaundryService className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Laundry</div>
          </div>
          <div className="AmenitiesBlock">
            <TbToolsKitchen2 className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Kitchen</div>
          </div>
          <div className="AmenitiesBlock">
            <RiTempColdLine className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Air Coniditioning</div>
          </div>
          <div className="AmenitiesBlock">
            <GrMonitor className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">TV</div>
          </div>
          <div className="AmenitiesBlock">
            <MdOutlineIron className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Iron</div>
          </div>
          <div className="AmenitiesBlock">
            <MdOutdoorGrill className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Grill</div>
          </div>
        </div>
        <div className="AmenitiesGroup">
          <div className="AmenitiesBlock">
            <TbLamp className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Dedicated Workspace</div>
          </div>
          <div className="AmenitiesBlock">
            <MdPool className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Pool</div>
          </div>
          <div className="AmenitiesBlock">
            <MdOutlineBathroom className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Hot Tub</div>
          </div>
          <div className="AmenitiesBlock">
            <FaWineBottle className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Wine Cellar</div>
          </div>
          <div className="AmenitiesBlock">
            <ImBooks className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Library</div>
          </div>
          <div className="AmenitiesBlock">
            <AiFillCar className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Parking</div>
          </div>
          <div className="AmenitiesBlock">
            <BsFillFilePersonFill className="React-Icon-Amenities"/>
            <div className="AmenitiesDescription">Self Check-in</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmenitiesCard
