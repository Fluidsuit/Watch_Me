import SignFooterCss from './SignFooter.module.css';

function SignFooter() {

    return (
        <>
            <div className={`${SignFooterCss['signfooter-main-div']} bg-[#161616] m-0 h-fit pt-[4em] pl-[8em] pr-[8em] text-white `}>
                <div className="row">
                    <span>Questions? Call<a href="tel: 000-800-919-1743"> 000-800-919-1743</a> (Toll-Free)</span>
                </div>
                <div className="row">
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">FAQ</a><br />
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Help Center</a><br />
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Term of Use </a><br />
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Privacy</a><br />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <a href="https://help.netflix.com/en/node/412">Cookie Preferences</a><br />
                    </div>
                    <div className='col-3'>
                        <a href="https://help.netflix.com/en/node/412">Corporate Information</a><br />
                    </div>
                </div>
                <div className="row">
                    <div className='col-1'>
                        <select className={SignFooterCss['lang-select']}>
                            <option>English</option>
                            <option>Marathi</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignFooter;