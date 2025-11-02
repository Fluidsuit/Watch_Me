import HomeFooterCss from './HomeFooter.module.css';
function HomeFooter() {

    return (
        <>
            <div className="text-[rgb(218,215,215)] leading-[2.4em] mt-[50px]">
                <div className="row">
                    <p>
                        Questions? Call
                        <a href="tel:000-800-919-1743 " className=' text-[rgb(218,215,215)]'> 000-800-919-1743</a>
                    </p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">FAQ</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Help Centre</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Account</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Media Centre</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Investor Relations</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Jobs</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Ways to Watch</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Terms of Use</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Privacy</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Cookie Preferences</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Corporate Information</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Only on Netflix</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Speed Test</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Legal Notices</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Contact Us</a><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className='col-1'>
                        <select className=" bg-transparent text-[white] h-[2.1em] min-w-[80px] w-[10vw] max-w-[120px] text-[1em] font-medium border content-center justify-self-end text-center flex items-center justify-center mx-auto my-[45px] p-[5px] rounded-[5px] border-solid border-[rgba(255,255,255,0.5)];">
                            <option>English</option>
                            <option>Marathi</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='' className="text-[blue]">Learn more.</a></p>
                </div>
                <h1>Hello tailwind</h1>
            </div >
        </>
    )
}
export default HomeFooter;