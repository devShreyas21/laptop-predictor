import React, { useEffect, useState } from 'react'
import axios from "axios"
import NavBar from "../Navbar/Navbar"
import '../Home/Home.css'
import illustration from '../../img/artboard2.png'

export default function Home(props) {

    const [Company, setCompany] = useState([])
    const [SSD, setSSD] = useState([])
    const [CPU, setCPU] = useState([])
    const [GPU, setGPU] = useState([])
    const [RAM, setRAM] = useState([])
    const [HDD, setHDD] = useState([])
    const [OS, setOS] = useState([])
    const [Weight, setWeight] = useState([])
    const [Price, setPrice] = useState([])
    const filterValues = []

    const getAll = async () => {
        const d = await axios.get('http://localhost:4000/')
        const da = d.data
        const jdata = da[0]
        

        setCompany(jdata.company)
        setSSD(jdata.ssd)
        setCPU(jdata.cpu)
        setGPU(jdata.gpu)
        setRAM(jdata.ram)
        setHDD(jdata.hdd)
        setOS(jdata.os)
        setWeight(jdata.weight)

    }

    useEffect(() => {
        getAll()
    }, [])

    const companyChange = (e) => {
        const x = document.getElementById("options1").value
        filterValues.push(x)
    }
    const inchesChange = (e) => {
        const x = document.getElementById("options2").value
        filterValues.push(x)
    }
    const cpuChange = (e) => {
        const x = document.getElementById("options3").value
        filterValues.push(x)
    }
    const gpuChange = (e) => {
        const x = document.getElementById("options4").value
        filterValues.push(x)
    }
    const ramChange = (e) => {
        const x = document.getElementById("options5").value
        filterValues.push(x)
    }
    const memoryChange = (e) => {
        const x = document.getElementById("options6").value
        filterValues.push(x)
    }
    const resolutionChange = (e) => {
        const x = document.getElementById("options7").value
        filterValues.push(x)
    }
    const weightChange = (e) => {
        const x = document.getElementById("options8").value
        filterValues.push(x)
    }

    const clicked = async () => {
        const data = await axios.post("http://localhost:4000/", filterValues)
        const ndata = data.data
        setPrice(ndata) 
         
    }

    return (

        <div className='section'>
            <NavBar users={props.users} setUsers={props.setUsers} />
            <div className='container'>
                {/* <h1>Price Predictor</h1>
                <p>Hey <b><span style={{ textTransform: "capitalize" }}>{props.users.name}</span></b> ! We are here to help you buy a laptop by predicting a price for your requirements.</p>
                <h5>Please let us know what are your primary requirements, so that we can analyse and predict a best price.</h5> */}


                {/* <button type="button" class="btn btn-primary" onClick={clicked}>Suggest me</button> */}
            </div>

            <div className='row d-flex align-items-center justify-content-center mt-4 '>
                <div className='col-md-4 col-4'>
                    <img src={illustration} />
                </div>
                <div className='col-md-8 col-8'>
                    <div className='container data py-4'>
                        <h1>Price Predictor</h1>
                        <p>Hey <b><span style={{ textTransform: "capitalize" }}>{props.users.name}</span></b> ! We are here to help you buy a laptop by predicting a price for your requirements.</p>
                        <h5>Please let us know what are your primary requirements, so that we can analyse and predict a best price.</h5>

                        <div className='row py-4'>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" onChange={companyChange} id="options1" aria-label="Default select example">
                                    <option selected>Company</option>
                                    {Company.map((c) => {
                                        return (
                                            <option value={c} >{c}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={ramChange} id="options5">
                                    <option selected>RAM</option>
                                    {RAM.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={weightChange} id="options8">
                                    <option selected>Weight</option>
                                    {Weight.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={cpuChange} id="options3">
                                    <option selected>CPU</option>
                                    {CPU.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={memoryChange} id="options6">
                                    <option selected>HDD</option>
                                    {HDD.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" onChange={inchesChange} id="options2" aria-label="Default select example">
                                    <option selected>SSD</option>
                                    {SSD.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={gpuChange} id="options4">
                                    <option selected>GPU</option>
                                    {GPU.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            
                            <div className='col-md-3 my-4'>
                                <select className="form-select control text-light" aria-label="Default select example" onChange={resolutionChange} id="options7">
                                    <option selected>OS</option>
                                    {OS?.map((i) => {
                                        return (
                                            <option value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className='row align-tems-center'>
                            <div className='col-md-2'>
                                <button type="button" className="btn " onClick={clicked}><b>PREDICT</b></button>
                            </div>
                            <div className='col-md-10'>
                                <h5>{Price != "" ? <><span>&#8377;</span>{Price}, at this price you would get your desired laptop.</>:"Hit the predict button to predict the price"} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
