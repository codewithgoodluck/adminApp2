import React, { useEffect, useState } from "react";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";

import { GiCancel } from "react-icons/gi";
import DashboardPage from "./DashboardPage";
import UserPage from "./UserPage2";
import Sidebar from "../component/Sidebar";
import UserTable from "../component/UserTable";
import Navbar from "../component/Navbar";
import TransactionTable from "../component/TransactionTable";
import PaymentHistoryTable from "../component/PaymentHistoryTable";
import PaymentMethodTable from "../component/PaymentMethodTable";
import CouponPageTable from "../component/CouponPageTable";
import { Link } from "react-router-dom";
import RentPageTable from "../component/RentPageTable";
import UsagePageTable from "../component/UsagePageTable";
import { allusersAtom } from "../recoil/atom/AllUsersAtom";
import { userService } from "../services/userService";
import {
  GetallUsersAtom,
  SetallUsersAtom,
  ResetallUsersAtom,
} from "../recoil/atom/AllUsersAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getSingleUser, getallUser } from "../reduxstore/reducer/allUserReducer";
import { useDispatch, useSelector } from "react-redux";
function UserPage2() {
  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(true);
  const [userList, setUserlist] = useState([]);
  // const setallUsersAtom = SetallUsersAtom();
  // const getallUsersAtom = GetallUsersAtom([]);
  const setallUsersAtom = useSetRecoilState(allusersAtom);;
  const getallUsersAtom = useRecoilState(allusersAtom);

  const dispatch = useDispatch();
  const user = useSelector((state) => state );
  const singleuser = useSelector((state) => state.app2)
  console.log("single user", singleuser)

  useEffect(() => {
    dispatch(getallUser());
    dispatch(getSingleUser("147la"));
  }, []);



  useEffect(() => {
  //   userService.getAllUser().then((response) => {
  //     console.log(response.data.users.result);
  //     if (response.data?.users?.result) {
  //       setUserlist(response.data.users.result);
  //       setallUsersAtom(response.data.users.result);
  //       console.log(userList)
  //     }
  //   })





    if (getallUsersAtom.length) {
      console.log("record exist",getallUsersAtom);
      setUserlist(getallUsersAtom);
      console.log("record exist", userList);

    } else {
      console.log("calling api")
      userService.getAllUser().then((response) => {
        console.log(response.data);
        if (response?.data) {
          setUserlist(response.data);
          setallUsersAtom(response.data);
         
        }
      });
      
    }
   
  }, []);

  // useEffect(()=>{
  //   setUserlist(getallUsersAtom);
  //   console.log("third", userList);
  // },[])

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (
    <>
      <section className=" flex overflow-hidden   ">
        <div className="z-50 max-h-screen ">
          <Sidebar
            toggleSideBar={toggleSideBar}
            isSideBarVisible={isSideBarVisible}
          ></Sidebar>
        </div>

        <section className="z-0  w-full">
          <Navbar className="" toggleSideBar={toggleSideBar}></Navbar>
          <div className="mx-10 mt-5 flex w-full justify-start">
           
           {/* {user?.app?.data.map((e)=>{
           return <ul>
            <li>{e.email}</li>
            
           </ul>
           })} */}
            <UserTable user={user.app.data}></UserTable>
          </div>
        </section>
      </section>
    </>
  );
}

export default UserPage2;
