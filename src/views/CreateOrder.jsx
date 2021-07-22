import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData,setLoading,setError} from '../store/action'
import SelectName from '../components/SelectName'
import DistributionCenter from '../components/DistributionCenter'
import PaymentType from '../components/PaymentType'
import ListProduct from '../components/ListProduct'
import ProductData from '../product.json'
import Unit from '../components/Unit'


export default function CreateOrder() {
    let history = useHistory()
    const dispatch = useDispatch()
    const loading =useSelector(state=> state.loading)
    const error = useSelector(state => state.error)
    const datas = useSelector(state => state.fetchData)
    const [Names, setName] = useState('');
    const [productName,setProduct] = useState('');
    const [quantity, setQuantity] = useState(null)
    const [price, setPrice] = useState(null)
    const [Dates, setDate] = useState(null);
    useEffect(()=>{dispatch(fetchData())},[dispatch])

    function backHome(){
        history.push('/')
    }

    if(loading){
        return(
            <div className="min-h-screen flex items-center justify-center bg-yellow-400">
                <img src="https://media1.giphy.com/media/1s0P1OJ1pGIYQryEGI/giphy.gif?cid=6c09b9520i9gvtk4xx9ms63dks2otzrme8ix0lwtwj2bx2cm&rid=giphy.gif&ct=s" alt="" />
                <h4 className="font-semibold">If Loading is Too Looong, I Recommend To Refresh Your Web Page. . .</h4>
            </div>
        )
    }else if(error){
        return(
            <h2>{error}</h2>
        )
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-400">
            {/* Create Order */}
            <div className="bg-white rounded shadow-md w-1/2 p-4">
                <h3 className="text-2x1 mt-2 mr-8 font-medium">Create Order</h3>
                <form className="space-y-3 p-8">
                    <div className="text-justify">
                        <label htmlFor="">Name <span className="text-red-600">*</span></label>
                        <select className="block w-3/4 rounded-none outline-none m-auto" name="namaewa" id="Name" onChange={(e)=>{
                            const otherName = e.target.value
                            setName(otherName)
                        }}>
                            <option value="DefaultName" disabled selected defaultValue>Name</option>
                            {
                                datas.map(data=>{
                                    return (<SelectName data={data} key={data.id}/>)
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Distribution Center<span className="text-red-600">*</span></label>
                        <select id="" className="block">
                            <option defaultValue selected disabled >Distribution Center</option>
                            {
                                document.getElementById("Name")? <DistributionCenter/>:<option>No Data Available</option>
                            }
                        </select>
                    </div>
                    <div className="flex space-x-5 justify-center">
                        <div>
                            <label htmlFor="">Payment Type<span className="text-red-600">*</span></label>
                            <select id="" className="block w-full">
                                <option defaultValue selected disabled >Payment Type</option>
                                <PaymentType/>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Expired Date<span className="text-red-600">*</span></label>
                            <DatePicker 
                            placeholderText="Click Me!"
                            className="bg-yellow-200" 
                            selected={Dates} 
                            onChange={date =>setDate(date)}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()}
                            />
                        </div>
                    </div>
                        <div>
                            <label htmlFor="">Notes<span className="text-red-600">*</span></label>
                            <textarea className="block w-full h-1/2 border-black border-solid"></textarea>
                        </div>
                    <hr className="bg-black" />
                    <h3 className="text-2x1 mt-2 font-medium">Products</h3>
                    <div className="flex space-x-5 justify-center">
                        <div>
                            <label htmlFor="">Product<span className="text-red-600">*</span></label>
                            <select id="Pro" className="block w-full" onChange={(e)=>{
                                const productName = e.target.value
                                setProduct(productName)
                            }}> 
                                <option defaultValue selected disabled >Product Name</option>
                                {
                                    ProductData.map(product=>{
                                        return (<ListProduct product={product}/>)
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Unit<span className="text-red-600">*</span></label>
                            <select id="" className="block w-full">
                                <option defaultValue selected disabled >Unit</option>
                                {
                                    document.getElementById("Pro")?ProductData.map(product=>{
                                        return (<Unit product={product}/>)
                                    }):<option>No Data Available</option>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-5 justify-center">
                        <div>
                        <label id="quan" htmlFor="">Quantity<span className="text-red-600">*</span></label>
                            <input value={quantity} onChange={(e)=>{
                                const valueQuantity= e.target.value
                                setQuantity(valueQuantity)
                            }} className="w-4/5 block" type="number" min="0" name="" id="" />
                        </div>
                        <div>
                        <label id="price" htmlFor="">Price<span className="text-red-600">*</span></label>
                            <input value={price} onChange={(e)=>{
                                const valuePrice = e.target.value
                                setPrice(valuePrice)
                            }} className="w-4/5 block" type="text" name="" id="" />
                        </div>
                        <div>
                        <label id="totalPrice" htmlFor="">Total Price<span className="text-red-600">*</span></label>
                            <input value={price*quantity} className="bg-gray-200 block" disabled type="text"></input>
                        </div>
                    </div>
                    <hr className="bg-black w-1/3 ml-96 justify-center" />
                    <h3 className="ml-96 font-medium" >Total <span>{price*quantity}</span></h3>
                    <hr className="bg-black w-full"/>
                    <div className="flex space-x-5 justify-end" >
                        <input className="bg-yellow-200 rounded p-2" type="submit" value="Cancel" name="" id="" />
                        <input className="bg-yellow-200 rounded p-2" type="submit" value="Confirm" name="" id="" />
                    </div>

                </form>
            </div>
        </div>
    )
}

