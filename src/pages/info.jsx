import React from "react";
import Navbar from "../component/Header/navbar";
import Footer from "../component/footer";
import { useLocation } from "react-router-dom";

function Info() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1 w-4/5 md:w-3/4 lg:w-1/2 ml-5 md:ml-10 lg:ml-20 xl:ml-32">
        <div className="mb-52">
          <p className="text-[40px]  mt-20 md:mt-0 font-medium font-displace text-black leading-[1]">
            COOKIES AND RELATED TRACKING TECHNOLOGIES
          </p>

          <p className="text-[15px] text-gray-700 font-medium py-10">
            Use of Cookies on our Platform We use cookies to collect information
            about your online preferences. Cookies are small pieces of
            information sent by a web server to a web browser which allows the
            server to uniquely identify the browser on each page. We use or may
            in the future use the following categories of cookies on our
            platform:
          </p>

          <div>
            <h6 className="text-[20px] font-medium  text-gray-700">
              Category 1: Strictly Necessary Cookies
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                These cookies are essential in order to enable you to move
                around our platform and use its features. Without these cookies,
                services you have asked for such as remembering your login
                details or other key preferences cannot be provided.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h6 className="text-[20px] font-medium  text-gray-700">
              Category 2: Performance Cookies
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                These cookies collect anonymous information on how people use a
                Platform. For example, some providers may use Google Analytics
                cookies to help them understand how customers arrive at the
                platform, browse or use the platform and highlight areas where
                they can improve areas such as navigation, experience and
                marketing campaigns. The data stored by these cookies never
                shows personal details from which your individual identity can
                be established.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h6 className="text-[20px] font-medium  text-gray-700">
              Category 3: Functionality Cookies
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                These cookies remember choices you make such as the country you
                visit the platform from language and search parameters. These
                can then be used to provide you with an experience more
                appropriate to your selections and to make the visits more
                tailored and pleasant. For example, if on a previous visit you
                went to pages relating to your home country, we might find this
                out from your cookie and tailor information on your second and
                subsequent visits. The information these cookies collect may be
                anonymised.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h6 className="text-[20px] font-medium  text-gray-700">
              Category 4: Targeting cookies or advertising cookies
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                These cookies collect information about your browsing habits in
                order to make advertising more relevant to you and your
                interests. They are also used to limit the number of times you
                see an advert as well as help measure the effectiveness of an
                advertising campaign. The cookies are usually placed by third
                party advertising networks. They remember the websites you visit
                and that information is shared with other parties such as
                advertisers. For example, some providers use third party
                companies such as Criteo to provide you with more personalised
                adverts when visiting other websites.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h6 className="text-[20px] font-medium  text-gray-700">
              Category 5: Social Media Cookies
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                These cookies allow you to share what you’ve been doing on a
                platform on social media such as Facebook and Twitter. These
                cookies are not within our control. Please refer to the
                respective privacy policies for how their cookies work. If you
                want to delete any cookies that are already on your computer,
                please refer to the help and support area on your internet
                browser for instructions on how to locate the file or directory
                that stores cookies. Please note that by deleting cookies or
                disabling future cookies you may not be able to access certain
                areas or features of our platform. To find out more about
                cookies please visit: www.allaboutcookies.org which contains
                further information about behavioural advertising and online
                privacy. Please note that third parties (including, for example,
                advertising networks and providers of external services like web
                traffic analysis services) may also use cookies, over which we
                have no control. These cookies are likely to be
                analytical/performance cookies or targeting cookies.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h6 className="text-[20px] font-medium  text-gray-700">
              Use of Web Beacons
            </h6>

            <ol>
              <li className="text-[15px] text-gray-700">
                Some of our web pages may contain electronic images known as web
                beacons (sometimes known as clear gifs) that allow us to count
                users who have visited these pages. Web beacons collect only
                limited information including a cookie number, time and date of
                a page view, and a description of the page on which the web
                beacon resides. We may also carry web beacons placed by third
                party advertisers.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Info;
