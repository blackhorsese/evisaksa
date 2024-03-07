import React from "react";
import Navbar from "./Header/navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

function Terms() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar color={location.pathname} />
      <div className="bg-[#E0E0E0] min-h-screen">
        <div className="lg:pt-44 md:pt-32 pt-24 lg:pb-20 md:pb-16 pb-10 max-w-screen-md mx-auto justify-center">
          <div className="bg-white lg:px-10 md:px-8 px-5 lg:py-10 py-5 lg:mx-0 md:mx-0 mx-5">
            <p className="lg:text-3xl md:text-3xl text-2xl lg:mt-5 md:mt-5 mt-2 font-medium font-displace text-black leading-[1]">
              eVisa Terms and Conditions
            </p>

            <p className="text-sm text-gray-700 lg:py-10 md:py-8 py-5 font-medium">
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS
              WEBSITE
            </p>

            <div>
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                1. These Terms
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  1.1 The Kingdom of Saudi Arabia ("KSA") has introduced an
                  electronic visa service ("eVisa"). The eVisa is a multi-entry
                  electronic travel authorization that allows citizens from
                  eligible countries to visit KSA for a short-term stay. The eVisa
                  has been designed to speed up the process of getting a visa for
                  KSA. The eVisa service is operated by Ministry of Tourism, 7775
                  Amr Al Damri Street Assafarat Dist. Riyadh 12512–3135 P.O. Box
                  66680 Riyadh 11586 KSA.
                </li>

                <li className="text-sm text-gray-700">
                  1.2 These terms ("Terms") provide you with the terms and
                  conditions governing your use of the eVisa scheme and our
                  provision of the eVisa service ("Service").
                </li>

                <li className="text-sm text-gray-700">
                  1.3 The Service can be accessed via our website at:
                  https://www.evisaksa.org (our "Website").
                </li>

                <li className="text-sm text-gray-700">
                  1.4 Please read these Terms carefully before applying for an
                  eVisa or using the Service. You should read the complete terms
                  as this is a legally binding contract and contains information
                  about your legal rights. These Terms tell you who we are, how we
                  will provide Services to you and other important information
                  relating to the eVisa.
                </li>

                <li className="text-sm text-gray-700">
                  1.5 These terms govern the Service, all of which are offered
                  subject to your acceptance of the Terms, without modification.
                  By using the Service, you confirm that you accept these Terms
                  and that you agree to comply with them without qualification. If
                  you do not agree to these terms, you must not use the Service.
                </li>

                <li className="text-sm text-gray-700">
                  1.6 We may amend the Terms from time to time. Every time you
                  wish to use the Service, please check these Terms to ensure you
                  understand the terms that apply at that time. In addition, we
                  reserve the right to update and / or change the Website from
                  time to time.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                2. Other terms that may apply to you
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  2.1 The Terms refer to the following additional terms (as
                  amended or restated from time to time) which apply to your use
                  of the Service and which are incorporated by reference:
                </li>

                <li className="text-sm text-gray-700">
                  2.1.1 Privacy Policy: which sets out the terms on which we
                  process your personal data. By using our Website, the Service or
                  by applying for the eVisa, you consent to such processing and
                  you warrant that all data provided by you is accurate.
                </li>

                <li className="text-sm text-gray-700">
                  2.1.2 Cookie Policy: which sets out information about the
                  cookies on our Website.
                </li>

                <li className="text-sm text-gray-700">
                  2.1.3 Third Party Terms & Conditions: if you are using the eVisa
                  or Service via the eVisa application, you agree to be bound by
                  the relevant Google Play, App Store or other application host's
                  terms and conditions as may be amended from time to time ("3rd
                  Party T&C's"). Your continued use of the eVisa application
                  constitutes your continued agreement to, and acceptance of, such
                  3rd Party T&C's. If you do not agree to accept the 3rd Party
                  T&C's or any changes thereto, you agree to immediately
                  de-activate your eVisa account and to immediately stop using the
                  eVisa application, Service and any associated functionality.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                3. Who Can Apply
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  3.1 You must be at least 18 years old to use the Service and to
                  apply for an eVisa. You may not use the Service if you are under
                  18 years of age (a "Minor"). If you will be using the Service on
                  behalf of a Minor, you agree to these terms on behalf of that
                  Minor and you represent that you have the authority to do so. If
                  you do not have such authority, you must not use the Service.
                </li>

                <li className="text-sm text-gray-700">
                  3.2 If you are applying on behalf of someone else who is not a
                  Minor, you represent and warrant that you are entitled to make
                  the application for the eVisa on their behalf and you agree to
                  the Terms on behalf of that person. If you do not have such
                  authority, you must not use the Service.
                </li>

                <li className="text-sm text-gray-700">
                  3.3 The current list of countries whose citizens are entitled to
                  apply for an eVisa is set out below ("Permitted Country").
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                4. Supporting Documentation
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  4.1 To use the Service and apply for an eVisa, you need to have
                  a valid passport from a Permitted Country ("Passport").
                </li>

                <li className="text-sm text-gray-700">
                  4.2 For the purposes of the eVisa application, an application
                  will not be successful unless the Passport has at least 6 months
                  remaining from the date of entry to KSA.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                5. Your application
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  5.1 If your eVisa application is accepted, we will be sending
                  you the eVisa as an email attachment.
                </li>
                <li className="text-sm text-gray-700">
                  5.2 If we are unable to accept your application for whatever
                  reason, we will use reasonable efforts to inform you of this by
                  email.
                </li>{" "}
                <li className="text-sm text-gray-700">
                  5.3 Once you have submitted an application for an eVisa, you
                  will not be able to cancel it or request a refund under any
                  circumstances.
                </li>{" "}
                <li className="text-sm text-gray-700">
                  5.4 Applicants that are not successful (for whatever reason)
                  will not be entitled to a refund of any application fees paid.
                </li>
                <li className="text-sm text-gray-700">
                  5.5 We will issue an invoice for your transaction.
                </li>
                <li className="text-sm text-gray-700">
                  5.6 In order for us to provide the Service, you must provide us
                  with true and accurate information when submitting your
                  application. Any application containing false or misleading
                  information will be rejected. We reserve the right to share with
                  the authorities any application that we suspect of containing
                  false or misleading information provided we do so in accordance
                  with the Privacy Policy referenced above at 2.1.1.
                </li>
                <li className="text-sm text-gray-700">
                  5.7 Approval of an eVisa shall be at the sole discretion of the
                  MT and any applicable authority and / or regulator.
                </li>
                <li className="text-sm text-gray-700">
                  5.8 Payment of an application fee does not guarantee approval of
                  an eVisa.
                </li>
                <li className="text-sm text-gray-700">
                  5.9 Holding an eVisa does not guarantee entry to KSA. Entry to
                  KSA shall remain subject to the relevant individual meeting the
                  conditions on arrival at the border and an individual's entry to
                  KSA shall remain at the discretion of an Immigration Officer.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                6. Price and Payment
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  6.1 The price of the Service will be set out on the Website and
                  at the time of payment during the eVisa application process. The
                  fee for the eVisa may be amended from time to time at the sole
                  discretion of MT
                </li>

                <li className="text-sm text-gray-700">
                  6.2 VAT will be charged at the applicable rate and will be
                  payable by the applicant as part of the fees.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                7. eVisa validity
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  7.1 The eVisa will be valid for one year from the date of
                  issuance.
                </li>

                <li className="text-sm text-gray-700">
                  7.2 The eVisa will be valid for multiple entries, unless stated
                  otherwise on the specific eVisa.
                </li>
                <li className="text-sm text-gray-700">
                  7.3 The maximum length of stay allowed under the eVisa is 3
                  months.
                </li>
                <li className="text-sm text-gray-700">
                  7.4 If you are granted an eVisa, it cannot be extended.
                </li>
                <li className="text-sm text-gray-700">
                  7.5 If the eVisa expires before entry to KSA, you must apply
                  again and another application fee must be paid.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                8. Grant Conditions
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  In addition to any other conditions set out in these Terms:
                </li>
                <li className="text-sm text-gray-700">
                  8.1 you must hold a valid email address so that MT may contact
                  you in relation to the eVisa or Service.
                </li>{" "}
                <li className="text-sm text-gray-700">
                  8.2 your entry to KSA must not violate the security and national
                  welfare of KSA. You must not enter KSA with the intention of
                  committing any act or causing any act to be committed which is
                  not in accordance with Sharia law or the prevailing legal or
                  moral principles in KSA.
                </li>{" "}
                <li className="text-sm text-gray-700">
                  8.3 You must arrive at the KSA border using the same passport
                  you used to apply for the eVisa.
                </li>
                <li className="text-sm text-gray-700">
                  8.4 The eVisa is valid for entry through all airports and / or
                  seaports.
                </li>
                <li className="text-sm text-gray-700">
                  8.5 You must carry a copy of the eVisa at the time of your first
                  arrival to KSA.
                </li>
                <li className="text-sm text-gray-700">
                  8.6 Your biometric details will be mandatorily captured by the
                  immigration authorities on arrival in KSA.
                </li>
                <li className="text-sm text-gray-700">
                  8.7 An eVisa is granted solely for tourist purposes or for the
                  purpose of performing a umrah and it is not considered a visa
                  for work. If you are granted an eVisa, you must not take up paid
                  employment during your visit to KSA.
                </li>
                <li className="text-sm text-gray-700">
                  8.8 As set out above at clause 4.2 your passport must be valid
                  for at least 6 months at the time of entry into KSA.
                </li>
                <li className="text-sm text-gray-700">
                  8.9 You must be able to support yourself (and any dependents)
                  during the visit.
                </li>
                <li className="text-sm text-gray-700">
                  8.10 You acknowledge and accept that on entering KSA, you will
                  be subject to local laws.
                </li>
              </ol>
            </div>
            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                9. Suspension or Withdrawal of the Service
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  9.1 MT reserves the right to suspend or withdraw the provision
                  of the Service and/or terminate an eVisa at any time at its sole
                  discretion on written notice (email or text to suffice).
                </li>

                <li className="text-sm text-gray-700">
                  9.2 You acknowledge that without prejudice to the generality of
                  MT's right above at clause 10.1, MT will suspend or withdraw the
                  provision of the Service or the eVisa if an applicant:
                </li>
                <li className="text-sm text-gray-700">
                  9.2.1 does not make any payment when due;
                </li>
                <li className="text-sm text-gray-700">
                  9.2.2 does not provide the correct information that is necessary
                  for the provision of the Service;
                </li>
                <li className="text-sm text-gray-700">
                  9.2.3 does not abide by the Terms.
                </li>
                <li className="text-sm text-gray-700">
                  9.3 We do not guarantee that the Website, or any content on it,
                  will always be available or be uninterrupted. MT may suspend or
                  withdraw or restrict the availability of all or any part of our
                  Website for business and operational reasons, but will use
                  reasonable endeavours to provide prior notice of any suspension
                  or withdrawal.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                10. Intellectual Property
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  10.1 You agree to provide an irrevocable, perpetual, worldwide,
                  sub-licensable, assignable licence for MT and any connected
                  third party to use any and all information provided by you for
                  the purposes of providing the Service in connection with your
                  application for an eVisa. You agree to indemnify and hold
                  harmless MT against any claim made in relation to a breach of
                  this clause 11.1.
                </li>

                <li className="text-sm text-gray-700">
                  10.2 You acknowledge that MT will use such information in
                  accordance with the Privacy Policy referred to at clause 2.1.1
                  above.
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <h6 className="lg:text-xl md:text-xl text-lg font-medium  text-gray-700">
                11. General
              </h6>

              <ol className="mt-5">
                <li className="text-sm text-gray-700">
                  11.1 The Service and the eVisa is provided solely to assist
                  applicants in making a visa application to KSA and MT accepts no
                  liability in respect of the same and disclaims all liability to
                  the fullest extent permitted by the law.
                </li>

                <li className="text-sm text-gray-700">
                  11.2 You are responsible for configuring your information
                  technology, computer programmes and platform to access the
                  Website. You should use your own virus protection software.
                </li>
                <li className="text-sm text-gray-700">
                  11.3 You must not misuse the Website by knowingly introducing
                  viruses, trojans, worms, logic bombs or other material that is
                  malicious or technologically harmful. You must not attempt to
                  gain unauthorised access to the Website, the server on which our
                  Website is stored or any server, computer or database connected
                  to our Website. You must not attack the Website via a
                  denial-of-service attack or a distributed denial-of service
                  attack. By breaching this provision, you may be committing a
                  criminal offence under the laws of KSA. MT will report any such
                  breach to the relevant law enforcement authorities and will
                  co-operate with those authorities. In the event of such a
                  breach, your right to use our Website will cease immediately.
                </li>
                <li className="text-sm text-gray-700">
                  11.4 If the KSA court finds part of the Terms illegal, the rest
                  of the Terms will continue in full force and effect. Each of the
                  paragraphs of these Terms operates separately.
                </li>
                <li className="text-sm text-gray-700">
                  11.5 The Terms, their subject matter and their formation (and
                  any non-contractual disputes or claims), are governed by the
                  laws of KSA. You agree that the courts of KSA will have
                  exclusive jurisdiction over any disputes relating to the subject
                  matter hereof.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Terms;
