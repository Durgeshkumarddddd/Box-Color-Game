import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ColorGame() {
    const size = 3;
    const totalBoxes = size * size;
    const [colors, setColors] = useState(Array(totalBoxes).fill("indigo"));

    const [clickOrder, setClickOrder] = useState([]);

    const BoxClick = (index)=> {
        if(colors[index] === "indigo"){
        const newColors = [...colors] 
        newColors[index] = "green";
        setColors(newColors); 
        setClickOrder([...clickOrder,index]);
        
        if(clickOrder.length + 1 == totalBoxes){
            console.log("All boxes clicked");
            changeToOrange([...clickOrder,index]);
        }
    }
}

      const changeToOrange = (order) => {
        console.log(order);
         order.forEach((idx, i)=> {
            setTimeout(()=>{
                setColors((prev) => {
                    const newColors = [...prev];
                    newColors[idx] = "orange";
                    return newColors; });
            }, i* 500)
         } )
      }

    // Reset colors
    const resetGame = () => {
        setColors(Array(totalBoxes).fill("indigo"));
        setClickOrder([]);
      };  

    return (
        <div className=" h-[100vh] w-full flex justify-center items-center bg-[#fffff] flex-col ">
             <h1 className=" text-2xl font-bold mb-6">🎨 Box Color Game</h1>
            <div className="grid grid-cols-3 gap-4 ">
                {colors.map((color, index) => (
                    <motion.div key={index} style={{backgroundColor: colors[index]  }} onClick={()=> {BoxClick(index )}} className="w-[15vw] h-[16vh] flex items-center justify-center font-bold rounded-xl text-4xl cursor-pointer text-white " whileTap={{ scale: 0.9 }}> { index+1 } 
                    </motion.div>

                ))}
           </div>
           <motion.button onClick={resetGame} className="mt-6 px-6 py-4 bg-red-500 text-white rounded-lg cursor-pointer font-bold" whileTap={{scale : 0.9}} >
           🔄 Reset Game
           </motion.button>
        </div>
    );
}