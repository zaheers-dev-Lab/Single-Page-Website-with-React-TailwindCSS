import { useState } from "react";

export default function NinethSection() {
    const activeBtn = 'bg-[#e7362d] text-white pt-2 pb-2 pl-4 pr-4 rounded-md';
    const defaultBtn = 'bg-white text-black pt-2 pb-2 pl-4 pr-4 rounded-md text-left';
    const [state, setState] = useState(
        {
            id: 1,
            Btnname: 'Enhanced Conversion Rate',
            li1: 'We not only track your healthcare growth KPIs but also deliver lead acquisition and conversion programs to generate more practice revenue.',
            li2: 'Our medical digital marketing services help you bring more organic and paid traffic for qualified leads and patient engagement.',
            p: 'We have optimized approx. 100,000+ sites for genrating conversions and can also work as an extension of your in-house marketing team',
            btn: 'Improve Conversions'
        }
    )
    const data = [
        {
            id: 1,
            Btnname: 'Enhanced Conversion Rate',
            li1: 'We not only track your healthcare growth KPIs but also deliver lead acquisition and conversion programs to generate more practice revenue.',
            li2: 'Our medical digital marketing services help you bring more organic and paid traffic for qualified leads and patient engagement.',
            p: 'We have optimized approx. 100,000+ sites for genrating conversions and can also work as an extension of your in-house marketing team',
            btn: 'Improve Conversions'
        },
        {
            id: 2,
            Btnname: 'Agility, Growth and Scalability',
            li1: 'Our healthcare Business Process Outsourcing (BPO) services helps streamline system while strengthening your financial performance.',
            li2: 'We make sure healthcare processes run smoothly and optimally for the long term while enhancing productivity for your medical facility.',
            p: 'We are helping healthcare companies scale and increase their revenue collection up to an average of 35% and generated over $150,000 for a practice.',
            btn: 'Unlock Financial Growth'
        },
        {
            id: 3,
            Btnname: 'Personalized Experience with 100% Compliance',
            li1: 'You dont need a one-size-fits-all solution and we offer customized healthcare outsourcing services to best suit your medical business needs.',
            li2: 'We leverage critical medical expertise to stay compliant and meet healthcare regulations in the BPO and digital marketing industry.',
            p: 'We maintain HIPAA, outsourcing regulatory complaince (ORC), general data protection regulation (GDPR), and affordable care act (ACA) guidelines.',
            btn: 'Experience Personlized Solutions'
        }
    ]
    function handleClick(item) {
        setState(item);
    }
    return (
        <div className="w-full flex flex-col pt-2 pb-2 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex flex-col items-center self-center gap-y-10 ">
                <h2 className="lg:text-3xl text-[#1b3761] font-semibold text-2xl text-center w-full md:w-4/5 " >The Solutions You Need, The Expertise We Deliver</h2>
                <div className="w-full flex gap-x-10 " >
                    <div className="w-full md:w-1/2 p-10 flex flex-col bg-slate-300 rounded-md gap-y-2 justify-center">
                        <>
                            {
                                data.map((item) => (
                                    <button key={item.id} className={defaultBtn} onClick={() => (handleClick(item))}> {item.Btnname} </button>
                                ))
                            }
                        </>
                    </div>
                    <div className="w-full md:w-1/2 p-2 flex flex-col items-start gap-y-3 " >
                        <h2 className=" text-black text-2xl font-semibold mb-[-20px]" >{state.Btnname}</h2>
                        <ul>
                            <li><span className=" text-6xl leading-3 text-[#1b3761] pr-2" >.</span>{state.li1}</li>
                            <li><span className=" text-6xl leading-3 text-[#1b3761] pr-2" >.</span>{state.li2}</li>
                        </ul>
                        <p>{state.p}</p>
                        <button className="bg-[#1b3761] rounded-md p-1 pr-3 pl-3 text-white" >{state.btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}