import React from "react";
import { useAppContext } from "../context/AppContext";
import {api} from "../Api/api"
import toast from "react-hot-toast";

const SpendButton = () => {
  
  const {selected,amount,setSavedata,setOpenacknowlagebox,setIsLoading,clerkUserId} = useAppContext()

    const handleSpend = async () => {
        try {
          if(!amount || !selected){
            return toast.error("input data missing")
          }
          setIsLoading(true)
          const data = {
            clerkUserId:clerkUserId,
            expense:{
              amount:amount,
              category:selected
            }
          }

          const res = await api.post("/add",data)
          
          // console.log(res.data.massage)
          // console.log(res.data.data)
          setSavedata(res.data.data)
          
          toast.success("saved")
          setOpenacknowlagebox(true)
          setIsLoading(false)
        } catch (error) {
          toast.error("failed")
          setIsLoading(false)

          console.log(error)
        }
    };
  return (
    <button
      onClick={()=>handleSpend()}
      className="bg-red-600 text-white font-medium text-2xl px-8 py-3 rounded-lg hover:bg-red-700 transition "
    >
      Spend
    </button>
  );
};

export default SpendButton;
