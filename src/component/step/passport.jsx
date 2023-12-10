// import Navbar from "../component/navbar";
// import { useLocation,} from "react-router-dom";
// import Footer from "../component/footer";
// import Steppers from "../component/stepper";
// import React, { useState } from "react";

// const PerfonalInfo = () => {
//   const location = useLocation();
//   const [step, setStep] = useState(1);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [passportExpiryErrorMessage, setPassportExpiryErrorMessage] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [countrynationality, setCountrynationality] = useState ('');
//   const [firstname, setFirstname] = useState('');
//   const [father, setFather] = useState ('');
//   const [lastname, setLastname] = useState('');
//   const [gender, setGender] = useState ('');
//   const [marital, setMarital] = useState ('');
//   const [dbirth, setDbirth] = useState ('');
//   const [cbirth, setCbirth] = useState ('');
//   const [ctbirth, setCtbirth] = useState ('');
//   const [profession, setProfession] = useState ('');
//   const [country, setCountry] = useState ('');
//   const [city, setCity] = useState ('');
//   const [zipcode, setZipcode] = useState ('');
//   const [address, setAddress] = useState ('');
  
//   // Step 2 Form Data
//   const [passport, setPassport] = useState("");
//   const [passportno, setPassportno] = useState ('');
//   const [passportissueplace, setPassportissueplace] = useState ('');
//   const [passportissuedate, setPassportissuedate] = useState ('');
//   const [passportexpirydate, setPassportexpirydate] = useState ('');
//   const [arrivaldate, setArrivaldate] = useState ('');
//   const [departuredate, setDeparturedate] = useState ('');
//   const [communication, setCommunication] = useState ('');
//   const [phoneno, setPhoneno] = useState ('');
//   const [residentialaddresssaudi, setResidentialaddresssaudi] = useState ('');
//   const [nameofperson, setNameofperson] = useState ('');
//   const [scity, setScity] = useState ('');
//   const [address1, setAddress1] = useState ('');
//   const [address2, setAddress2] = useState ('');
//   const [primarynumber, setPrimarynumber] = useState ('');
//   const [email, setEmail] = useState ('');


// const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Check if input data is valid
//     if (!picture || !countrynationality || !firstname || !lastname || !gender || !marital || !dbirth || !cbirth || !ctbirth || !profession || !country || !city || !zipcode || !address || !passport || !passportno || !passportissuedate || !passportissueplace || !passportexpirydate || !arrivaldate || !departuredate || !communication || !phoneno || !residentialaddresssaudi || !nameofperson || !scity || !address1 || !address2 || !primarynumber || !email ) {
//       setErrorMessage('Please fill in all the fields');
//       return;
//     }

//     // Store input data in local storage
//     const inputData = { picture, countrynationality, firstname, father, lastname, gender, marital, dbirth, cbirth, ctbirth, profession, country, city, zipcode, address, passport, passportno, passportissuedate, passportissueplace, passportexpirydate, arrivaldate, departuredate, communication, phoneno, residentialaddresssaudi, nameofperson, scity, address1, address2, primarynumber, email };
//     localStorage.setItem('inputData', JSON.stringify(inputData));

//     try {
//       // Send POST request to API
//       const response = await postDataToAPI(inputData);
//       if (response.ok) {
//         const confirmation = window.confirm("Are you sure you want to submit this form?");
//         if (confirmation) {
//           // Redirect to selected coin's page
//           window.location.href = '/medical';
//         }
//       } else {
//         console.error('Server responded with an error:', response.statusText);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const postDataToAPI = async (inputData) => {
//     const response = await fetch ('https://eviasebackend.adaptable.app/user/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(inputData),
//     });
//     return response;
//   };
//   // const handlepictureUpload = (event) => {
//   //   const file = event.target.files[0];
//   //   const reader = new FileReader();
//   //   reader.onload = () => {
//   //     const img = new picture();
//   //     img.onload = () => {
//   //       const fileSize = Math.round(reader.result.length / 1024); // Calculate file size in KB
//   //       if (fileSize < 5 || fileSize > 100) {
//   //         setErrorMessage('picture size must be between 5 and 100 KB.');
//   //         setpicture(null);
//   //       } else if (img.width !== 200 || img.height !== 200) {
//   //         setErrorMessage('picture dimensions must be 200x200 pixels.');
//   //         setpicture(null);
//   //       } else {
//   //         setpicture(reader.result);
//   //         setErrorMessage('');
//   //       }
//   //     };
//   //     img.src = reader.result;
//   //   };
  
//   //   reader.readAsDataURL(file);
//   // };

//   // const handlePictureUpload = (event) => {
//   //   var reader = new FileReader();
//   //   reader.readAsDataURL(event.target.files[0]);
//   //   reader.onload = () => {
//   //     console.log(reader.result);
//   //       setPicture(reader.result);
//   //     };
//   //     reader.onerror = error => {
//   //     console.log("error")
//   //   }
//   // };


//   const handlePictureUpload = (event) => {
//   const file = event.target.files[0];

//   if (window.FileReader) {
//     const reader = new FileReader();
    
//     reader.onload = () => {
//       console.log(reader.result);
//       setPicture(reader.result);
//     };

//     reader.onerror = (error) => {
//       console.log("Error occurred while reading the file.");
//     };

//     reader.readAsDataURL(file);
//   } else {
//     console.log("FileReader is not supported in this browser.");
//   }
// };
  
//   // const handlePictureUpload = (event) => {
//   //   const file = event.target.files[0];
//   //   const reader = new FileReader();
  
//   //   reader.onload = () => {
//   //     const pictureUrl = reader.result;
//   //     setPicture(pictureUrl);
//   //   };
  
//   //   reader.onerror = (error) => {
//   //     console.log('Error: ', error);
//   //   };
  
//   //   if (file) {
//   //     const isAppleDevice = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
//   //     const pictureUrl = isAppleDevice ? URL.createObjectURL(file) : reader.readAsDataURL(file);
//   //     setPicture(pictureUrl);
//   //   }
//   // };

//   // const handlePictureUpload = (event) => {
//   //   const file = event.target.files[0];
//   //   const reader = new FileReader();
  
//   //   reader.onload = () => {
//   //     const pictureUrl = reader.result;
//   //     setPicture(pictureUrl);
//   //   };
  
//   //   reader.onerror = (error) => {
//   //     console.log('Error: ', error);
//   //   };
  
//   //   if (file) {
//   //     if (/^image\//.test(file.type)) {
//   //       const pictureUrl = URL.createObjectURL(file);
//   //       setPicture(pictureUrl);
//   //     }
//   //     reader.readAsDataURL(file);
//   //   }
//   // };
    
  
//   const handleCountrynationalityChange = (event) => {
//     setCountrynationality(event.target.value);
//   }

//   const handleFirstnameChange = (event) => {
//     setFirstname(event.target.value);
//   };

//   const handleFatherChange = (event) => {
//     setFather(event.target.value);
//   }

//   const handleLastnameChange = (event) => {
//     setLastname(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   }

//   const handleMaritalChange = (event) => {
//     setMarital(event.target.value);
//   }

//   const handleDbirthChange = (event) => {
//     const enteredDbirth = event.target.value;
//     const today = new Date();
//     const enteredDate = new Date(enteredDbirth);
//     const ageDiff = today - enteredDate;
//     const ageDate = new Date(ageDiff);
//     const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
//     if (age >= 18) {
//       setDbirth(enteredDbirth);
//     } else {
//       // Display an error message or handle the error
//       alert('You must be at least 18 years old.');
//       // Optionally, you can clear the input field or perform other actions
//       // event.target.value = '';
//     }
//   }

//   const handleCbirthChange = (event) => {
//     setCbirth(event.target.value);
//   }

//   const handleCtbirthChange = (event) => {
//     setCtbirth(event.target.value);
//   }

//   const handleProfessionChange = (event) => {
//     setProfession(event.target.value);
//   }

//   const handleCountryChange = (event) => {
//     setCountry(event.target.value);
//   }

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   }
//   const handleZipcodeChange = (event) => {
//     setZipcode(event.target.value);
//   }

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   }

//   const handlePassportChange = (event) => {
//     setPassport(event.target.value);
//   }

//   const handlePassportnoChange = (event) => {
//     setPassportno(event.target.value);
//   }

//   const handlePassportissueplaceChange = (event) => {
//     setPassportissueplace(event.target.value);
//   }

//   const handlePassportissuedateChange = (event) => {
//     setPassportissuedate(event.target.value);
//   };
  

//   const handlePassportexpirydateChange = (event) => {
//     setPassportexpirydate(event.target.value);
  
//     const currentDate = new Date();
//     const selectedDate = new Date(event.target.value);
  
//     if (selectedDate < currentDate) {
//       setPassportExpiryErrorMessage('Passport has already expired');
//     } else {
//       setPassportExpiryErrorMessage('');
//     }
//   };

//   const handleArrivaldateChange = (event) => {
//     setArrivaldate(event.target.value);
//   }

//   const handleDeparturedateChange = (event) => {
//     setDeparturedate(event.target.value);
//   }

//   const handleCommunicationChange = (event) => {
//     setCommunication(event.target.value);
//   }

//   const handlePhonenoChange = (event) => {
//     setPhoneno(event.target.value);
//   }

//   const handleResidentialaddresssaudiChange = (event) => {
//     setResidentialaddresssaudi(event.target.value);
//   }

//   const handleNameofpersonChange = (event) => {
//     setNameofperson(event.target.value);
//   }

//   const handleScityChange = (event) => {
//     setScity(event.target.value);
//   }

//   const handleAddress1Change = (event) => {
//     setAddress1(event.target.value);
//   }

//   const handleAddress2Change = (event) => {
//     setAddress2(event.target.value);
//   }

//   const handlePrimarynumberChange = (event) => {
//     setPrimarynumber(event.target.value);
//   }

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   }


//   const handleNext = () => {
//     // Check if input data is valid
//     if (
//       !picture ||
//       !countrynationality ||
//       !firstname ||
//       !lastname ||
//       !gender ||
//       !marital ||
//       !dbirth ||
//       !cbirth ||
//       !ctbirth ||
//       !profession ||
//       !country ||
//       !city ||
//       !zipcode ||
//       !address
//     ) {
//       setErrorMessage('Please fill in all the fields');
//       return;
//     }

//     setStep(step + 1);
//   };

//   const handlePrev = () => {
//     setStep(step - 1);
//   };

//   return (
//     <>
//       <Navbar color={location.pathname} />
//       <div className="grid grid-cols-1  md:grid-cols-3">
//         <div
//           className="md:block lg:block hidden -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed md:w-[20%] w-[90%] mx-auto "
//           // style={{ overflowY: "scroll" }}
//         >
//           <Steppers />
//         </div>

//         <form onSubmit={handleSubmit} className="md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[75%] mx-auto w-[90%] ">
//           {step === 1 && (
//             <div>
//               <div className="mt-20">
//                 <p className=" font-semibold">Personal Picture</p>
//                 <p className="text-gray-400 text-sm py-4 md:w-1/2 md:mt-5">
//                   Please upload picture of dimension 200 x 200 px Personal picture Size
//                   must be from 5 to 100 Kb Allowed picture file types are .jpg,
//                   .jpeg, .png, .gif, .bmp Photo Specifications
//                 </p>
//                 <div style={{ width: 'auto' }}>
//                   <input type="file" accept="picture/*" required onChange={handlePictureUpload} />
//                   {picture == "" || picture == null ? "": <img className="pt-10 w-44" src={picture}/>}
//                 </div>
//               </div>
//               <div className="mt-10 ">
//                 <label className="text-secondary font-medium ">
//                   Country of Nationality*
//                 </label>
//                 <br />
//                 <select value={countrynationality}
//                 onChange={handleCountrynationalityChange}
//                 type="text"
//                 required
//                 className="border-[1px] border-gray-400 px-5 w-[100%] py-3 mt-5 placeholder-gray-400">
//                   <option>Select</option>
//                   <option value="Andorra">Andorra</option>
//                   <option value="Australia">Australia</option>
//                   <option value="Austria">Austria</option>
//                   <option value="Belgium">Belgium</option>
//                   <option value="Brunei">Brunei</option>
//                   <option value="Bulgaria">Bulgaria</option>
//                   <option value="Canada">Canada</option>
//                   <option value="China">China</option>
//                   <option value="Croatia">Croatia</option>
//                   <option value="Cyprus">Cyprus</option>
//                   <option value="CzechRepublic">Czech Republic</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Finland">Finland</option>
//                   <option value="France">France</option>
//                   <option value="Germany">Germany</option>
//                   <option value="Greece">Greece</option>
//                   <option value="Hungary">Hungary</option>
//                   <option value="Iceland">Iceland</option>
//                   <option value="Ireland">Ireland</option>
//                   <option value="Italy">Italy</option>
//                   <option value="Japan">Japan</option>
//                   <option value="Kazakhstan">Kazakhstan</option>
//                   <option value="Korea">Korea, South</option>
//                   <option value="Spain">Spain</option>
//                   <option value="Sweden">Sweden</option>
//                   <option value="Switzerland">Switzerland</option>
//                   <option value="TaiwanChina">Taiwan China</option>
//                   <option value="Ukraine">Ukraine</option>
//                   <option value="UnitedKingdom">United Kingdom</option>
//                   <option value="UnitedStates">United States</option>
//                 </select>
//               </div>
//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   First Name or Given Name (English)*
//                 </label> 
//                 <br />
//                 <input
//                   type="text"
//                   value={firstname}
//                   required
//                   onChange={handleFirstnameChange}
//                   placeholder="First Name or Given Name (English)"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//                 <p className="text-[12px] mt-2 text-gray-400">
//                   Please make sure to enter the names exactly mentioned on your
//                   passport in English only
//                 </p>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Father Name or Middle Name (English){" "}
//                   <span className="text-red-500">
//                     'Optional,if available in passport'
//                   </span>
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={father}
//                   onChange={handleFatherChange}
//                   placeholder="Father Name or Middle Name (English)"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Last Name or Family Name (English)*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={lastname}
//                   required
//                   onChange={handleLastnameChange}
//                   placeholder="Last Name or Family Name (English)*"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//                 <p className="text-[12px] mt-2 text-gray-400">
//                   Please make sure to enter the names exactly mentioned on your
//                   passport in English only
//                 </p>
//               </div>

//               <div className="mt-10 ">
//                 <label className="text-secondary font-medium ">Gender*</label>

//                 <br />
//                 <select value={gender} 
//                 onChange={handleGenderChange}
//                 type="text"
//                 required 
//                 className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-5 placeholder-gray-400">
//                   <option>Select</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>

//               <div className="mt-10 ">
//                 <label className="text-secondary font-medium ">
//                   Marital Status*
//                 </label>
//                 <br />
//                 <select
//                 type="text" 
//                 value={marital}
//                 required 
//                 onChange={handleMaritalChange} className="border-[1px] border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400">
//                   <option>Select</option>
//                   <option value="Single">Single</option>
//                   <option value="Married">Married</option>
//                   <option value="Divorced">Divorced</option>
//                   <option value="Widow">Widow</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Date of Birth*
//                 </label>
//                 <br />
//                 <input
//                   type="date"
//                   value={dbirth}
//                   required
//                   onChange={handleDbirthChange}
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//                 <p className="text-[12px] mt-2 text-gray-400">
//                   Click on the title of the popup window to scroll multiple
//                   months/years at a time
//                 </p>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Country of Birth*
//                 </label>
//                 <br />
//                 <select 
//                   value={cbirth}
//                   required 
//                   onChange={handleCbirthChange} 
//                   className="border-[1px] border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400">
//                   <option>Select</option>
//                   <option value="Afghanistan">Afghanistan</option>
//                   <option value="Albania">Albania</option>
//                   <option value="Algeria">Algeria</option>
//                   <option value="American Samoa">American Samoa</option>
//                   <option value="Andorra">Andorra</option>
//                   <option value="Angola">Angola</option>
//                   <option value="Anguilla">Anguilla</option>
//                   <option value="Antarctic">Antarctic</option>
//                   <option value="Antigua">Antigua</option>
//                   <option value="Argentina">Argentina</option>
//                   <option value="Armenia">Armenia</option>
//                   <option value="Aruba">Aruba</option>
//                   <option value="Australia">Australia</option>
//                   <option value="Austria">Austria</option>
//                   <option value="Azerbaijan">Azerbaijan</option>
//                   <option value="Bahamas">Bahamas</option>
//                   <option value="Bahrain">Bahrain</option>
//                   <option value="Bangladesh">Bangladesh</option>
//                   <option value="Barbados">Barbados</option>
//                   <option value="Belarus">Belarus</option>
//                   <option value="Belgium">Belgium</option>
//                   <option value="Belize">Belize</option>
//                   <option value="Benin">Benin</option>
//                   <option value="Bermuda">Bermuda</option>
//                   <option value="Bhutan">Bhutan</option>
//                   <option value="Bolivia">Bolivia</option>
//                   <option value="Bosnia">Bosnia</option>
//                   <option value="Botswana">Botswana</option>
//                   <option value="Bouvet Island">Bouvet Island</option>
//                   <option value="Brazil">Brazil</option>
//                   <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
//                   <option value="Brunei">Brunei</option>
//                   <option value="Bulgaria">Bulgaria</option>
//                   <option value="Burkina Faso">Burkina Faso</option>
//                   <option value="Burundi">Burundi</option>
//                   <option value="Cambodia">Cambodia</option>
//                   <option value="Cameroon">Cameroon</option>
//                   <option value="Canada">Canada</option>
//                   <option value="Cape Verde">Cape Verde</option>
//                   <option value="Cayman Island">Cayman Island</option>
//                   <option value="Central African Republic">Central African Republic</option>
//                   <option value="Chad">Chad</option>
//                   <option value="Chile">Chile</option>
//                   <option value="China">China</option>
//                   <option value="Christmas Island">Christmas Island</option>
//                   <option value="Cocos Island">Cocos Island</option>
//                   <option value="Colombia">Colombia</option>
//                   <option value="Comoros">Comoros</option>
//                   <option value="Congo">Congo</option>
//                   <option value="Cook Island">Cook Island</option>
//                   <option value="Costa Rica">Costa Rica</option>
//                   <option value="Cote Divoire">Cote Divoire</option>
//                   <option value="Croatia">Croatia</option>
//                   <option value="Cuba">Cuba</option>
//                   <option value="Cyprus">Cyprus</option>
//                   <option value="Czech Republic">Czech Republic</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Djibouti">Djibouti</option>
//                   <option value="Dominica">Dominica</option>
//                   <option value="Dominican Republic">Dominican Republic</option>
//                   <option value="East Timor">East Timor</option>
//                   <option value="Ecuador">Ecuador</option>
//                   <option value="Egypt">Egypt</option>
//                   <option value="El Salvador">El Salvador</option>
//                   <option value="Equatorial Guinea">Equatorial Guinea</option>
//                   <option value="Eritrea">Eritrea</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Ethiopia">Ethiopia</option>
//                   <option value="Falkland Islands">Falkland Islands</option>
//                   <option value="Faroe Islands">Faroe Islands</option>
//                   <option value="Fiji">Fiji</option>
//                   <option value="Finland">Finland</option>
//                   <option value="France">France</option>
//                   <option value="France, Metropolitan">France, Metropolitan</option>
//                   <option value="French Guiana">French Guiana</option>
//                   <option value="French Polynesia">French Polynesia</option>
//                   <option value="French Southern and Antarctic">French Southern and Antarctic</option>
//                   <option value="Gabon">Gabon</option>
//                   <option value="Gambia">Gambia</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Germany">Germany</option>
//                   <option value="Ghana">Ghana</option>
//                   <option value="Gibraltar">Gibraltar</option>
//                   <option value="Greece">Greece</option>
//                   <option value="Greenland">Greenland</option>
//                   <option value="Grenada">Grenada</option>
//                   <option value="Guadeloupe">Guadeloupe</option>
//                   <option value="Guam">Guam</option>
//                   <option value="Guatemala">Guatemala</option>
//                   <option value="Guinea">Guinea</option>
//                   <option value="Guinea-Bissau">Guinea-Bissau</option>
//                   <option value="Guyana">Guyana</option>
//                   <option value="Haiti">Haiti</option>
//                   <option value="Heard Island and McDonald Island">Heard Island and McDonald Island</option>
//                   <option value="Honduras">Honduras</option>
//                   <option value="Hong Kong China">Hong Kong China</option>
//                   <option value="Hungary">Hungary</option>
//                   <option value="Iceland">Iceland</option>
//                   <option value="India">India</option>
//                   <option value="Indonesia">Indonesia</option>
//                   <option value="Iran">Iran</option>
//                   <option value="Iraq">Iraq</option>
//                   <option value="Ireland">Ireland</option>
//                   <option value="Italy">Italy</option>
//                   <option value="Jamaica">Jamaica</option>
//                   <option value="Japan">Japan</option>
//                   <option value="Jordan">Jordan</option>
//                   <option value="Kazakhstan">Kazakhstan</option>
//                   <option value="Kenya">Kenya</option>
//                   <option value="Kiribati">Kiribati</option>
//                   <option value="Korea, South">Korea, South</option>
//                   <option value="Korea, North">Korea, North</option>
//                   <option value="Kosovo">Kosovo</option>
//                   <option value="Kuwait">Kuwait</option>
//                   <option value="Kyrgyzstan">Kyrgyzstan</option>
//                   <option value="Laos">Laos</option>
//                   <option value="Latvia">Latvia</option>
//                   <option value="Lebanon">Lebanon</option>
//                   <option value="Lesotho">Lesotho</option>
//                   <option value="Liberia">Liberia</option>
//                   <option value="Libya">Libya</option>
//                   <option value="Liechtenstein">Liechtenstein</option>
//                   <option value="Lithuania">Lithuania</option>
//                   <option value="Luxembourg">Luxembourg</option>
//                   <option value="Macau China">Macau China</option>
//                   <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
//                   <option value="Madagascar">Madagascar</option>
//                   <option value="Malawi">Malawi</option>
//                   <option value="Malaysia">Malaysia</option>
//                   <option value="Maldives">Maldives</option>
//                   <option value="Mali">Mali</option>
//                   <option value="Malta">Malta</option>
//                   <option value="Marshall Island">Marshall Island</option>
//                   <option value="Martinique">Martinique</option>
//                   <option value="Mauritania">Mauritania</option>
//                   <option value="Mauritius">Mauritius</option>
//                   <option value="Mayotte">Mayotte</option>
//                   <option value="Mexico">Mexico</option>
//                   <option value="Micronesia">Micronesia</option>
//                   <option value="Moldova">Moldova</option>
//                   <option value="Monaco">Monaco</option>
//                   <option value="Mongolia">Mongolia</option>
//                   <option value="Montserrat">Montserrat</option>
//                   <option value="Morocco">Morocco</option>
//                   <option value="Mozambique">Mozambique</option>
//                   <option value="Myanmar">Myanmar</option>
//                   <option value="Namibia">Namibia</option>
//                   <option value="Nauru">Nauru</option>
//                   <option value="Nepal">Nepal</option>
//                   <option value="Netherlands">Netherlands</option>
//                   <option value="Netherlands Antilles">Netherlands Antilles</option>
//                   <option value="New Caledonia">New Caledonia</option>
//                   <option value="New Zealand">New Zealand</option>
//                   <option value="Nicaragua">Nicaragua</option>
//                   <option value="Niger">Niger</option>
//                   <option value="Nigeria">Nigeria</option>
//                   <option value="Niue">Niue</option>
//                   <option value="Norfolk Island">Norfolk Island</option>
//                   <option value="Northern Mariana Island">Northern Mariana Island</option>
//                   <option value="Norway">Norway</option>
//                   <option value="Oman">Oman</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="Palau">Palau</option>
//                   <option value="Palestine">Palestine</option>
//                   <option value="Panama">Panama</option>
//                   <option value="Papua New Guinea">Papua New Guinea</option>
//                   <option value="Paraguay">Paraguay</option>
//                   <option value="Peru">Peru</option>
//                   <option value="Philippines">Philippines</option>
//                   <option value="Pitcairn Islands">Pitcairn Islands</option>
//                   <option value="Poland">Poland</option>
//                   <option value="Portugal">Portugal</option>
//                   <option value="Puerto Rico">Puerto Rico</option>
//                   <option value="Qatar">Qatar</option>
//                   <option value="Reunion">Reunion</option>
//                   <option value="Romania">Romania</option>
//                   <option value="Russia">Russia</option>
//                   <option value="Rwanda">Rwanda</option>
//                   <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
//                   <option value="Saint Lucia">Saint Lucia</option>
//                   <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
//                   <option value="Samoa">Samoa</option>
//                   <option value="San Marino">San Marino</option>
//                   <option value="Sao Tome and Principe">Sao Tome and Principe</option>
//                   <option value="Saudi Arabia">Saudi Arabia</option>
//                   <option value="Senegal">Senegal</option>
//                   <option value="Serbia and Montenegro">Serbia and Montenegro</option>
//                   <option value="Seychelles">Seychelles</option>
//                   <option value="Sierra Leone">Sierra Leone</option>
//                   <option value="Singapore">Singapore</option>
//                   <option value="Slovakia">Slovakia</option>
//                   <option value="Slovenia">Slovenia</option>
//                   <option value="Solomon Island">Solomon Island</option>
//                   <option value="Somalia">Somalia</option>
//                   <option value="South Africa">South Africa</option>
//                   <option value="South Georgia and South Sandwich">South Georgia and South Sandwich</option>
//                   <option value="Spain">Spain</option>
//                   <option value="Sri Lanka">Sri Lanka</option>
//                   <option value="St. Helena">St. Helena</option>
//                   <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
//                   <option value="Sudan">Sudan</option>
//                   <option value="Suriname">Suriname</option>
//                   <option value="Svalbard and Jan Mayen Island">Svalbard and Jan Mayen Island</option>
//                   <option value="Swaziland">Swaziland</option>
//                   <option value="Sweden">Sweden</option>
//                   <option value="Switzerland">Switzerland</option>
//                   <option value="Syria">Syria</option>
//                   <option value="Taiwan">Taiwan</option>
//                   <option value="Tajikistan">Tajikistan</option>
//                   <option value="Tanzania">Tanzania</option>
//                   <option value="Thailand">Thailand</option>
//                   <option value="Togo">Togo</option>
//                   <option value="Tokelau">Tokelau</option>
//                   <option value="Tonga">Tonga</option>
//                   <option value="Trinidad and Tobago">Trinidad and Tobago</option>
//                   <option value="Tunisia">Tunisia</option>
//                   <option value="Turkey">Turkey</option>
//                   <option value="Turkmenistan">Turkmenistan</option>
//                   <option value="Turks and Caicos Island">Turks and Caicos Island</option>
//                   <option value="Tuvalu">Tuvalu</option>
//                   <option value="Uganda">Uganda</option>
//                   <option value="Ukraine">Ukraine</option>
//                   <option value="United Arab Emirates">United Arab Emirates</option>
//                   <option value="United Kingdom">United Kingdom</option>
//                   <option value="United States">United States</option>
//                   <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
//                   <option value="Uruguay">Uruguay</option>
//                   <option value="Uzbekistan">Uzbekistan</option>
//                   <option value="Vanuatu">Vanuatu</option>
//                   <option value="Vatican City">Vatican City</option>
//                   <option value="Venezuela">Venezuela</option>
//                   <option value="Vietnam">Vietnam</option>
//                   <option value="Virgin Island, British">Virgin Island, British</option>
//                   <option value="Virgin Island, US">Virgin Island, US</option>
//                   <option value="Wallis and Futuna">Wallis and Futuna</option>
//                   <option value="Western Sahara">Western Sahara</option>
//                   <option value="Yemen">Yemen</option>
//                   <option value="Zambia">Zambia</option>
//                   <option value="Zimbabwe">Zimbabwe</option>
//                 </select>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   City of Birth*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={ctbirth}
//                   required
//                   onChange={handleCtbirthChange}
//                   placeholder="City of Birth*"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Profession*</label>
//                 <br />
//                 <input value={profession}
//                 onChange={handleProfessionChange}
//                   type="text"
//                   required
//                   placeholder="Profession"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//                 <p className="text-[12px] mt-2 text-gray-400">
//                   In case of minor please write "None"
//                 </p>
//               </div>

//               <div className="mt-20">
//                 <p className=" text-[30px] font-displace">
//                   Current Residence Address
//                 </p>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Country*</label>
//                 <br />
//                 <select value={country} onChange={handleCountryChange}
//                   type="text"
//                   required
//                   placeholder="Country"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400">
//                   <option>Select</option>
//                   <option value="Afghanistan">Afghanistan</option>
//                   <option value="Albania">Albania</option>
//                   <option value="Algeria">Algeria</option>
//                   <option value="American Samoa">American Samoa</option>
//                   <option value="Andorra">Andorra</option>
//                   <option value="Angola">Angola</option>
//                   <option value="Anguilla">Anguilla</option>
//                   <option value="Antarctic">Antarctic</option>
//                   <option value="Antigua">Antigua</option>
//                   <option value="Argentina">Argentina</option>
//                   <option value="Armenia">Armenia</option>
//                   <option value="Aruba">Aruba</option>
//                   <option value="Australia">Australia</option>
//                   <option value="Austria">Austria</option>
//                   <option value="Azerbaijan">Azerbaijan</option>
//                   <option value="Bahamas">Bahamas</option>
//                   <option value="Bahrain">Bahrain</option>
//                   <option value="Bangladesh">Bangladesh</option>
//                   <option value="Barbados">Barbados</option>
//                   <option value="Belarus">Belarus</option>
//                   <option value="Belgium">Belgium</option>
//                   <option value="Belize">Belize</option>
//                   <option value="Benin">Benin</option>
//                   <option value="Bermuda">Bermuda</option>
//                   <option value="Bhutan">Bhutan</option>
//                   <option value="Bolivia">Bolivia</option>
//                   <option value="Bosnia">Bosnia</option>
//                   <option value="Botswana">Botswana</option>
//                   <option value="Bouvet Island">Bouvet Island</option>
//                   <option value="Brazil">Brazil</option>
//                   <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
//                   <option value="Brunei">Brunei</option>
//                   <option value="Bulgaria">Bulgaria</option>
//                   <option value="Burkina Faso">Burkina Faso</option>
//                   <option value="Burundi">Burundi</option>
//                   <option value="Cambodia">Cambodia</option>
//                   <option value="Cameroon">Cameroon</option>
//                   <option value="Canada">Canada</option>
//                   <option value="Cape Verde">Cape Verde</option>
//                   <option value="Cayman Island">Cayman Island</option>
//                   <option value="Central African Republic">Central African Republic</option>
//                   <option value="Chad">Chad</option>
//                   <option value="Chile">Chile</option>
//                   <option value="China">China</option>
//                   <option value="Christmas Island">Christmas Island</option>
//                   <option value="Cocos Island">Cocos Island</option>
//                   <option value="Colombia">Colombia</option>
//                   <option value="Comoros">Comoros</option>
//                   <option value="Congo">Congo</option>
//                   <option value="Cook Island">Cook Island</option>
//                   <option value="Costa Rica">Costa Rica</option>
//                   <option value="Cote Divoire">Cote Divoire</option>
//                   <option value="Croatia">Croatia</option>
//                   <option value="Cuba">Cuba</option>
//                   <option value="Cyprus">Cyprus</option>
//                   <option value="Czech Republic">Czech Republic</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Djibouti">Djibouti</option>
//                   <option value="Dominica">Dominica</option>
//                   <option value="Dominican Republic">Dominican Republic</option>
//                   <option value="East Timor">East Timor</option>
//                   <option value="Ecuador">Ecuador</option>
//                   <option value="Egypt">Egypt</option>
//                   <option value="El Salvador">El Salvador</option>
//                   <option value="Equatorial Guinea">Equatorial Guinea</option>
//                   <option value="Eritrea">Eritrea</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Ethiopia">Ethiopia</option>
//                   <option value="Falkland Islands">Falkland Islands</option>
//                   <option value="Faroe Islands">Faroe Islands</option>
//                   <option value="Fiji">Fiji</option>
//                   <option value="Finland">Finland</option>
//                   <option value="France">France</option>
//                   <option value="France, Metropolitan">France, Metropolitan</option>
//                   <option value="French Guiana">French Guiana</option>
//                   <option value="French Polynesia">French Polynesia</option>
//                   <option value="French Southern and Antarctic">French Southern and Antarctic</option>
//                   <option value="Gabon">Gabon</option>
//                   <option value="Gambia">Gambia</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Germany">Germany</option>
//                   <option value="Ghana">Ghana</option>
//                   <option value="Gibraltar">Gibraltar</option>
//                   <option value="Greece">Greece</option>
//                   <option value="Greenland">Greenland</option>
//                   <option value="Grenada">Grenada</option>
//                   <option value="Guadeloupe">Guadeloupe</option>
//                   <option value="Guam">Guam</option>
//                   <option value="Guatemala">Guatemala</option>
//                   <option value="Guinea">Guinea</option>
//                   <option value="Guinea-Bissau">Guinea-Bissau</option>
//                   <option value="Guyana">Guyana</option>
//                   <option value="Haiti">Haiti</option>
//                   <option value="Heard Island and McDonald Island">Heard Island and McDonald Island</option>
//                   <option value="Honduras">Honduras</option>
//                   <option value="Hong Kong China">Hong Kong China</option>
//                   <option value="Hungary">Hungary</option>
//                   <option value="Iceland">Iceland</option>
//                   <option value="India">India</option>
//                   <option value="Indonesia">Indonesia</option>
//                   <option value="Iran">Iran</option>
//                   <option value="Iraq">Iraq</option>
//                   <option value="Ireland">Ireland</option>
//                   <option value="Italy">Italy</option>
//                   <option value="Jamaica">Jamaica</option>
//                   <option value="Japan">Japan</option>
//                   <option value="Jordan">Jordan</option>
//                   <option value="Kazakhstan">Kazakhstan</option>
//                   <option value="Kenya">Kenya</option>
//                   <option value="Kiribati">Kiribati</option>
//                   <option value="Korea, South">Korea, South</option>
//                   <option value="Korea, North">Korea, North</option>
//                   <option value="Kosovo">Kosovo</option>
//                   <option value="Kuwait">Kuwait</option>
//                   <option value="Kyrgyzstan">Kyrgyzstan</option>
//                   <option value="Laos">Laos</option>
//                   <option value="Latvia">Latvia</option>
//                   <option value="Lebanon">Lebanon</option>
//                   <option value="Lesotho">Lesotho</option>
//                   <option value="Liberia">Liberia</option>
//                   <option value="Libya">Libya</option>
//                   <option value="Liechtenstein">Liechtenstein</option>
//                   <option value="Lithuania">Lithuania</option>
//                   <option value="Luxembourg">Luxembourg</option>
//                   <option value="Macau China">Macau China</option>
//                   <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
//                   <option value="Madagascar">Madagascar</option>
//                   <option value="Malawi">Malawi</option>
//                   <option value="Malaysia">Malaysia</option>
//                   <option value="Maldives">Maldives</option>
//                   <option value="Mali">Mali</option>
//                   <option value="Malta">Malta</option>
//                   <option value="Marshall Island">Marshall Island</option>
//                   <option value="Martinique">Martinique</option>
//                   <option value="Mauritania">Mauritania</option>
//                   <option value="Mauritius">Mauritius</option>
//                   <option value="Mayotte">Mayotte</option>
//                   <option value="Mexico">Mexico</option>
//                   <option value="Micronesia">Micronesia</option>
//                   <option value="Moldova">Moldova</option>
//                   <option value="Monaco">Monaco</option>
//                   <option value="Mongolia">Mongolia</option>
//                   <option value="Montserrat">Montserrat</option>
//                   <option value="Morocco">Morocco</option>
//                   <option value="Mozambique">Mozambique</option>
//                   <option value="Myanmar">Myanmar</option>
//                   <option value="Namibia">Namibia</option>
//                   <option value="Nauru">Nauru</option>
//                   <option value="Nepal">Nepal</option>
//                   <option value="Netherlands">Netherlands</option>
//                   <option value="Netherlands Antilles">Netherlands Antilles</option>
//                   <option value="New Caledonia">New Caledonia</option>
//                   <option value="New Zealand">New Zealand</option>
//                   <option value="Nicaragua">Nicaragua</option>
//                   <option value="Niger">Niger</option>
//                   <option value="Nigeria">Nigeria</option>
//                   <option value="Niue">Niue</option>
//                   <option value="Norfolk Island">Norfolk Island</option>
//                   <option value="Northern Mariana Island">Northern Mariana Island</option>
//                   <option value="Norway">Norway</option>
//                   <option value="Oman">Oman</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="Palau">Palau</option>
//                   <option value="Palestine">Palestine</option>
//                   <option value="Panama">Panama</option>
//                   <option value="Papua New Guinea">Papua New Guinea</option>
//                   <option value="Paraguay">Paraguay</option>
//                   <option value="Peru">Peru</option>
//                   <option value="Philippines">Philippines</option>
//                   <option value="Pitcairn Islands">Pitcairn Islands</option>
//                   <option value="Poland">Poland</option>
//                   <option value="Portugal">Portugal</option>
//                   <option value="Puerto Rico">Puerto Rico</option>
//                   <option value="Qatar">Qatar</option>
//                   <option value="Reunion">Reunion</option>
//                   <option value="Romania">Romania</option>
//                   <option value="Russia">Russia</option>
//                   <option value="Rwanda">Rwanda</option>
//                   <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
//                   <option value="Saint Lucia">Saint Lucia</option>
//                   <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
//                   <option value="Samoa">Samoa</option>
//                   <option value="San Marino">San Marino</option>
//                   <option value="Sao Tome and Principe">Sao Tome and Principe</option>
//                   <option value="Saudi Arabia">Saudi Arabia</option>
//                   <option value="Senegal">Senegal</option>
//                   <option value="Serbia and Montenegro">Serbia and Montenegro</option>
//                   <option value="Seychelles">Seychelles</option>
//                   <option value="Sierra Leone">Sierra Leone</option>
//                   <option value="Singapore">Singapore</option>
//                   <option value="Slovakia">Slovakia</option>
//                   <option value="Slovenia">Slovenia</option>
//                   <option value="Solomon Island">Solomon Island</option>
//                   <option value="Somalia">Somalia</option>
//                   <option value="South Africa">South Africa</option>
//                   <option value="South Georgia and South Sandwich">South Georgia and South Sandwich</option>
//                   <option value="Spain">Spain</option>
//                   <option value="Sri Lanka">Sri Lanka</option>
//                   <option value="St. Helena">St. Helena</option>
//                   <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
//                   <option value="Sudan">Sudan</option>
//                   <option value="Suriname">Suriname</option>
//                   <option value="Svalbard and Jan Mayen Island">Svalbard and Jan Mayen Island</option>
//                   <option value="Swaziland">Swaziland</option>
//                   <option value="Sweden">Sweden</option>
//                   <option value="Switzerland">Switzerland</option>
//                   <option value="Syria">Syria</option>
//                   <option value="Taiwan">Taiwan</option>
//                   <option value="Tajikistan">Tajikistan</option>
//                   <option value="Tanzania">Tanzania</option>
//                   <option value="Thailand">Thailand</option>
//                   <option value="Togo">Togo</option>
//                   <option value="Tokelau">Tokelau</option>
//                   <option value="Tonga">Tonga</option>
//                   <option value="Trinidad and Tobago">Trinidad and Tobago</option>
//                   <option value="Tunisia">Tunisia</option>
//                   <option value="Turkey">Turkey</option>
//                   <option value="Turkmenistan">Turkmenistan</option>
//                   <option value="Turks and Caicos Island">Turks and Caicos Island</option>
//                   <option value="Tuvalu">Tuvalu</option>
//                   <option value="Uganda">Uganda</option>
//                   <option value="Ukraine">Ukraine</option>
//                   <option value="United Arab Emirates">United Arab Emirates</option>
//                   <option value="United Kingdom">United Kingdom</option>
//                   <option value="United States">United States</option>
//                   <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
//                   <option value="Uruguay">Uruguay</option>
//                   <option value="Uzbekistan">Uzbekistan</option>
//                   <option value="Vanuatu">Vanuatu</option>
//                   <option value="Vatican City">Vatican City</option>
//                   <option value="Venezuela">Venezuela</option>
//                   <option value="Vietnam">Vietnam</option>
//                   <option value="Virgin Island, British">Virgin Island, British</option>
//                   <option value="Virgin Island, US">Virgin Island, US</option>
//                   <option value="Wallis and Futuna">Wallis and Futuna</option>
//                   <option value="Western Sahara">Western Sahara</option>
//                   <option value="Yemen">Yemen</option>
//                   <option value="Zambia">Zambia</option>
//                   <option value="Zimbabwe">Zimbabwe</option>
//                 </select>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">City*</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={city}
//                   required
//                   onChange={handleCityChange}
//                   placeholder="City"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Zip/Postal Code*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={zipcode}
//                   required
//                   onChange={handleZipcodeChange}
//                   placeholder="Zip/Postal Code"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Address*</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={address}
//                   required
//                   onChange={handleAddressChange}
//                   placeholder="Address"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>
//               {/* Display error message */}
//               {errorMessage && <p>{errorMessage}</p>}
//               <button 
//                 className="ml-5 text-secondary md:text-lg text-sm border-4 border-secondary md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
//                 variant="primary" onClick={handleNext}>
//                 Next
//               </button>
//             </div>
//           )}

//           {step === 2 && (
//             <div>
//               <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
//                 Application No.: 230328006206727
//               </p>

//               <div className="mt-10 ">
//                 <label className="text-secondary font-medium ">
//                   Passport Type*
//                 </label>
//                 <br />
//                 <select 
//                   value={passport}
//                   required 
//                   onChange={handlePassportChange} 
//                   className="border-[1px]  border-gray-400 px-3 w-[100%] py-3 mt-5 placeholder-gray-400 ">
//                   <option>Select</option>
//                   <option value="diplomatic">Diplomatic Passport</option>
//                   <option value="regular">Regular</option>
//                   <option value="special">Special Passport</option>
//                 </select>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Passport No*</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={passportno}
//                   required
//                   onChange={handlePassportnoChange}
//                   placeholder="Passport No."
//                   className="mt-3 border-[1px] border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Passport Issue Place (Country or City)*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={passportissueplace}
//                   required
//                   onChange={handlePassportissueplaceChange}
//                   placeholder="Passport Issue Place (Country or City)"
//                   className="mt-3 border-[1px] border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="md:flex md:gap-x-12">
//                 <div className="mt-10">
//                   <label className="text-secondary font-medium ">
//                     Passport Issue Date*
//                   </label>
//                   <br />
//                   <input
//                     type="date"
//                     value={passportissuedate}
//                     required
//                     onChange={handlePassportissuedateChange}
//                     className="mt-3 border-[1px] border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                   />
//                   <p className="text-[12px] mt-2 text-gray-400">
//                     Click on the title of the popup window to scroll multiple
//                     months/years at a time
//                   </p>
//                 </div>

//                 <div className="mt-10">
//                   <label className="text-secondary font-medium ">
//                     Passport Expiry Date*
//                   </label>
//                   <br />
//                   <input
//                     type="date"
//                     id="passportexpirydate"
//                     value={passportexpirydate}
//                     required
//                     onChange={handlePassportexpirydateChange}
//                     className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400"
//                   />
//                   <p className="text-[12px] mt-2 text-gray-400">
//                     Passport must be valid at least 6 months from the Visa
//                     application submission date
//                   </p>
//                   {passportExpiryErrorMessage && <p className="error text-red-500">{passportExpiryErrorMessage}</p>}
//                 </div>
//               </div>

//               <div className="md:flex md:gap-x-12">
//                 <div className="mt-10">
//                   <label className="text-secondary font-medium ">
//                     Expected Date of Arrival*
//                   </label>
//                   <br />
//                   <input
//                     type="date"
//                     value={arrivaldate}
//                     required
//                     onChange={handleArrivaldateChange}
//                     className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400"
//                   />
//                   <p className="text-[12px] mt-2 text-gray-400">
//                     Expected Date of Arrival should be chosen in the Visa validity
//                     (1 year), from the date of submission
//                   </p>
//                 </div>

//                 <div className="mt-10">
//                   <label className="text-secondary font-medium ">
//                     Expected Date of Departure*
//                   </label>
//                   <br />
//                   <input
//                     type="date"
//                     value={departuredate}
//                     required
//                     onChange={handleDeparturedateChange}
//                     className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400"
//                   />
//                   <p className="text-[12px] mt-2 text-gray-400">
//                     The tourist visa is valid for 1 year starting from the issuance
//                     date and the period of stay is 90 days.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-14">
//                 <p className="font-displace text-[23px]  md:text-[25px] font-medium">
//                   Communication Preference *
//                 </p>
//               </div>

//               <div className="mt-10">
//                 <input
//                   type="text"
//                   value={communication}
//                   required
//                   onChange={handleCommunicationChange}
//                   placeholder="example@gmail.com*"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>
//               <div className="mt-10">
//                 <input
//                   type="number"
//                   value={phoneno}
//                   required
//                   onChange={handlePhonenoChange}
//                   placeholder="+332222222232"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10 ">
//                 <p className="font-displace text-[23px] md:text-[25px] font-medium">
//                 Residence Address in Saudi Arabia*
//                 </p>
//                 <br />
//                 <select 
//                   value={residentialaddresssaudi}
//                   required 
//                   onChange={handleResidentialaddresssaudiChange} 
//                   className="border-[1px]  border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400 ">
//                   <option>Select</option>
//                   <option value="residential">Residential or Relative</option>
//                   <option value="commercial">Commercial Accommodation</option> 
//                 </select>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">
//                   Name of Person*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   value={nameofperson}
//                   required
//                   onChange={handleNameofpersonChange}
//                   placeholder="Name of Person"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">City*</label>
//                 <br />
//                 <select
//                   type="text"
//                   value={scity}
//                   onChange={handleScityChange}
//                   required
//                   placeholder="City"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 >
//                   <option>Select</option>
//                   <option value="Abha">Abha</option>
//                   <option value="Afif">Afif</option>
//                   <option value="AlGhat">Al Ghat</option>
//                 </select>
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Address 1*</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={address1}
//                   required
//                   onChange={handleAddress1Change}
//                   placeholder="Address 1"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="mt-10">
//                 <label className="text-secondary font-medium ">Address 2*</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={address2}
//                   required
//                   onChange={handleAddress2Change}
//                   placeholder="Address 2"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                 />
//               </div>

//               <div className="md:flex justify-between">
//                 <div className="mt-10">
//                   <label className="text-secondary font-medium ">
//                     Primary Contact Number
//                   </label>
//                   <br />
//                   <div className="flex w-[100%]">
//                     <div className="border-2 border-gray-400 w-[20%] mt-3 p-3 text-gray-500">
//                       966
//                     </div>
//                     <input
//                       type="number"
//                       value={primarynumber}
//                       required
//                       onChange={handlePrimarynumberChange}
//                       placeholder="XXXXXXXXXXX"
//                       className="mt-3 border-[1px] border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-10">
//                   <label className="text-secondary font-medium">Email</label>
//                   <br />
//                   <input
//                     type="mail"
//                     value={email}
//                     required
//                     onChange={handleEmailChange}
//                     placeholder="example@example.com"
//                     className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-center my-16 md:my-20 md:gap-16">
//                 <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
//                   Previous
//                 </button>{" "}
//                 <button type="submit" value={handleSubmit}
//                   className="ml-5 text-secondary md:text-lg text-sm border-4 border-secondary md:w-64 w-48 items-center p-3 rounded-full block self-end"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//             )};
//         </form>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default PerfonalInfo;
// import React from "react";
// import Navbar from "../navbar";
// import { useLocation, useNavigate } from "react-router-dom";
// import Footer from "../footer";
// import Steppers from "../stepper";

// function Passport() {
//   const location = useLocation();
//   let navigate = useNavigate();
//   const handleNavigate = (link) => {
//     navigate(link);
//   };
//   // stepper

//   return (
//     <>
//       <Navbar color={location.pathname} />
//       <div className="grid grid-cols-1  md:grid-cols-3">
//         <div
//           className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[30%] w-[90%] mx-auto "
//           // style={{ height: "100vh", overflowY: "scroll" }}
//         >
//           <Steppers />
//         </div>

//         <div className="mt-10 md:mt-0  md:col-span-2 md:ml-[300px]  lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto  w-[90%] ">
//           <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
//             Application No.: 230328006206727
//           </p>

//           <div className="mt-10 ">
//             <label className="text-secondary font-medium ">
//               Passport Type*
//             </label>

//             <br />
//             <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
//               <option>Select</option>
//               <option>Diplomatic Passport</option>
//               <option>Regularrt</option>
//               <option>Special Passport</option>
//             </select>
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">Passport No*</label>
//             <br />
//             <input
//               type="text"
//               placeholder="Passport No."
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">
//               Passport Issue Place (Country or City)*
//             </label>
//             <br />
//             <input
//               type="text"
//               placeholder="Passport Issue Place (Country or City)"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="md:flex grid ">
//             <div className="mt-10">
//               <label className="text-secondary font-medium ">
//                 Passport Issue Date*
//               </label>
//               <br />
//               <input
//                 type="date"
//                 className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
//               />
//               <p className="text-[12px] mt-2 text-gray-400">
//                 Click on the title of the popup window to scroll multiple
//                 months/years at a time
//               </p>
//             </div>

//             <div className="mt-10">
//               <label className="text-secondary font-medium ">
//                 Passport Expiry Date*
//               </label>
//               <br />
//               <input
//                 type="date"
//                 className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
//               />
//               <p className="text-[12px] mt-2 text-gray-400">
//                 Passport must be valid at least 6 months from the Visa
//                 application submission date
//               </p>
//             </div>
//           </div>

//           <div className="md:flex grid ">
//             <div className="mt-10">
//               <label className="text-secondary font-medium ">
//                 Expected Date of Arrival*
//               </label>
//               <br />
//               <input
//                 type="date"
//                 className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
//               />
//               <p className="text-[12px] mt-2 text-gray-400">
//                 Expected Date of Arrival should be chosen in the Visa validity
//                 (1 year), from the date of submission
//               </p>
//             </div>

//             <div className="mt-10">
//               <label className="text-secondary font-medium ">
//                 Expected Date of Departure*
//               </label>
//               <br />
//               <input
//                 type="date"
//                 className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
//               />
//               <p className="text-[12px] mt-2 text-gray-400">
//                 The tourist visa is valid for 1 year starting from the issuance
//                 date and the period of stay is 90 days.
//               </p>
//             </div>
//           </div>

//           <div className="mt-14">
//             <p className="font-displace text-[23px]  md:text-[25px] font-medium">
//               Communication Preference *
//             </p>
//             <p className="text-[20px] mt-10">
//               Do you want to receive the visa on a email other than your
//               original email?
//             </p>

//             <div className="flex justify-between w-[30%] mt-10">
//               <div className="flex">
//                 <input type="checkbox" id="myCheckbox" />
//                 <p className="self-center ml-2"> YES</p>
//               </div>

//               <div className="flex ml-5 md:ml-0">
//                 <input type="checkbox" id="myCheckbox" />
//                 <p className="self-center ml-2"> NO</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10">
//             <input
//               type="text"
//               placeholder="example@gmail.com*"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="mt-14">
//             <p className="text-[20px] mt-10">
//               Do you want to receive the visa on a phone number other than your
//               original phone number?
//             </p>

//             <div className="flex justify-between w-[30%] mt-10">
//               <div className="flex">
//                 <input type="checkbox" id="myCheckbox" />
//                 <p className="self-center ml-2"> YES</p>
//               </div>

//               <div className="flex ml-5 md:ml-0">
//                 <input type="checkbox" id="myCheckbox" />
//                 <p className="self-center ml-2 "> NO</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10">
//             <input
//               type="number"
//               placeholder="+332222222232"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="mt-20">
//             <p className=" text-[30px] font-displace">
//               Residence Address in Saudi Arabia
//             </p>
//           </div>

//           <div className="flex justify-between w-[80%] mt-10">
//             <div className="flex">
//               <input type="checkbox" id="myCheckboxs" />
//               <p className="self-center ml-2 "> RESIDENTIAL OR RELATIVE</p>
//             </div>

//             <div className="flex">
//               <input type="checkbox" id="myCheckboxs" />
//               <p className="self-center ml-2"> COMMERCIAL ACCOMMODATION</p>
//             </div>
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">
//               Name of Person*
//             </label>
//             <br />
//             <input
//               type="text"
//               placeholder="Name of Person"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">City*</label>
//             <br />
//             <select
//               type="text"
//               placeholder="City"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             >
//               <option>Select</option>
//               <option>Abha</option>
//               <option>Afif</option>
//               <option>Al Ghat</option>
//             </select>
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">Address 1*</label>
//             <br />
//             <input
//               type="text"
//               placeholder="Address 1"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="mt-10">
//             <label className="text-secondary font-medium ">Address 2*</label>
//             <br />
//             <input
//               type="text"
//               placeholder="Address 2"
//               className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//             />
//           </div>

//           <div className="md:flex  grid justify-between">
//             <div className="mt-10">
//               <label className="text-secondary font-medium ">
//                 Primary Contact Number
//               </label>
//               <br />
//               <div className="flex">
//                 <div className="border-2 border-gray-400 w-[20%] mt-3 p-3 text-[20px] text-gray-500">
//                   966
//                 </div>
//                 <input
//                   type="number"
//                   placeholder="XXXXXXXXXXX"
//                   className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//                 />
//               </div>
//             </div>

//             <div className="mt-10">
//               <label className="text-secondary font-medium ">Email</label>
//               <br />
//               <input
//                 type="mail"
//                 placeholder="example@example.com"
//                 className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
//               />
//             </div>
//           </div>
//           <div className="flex justify-center my-20">
//             <p
//               onClick={() => handleNavigate("/personal-info")}
//               className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center"
//             >
//               PREVIOUS
//             </p>
//             <button
//               onClick={() => handleNavigate("/medical")}
//               className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end"
//             >
//               NEXT
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Passport;
