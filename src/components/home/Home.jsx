import React from "react";
import FinanceCalculator from "./FinanceCalculator";
import { IconAsterisk, IconCheck, IconPointFilled } from "@tabler/icons-react";
import Faqs from "./Faqs";
import Footer from "../Footer";

function Home() {
  const questionsAndAnswers = [
    {
      question: "What is the payment method for installment?",
      answer:
        "With POS Financing, you won’t have fixed monthly payments. Instead, repayment is automatic and settled daily. Daily payments are based on a small fixed percentage (holdback rate) of your future debit and credit card sales and withheld to repay the facility. It’s simple, easy and affordable because repayment is a fixed percentage of your daily POS transactions, not a fixed Riyal amount.",
    },
    {
      question: "How long does the process take to receive funds?",
      answer:
        "It’s very quick, once we receive the full documentation we need, we can provide funds within 5 business days.",
    },
    {
      question:
        "What is the minimum and maximum amount of funding and how long is the financing period?",
      answer:
        "At Alraedah, we provide financing from a minimum of SR100,000 to a maximum of SR7,500,000 with no fixed repayment period.",
    },
    {
      question: "How much will I qualify for?",
      answer:
        "Our financing is based on the monthly POS sales of your business. We will typically approve you for up to 20% of your annual POS sales. We do not look at your cash sales. For example, if you generate SR1M worth of annual POS sales, you can receive up to SR200,000 in financing.",
    },
    {
      question: "What is the Profit Rate?",
      answer:
        "We would need to analyze your application and bank statements to provide an accurate offer. Our rates can start as low as 10%+ (through our Kafalah program).",
    },
    {
      question:
        "I don't have a business, but I would like to start one. Can I still apply for financing?",
      answer:
        "No, unfortunately, we do not provide financing to start-up businesses or for new business activities. However, if you use one of our POS terminals, one of our relationship managers will be in contact with you once you generate sufficient daily POS transactions and walk you through the steps for funding your business.",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-[#173D6F] via-[#1c406f] to-transparent  w-full h-[130vh]">
        <div className="flex w-full h-full">
          <div className="w-1/2 -mt-2 relative">
            <div className="">
              {" "}
              <img
                className="rotate-[270deg]"
                src="https://alraedah.sa/wp-content/uploads/2022/09/Group-1984076814-1.png"
                alt=""
              />
            </div>
            <p className="absolute top-20 left-16 text-[55px] font-semibold text-white  ">
              Supporting small businesses with big Dreams <br />
              <p className="text-[25px] leading-normal font-normal">
                Your gateway for growth. Explore our innovative financial
                solutions that can scale your business for success.
              </p>
            </p>
          </div>
          <div className="w-1/2 -z-40 bg-cover bg-no-repeat bg-[url('https://alraedah.sa/wp-content/uploads/2022/09/Hero-Section-Video-1.gif')]"></div>
        </div>
        <div className="relative flex justify-center items-center -my-10">
          <FinanceCalculator />
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] py-10  rounded-3xl border border-transparent bg-white shadow-2xl mt-[10rem] mx-auto my-4">
          <Banner />
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] py-10  rounded-3xl border border-transparent bg-white shadow-2xl mt-[10rem] mx-auto my-4">
          <POSFinanceProduct />
        </div>
        <div className="flex flex-col  bg-[#173d6f] mt-[10rem] pb-32 ">
          <WhyAlraedah />
        </div>
        <div className="mt-[10rem] ">
          <SupportingBusinesses />
        </div>
        <div className="mt-[10rem] flex justify-center items-center ">
          <Partners />
        </div>
        <div className="mt-[10rem]">
          <Reviews />
        </div>
        <div className="flex justify-center items-center mt-[10rem]">
          <FinanceCalculator />
        </div>
        <div className="flex justify-center items-center mt-[10rem]">
          <Faqs questionsAndAnswers={questionsAndAnswers} />
        </div>
        <div className="mt-[5rem] flex justify-center items-center"><Footer/></div>
      </div>
    </>
  );
}

export default Home;

function Banner() {
  return (
    <>
      <div className=" pl-10 w-[98%]">
        <h2 className="text-3xl font-medium">
          Whatever stage your business is in,
          <br />
          Alraedah can take you from ambition to achievement
        </h2>
        <div className="mr-16 text-xl font-semibold">
          <div className="flex justify-between">
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 my-8 ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/store_major-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Opening a New Branch</h6>
            </div>
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 my-8  ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/Frame-1984076883-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Purchasing Equipment</h6>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/ios-settings.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Improving Operations</h6>
            </div>
            <div className="flex  items-center space-x-4 w-[20rem]  ml-2 ">
              <div>
                <img
                  src="https://alraedah.sa/wp-content/uploads/2022/12/Frame-12098-1.svg"
                  alt=""
                />
              </div>{" "}
              <h6>Expanding Products & Services</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function POSFinanceProduct() {
  return (
    <>
      <div className="flex  px-10">
        <div className="w-[95%] flex flex-col space-y-6">
          <div className="flex space-x-3 w-[30vw] py-2 bg-blue-200">
            <span>
              <img
                src="https://alraedah.sa/wp-content/uploads/2022/12/store_major-1.svg"
                alt=""
              />
            </span>
            <p>POS Finance Product</p>
          </div>
          <p className="text-4xl font-medium">Your sales pay your finance</p>
          <p>
            A flexible financial solution that enables direct repayment through
            your POS sales. Simple, straightforward and seamless:
          </p>
          <div className="leading-loose">
            <h1 className="text-lg font-semibold">Benefits:</h1>
            <span className="flex items-center space-x-4">
              <IconCheck color="green" />
              <p>Financing from SAR 100,000 – 7.5 million</p>
            </span>
            <span className="flex items-center space-x-4">
              <IconCheck color="green" />
              <p>Provide POS Machines</p>
            </span>
            <span className="flex items-center space-x-4">
              <IconCheck color="green" />
              <p>7 days to get Financed</p>
            </span>
            <span className="flex items-center space-x-4">
              <IconCheck color="green" />
              <p>Personal Relationship Manager Appointed to Your Account</p>
            </span>
          </div>
          <div className="leading-loose">
            <h1 className="text-lg font-semibold">Requirnements:</h1>
            <span className="flex items-center space-x-4">
              <IconPointFilled color="black" />
              <p>Operational for a period of at least 6 months</p>
            </span>
            <span className="flex items-center space-x-4">
              <IconPointFilled color="black" />
              <p>No Guarantor Needed</p>
            </span>
            <span className="flex items-center space-x-4">
              <IconPointFilled color="black" />
              <p>No financial statements required</p>
            </span>
            <span className="ml-10 text-gray-400">* exceptions may apply</span>
          </div>
          <div>
            <button className="border-2  border-[#2a6fca] text-[#2a6fca] m-2 px-4 py-2 rounded-full">
              Learn more
            </button>
          </div>
        </div>
        <div className="mt-16 ">
          <img
            src="https://alraedah.sa/wp-content/uploads/2023/01/MCA-illustration.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

function WhyAlraedah() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col ml-20 mt-16 text-white w-[80vw]">
          <p className="text-2xl text-blue-300">Why Alraedah?</p>
          <p className="text-4xl mt-2">We Finance, You Grow.</p>
          <div className="flex justify-between mt-7">
            <p>
              <span className="text-4xl leading-loose">2.069B SAR</span>
              <br /> <span>Total Financing Amount</span>
            </p>
            <p>
              <span className="text-4xl leading-loose">40 Cities </span>
              <br /> <span> Covered Across KSA</span>
            </p>
            <p>
              <span className="text-4xl leading-loose">1,630+</span> <br />{" "}
              <span>SME’s Financed By Alraedah</span>
            </p>
          </div>
          <div>
            <button className="bg-white text-[#000] mt-10 px-5 py-3 rounded-full">
              Apply Now
            </button>
          </div>
        </div>
        <div className="w-[20vw]">
          <img
            src="https://alraedah.sa/wp-content/uploads/2022/09/Group-1984076814-1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

function SupportingBusinesses() {
  return (
    <>
      <div className="flex justify-center items-center bg-transparent space-x-5">
        <div className="w-[35%]">
          <img
            className=""
            src="https://alraedah.sa/wp-content/uploads/2022/09/Frame-1984076943-2.png"
            alt=""
          />
        </div>
        <div className="w-[55%] border border-white rounded-xl bg-white shadow-2xl px-10 py-6">
          <div className="text-black text-2xl font-medium my-2">
            Supporting Small Businesses Across All Sectors.
          </div>
          <div className="text-black text-xl my-7">
            Alraedah offers financial solutions for a diverse range of
            industries, including:
          </div>
          <div className=" text-[#376bfb] m-2">
            <div className="flex space-x-5 justify-between">
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/store-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <p>Retail</p>
              </div>
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/industry-icons-6.svg"
                    alt=""
                  />
                </div>
                <p>Food & Baverage</p>
              </div>
            </div>
            <div className="flex space-x-5 justify-between">
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/industry-icons-4-2.svg"
                    alt=""
                  />
                </div>
                <p>Pharmacy</p>
              </div>
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/industry-icons-1.svg"
                    alt=""
                  />
                </div>
                <p>Grocery Store</p>
              </div>
            </div>
            <div className="flex space-x-5 justify-between">
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/industry-icons-2.svg"
                    alt=""
                  />
                </div>
                <p>Bakery</p>
              </div>
              <div className="flex space-x-2 w-[15rem] mb-8">
                <div>
                  <img
                    src="https://alraedah.sa/wp-content/uploads/2022/12/industry-icons-3-1.svg"
                    alt=""
                  />
                </div>
                <p>Beauty Salon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Partners() {
  return (
    <>
      <div className="w-[80%] border border-white rounded-3xl bg-white shadow-2xl px-10 py-6">
        <p className=" text-2xl font-normal">Partners</p>
        <p className="text-lg text-gray-500 mt-6">
          We work with industry leaders to offer the most flexible solutions to
          meet your financing needs:
        </p>
        <div className="grid grid-cols-4 w-[90%] m-auto">
          <span className=" my-4 flex justify-center items-center">
            <img
              src="https://alraedah.sa/wp-content/uploads/2022/09/image-1380.png"
              alt=""
            />
          </span>
          <span className=" my-4 flex justify-center items-center">
            <img
              src="https://alraedah.sa/wp-content/uploads/2022/09/373524-1.png"
              alt=""
            />
          </span>
          <span className=" my-4 flex justify-center items-center">
            <img
              src="https://alraedah.sa/wp-content/uploads/2022/09/Group.png"
              alt=""
            />
          </span>
          <span className=" my-4 flex justify-center items-center">
            <img
              src="https://alraedah.sa/wp-content/uploads/2023/05/SME-.png"
              alt=""
            />
          </span>
          <span className=" my-4 flex justify-center items-center">
            <img
              src="https://alraedah.sa/wp-content/uploads/2022/09/svgexport-1-1-1.png"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

function Reviews() {
  return (
    <>
      <div className="flex justify-between bg-[#ce7169]">
        <div className="my-auto mx-3">
          <p className="text-white text-3xl font-light pb-28">
            “Alraedah was my first choice to support my project with flexible
            financing that deducts a percentage of the sales without having to
            commit to monthly amounts.”
          </p>
          <div className="flex space-x-2">
            <span>
              <img
                src="https://alraedah.sa/wp-content/uploads/2022/09/Group-12054.png"
                alt=""
              />
            </span>
            <p class="text-yellow-100 hover:text-black">Peacock Chocolate</p>
          </div>
        </div>
        <div>
          <iframe
            width="647"
            height="360"
            src="https://www.youtube.com/embed/pDgpoX3P76o"
            title="قصة نجاح - -بيكوك شوكليت"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
