import React, { useState } from "react";
import "./Singleproduct.css";
import {  FaStar } from "react-icons/fa";
import Image1 from "./food.jpg";
import Image2 from "./fruit.jpeg";
import Image3 from "./fruit1.jpg";
import { useContext } from "react";
import { auth } from "./context/context";

const Singleproduct = () => {

  const variale = useContext(auth);
  console.log(variale.check);
  let datas = variale.check;
  let newtitle = variale.title;
  console.log(newtitle);
  const  [Images,setImages] = useState(Image1);
   const [starone, setOne] = useState(false);
   const [startwo, setTwo] = useState(false);
   const [starthree, setThree] = useState(false);
   const [starFour, setFour] = useState(false);
   const [starFive, setFive]= useState(false);
  console.log(starone)


  let recdescription = "Nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Vulputate ut pharetra sit amet aliquam id diam. Egestas tellus rutrum tellus pellentesque. Rutrum quisque non tellus orci ac auctor augue mauris. Sed faucibus turpis in eu mi bibendum neque egestas congue.Nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Vulputate ut pharetra sit amet aliquam id diam. Egestas tellus rutrum tellus pellentesque. Rutrum quisque non tellus orci ac auctor augue mauris. Sed faucibus turpis in eu mi bibendum neque egestas congue.jakjdnadlknajdbkajbdja dbakjdajkda kjfbalkfhbaf fkjwafka DHAJBDNLKADLK KFJAJBF"
   
  let review = "no review for noew";

  const [recentdata,setRecent] = useState(newtitle);
  const [count,setCount]= useState(1);

  console.log(datas);

  return (
    <div className="singleproduct">
      <div className="des_img `md`">
        <div className="image">
          <div> {datas}</div>

          <div>
            <img className="center hover:scale-x-110" src={Images} height = "450px" alt="foodify" />
            <div className="pt-5 flex justify-evenly " >

              <img onClick={()=>setImages(Image1)} className="rounded opacity-30  hover:opacity-100 border-black " src={Image1} alt ="foodfy" height= "50px" width= "50px"/>
              <img onClick={()=>setImages(Image2)} className="rounded opacity-30 hover:opacity-100 border-black"  src={Image2} alt ="foodfy" height= "50px" width= "50px"/>
              <img onClick={()=>setImages(Image3)} className="rounded opacity-30 hover:opacity-100 border-black" src={Image3} alt ="foodfy" height= "50px" width= "50px"/>




            </div>
          </div>
        </div>
     
        <div className="secdiv">
          <h1>Mango</h1>
          <div className="starbtn">
            <FaStar onClick={()=>setOne(true)} style={{ color: starone? "gold" : "black"  }} />
            <FaStar onClick={()=>setTwo(true)} style={{ color: startwo? "gold" : "black" }} />
            <FaStar onClick={()=>setThree(true)} style={{ color: starthree? "gold" : "black" }} />
            <FaStar onClick={()=>setFour(true)} style={{ color: starFour? "gold" : "black" }} />
            <FaStar onClick={()=>setFive(true)} style={{ color: starFive? "gold" : "black" }} />
          </div>
          <div className="productdes">
            <p>
              Nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin aliquam
              ultrices sagittis orci a scelerisque purus semper. Vulputate ut
              pharetra sit amet aliquam id diam. Egestas tellus rutrum tellus
              pellentesque. Rutrum...
            </p>
          </div>
          <div className="priceqtysec">
            <div className="innerprice"> 
              <div className="mt-5"><h6>Price:</h6></div>
              <div className="mt-5"><h6>Size:</h6></div>
              <div className="mt-5"><h6>Color:</h6></div>
              <div className="mt-5"><h6>Brand:</h6></div>
              <div className="mt-5"><h6>Type:</h6></div>
              <div className="mt-5"><h6>Quantity:</h6></div>

            </div>
            <div className="innerdes">
            <div className="mt-5"><h6> Rs 100</h6></div>
              <div className="mt-5 flex" >
                <button className="w-8 bg-gray-500 ">3kg</button>
                <button className="w-8 bg-gray-500  ml-1.5">2kg</button>
                <button className="w-8 bg-gray-500  ml-1.5">3kg</button>
              </div>
              <div className="mt-5 flex"> <div className="bg-red-700 w-8 h-8 p-1"></div>
              <div className="bg-green-700 w-8 h-8 p-1 ml-1.5 "></div>
              <div className="bg-yellow-700 w-8 h-8 p-1 ml-1.5"></div>
              </div>
              <div className="mt-5"><h6>Hjaur ko khojai</h6></div>
              <div className="mt-5"><h6>Fruits</h6></div>
              <div className="mt-5 flex " ><button onClick={()=>  setCount(count+1)} className="p-1 bg-gray-600 w-8">+</button><p className="border-2 w-8 text-center" >{count}</p><button  onClick={()=>{
                if(count<=1){
                  return 1;
                }
                else{
                  return setCount(count-1);
                }
              }} className="p-1 bg-gray-600 w-8">-</button></div>
              
            </div>
          </div>
            <div className="btndiv mt-10">
              <div className="addtocart_buynow">
                <button className="btn">Add to Cart</button>
                <button className="btn1">Buy now</button>
              </div>

              <div className="pt-3">
              <button className="btn2">Add to Wishlist</button>
              </div>

            </div>

        </div>
      </div>
      <div className="count_addtocartdiv">
       
        <div className="buynow_btn">
          <div className="buy_nowbtn">
            <button onClick={()=> setRecent(newtitle)} className="bg-orange-400 rounded pl-10 pr-10 pt-2 pb-2">Product Description</button>
          </div>
          <div className="add_tocart">
            <button onClick={()=>setRecent(review)} className="bg-green-600 rounded pl-10 pr-10 pt-2 pb-2 ml-2">Reviews</button>
          </div>
        </div>
      </div>
      <div className="h-56 rounded ml-2 mr-2 bg-gray-300">
        <p className="pt-2">{recentdata}</p>
      </div>
      <div className="relatedproduct">
         <div className="carousal">

         </div>

      </div>
    </div> //end of single product
  );
};

export default Singleproduct;
