const begContent = () => {
    return (
        <main>
            <h1 className="visually-hidden">Heroes examples</h1>

            <div className="px-4 py-5 my-5 text-center">
                <img src="/images/vapehaven_logo.png" alt="" width="150" height="150" />
                <h1 className="display-5 fw-bold">BEGINNER’S GUIDE TO VAPING</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Want to give vaping a try but not sure where to start?
                        Our new beginners vaping guide covers everything you need to know!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Is vaping harmful?</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Yes, it is. But on the other hand it's way less harmful than smoking regular cigarettes, lets's go through some of pros and cons of vaping.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onclick="location.href = 'https:vaping360.com/learn/pros-cons-benefits-vaping/'" >Pros & Cons</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onclick="location.href = 'https:www.cancerresearchuk.org/about-cancer/causes-of-cancer/smoking-and-cancer/is-vaping-harmful'" >Read more about studies</button>
                    </div>
                </div>
                <div className="overflow-hidden" style="max-height: 30vh;">
                    <div className="container px-5">
                        <img src="/images/pros_cons_vape.jpg" width="500" height="250" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="/images/mtl_dtl.jpg" width="700" height="320" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Diferent vaping styles</h1>
                        <p className="lead"> The main difference you will notice between a MTL tank and a DTL tank is the mouthpiece. On the MTL tank the mouthpiece will be a lot narrower to mimic the act of smoking. Whereas the mouthpiece on the DTL tank will be a lot wider allowing for more vapour to be inhaled.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onclick="location.href = 'https:www.ecigclick.co.uk/mouth-to-lung-vs-direct-to-lung/'" target="_blank">Read more</button>
                            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Read more about MTL</button>  */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="b-example-divider"></div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">How to choose an e-liquid?</h1>
                        <p className="lead">Choosing an e-liquid for you can get quite difficult, basic dosage of nicotine in e-liquids are either 0mg, 3mg, 6mg, 12mg, 18mg and 20mg. You can choose from variety of flavours from sweet to more harsh or even tobaccoo ones  </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Liquid calculator</button>
                            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="/images/nicotineStrenght.jpg" width="420" height="320" loading="classNameic" />
                    </div>
                </div>
            </div>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Want to be informed of the news in vaping world?</h1>
                        <p className="col-lg-10 fs-4">Sign up in our website to stay updated!</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                            <hr className="my-4" />
                            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white" id="vfv">VAPERS FOR VAPERS</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="footer" id="footertext"> Quit smoking and join the vaping community today </p>
                        <img src="/images/vapehaven_logo.png" alt="" width="150" height="150" />
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" id="button_footer1" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Home page</button>
                            <button type="button" id="button_footer2" className="btn btn-outline-light btn-lg px-4">Intermediate guide</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="b-example-divider mb-0"></div>
        </main>
    );
}
export default begContent;