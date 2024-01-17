import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandX,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";

function Footer() {
  return (
    <>
    <div className="w-full">
      <div className="flex justify-between space-x-4 px-10 bg-[#fff] shadow- py-14 ">
        <div>
          <p className="text-lg text-gray-500 font-medium">Follow us</p>

          <div className="text-[#376bfb] flex space-x-5">
            <span>
              <IconBrandX size={40} />
            </span>
            <span>
              <IconBrandInstagram size={40} />
            </span>
            <span>
              <IconBrandTiktok size={40} />
            </span>
            <span>
              <IconBrandLinkedin size={40} />
            </span>
          </div>

          <div className="mt-6 text-[#376bfb]">
            <div className="flex space-x-2 font-medium">
              <span>
                <IconPhone />
              </span>
              <p>8001249000</p>
            </div>
            <div className="flex space-x-2 font-medium">
              <span>
                <IconBrandWhatsapp />
              </span>
              <p>920004495</p>
            </div>
            <div className="flex space-x-2 font-medium">
              <span>
                <IconBrandGmail />
              </span>
              <p>care@alraedah.sa</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg text-gray-500 font-medium">Other</h1>
          <p className="text-lg text-black font-normal">Contact Us</p>
          <p className="text-lg text-black font-normal">Financial Reports</p>
          <p className="text-lg text-black font-normal">Pricing</p>
        </div>

        <div>
          <h1 className="text-lg text-gray-500 font-medium">Regulatory</h1>
          <p className="text-lg text-black font-normal">
            Finance Consuming Protection <br /> Principles
          </p>
        </div>

        <div>
          <h1 className="text-lg text-gray-500 font-medium">Address</h1>
          <div className="flex flex-col">
            {" "}
            <div className="text-lg text-black flex justify-between font-medium">
            Main Office – Riyadh
              <MapButton/>
            </div>
              <span className="">
               Building 9, Laysen Valley، King Khaled Street، Riyadh، Saudi Arabia
              </span>
          </div>
          <div className="flex flex-col">
            {" "}
            <div className="text-lg text-black flex justify-between font-medium">
              Sales Office – Riyadh
              <MapButton/>
            </div>
              <span className="">
               3rd floor, Tower-B, Olaya Towers, Olaya Main Street 12213، Saudi Arabia
              </span>
          </div>
          <div className="flex flex-col">
            {" "}
            <div className="text-lg text-black flex justify-between font-medium">
              Dammam Branch{" "}
              <MapButton/>
            </div>
              <span className="">
                7824 – Ash Shati Al Gharbi, Prince Mohammed bin Fahd Street,
                Dammam, 32413، Saudi Arabia
              </span>
          </div>
        </div>
      </div>
      <Footer2/>
      </div>
    </>
  );
}

export default Footer;









function MapButton(){
  return(
    <>
     <button className="flex space-x-4 font-normal items-center border-2 border-[#376bfb] w-fit rounded-full px-3 py-2 text-[#376bfb]">
              <p>Show Maps</p>
              <span>
                <img className="w-5" src="google-maps.png" alt="" />
              </span>
            </button>
    </>
  )
};


function Footer2(){
  return(
    <>
        <div className=" bg-neutral-50 text-base border-t-2 border-white border-solid flex justify-between py-10 px-4 font-normal text-gray-500">
          <div className="flex space-x-8">
            <button>Privacy Policy</button>
            <button>Terms and Conditions</button>
            <button>Cookies</button>
            </div>
            <p>  {new Date().getFullYear() + " © " + " Alraedah Finance, All Rights Reserved"}</p>
        </div>
    </>
  )
}