import './App.css';
import { useState } from "react";

function App() {
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName]=useState(""); 

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", street: "",
                                           city:"",state:"",state:"",zip:"", isVisible:false, isVisiblecandidates:false, isVisibleoffers:false, notifications:"", 
                                           country:"India" });
  //  console.log(formData.firstName);
  //  console.log(formData.lastName);
  //  console.log(formData.email);  
  // console.log(formData);
  function changeHandler(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing");
    console.log(formData);
  }

  return (
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your first-name"
          onChange={changeHandler}
          name="firstName"
          id="firstName"
          value={formData.firstName}
          className='outline'>

        </input>
        <br>
        </br>
        <br></br>
        <label htmlFor='lastName'>Last Name</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your last-name"
          onChange={changeHandler}
          name="lastName"
          id='lastName'
          value={formData.lastName}
          className='outline'>

        </input>

        <br></br>
        <br></br>
        <label htmlFor='email'>Email address</label>
        <br />
        <br />
        <input
          type="email"
          placeholder="rish@gmail.com"
          onChange={changeHandler}
          name="email"
          id="email"
          value={formData.email}
          className='outline'>

        </input>

        <br />
        <br />
        <label htmlFor='country'>Country</label>
        <br />
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option value="India" >India</option>
          <option value="Australia">Australia</option>
          <option value="USA">USA</option>
          <option value="Ausria">Austria</option>
          <option value="Switzerland">Switzerland</option>
        </select>
        <br />
        <br />

        <label htmlFor='street'>Street address</label>
          <br/>
          <br/>
          <input 
          type="text" 
          placeholder="6/49 Nekpur Chaurasi"
          onChange={changeHandler}
          name="street"
          id="street"
          value={formData.street}
          className='outline'>

          </input>
          
          <br/>
          <br/>
          <label htmlFor='city'>City</label>
          <br/>
          <br/>
          <input 
          type="text" 
          placeholder="Farrukhabad"
          onChange={changeHandler}
          name="city"
          id="city"
          value={formData.city}
          className='outline'>

          </input>
          
          <br/>
          <br/>
          <label htmlFor='state'>State/Province</label>
          <br/>
          <br/>
          <input 
          type="text" 
          placeholder="Uttar Pradesh"
          onChange={changeHandler}
          name="state"
          id="state"
          value={formData.state}
          className='outline'>

          </input>
          
          <br/>
          <br/>

          <label htmlFor='zip'>ZIP/postal Code</label>
          <br/>
          <br/>
          <input 
          type="text" 
          placeholder="209625"
          onChange={changeHandler}
          name="zip"
          id="zip"
          value={formData.zip}
          className='outline'>

          </input>
          
          <br/>
          <br/>
{/*           
        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments} />
        <br />
        <br />
  */}
      
     <fieldset>
      <legend>By email</legend>
      <div className='flex'>
      <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        /> 
        <div>
        <label htmlFor="isVisible">Comments </label>
        <p> Get Notified when someone posts a comment on a posting
        </p>
        </div>
      </div>
        
        
        <br />
        <div className='flex'>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisiblecandidates"
          id="isVisiblecandidates"
          checked={formData.isVisiblecandidates}
        /> 
          <div> 
        <label htmlFor="isVisiblecandidates">Candidates </label>
     <p> Get Notified when a candidates applies for a job</p>
        </div>
        </div>
        <br />
        <div>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisibleoffers"
          id="isVisibleoffers"
          checked={formData.isVisibleoffers}
        /> 
        <div>
        <label htmlFor="isVisibleoffers">Offers  </label> 
        <p> Get Notified when a candidate accept or rejects an offer.
        </p>
       
          </div>
        </div>
        </fieldset>
        <br />
        <fieldset>
         <legend> Push Notifications
          <div>
            These are delivered via SMS to you mobile phone
          </div>
          </legend>
          <br/>
        <br/>
        <input
            type="radio"
            onChange={changeHandler}
            name="notifications"
            value="Everything"
            id="Everything"
            checked={formData.notifications === "Everything"} />
          <label htmlFor='Everything'>Everything</label>
          <br></br>
          <br/>
        <input
            type="radio"
            onChange={changeHandler}
            name="notifications"
            value="Same-as-email"
            id="Same-as-email"
            checked={formData.notifications === "Same-as-email"} />
          <label htmlFor='Same-as-email'>Same-as-email</label>
          <br></br>
          <br/>  
          <input
            type="radio"
            onChange={changeHandler}
            name="notifications"
            value="No-push-notifications"
            id="No-push-notifications"
            checked={formData.notifications === "No-push-notifications"} />
          <label htmlFor='No-push-notifications'>No push notifications</label>
        </fieldset>
        
       
          <br></br>
          <br/>   
        {/* <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"} />
          <label htmlFor='Online-mode'>Online-mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"} />
          <label htmlFor='Offline-mode'>Offline-mode</label>
        </fieldset> */}


        {/* <label htmlFor='favCar'>Tell Me your favourite Car</label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="mercedes" >Mercedes</option>
          <option value="Fortuner">Fortuner</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
        </select>
        <br />
        <br /> */}
        {/* <input type="submit"/> */}

        <input type='submit'
        className='outline bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-400 '></input>
        {/* <input type='reset'
        className='outline'></input> */}
      </form>
    </div>
  );
}

export default App;
