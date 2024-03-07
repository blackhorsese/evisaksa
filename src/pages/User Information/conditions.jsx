import React, { useState } from "react";
import Navbar from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../pages/Home Page/footer";
import St4 from "./steps/st4";

function Conditions() {
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1 md:grid-cols-3 px-5 justify-start mx-auto md:pt-44 pt-16">
        <div
          className="hidden lg:block md:block -z-30 md:col-span-1 bg-side md:h-[100vh] md:text-lg text-base mt-8 md:-mt-[165px] md:fixed  md:w-[25%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <St4 />
        </div>

        <div className="md:text-lg text-base mt-8 md:mt-0  md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto w-[90%] ">
          <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#403F68] uppercase">
            Terms & Conditions
          </p>

          <ul style={{ listStyle: "initial" }}>
            <li className="md:text-lg text-base mt-8">
              I acknowledge that all the information I provided are true and
              reliable. In addition, I pledge to abide to the laws and rules of
              the Kingdom of Saudi Arabia and respect the customs and Islamic
              traditions of its people during my stay. I acknowledge my
              understanding that the specialized authorities in the Kingdom of
              Saudi Arabia have the right to deny my entry and can send me back
              to where I came from if I did not comply with the rules and laws;
              or if the information under which I received my visa are proven to
              be incorrect.
            </li>
            <li className="md:text-lg text-base mt-8">
              I am fully aware that all intoxicating substances, narcotic drugs,
              indecent materials and publications, as well as publications
              related to any religious beliefs or political tendencies that
              contradict with Islam are prohibited in the Kingdom of Saudi
              Arabia.
            </li>
            <li className="md:text-lg text-base mt-8">
              I am fully aware of the procedures and controls regarding the
              batch-release and clearance of medicines, containing narcotic or
              psychotropic substances that are possessed for personal use by
              patients arriving and departing from The Kingdom. Such procedures
              and controls are provided in the link
              below:http://www.sfda.gov.sa/ar/drug/drug_reg/pages/drug_reg.aspx.
              I am also aware that if these regulations and controls are
              transgressed, I shall be subjected to sanctions and penalties
              stated in the Law of Combating Narcotics and Psychotropic
              Substances.
            </li>

            <li className="md:text-lg text-base mt-8">
              I have never been deported from The Kingdom of Saudi Arabia or any
              other GCC country, nor that I have violated their rules.
            </li>

            <li className="md:text-lg text-base mt-8">
              I have never been deported from The Kingdom of Saudi Arabia or any
              other GCC country, nor that I have violated their rules. I pledge
              to Abide to the type of visa I was provided and to its terms and
              duration; and I shall leave the country before the expiry date
              specified within the visa. I am also fully aware of the penalty I
              shall endure in case of my violation to the rules of the Kingdom
              or to my entry visa; and I shall be subject to the penalty and the
              execution of the punishments stipulated by the laws regulating the
              process of handling people entering the Kingdom with visas for
              Hajj or Umrah and other types of visa issued by the Royal Decree
              No (m / 42), on 18 / 10 / 1404 H and amended by Royal Decree No
              (m/9) on 1/5/1420 H. As well as the sanctions on violators of
              residency and work regulations promulgated by the Council of
              Ministers resolution No (140) on 6/5/1434 H.
            </li>

            <li className="md:text-lg text-base mt-8">
              I acknowledge the right of the Saudi authorities to repatriate me
              from the port of entry at my own expense or deport the Saudi
              territory after entering it. I acknowledge the right of the Saudi
              authorities to apply the penalties provided by Law if proven that
              after I received my visa or residence permit, that I have
              submitted incorrect papers or documents or provided false
              statements to any Saudi authority locally or abroad in order to
              obtain a visa for myself or for someone else; for the reason of
              entry or to obtain a residence permit or any other official visa.
              Or being a contributor or partner in providing such information or
              documents that do not match the truth.
            </li>

            <li className="md:text-lg text-base mt-8">
              I acknowledge that drug dealing or smuggling drugs into the
              Kingdom is a crime punishable by death penalty.
            </li>

            <li className="md:text-lg text-base mt-8">
              I acknowledge and pledge again that all written information shall
              be correct and exactly as it is written in my passport that will
              be used in my travel and entrance to the Kingdom of Saudi Arabia;
              and I take full responsibility for it. If it is proven otherwise
              -or my name appears to be included in a list containing the banned
              people, then my request shall be rejected, or my visa shall be
              canceled automatically once granted. Moreover, I acknowledge the
              right to the Saudi authorities to deport me back to the port of
              entry at my own expense and I shall not have the right to claim
              compensation.
            </li>

            <li className="md:text-lg text-base mt-8">
              I understand that I am not permitted to use the tourist visa for
              any purpose other than tourism, and that I should not practice any
              paid or non-paid work related activity, nor perform Hajj during my
              stay in Saudi Arabia
            </li>

            <li className="md:text-lg text-base mt-8">
              Laws and etiquettes in Saudi Arabia, Read More ...
            </li>

            <li className="md:text-lg text-base mt-8">
              I acknowledge that there are no medical treatment purposes behind
              the visit.
            </li>

            <li className="md:text-lg text-base mt-8">
              To my knowledge, I have not engaged in physical contact with a
              member of the public affected by the coronavirus (2019-nCoV)
            </li>

            <li className="md:text-lg text-base mt-8">Visa application fees are nonrefundable</li>

            <li className="md:text-lg text-base mt-8">
              I have read and agree to Privacy Policy, Terms and Conditions
            </li>

            <li className="md:text-lg text-base mt-8">
              The duration of stay is 90 days upon entry in Saudi within the
              validity of the eVisa which is one year
            </li>

            <li className="md:text-lg text-base mt-8">
              Once the 90 days has been consumed, there will be no extension nor
              renewal of the eVisa until the expiry of the validity of the eVisa
              (one year)
            </li>

            <li className="md:text-lg text-base mt-8">
              It’s prohibited for non-Muslims to access the two holy sites of
              Mecca and Madina
            </li>
          </ul>
          <div className="flex mt-20">
            <input
              required
              type="checkbox"
              id="myCheckboxs"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <p className="ml-2 self-center md:text-lg text-base">
              I have read and agree all the above terms and conditions.
            </p>
          </div>
          <div className="flex justify-center my-16 md:my-20 md:gap-16">
            <p
              onClick={() => handleNavigate("/medical")}
              className="cool-link text-black md:text-lg text-sm cursor-pointer self-center"
            >
              Previous
            </p>
            <button
              onClick={() => {
                if (isCheckboxChecked) {
                  handleNavigate("/application-review");
                }
              }}
              disabled={!isCheckboxChecked}
              className={`ml-5 text-[#403F68] md:text-lg text-sm border-4 border-[#403F68] md:w-64 w-48 items-center p-3 rounded-full block self-end ${
                !isCheckboxChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Conditions;
