export default function Footer() {
    return (
        <div className="bg-slate-300 w-full flex flex-col items-center " >
        <div className="w-[95%] md:w-[100%] lg:w-[75%] flex md:flex-row pt-6 pb-6 gap-x-4 flex-col justify-between items-start " >
            <div className="w-full md:w-1/4" >
                <img src="https://logicbpo.com/wp-content/uploads/2024/01/logo-1.svg" alt="" />
                <p className="mt-4 mb-4" >Logic BPO is a healthcare-focused digital marketing agency and BPO company that helps small to large healthcare facilities gorw with solid marketing strategies and streamlined operations.</p>
                <h3 className=" font-semibold text-xl mb-4 mt-4 md:mt-0" >Contact</h3>
                <p>P.O Box 88942, Seattle WA 98138</p>
                <p>1-888-987-5565</p>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className=" font-semibold text-xl mb-4 mt-4 md:mt-0" >Digital Marketing Services</h3>
                <p>Healthcare Digital Marketing</p>
                <p>Healthcare SEO</p>
                <p>Healthcare Design</p>
                <p>Healthcare Development Service</p>
                <p>Healthcare Advertising</p>
                <p>Healthcare Reputation Management</p>
                <h3 className=" font-semibold text-xl mt-4 mb-4">Healthcare Specialties</h3>
                <p>Dental Digital Marketing Services</p>
                <p>Chiropractice Digital Marketing Services</p>
                <p>Plastic Surgery Digital Marketing Services</p>
                <p>Dermatology Digital Marketing Services</p>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className=" font-semibold text-xl mb-4 mt-4 md:mt-0" >Healthcare BPO Services</h3>
                <p>Outsource Medical Billing</p>
                <p>Healthcare Revenue Cycle Management</p>
                <p>Credentialing Services</p>
                <p>Healthcare Call Center Services</p>
                <p>Medical Claim Processing</p>
                <p>Insurance Eligibility Verification</p>
                <p>Healthcare Data Entry</p>
                <p>Medical Transcription Services</p>
                <p>Medical Record Indexing</p>
                <p>Medical Answering Services</p>
            </div>
            <div className="w-full md:w-1/6">
                <h3 className=" font-semibold text-xl mb-4 mt-4 md:mt-0" >Company</h3>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blogs</p>
            </div>
        </div>
        <div className="pt-2 pb-2 bg-[#1b3761] w-full flex justify-center text-white">
            Coprights © 2025. Logic BPO All Right Reserved 
        </div>
    </div>
    )
}