import { useState } from "react"

export default function SeventhSection() {
    const activeBtn = 'text-[#ED7722] underline ';
    const defaultBtn = 'cursor-pointer'
    const [state, setState] = useState(
        {
            name: 'Dental',
            id: 'one',
            icon: '👨‍⚕️' ,
            heading: 'Dental Digital Marketing',
            p1: 'Leverage our growth-oriented approach to growing dental clinics, DSOs, and multi-location dental practices with our data-based marketing strategies.',
            button1: 'Hire Digital Marketing Specialist',
            p2: 'Creating and Implementing a digital marketing strategy is important to helping your healthcare facility grow faster.',
            counter1: '97%',
            p3: 'of people check a practices online presence before visiting it.',
            p4: 'Organic visitors from search engines to your healthcare website can bring in ideal patient consistently.',
            counter2: '82.3%',
            p5: 'Patients use search engines to find a healthcare provider.',
            button2: 'Discover Dental Marketing Solutions'
            
        }
    );
    const data = [
        {
            name: 'Dental',
            id: 'one',
            icon: '👨‍⚕️' ,
            heading: 'Dental Digital Marketing',
            p1: 'Leverage our growth-oriented approach to growing dental clinics, DSOs, and multi-location dental practices with our data-based marketing strategies.',
            button1: 'Hire Digital Marketing Specialist',
            p2: 'Creating and Implementing a digital marketing strategy is important to helping your healthcare facility grow faster.',
            counter1: '97%',
            p3: 'of people check a practices online presence before visiting it.',
            p4: 'Organic visitors from search engines to your healthcare website can bring in ideal patient consistently.',
            counter2: '82.3%',
            p5: 'Patients use search engines to find a healthcare provider.',
            button2: 'Discover Dental Marketing Solutions'
        },
        {
            name: 'Chiropractic',
            id: 'two',
            icon: '🏥' ,
            heading: 'Chiropractice Digital Marketing',
            p1: 'Chiropractors working with Logic’s speciality-focused and clients-focused digital marketing solutions consistently witness 31% revenue growth.',
            button1: 'Hire Digital Marketing Specialist',
            p2: 'Digital marketing solutions have an incredible return on investment when compared to traditional marketing.',
            counter1: '4400%',
            p3: 'Approx. ROI can be expected from a solid online marketing campaign',
            p4: 'Local SEO for healthcare practices offers laser-focused visitors to your website with better conversion rates',
            counter2: '46%',
            p5: 'of all searches on Google are local, having keywords like near me.',
            button2: 'Discover Chiropractic Marketing Solutions'
        },
        {
            name: 'Plastic',
            id: 'three',
            icon: '👩‍⚕️' ,
            heading: 'Plastic Surgery Digital Marketing',
            p1: 'Plastic surgery practices fill their patient pipelines with our cutting-edge solutions focused on SEO, reputation management seo and paid advertising.',
            button1: 'Hire Digital Marketing Specialist',
            p2: 'Effective content marketing strategies help healthcare facilites reach and educate ideal patient online.',
            counter1: '71%',
            p3: 'of visitors lose their trust when a healthcare website fails to deliver sufficient information.',
            p4: 'Healthcare PPC marketing is the most effective way to advertise your healthcare practice for maximum ROI.',
            counter2: '200%',
            p5: 'is the average ROI for Google PPC ads in different markets.',
            button2: 'Discover Plastic Surgery Marketing Solutions'
        },
        {
            name: 'Dermatology',
            id: 'four',
            icon: '🩺' ,
            heading: 'Dermatology Digital Marketing',
            p1: 'We have reshaped our healthcare digital marketing services to increase the number of patients for dermatology practices in record time.',
            button1: 'Hire Digital Marketing Specialist',
            p2: 'Sharing relvant information in your healthcare website and other plateforms helps you attract more patients.',
            counter1: '60%',
            p3: 'Visitors click through and visit a medical website that provides relevant information about healthcare.',
            p4: 'A well-designed healthcare website can improve your patients experience thus retaining them for a long time.',
            counter2: '88.5%',
            p5: 'Web designers believe that the top reason visitors leave a website is because it loads too slowly.',
            button2: 'Discover Dermatology Marketing Solutions'
        }
    ]
    function handleClick(item) {
        setState(item);

    }
    return (
        <div className="w-full flex flex-col pt-2 pb-2 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex flex-col items-center self-center gap-y-3 ">
                <h2 className="lg:text-3xl text-[#1b3761] font-semibold text-2xl text-center w-full md:w-4/5 " >Medical Specialties We Specifically Serve + More</h2>
                <div className="flex gap-x-5 " >
                    {
                        data.map((item) => (
                            <p  className={item.id == state.id ? activeBtn : defaultBtn  }  key={item.id} onClick={() => (handleClick(item))} > {item.name} </p>
                        ))
                    }
                </div>
                <div className="w-[95%] md:w-[100%] mt-5 flex flex-col md:flex-row items-streched self-center gap-y-3 border-solid border border-slate-200 rounded-md">
                    <div className="md:w-[40%] w-full bg-[#ed7722] p-[50px] flex flex-col gap-y-2 rounded-l-md rounded-tr-[150px] " >
                        <p className=" text-5xl">{state.icon}</p>
                        <h2 className='text-white font-semibold text-xl' >{state.heading}</h2>
                        <p className="text-white" >{state.p1}</p>
                    </div>
                    <div className="w-full md:w-[30%] p-4 flex flex-col gap-y-3 " >
                        <p>{state.p2}</p>
                        <p className="text-3xl font-bold text-[#ed7722]" >{state.counter1}</p>
                        <p>{state.p3}</p>
                        <button className="text-[#1b2761] underline " >{state.button2}</button>
                    </div>
                    <div className="w-full md:w-[30%] p-4 flex flex-col gap-y-3 " >
                        <p>{state.p4}</p>
                        <p className="text-3xl font-bold text-[#ed7722]" >{state.counter2}</p>
                        <p>{state.p5}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}