import React from "react";
import Navbar from "../component/Header/navbar";
import Footer from "../component/footer";
import { useLocation } from "react-router-dom";

function Policy() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1 w-4/5 md:w-3/4 lg:w-1/2 ml-5 md:ml-10 lg:ml-20 xl:ml-32">
        <div className="mb-52">
          <div>
            <p className="text-[40px]  mt-20 md:mt-0 font-medium font-displace text-black leading-[1]">
              PRIVACY POLICY
            </p>

            <h6 className="text-[20px] font-medium pt-5">
              What does this policy cover?
            </h6>

            <p className="text-[15px] text-gray-700">
              This policy describes how we (referred to as "we" or "us") will
              make use of your data when you interact with us through our
              websites and all of the webpages, subdomains and subparts of the
              platform (our "Platform"). It also describes your data protection
              rights, including the right to object to some of the processing
              that we carry out. More information about your rights, and how to
              exercise them, is set out in the “What rights do I have?” below.
              If you are under the age of 18 you are not permitted to create a
              profile on our Platform. If an adult creates a profile on your
              behalf, it is the adult who enters into this policy and agrees to
              its terms.
            </p>
            <h6 className="text-[15px] font-medium text-gray-600">
              {" "}
              Summary of how we use your data
            </h6>

            <ul className="text-[15px] text-gray-700">
              <li>
                • We use your personal data in order to provide the services to
                you, for service administration purposes, to personalize the
                content you see on the Platform, to identify your location and
                to improve the services offered to you.
              </li>
              <li>
                • Data is shared with companies or entities processing your data
                on our behalf and on our instruction.
              </li>
              <li>
                • Where we rely on your consent, such as for processing your
                data in order to provide personalized services to you, or
                sending direct marketing in relation to our relevant products
                and services, or other products and services provided by us, you
                can withdraw this consent at any time.
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-[20px] font-medium pt-10">
              What information do we collect?
            </h6>

            <p className="text-[15px] text-gray-700">
              We collect and process personal data about you when you interact
              with our Platform or if you interact with us in person.{" "}
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-5">
              Collecting information for visa applications or eVisa requests
            </h6>

            <p className="text-[15px] text-gray-700">
              When you apply for a visa or request an eVisa, we may collect
              additional information from you to determine your identity, your
              eligibility to apply for and get a visa or eVisa. The supply of
              your information is voluntary, but if you do not supply mandatory
              information required in any visa application or eVisa request,
              they may not be accepted. Information requested in connection with
              your visa application or eVisa request will be set out at the
              relevant section of the Platform and may include (by way of
              example only):
            </p>

            <ul className="text-[15px] text-gray-700">
              <li>
                • General information such as your name, username and password,
                gender, age/date of birth, home address, email address and phone
                number, passport details, travel details and plans.
              </li>
              <li>
                • Personal information in relation to your health, ethnicity,
                religion, genes, family background or criminal record.
              </li>
              <li>
                • Marketing preferences including any consents you have given
                us, information related to the browser or device you use to
                access our Platform, including, but not limited to, IP addresses
                and location data.
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              What information do we receive from third parties?
            </h6>

            <p className="text-[15px] text-gray-700">
              Sometimes, we receive information about you from third parties.
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              How do we use this information, and what is the legal basis for
              this use?
            </h6>

            <p className="text-[15px] text-gray-700">
              We process this personal data for the following purposes:
            </p>
            <p className="text-[15px] text-gray-700">
              • As required to conduct our business and pursue our legitimate
              interests, in particular:
            </p>

            <ol>
              <li className="text-[15px] text-gray-700">
                1. verifying your identity
              </li>

              <li className="text-[15px] text-gray-700">
                2. communicating with you
              </li>

              <li className="text-[15px] text-gray-700">
                3. sharing your data as required for the service from time to
                time
              </li>

              <li className="text-[15px] text-gray-700">
                4. to monitor use of our Platform and online services, and use
                your information to help us monitor, improve and protect our
                content, services and Platform, to provide you with the most
                user-friendly navigation experience (both online and offline)
              </li>

              <li className="text-[15px] text-gray-700">
                5. to personalize our Platform (including any future platforms),
                products or services for you
              </li>

              <li className="text-[15px] text-gray-700">
                6. we monitor customer accounts to prevent, investigate and/or
                report fraud, terrorism, misrepresentation, security incidents
                or crime, in accordance with applicable laws
              </li>

              <li className="text-[15px] text-gray-700">
                7. we use information you provide to investigate any complaints
                received from you or from others about our Platform or our
                products or services
              </li>

              <li className="text-[15px] text-gray-700">
                8. we will use data in connection with legal claims, compliance,
                regulatory and investigative purposes as necessary (including
                disclosure of such information in connection with legal process
                or litigation)
              </li>

              <li className="text-[15px] text-gray-700">
                9. we use data of select individuals to invite them to take part
                in market research.
              </li>

              <li className="text-[15px] text-gray-700">
                • Where you give us consent:
              </li>
              <li className="text-[15px] text-gray-700">
                1. we may send you direct marketing in relation to our relevant
                products and services, or other products and services provided
                by us, our affiliates, and carefully selected partners
              </li>
              <li className="text-[15px] text-gray-700">
                2. we place cookies and use similar technologies in accordance
                with our Cookies Policy and the information provided to you when
                those technologies are used
              </li>
              <li className="text-[15px] text-gray-700">
                3. on other occasions where we ask you for consent, we will use
                the data for the purpose which we explain at that time, such as
                for the purposes of preparing user recommendations.
              </li>

              <li className="text-[15px] text-gray-700">
                • For purposes which are required by law in response to requests
                by government or law enforcement authorities conducting an
                investigation.
              </li>
            </ol>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              Withdrawing consent or otherwise objecting to direct marketing
            </h6>

            <p className="text-[15px] text-gray-700">
              Where we rely on your consent, you will always be able to withdraw
              that consent, although we may have other legal grounds for
              processing your data for other purposes, such as those set out
              above. In some cases, we are able to send you direct marketing
              without your consent, where we rely on our legitimate interests.
              You have the right to opt-out of direct marketing. You can do this
              by contacting us at info@visitsaudi.com
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              Who will we share this data with, where and when?
            </h6>

            <p className="text-[15px] text-gray-700">
              We will keep your data generally confidential but we may share
              your data in the following instances: • We will share your
              personal data with third parties where we obtain your consent at
              that time. We will only share the specific personal data which you
              authorize us to share with such third party. In such case they
              will be a data controller and they may have their own privacy
              terms detailing how they use that personal data.
            </p>

            <p className="text-[15px] text-gray-700">
              • Personal data may be shared with government authorities and/or
              law enforcement officials if mandated by law or if required for
              the legal protection of our legitimate interests in compliance
              with applicable laws.
            </p>

            <p className="text-[15px] text-gray-700">
              • Personal data may also be shared with third party service
              providers, who will process it on behalf of us for the purposes
              identified above. Such third parties include (without limitation)
              providers of website hosting, maintenance, call center operation
              and identity checking.
            </p>

            <p className="text-[15px] text-gray-700">
              • Personal data may also be shared with professional advisers
              acting as processors or joint controllers including lawyers,
              bankers, auditors and insurers who provide consultancy, banking,
              legal, insurance and accounting services to us.
            </p>

            <p className="text-[15px] text-gray-700">
              • In the event that our service is privatized, sold or integrated
              with another business, your details will be disclosed to our
              advisers and any prospective purchaser’s adviser and will be
              passed to the new supplier of such services.
            </p>

            <p className="text-[15px] text-gray-700">
              • If you are accessing our Platform from within the European
              Economic Area ("EEA"), your data might be accessed, collected
              and/or stored on servers outside of the EEA.
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              What rights do I have?
            </h6>

            <p className="text-[15px] text-gray-700">
              You have the right to ask us for a copy of your personal data; to
              correct, delete or restrict (stop any active) processing of your
              personal data; and to obtain the personal data you provide to us
              for a contract or with your consent in a structured, machine
              readable format. In some cases where you have requested that your
              personal data is deleted, we may still have to keep this data on
              our Platform as the removal of such data will impact other data.
              In such cases, you can request that such data is anonymized. In
              addition, you can object to the processing of your personal data
              in some circumstances in particular, where we don’t have to
              process the data to meet a contractual or other legal requirement,
              or where we are using the data for direct marketing. These rights
              may be limited, for example if fulfilling your request would
              reveal personal data about another person, or if you ask us to
              delete information which we are required by law to keep or where
              we have compelling legitimate interests in keeping. To exercise
              any of these rights, you can get in touch with us using the
              details set out below. The provision of certain information is
              mandatory for the provision of certain services: if the relevant
              data is not provided, then we might not be able to provide you
              with certain services. All other provision of your information is
              optional. However, note that failure to provide the optional data
              means that we will not be able to send you communications about
              the goods and services that may be of interest to you, nor
              personalise the way that our content is presented to you.
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              How do I get in touch with you?
            </h6>

            <p className="text-[15px] text-gray-700">
              We hope that we can satisfy queries you may have about the way we
              process your data. If you have any concerns about how we process
              your data, or would like to opt-out of direct marketing, you can
              get in touch by emailing us at info@visitsaudi.com
            </p>
          </div>

          <div>
            <h6 className="text-[20px] font-medium pt-10">
              How long will you retain my data?
            </h6>

            <p className="text-[15px] text-gray-700">
              In the event that you wish to deactivate your account, a red flag
              goes on our database and, whilst people cannot use the personal
              information, it stays on the system for a period of one year for
              administration purposes before being deleted. We will only keep
              your content for as long as is reasonably required for the
              purpose(s) for which it was submitted. Where we process personal
              data for marketing purposes or with your consent, we process the
              data until you ask us to stop and for a reasonable period after
              this (to allow us to implement your requests). We also keep a
              record of the fact that you have asked us not to send you direct
              marketing or to process your data indefinitely so that we can
              respect your request in future. In respect of children's data,
              parents and guardians give us their consent to collect and use the
              data of minors by providing their details.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Policy;
