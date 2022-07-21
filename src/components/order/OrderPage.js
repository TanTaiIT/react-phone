import React,{useEffect, useState,useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Order.scss'
import { getAllDistrict, getAllProvince, getALLWard } from '../../redux/action/CartAction'
import { useForm } from 'react-hook-form'
import Payment from './Payment'
import {BiDownArrow} from 'react-icons/bi'
import { OrderInfo } from '../../redux/action/OrderAction'
const OrderPage = () => {
  const [listProvince,setListProvince] = useState(false)
  const [listDistrict,setListDistrict] = useState(false)
  const [listWard,setListWard] = useState(false)
  const [chooseProvince, setChooseProvince] = useState({name: "Hồ Chí Minh"});
  const [chooseDistrict, setChooseDistrict] = useState({name: "Quận / Huyện"});
  const [chooseWard, setChooseWard] = useState({name: "Phường / Xã"});
  const dispatch = useDispatch()
  const state = useSelector(state=>state.order)
  const {province,district,ward} = state
  useEffect(()=>{
    dispatch(getAllProvince())
  },[dispatch])

  useEffect(()=>{
    dispatch(getAllDistrict(202))
  },[dispatch])


  const selectProvince = (name,id)=>{
    setChooseProvince({name,id})
    setListProvince(!listProvince)
    dispatch(getAllDistrict(id))
    
   
  }

  const handleSelectDistrict = (name,id) =>{
    setChooseDistrict({name,id})
    setListDistrict(!listDistrict)
    dispatch(getALLWard(id))
  }

  const ChangeProvince = ()=>{
    setListProvince(!listProvince)
    setListDistrict(false)
    setListWard(false)
    
  }
  const handleDistrict = () =>{
    setListDistrict(!listDistrict)
    setListProvince(false)
  }

  const handleWard = (e) => {
    e.preventDefault();
    setListWard(!listWard);
    setListProvince(false)
    setListDistrict(false)
  };
  const handleSelectWard = (name,id)=>{
    setChooseWard({name,id})
    setListWard(!listWard)
  }
  const Cartstate = useSelector(state=>state.cartReducer)
  const {cartItem} = Cartstate

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.salePrice,
    0
  );
  const userState = useSelector(state=>state.user)
  const {userInfo} = userState


  const {register,handleSubmit} = useForm()
  const onSubmit = async(data)=>{
    const Order = {
      to_ward_code : chooseWard.id,
      to_district_code :  chooseDistrict.id,
      orderItems:[...cartItem],
      shippingAddress:{
        ...data,
        province:chooseProvince.name,
        district:chooseDistrict.name,
        ward:chooseWard.name
      },
      totalPrice: totalPrice,
      name:userInfo.name,
      user:userInfo
    }
    await dispatch(OrderInfo(Order))
  }
  return (
    <div className="order">
      <div className="container">
        <div className="order__contain">
          <form onSubmit = {handleSubmit(onSubmit)}>
            <h3>Thông tin khách hàng</h3>
            <div className="form-group">
              <input type="text" placeholder='Họ và tên' />
              <input type="text" placeholder='Số điện thoại'/>
            </div>
            <h3>Chọn địa chỉ</h3>
              <div className="form-group">
                <div className="provice-contain">
                <button className="province" onClick={ChangeProvince}>
                {chooseProvince.name} 
                <BiDownArrow/>
               </button>
              
               {
                listProvince ? <div className="provinceList active" >
                <div className="select">
                  {
                    province && province.map((pro,index)=>{
                      return (
                        <span key={index} onClick={()=>selectProvince(pro.ProvinceName,pro.ProvinceID)}>{pro.ProvinceName}</span>
                      )
                    })
                  }
                </div>
               </div> : <div className="provinceList" >
                <div className="select">
                  {
                    province && province.map((pro,index)=>{
                      return (
                        <span key={index} onClick={()=>selectProvince(pro.ProvinceName,pro.ProvinceID)}>{pro.ProvinceName}</span>
                      )
                    })
                  }
                </div>
               </div>
               }

               
                </div>



                <div className="provice-contain">
                  {
                    chooseProvince ? (<button className="province" onClick={handleDistrict}>
                    {chooseDistrict.name} <BiDownArrow/>
                   </button>) : (<button className="province" disabled="disabled" onClick={handleDistrict}>
                    {chooseDistrict.name}
               </button>)
                  }
                
               {
                listDistrict ? (<div className="provinceList active">
                <div className="select">
                  {
                    district && district.data.map((pro,index)=>{
                      return (
                        <span key={index} onClick={() =>
                          handleSelectDistrict(
                            pro.DistrictName,
                            pro.DistrictID
                          )
                        }>{pro.DistrictName}</span>
                      )
                    })
                  }
                </div>
               </div>) : (<div className="provinceList">
                <div className="select">
                  {
                    district && district.data.map((pro,index)=>{
                      return (
                        <span key={index} onClick={() =>
                          handleSelectDistrict(
                            pro.DistrictName,
                            pro.DistrictID
                          )
                        }>{pro.DistrictName}</span>
                      )
                    })
                  }
                </div>
               </div>)
               }
               
                </div>
               
                </div>
                <div className="form-group">
                <div className="provice-contain">
                  {
                    chooseWard ? (<><button className="province" onClick={handleWard} >{chooseWard.name}<BiDownArrow/></button></>) : (<><button className="province" >{chooseWard.name}</button></>)}
                  {
                listWard ? (<div className="provinceList active">
                <div className="select">
                  {
                    ward && ward.data.map((pro,index)=>{
                      return (
                        <span key={index}  onClick={() =>
                          handleSelectWard(pro.WardName, pro.WardCode)
                        }>{pro.WardName}</span>
                      )
                    })
                  }
                </div>
               </div>) : (<div className="provinceList">
                <div className="select">
                  {
                    ward && ward.data.map((pro,index)=>{
                      return (
                        <span key={index}  onClick={() =>
                          handleSelectWard(pro.WardName, pro.WardCode)
                        }>{pro.WardName}</span>
                      )
                    })
                  }
                </div>
               </div>)
               }
               
                </div>
                <input type="text" placeholder='Số nhà, đường'/>
                </div>
                <Payment/>
              
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderPage